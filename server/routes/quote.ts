// server/routes/quote.ts
import { Router, Request, Response } from "express";
import pool from "../db/client";
import { sendQuoteNotification } from "../utils/email";

const router = Router();

// POST /api/quote — get quote request form
router.post("/quote", async (req: Request, res: Response) => {
  const {
    fullName,
    companyName,
    email,
    phone,
    productCategory,
    application,
    quantity,
    thicknessSize,
    message,
  } = req.body;

  // Only the fields marked * on the form are required — company, quantity,
  // thickness, and message are all optional and can be blank
  if (!fullName || !email || !phone || !productCategory || !application) {
    return res.status(400).json({
      error:
        "Full name, email, phone, product category, and application are required.",
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO quotes
        (full_name, company_name, email, phone, product_category, application, quantity, thickness_size, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id, created_at`,
      [
        fullName,
        companyName || null,
        email,
        phone,
        productCategory,
        application,
        quantity || null,
        thicknessSize || null,
        message || null,
      ],
    );

    await sendQuoteNotification({
      fullName,
      companyName,
      email,
      phone,
      productCategory,
      application,
      quantity,
      thicknessSize,
      message,
    });

    res.status(201).json({
      success: true,
      message:
        "Quote request received. Our team will contact you within 24 hours.",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("Error saving quote request:", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

export default router;
