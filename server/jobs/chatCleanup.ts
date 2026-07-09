// server/jobs/chatCleanup.ts
import pool from "../db/client";

export async function runChatCleanup() {
  // Auto-close rooms with no activity in 48 hours
  await pool.query(
    `UPDATE chat_rooms
     SET status = 'closed', ended_at = NOW()
     WHERE status = 'active' AND last_message_at < NOW() - INTERVAL '48 hours'`,
  );

  // Permanently purge rooms closed more than 30 days ago
  await pool.query(
    `DELETE FROM chat_messages
     WHERE room_id IN (
       SELECT room_id FROM chat_rooms
       WHERE status = 'closed' AND ended_at < NOW() - INTERVAL '30 days'
     )`,
  );

  await pool.query(
    `DELETE FROM chat_rooms
     WHERE status = 'closed' AND ended_at < NOW() - INTERVAL '30 days'`,
  );
}
