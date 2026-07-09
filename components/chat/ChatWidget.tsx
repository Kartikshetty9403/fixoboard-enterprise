import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Minus, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";

const MotionDiv = motion.div as any;

interface Message {
  id: string;
  type: "bot" | "user" | "admin" | "system";
  text: string;
  timestamp: string;
  actions?: { label: string; action: string; type?: string; value?: string }[];
}

type LiveStatus = "idle" | "awaiting_name" | "connecting" | "active" | "ended";

interface StoredChatSession {
  roomId: string;
  customerName: string;
  savedAt: number;
}

const STORAGE_KEY = "fixoboard_live_chat";
const RESUME_WINDOW_MS = 3 * 24 * 60 * 60 * 1000; // 3 days

const getStoredSession = (): StoredChatSession | null => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed: StoredChatSession = JSON.parse(raw);
    if (Date.now() - parsed.savedAt > RESUME_WINDOW_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

const saveSession = (session: StoredChatSession) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
};

const clearSession = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState<"ai" | "live">("ai");
  const [liveStatus, setLiveStatus] = useState<LiveStatus>("idle");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const navigate = useNavigate();

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    const resumable = getStoredSession();

    setMessages([
      {
        id: "welcome",
        type: "bot",
        text: "Welcome to Fixoboard! I'm your industrial support assistant. How can I help you with our advanced PVC/WPC solutions today?",
        timestamp: getCurrentTime(),
        actions: [
          { label: "Products", action: "intent_products" },
          { label: "Certifications", action: "intent_quality" },
          { label: "Request Quote", action: "open_get_quote" },
          {
            label: resumable ? "Resume Live Chat" : "Talk to a Human",
            action: "open_live_chat",
          },
        ],
      },
    ]);

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const connectSocket = (room: string, customerName: string) => {
    setMode("live");
    setLiveStatus("connecting");

    const socket = io(import.meta.env.VITE_SOCKET_URL);
    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("customer_join", { roomId: room, customerName });
      setLiveStatus("active");
    });

    socket.on(
      "new_message",
      (msg: { sender: string; message: string; createdAt: string }) => {
        if (msg.sender === "customer") return; // already shown optimistically
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            type: "admin",
            text: msg.message,
            timestamp: new Date(msg.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      },
    );

    socket.on("chat_ended", () => {
      setLiveStatus("ended");
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: "system",
          text: "This conversation has ended.",
          timestamp: getCurrentTime(),
        },
      ]);
      socket.disconnect();
    });
  };

  const startLiveChat = async () => {
    const stored = getStoredSession();

    if (stored) {
      setMode("live");
      setLiveStatus("connecting");
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/chat/history/${stored.roomId}`,
        );
        if (res.ok) {
          const data = await res.json();
          const history: Message[] = data.messages.map((m: any) => ({
            id: m.id.toString(),
            type: m.sender === "admin" ? "admin" : "user",
            text: m.message,
            timestamp: new Date(m.created_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          }));

          setMessages(history);
          setRoomId(stored.roomId);

          if (data.status === "closed") {
            setLiveStatus("ended");
          } else {
            connectSocket(stored.roomId, stored.customerName);
          }
          return;
        }
      } catch (error) {
        console.error("Failed to resume chat:", error);
      }
      clearSession();
    }

    setMode("live");
    setLiveStatus("awaiting_name");
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;

    const newRoomId = crypto.randomUUID();
    saveSession({
      roomId: newRoomId,
      customerName: nameInput.trim(),
      savedAt: Date.now(),
    });
    setRoomId(newRoomId);
    setMessages([]);
    connectSocket(newRoomId, nameInput.trim());
    setNameInput("");
  };

  const handleEndChat = () => {
    const confirmed = window.confirm(
      "End this chat? You'll need to start a new conversation to talk to a human again.",
    );
    if (!confirmed) return;

    if (roomId && socketRef.current) {
      socketRef.current.emit("end_chat", { roomId });
    }
    clearSession();
  };

  const handleStartNewChat = () => {
    clearSession();
    socketRef.current?.disconnect();
    socketRef.current = null;
    setRoomId(null);
    setLiveStatus("idle");
    setMode("ai");
    setMessages([
      {
        id: "welcome",
        type: "bot",
        text: "Welcome to Fixoboard! I'm your industrial support assistant. How can I help you with our advanced PVC/WPC solutions today?",
        timestamp: getCurrentTime(),
        actions: [
          { label: "Products", action: "intent_products" },
          { label: "Certifications", action: "intent_quality" },
          { label: "Request Quote", action: "open_get_quote" },
          { label: "Talk to a Human", action: "open_live_chat" },
        ],
      },
    ]);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    if (mode === "live") {
      if (liveStatus !== "active" || !roomId || !socketRef.current) return;

      const userMsg: Message = {
        id: Date.now().toString(),
        type: "user",
        text,
        timestamp: getCurrentTime(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");

      socketRef.current.emit("send_message", {
        roomId,
        sender: "customer",
        message: text,
      });
      return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      text,
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: "bot",
          text: data.reply,
          timestamp: getCurrentTime(),
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: "bot",
          text: "I'm having trouble connecting right now. Please try again or contact us at +91 9930349472.",
          timestamp: getCurrentTime(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAction = (action: string) => {
    switch (action) {
      case "intent_products":
        handleSendMessage("Tell me about your product range");
        break;
      case "intent_quality":
        handleSendMessage("What certifications do your products have?");
        break;
      case "open_get_quote":
        navigate("/get-quote");
        setIsOpen(false);
        break;
      case "open_live_chat":
        startLiveChat();
        break;
      case "call_support":
        window.location.href = "tel:+919930349472";
        break;
      default:
        break;
    }
  };

  const sendDisabled =
    !inputValue.trim() || (mode === "ai" ? isTyping : liveStatus !== "active");

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[360px] md:w-[400px] h-[540px] bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
          >
            <div className="bg-slate-950 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center relative shadow-lg shadow-red-600/20">
                  {mode === "live" ? (
                    <Headphones size={22} />
                  ) : (
                    <Bot size={22} />
                  )}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-slate-950 rounded-full" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-widest">
                    FixoBoard Support
                  </h3>
                  <p className="text-[10px] font-bold text-green-400 uppercase tracking-tighter">
                    {mode === "live"
                      ? liveStatus === "active"
                        ? "Online - Live Agent"
                        : liveStatus === "ended"
                          ? "Chat Ended"
                          : liveStatus === "connecting"
                            ? "Connecting..."
                            : "Live Support"
                      : "Online - AI Assistant"}
                  </p>
                  {mode === "live" && liveStatus === "active" && (
                    <button
                      onClick={handleEndChat}
                      className="text-[9px] font-black text-white/60 hover:text-white uppercase tracking-widest underline underline-offset-2 mt-0.5"
                    >
                      End Chat
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Minus size={20} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {mode === "live" && liveStatus === "awaiting_name" ? (
              <div className="flex-grow flex items-center justify-center p-6 bg-slate-50/50">
                <form
                  onSubmit={handleNameSubmit}
                  className="w-full max-w-xs text-center"
                >
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    Before we connect you, what's your name?
                  </p>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Your name"
                    autoFocus
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-red-100 focus:border-red-600 transition-all outline-none mb-3"
                  />
                  <button
                    type="submit"
                    disabled={!nameInput.trim()}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all"
                  >
                    Start Chat
                  </button>
                </form>
              </div>
            ) : (
              <div
                ref={scrollRef}
                className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/50 scroll-smooth"
              >
                {messages.map((msg) => {
                  if (msg.type === "system") {
                    return (
                      <div key={msg.id} className="flex justify-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-full">
                          {msg.text}
                        </span>
                      </div>
                    );
                  }

                  const isUser = msg.type === "user";

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      {msg.type === "admin" && (
                        <span className="text-[9px] font-black text-brand-blue uppercase tracking-widest mb-1 px-1">
                          Support Agent
                        </span>
                      )}
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                          isUser
                            ? "bg-red-600 text-white rounded-br-none shadow-lg shadow-red-200"
                            : "bg-white text-slate-800 rounded-bl-none shadow-sm border border-slate-200"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 px-1">
                        {msg.timestamp}
                      </span>

                      {msg.actions && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {msg.actions.map((act, i) => (
                            <button
                              key={i}
                              onClick={() => handleAction(act.action)}
                              className="px-4 py-2 bg-white border border-red-100 rounded-full text-[10px] font-black text-red-600 uppercase tracking-widest hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
                            >
                              {act.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex items-start gap-2">
                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                      <span className="w-1.5 h-1.5 bg-red-600/30 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-red-600/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-red-600/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {mode === "live" && liveStatus === "ended" ? (
              <div className="p-6 bg-white border-t border-slate-100 text-center">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  This conversation has ended
                </p>
                <button
                  onClick={handleStartNewChat}
                  className="bg-brand-dark hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all"
                >
                  Start New Chat
                </button>
              </div>
            ) : mode === "live" && liveStatus === "awaiting_name" ? null : (
              <div className="p-6 bg-white border-t border-slate-100">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      mode === "live"
                        ? "Type your message..."
                        : "Ask about WPC products..."
                    }
                    className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-red-100 focus:bg-white transition-all outline-none"
                  />
                  <button
                    disabled={sendDisabled}
                    type="submit"
                    className="absolute right-2 p-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-lg shadow-red-200"
                  >
                    <Send size={18} />
                  </button>
                </form>
                <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-4">
                  {mode === "ai"
                    ? "Industrial Support Powered by Fixoboard AI"
                    : "You're chatting with a live support agent"}
                </p>
              </div>
            )}
          </MotionDiv>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="group flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-red-500/40 hover:bg-red-700 hover:scale-105 transition-all relative"
      >
        <div className="relative">
          <MessageCircle size={24} />
          {!isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-white border-2 border-red-600 rounded-full"
            />
          )}
        </div>
        <span className="font-black uppercase tracking-widest text-xs hidden md:inline">
          Chat with Support
        </span>

        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20 pointer-events-none" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
