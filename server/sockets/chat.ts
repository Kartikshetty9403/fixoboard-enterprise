// server/sockets/chat.ts
import { Server, Socket } from "socket.io";
import pool from "../db/client";

interface CustomerJoinPayload {
  roomId: string;
  customerName: string;
}

interface AdminJoinPayload {
  roomId: string;
}

interface SendMessagePayload {
  roomId: string;
  sender: "customer" | "admin";
  message: string;
}

interface EndChatPayload {
  roomId: string;
}

export function registerChatSocketHandlers(io: Server) {
  io.on("connection", (socket: Socket) => {
    socket.on(
      "customer_join",
      async ({ roomId, customerName }: CustomerJoinPayload) => {
        socket.join(roomId);

        await pool.query(
          `INSERT INTO chat_rooms (room_id, customer_name)
         VALUES ($1, $2)
         ON CONFLICT (room_id) DO NOTHING`,
          [roomId, customerName],
        );

        io.emit("room_updated", { roomId, customerName });
      },
    );

    socket.on("admin_join", ({ roomId }: AdminJoinPayload) => {
      socket.join(roomId);
    });

    socket.on(
      "send_message",
      async ({ roomId, sender, message }: SendMessagePayload) => {
        if (!message.trim()) return;

        const room = await pool.query(
          `SELECT status FROM chat_rooms WHERE room_id = $1`,
          [roomId],
        );
        if (room.rows.length === 0 || room.rows[0].status === "closed") {
          return; // silently drop — room doesn't exist or chat already ended
        }

        const result = await pool.query(
          `INSERT INTO chat_messages (room_id, sender, message)
         VALUES ($1, $2, $3)
         RETURNING id, created_at`,
          [roomId, sender, message],
        );

        await pool.query(
          `UPDATE chat_rooms SET last_message_at = NOW() WHERE room_id = $1`,
          [roomId],
        );

        io.to(roomId).emit("new_message", {
          id: result.rows[0].id,
          roomId,
          sender,
          message,
          createdAt: result.rows[0].created_at,
        });

        io.emit("room_updated", { roomId });
      },
    );

    socket.on("end_chat", async ({ roomId }: EndChatPayload) => {
      await pool.query(
        `UPDATE chat_rooms SET status = 'closed', ended_at = NOW() WHERE room_id = $1`,
        [roomId],
      );

      io.to(roomId).emit("chat_ended", { roomId });
      io.emit("room_updated", { roomId });
    });
  });
}
