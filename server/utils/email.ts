// server/utils/email.ts
import { Resend } from "resend";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// Resend's shared testing domain — works immediately with no setup.
// Swap this for a verified client domain (e.g. noreply@fixoboard.com) at deployment.
const FROM_ADDRESS = "Fixoboard Website <onboarding@resend.dev>";
const NOTIFY_TO = "kartikshetty9403@gmail.com"; // TODO: swap to client email at deployment

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}) {
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: NOTIFY_TO,
    subject: `New Inquiry from ${data.name}`,
    html: `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Company:</strong> ${data.company || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
}

export async function sendCareerNotification(data: {
  fullName: string;
  postAppliedFor: string;
  email: string;
  phone: string;
  coverMessage?: string;
  cvFilename?: string | null;
  cvPath?: string | null;
}) {
  // Build the attachments array only if a CV was actually uploaded —
  // Resend expects base64 content, not a file path, so we read the
  // file off disk here and convert it right before sending.
  const attachments = [];
  if (data.cvPath && data.cvFilename) {
    const fileBuffer = fs.readFileSync(data.cvPath);
    attachments.push({
      filename: data.cvFilename,
      content: fileBuffer.toString("base64"),
    });
  }

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: NOTIFY_TO,
    subject: `New Job Application: ${data.postAppliedFor}`,
    html: `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Applying For:</strong> ${data.postAppliedFor}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Cover Message:</strong></p>
      <p>${data.coverMessage || "N/A"}</p>
      <p><strong>CV Attached:</strong> ${data.cvFilename || "None"}</p>
    `,
    attachments,
  });
}

export async function sendQuoteNotification(data: {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  productCategory: string;
  application: string;
  quantity?: string;
  thicknessSize?: string;
  message?: string;
}) {
  await resend.emails.send({
    from: FROM_ADDRESS,
    to: NOTIFY_TO,
    subject: `New Quote Request from ${data.fullName}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Company:</strong> ${data.companyName || "N/A"}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Product Category:</strong> ${data.productCategory}</p>
      <p><strong>Application:</strong> ${data.application}</p>
      <p><strong>Quantity:</strong> ${data.quantity || "N/A"}</p>
      <p><strong>Thickness / Size:</strong> ${data.thicknessSize || "N/A"}</p>
      <p><strong>Project Message:</strong></p>
      <p>${data.message || "N/A"}</p>
    `,
  });
}
