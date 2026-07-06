// server/routes/contact.ts
import { Router, Request, Response } from "express";
import pool from "../db/client";
import { uploadCV } from "../middleware/upload";
import {
  sendContactNotification,
  sendCareerNotification,
} from "../utils/email";

const router = Router();

// POST /api/contact — inquiry/quote request form
router.post("/contact", async (req: Request, res: Response) => {
  const { name, email, phone, company, message } = req.body;

  // Server-side validation — never trust that the frontend's `required`
  // attribute was actually respected; someone could hit this endpoint
  // directly with curl/Postman and skip the form entirely
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      error: "Name, email, phone, and message are required.",
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, company, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [name, email, phone, company || null, message],
    );

    await sendContactNotification({ name, email, phone, company, message });

    res.status(201).json({
      success: true,
      message: "Inquiry received. We'll be in touch within 24 hours.",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("Error saving contact inquiry:", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

// POST /api/careers — job application form (with optional CV upload)
router.post(
  "/careers",
  uploadCV.single("cv"),
  async (req: Request, res: Response) => {
    const { fullName, postAppliedFor, email, phone, coverMessage } = req.body;

    if (!fullName || !postAppliedFor || !email || !phone) {
      return res.status(400).json({
        error: "Full name, post applied for, email, and phone are required.",
      });
    }

    // req.file is populated by multer if a CV was attached — it's optional
    // here since your form doesn't mark the upload as required
    const cvFilename = req.file ? req.file.originalname : null;
    const cvPath = req.file ? req.file.path : null;

    try {
      const result = await pool.query(
        `INSERT INTO applications
          (full_name, post_applied_for, email, phone, cover_message, cv_filename, cv_path)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id, created_at`,
        [
          fullName,
          postAppliedFor,
          email,
          phone,
          coverMessage || null,
          cvFilename,
          cvPath,
        ],
      );

      await sendCareerNotification({
        fullName,
        postAppliedFor,
        email,
        phone,
        coverMessage,
        cvFilename,
        cvPath,
      });

      res.status(201).json({
        success: true,
        message: "Application received. Our HR team will review it soon.",
        data: result.rows[0],
      });
    } catch (err) {
      console.error("Error saving application:", err);
      res
        .status(500)
        .json({ error: "Something went wrong. Please try again." });
    }
  },
);

export default router;
