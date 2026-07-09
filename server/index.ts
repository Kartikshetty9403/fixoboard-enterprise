// server/index.ts
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { registerChatSocketHandlers } from "./sockets/chat";
import { runChatCleanup } from "./jobs/chatCleanup";
import dotenv from "dotenv";
import contactRouter from "./routes/contact";
import quoteRouter from "./routes/quote";
import chatRouter from "./routes/chat";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN,
  },
});
const PORT = process.env.PORT || 5000;

// ── Middleware ──
// Parses incoming JSON request bodies (e.g. the inquiry form's fetch/axios call)
// into req.body. Without this, req.body would be undefined for JSON requests.
app.use(express.json());

// Allows your Vite frontend (a different origin: localhost:5173) to call
// this API (localhost:5000). Browsers block cross-origin requests by
// default unless the server explicitly says "this origin is allowed."
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

// ── Routes ──
// Every route defined in contact.ts (e.g. router.post("/contact", ...))
// gets prefixed with /api here — so POST /contact in that file becomes
// POST /api/contact for real, and POST /careers becomes POST /api/careers.
app.use("/api", contactRouter);
app.use("/api", quoteRouter);
app.use("/api", chatRouter);

// ── Live Chat Sockets ──
// Separate from the /api/chat REST route above (that's the AI bot).
// This handles the persistent websocket connection for human live chat.
registerChatSocketHandlers(io);

// Runs every 6 hours — auto-closes stale rooms (48h) and purges old ones (30d).
// No separate worker needed since Railway/Render free tiers don't include one.
setInterval(runChatCleanup, 6 * 60 * 60 * 1000);

// Simple health check — useful for confirming the server is alive,
// and Railway will use something like this to verify deploys later
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Fixoboard API is running." });
});

httpServer.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
