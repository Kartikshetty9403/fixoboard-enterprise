import React, { useEffect, useState, useRef } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import ProtectedRoute from "../../../components/admin/ProtectedRoute";
import { Headphones, Circle } from "lucide-react";
import { io, Socket } from "socket.io-client";
import { Send } from "lucide-react";

interface ChatRoom {
  room_id: string;
  customer_name: string;
  status: "active" | "closed";
  last_message_at: string;
  last_message: string | null;
  last_message_sender: string | null;
}

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  created_at: string;
}

const getRelativeTime = (isoString: string) => {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
};

const AdminLiveChatPage: React.FC = () => {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRoomId, setSelectedRoomIdState] = useState<string | null>(
    null,
  );

  const setSelectedRoomId = (roomId: string | null) => {
    selectedRoomIdRef.current = roomId;
    setSelectedRoomIdState(roomId);
  };

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [selectedRoomStatus, setSelectedRoomStatus] = useState<
    "active" | "closed" | null
  >(null);
  const [replyInput, setReplyInput] = useState("");
  const socketRef = useRef<Socket | null>(null);
  const selectedRoomIdRef = useRef<string | null>(null);
  const fetchRoomsRef = useRef<() => void>(() => {});

  const fetchRooms = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat/rooms`);
      const data = await res.json();
      setRooms(data.rooms);
    } catch (error) {
      console.error("Failed to load chat rooms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
    fetchRoomsRef.current = fetchRooms;
  }, []);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_SOCKET_URL);
    socketRef.current = socket;

    socket.on("new_message", (msg: any) => {
      if (msg.roomId !== selectedRoomIdRef.current) return;
      setMessages((prev) => [
        ...prev,
        {
          id: msg.id,
          sender: msg.sender,
          message: msg.message,
          created_at: msg.createdAt,
        },
      ]);
    });

    socket.on("chat_ended", (data: { roomId: string }) => {
      if (data.roomId === selectedRoomIdRef.current) {
        setSelectedRoomStatus("closed");
      }
    });

    socket.on("room_updated", () => {
      fetchRoomsRef.current();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!selectedRoomId || !socketRef.current) return;

    setMessages([]);
    socketRef.current.emit("admin_join", { roomId: selectedRoomId });

    const room = rooms.find((r) => r.room_id === selectedRoomId);
    setSelectedRoomStatus(room?.status ?? null);

    fetch(`${import.meta.env.VITE_API_URL}/chat/history/${selectedRoomId}`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.messages);
        setSelectedRoomStatus(data.status);
      })
      .catch((err) => console.error("Failed to load history:", err));
  }, [selectedRoomId]);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyInput.trim() || !selectedRoomId || !socketRef.current) return;

    socketRef.current.emit("send_message", {
      roomId: selectedRoomId,
      sender: "admin",
      message: replyInput.trim(),
    });
    setReplyInput("");
  };

  const handleEndChat = () => {
    if (!selectedRoomId || !socketRef.current) return;

    const confirmed = window.confirm(
      "End this chat? The customer will need to start a new conversation to reach support again.",
    );
    if (!confirmed) return;

    socketRef.current.emit("end_chat", { roomId: selectedRoomId });
  };

  return (
    <ProtectedRoute>
      <div className="flex bg-slate-50 min-h-screen font-sans">
        <AdminSidebar />

        <main className="flex-grow pl-72">
          <div className="p-10 max-w-7xl mx-auto">
            <header className="mb-10 flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
                  Live Chat
                </h1>
                <p className="text-slate-500 font-medium mt-2">
                  Respond to customer conversations in real time.
                </p>
              </div>
              <div className="bg-white border border-slate-200 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                  System Online
                </span>
              </div>
            </header>

            <div className="flex bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden h-[calc(100vh-220px)]">
              {/* Room list panel */}
              <div className="w-[340px] border-r border-slate-100 flex flex-col">
                <div className="p-6 border-b border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Conversations
                  </span>
                </div>
                <div className="flex-grow overflow-y-auto">
                  {isLoading ? (
                    <p className="text-center text-xs text-slate-400 font-semibold uppercase tracking-widest mt-8">
                      Loading...
                    </p>
                  ) : rooms.length === 0 ? (
                    <p className="text-center text-xs text-slate-400 font-semibold uppercase tracking-widest mt-8">
                      No conversations yet
                    </p>
                  ) : (
                    rooms.map((room) => {
                      const isSelected = room.room_id === selectedRoomId;
                      return (
                        <button
                          key={room.room_id}
                          onClick={() => setSelectedRoomId(room.room_id)}
                          className={`w-full text-left p-5 border-b border-slate-50 transition-colors ${
                            isSelected ? "bg-red-50" : "hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-bold text-slate-900 truncate">
                              {room.customer_name}
                            </span>
                            <Circle
                              size={8}
                              className={
                                room.status === "active"
                                  ? "fill-green-500 text-green-500"
                                  : "fill-slate-300 text-slate-300"
                              }
                            />
                          </div>
                          <p className="text-xs text-slate-500 truncate mb-1.5">
                            {room.last_message_sender === "admin"
                              ? "You: "
                              : ""}
                            {room.last_message || "No messages yet"}
                          </p>
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                            {getRelativeTime(room.last_message_at)}
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Conversation panel */}
              <div className="flex-grow flex flex-col">
                {!selectedRoomId ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-slate-300">
                    <Headphones size={48} className="mb-4" />
                    <p className="text-sm font-semibold uppercase tracking-widest">
                      Select a conversation
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">
                        {
                          rooms.find((r) => r.room_id === selectedRoomId)
                            ?.customer_name
                        }
                      </span>
                      {selectedRoomStatus === "active" && (
                        <button
                          onClick={handleEndChat}
                          className="text-[10px] font-black text-red-600 hover:text-red-700 uppercase tracking-widest underline underline-offset-2"
                        >
                          End Chat
                        </button>
                      )}
                    </div>

                    <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-50/50">
                      {messages.map((msg) => {
                        const isAdmin = msg.sender === "admin";
                        return (
                          <div
                            key={msg.id}
                            className={`flex flex-col ${isAdmin ? "items-end" : "items-start"}`}
                          >
                            <div
                              className={`max-w-[70%] p-3 rounded-2xl text-sm font-medium ${
                                isAdmin
                                  ? "bg-red-600 text-white rounded-br-none"
                                  : "bg-white text-slate-800 border border-slate-200 rounded-bl-none"
                              }`}
                            >
                              {msg.message}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-6 border-t border-slate-100">
                      {selectedRoomStatus === "closed" ? (
                        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
                          This conversation has ended
                        </p>
                      ) : (
                        <form
                          onSubmit={handleSendReply}
                          className="flex items-center gap-3"
                        >
                          <input
                            type="text"
                            value={replyInput}
                            onChange={(e) => setReplyInput(e.target.value)}
                            placeholder="Type your reply..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all"
                          />
                          <button
                            type="submit"
                            disabled={!replyInput.trim()}
                            className="p-3 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all"
                          >
                            <Send size={18} />
                          </button>
                        </form>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLiveChatPage;
