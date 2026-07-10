// server/scripts/createAdmin.ts
import bcrypt from "bcrypt";
import pool from "../db/client";

async function createAdmin() {
  const username = "admin"; // change if you want a different username
  const plainPassword = "fixoboard@2026"; // change to your real password

  const passwordHash = await bcrypt.hash(plainPassword, 10);

  await pool.query(
    "INSERT INTO admins (username, password_hash) VALUES ($1, $2)",
    [username, passwordHash],
  );

  console.log("Admin created:", username);
  process.exit(0);
}

createAdmin().catch((err) => {
  console.error("Failed to create admin:", err);
  process.exit(1);
});
