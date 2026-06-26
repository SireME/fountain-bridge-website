import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

export const runtime = "nodejs";

const topics = new Set([
  "Volunteer application",
  "Donation support",
  "Partnership inquiry",
  "Media request",
  "Beneficiary referral",
]);

function clean(value: unknown, maxLength = 2000) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function configuredRecipients() {
  return (process.env.CONTACT_TO || site.emails.join(","))
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid contact request." }, { status: 400 });
  }

  const name = clean(body.name, 160);
  const email = clean(body.email, 240).toLowerCase();
  const topic = clean(body.topic, 120);
  const message = clean(body.message, 5000);

  if (!name || !validEmail(email) || !topic || !message) {
    return NextResponse.json({ error: "Please provide your name, a valid email, topic, and message." }, { status: 400 });
  }

  if (!topics.has(topic)) {
    return NextResponse.json({ error: "Please choose a valid contact topic." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipients = configuredRecipients();

  if (!host || !user || !pass || !recipients.length) {
    return NextResponse.json({ error: "Contact email is not configured yet." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM || `"${site.name} Website" <${user}>`,
    to: recipients,
    replyTo: `${name} <${email}>`,
    subject: `[${site.name}] ${topic}`,
    text: [
      `New message from ${site.name} website`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `
      <h2>New message from ${site.name} website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
