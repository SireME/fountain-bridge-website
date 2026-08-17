import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactTopics, site } from "@/data/site";

export const runtime = "nodejs";

const topics = new Set<string>(contactTopics);

/**
 * Fixed-window throttle per client, enough to blunt scripted form abuse. The cap
 * is deliberately generous because rejected attempts count too, and a visitor
 * correcting a typo should never be locked out.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_MAX_KEYS = 500;
const MIN_FILL_MS = 2000;

const submissions = new Map<string, number[]>();

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();

  if (submissions.size > RATE_LIMIT_MAX_KEYS) {
    submissions.forEach((times, existingKey) => {
      if (!times.some((time: number) => now - time < RATE_LIMIT_WINDOW_MS)) {
        submissions.delete(existingKey);
      }
    });
  }

  const recent = (submissions.get(key) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(key, recent);
    return true;
  }

  recent.push(now);
  submissions.set(key, recent);
  return false;
}

function clean(value: unknown, maxLength = 2000) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanMultiline(value: unknown, maxLength = 5000) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLength);
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

  // Hidden field only automated clients fill in: accept and discard silently.
  if (clean(body.hpReference, 200)) {
    return NextResponse.json({ ok: true });
  }

  const elapsedMs = Number(body.elapsedMs);
  if (Number.isFinite(elapsedMs) && elapsedMs >= 0 && elapsedMs < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      { error: "Too many messages from this connection. Please try again later." },
      { status: 429 }
    );
  }

  const name = clean(body.name, 160);
  const email = clean(body.email, 240).toLowerCase();
  const topic = clean(body.topic, 120);
  const message = cleanMultiline(body.message, 5000);

  if (!name || !validEmail(email) || !topic || !message) {
    return NextResponse.json(
      { error: "Please provide your name, a valid email, topic, and message." },
      { status: 400 }
    );
  }

  if (!topics.has(topic)) {
    return NextResponse.json({ error: "Please choose a valid contact topic." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipients = configuredRecipients();

  if (!host || !user || !pass || !recipients.length || !Number.isFinite(port)) {
    return NextResponse.json({ error: "Contact email is not configured yet." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
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
  } catch (error) {
    // Never surface SMTP internals to the browser; the client offers the phone
    // and email fallbacks instead.
    console.error("Contact form delivery failed:", error);
    return NextResponse.json(
      { error: "The message could not be delivered right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
