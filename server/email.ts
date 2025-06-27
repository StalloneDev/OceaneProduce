import "./env";
import nodemailer from "nodemailer";
import { type InsertContactInquiry } from "@shared/schema";

console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL, "SMTP_PASSWORD:", process.env.SMTP_PASSWORD);

const SMTP_EMAIL = process.env.SMTP_EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

if (!SMTP_EMAIL || !SMTP_PASSWORD) {
  if (process.env.NODE_ENV === "production") {
    console.error("SMTP_EMAIL and SMTP_PASSWORD environment variables are required in production");
    process.exit(1);
  } else {
    console.warn("Warning: SMTP_EMAIL and SMTP_PASSWORD environment variables are not set. Email sending will be disabled.");
  }
}

const transporter = SMTP_EMAIL && SMTP_PASSWORD ? nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
}) : null;

function formatEmailBody(inquiry: InsertContactInquiry): string {
  return `
    New Contact Inquiry:

    Full Name: ${inquiry.fullName}
    Email: ${inquiry.email}
    Phone: ${inquiry.phone || "N/A"}
    Company: ${inquiry.company || "N/A"}
    Product Interest: ${inquiry.product || "N/A"}
    
    Message:
    ${inquiry.message}
  `;
}

export async function sendContactInquiryEmail(inquiry: InsertContactInquiry) {
  if (!transporter) {
    console.log("Email sending is disabled. Inquiry details:", inquiry);
    // In a real dev environment, you might want to just log this and not fail
    // but for the sake of the example, we'll just log.
    return;
  }

  const mailOptions = {
    from: SMTP_EMAIL,
    to: "supremeetfils@gmail.com",
    subject: `New Inquiry from ${inquiry.fullName}`,
    text: formatEmailBody(inquiry),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Contact inquiry email sent successfully.");
  } catch (error) {
    console.error("Error sending contact inquiry email:", error);
    // Depending on the app's needs, you might want to re-throw the error
    // or handle it gracefully.
    throw new Error("Failed to send contact email.");
  }
} 