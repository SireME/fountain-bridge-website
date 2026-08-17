"use client";

import { CircleAlert, CircleCheck, Send } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { contactTopics, site } from "@/data/site";

type Status = { tone: "success" | "error"; message: string } | null;

const fieldClasses =
  "focus-ring w-full rounded-md border border-teal-900/20 bg-white px-4 py-3 font-normal text-ink placeholder:text-muted hover:border-teal-700/50";

export function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const openedAt = useRef(Date.now());

  // Move focus to the outcome so keyboard and screen-reader users are told what
  // happened instead of being left at the submit button.
  useEffect(() => {
    if (status) statusRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          topic: formData.get("topic"),
          message: formData.get("message"),
          hpReference: formData.get("hpReference"),
          elapsedMs: Date.now() - openedAt.current,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Message could not be sent.");
      form.reset();
      openedAt.current = Date.now();
      setStatus({
        tone: "success",
        message: `Thank you. Your message has been sent to ${site.name}. ${site.responseTime}`,
      });
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error
            ? `${error.message} You can also reach us on ${site.phone} or at ${site.emails[0]}.`
            : "Message could not be sent.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      className="rounded-lg bg-white p-6 shadow-card sm:p-8"
    >
      <h2 id="contact-form-title" className="font-serif text-subheading font-black text-teal-900">
        Send a message
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Fields marked with an asterisk (<span aria-hidden="true">*</span>
        <span className="sr-only">star</span>) are required. {site.responseTime}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="contact-name" className="text-sm font-bold text-teal-900">
            Name <RequiredMark />
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={160}
            className={fieldClasses}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact-email" className="text-sm font-bold text-teal-900">
            Email <RequiredMark />
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={240}
            aria-describedby="contact-email-hint"
            className={fieldClasses}
          />
          <p id="contact-email-hint" className="text-xs leading-5 text-muted">
            We reply to this address directly.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <label htmlFor="contact-topic" className="text-sm font-bold text-teal-900">
          Topic <RequiredMark />
        </label>
        <select id="contact-topic" name="topic" required defaultValue={contactTopics[0]} className={fieldClasses}>
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 grid gap-2">
        <label htmlFor="contact-message" className="text-sm font-bold text-teal-900">
          Message <RequiredMark />
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          aria-describedby="contact-message-hint"
          className={fieldClasses}
        />
        <p id="contact-message-hint" className="text-xs leading-5 text-muted">
          Tell us how you would like to work with {site.name}, and include a phone number if that is easier.
        </p>
      </div>

      {/* Honeypot: hidden from sight and from assistive technology, so only bots
          fill it. The field name is deliberately meaningless so browser autofill
          never populates it for a real visitor. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="contact-hp-reference">Leave this field blank</label>
        <input id="contact-hp-reference" name="hpReference" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="focus-ring mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-teal-700 px-6 py-3 text-base font-bold text-white shadow-card transition hover:bg-teal-900 disabled:cursor-not-allowed disabled:bg-teal-900/85 sm:w-auto"
      >
        <Send size={18} aria-hidden="true" />
        {sending ? "Sending…" : "Send message"}
      </button>

      <div
        ref={statusRef}
        tabIndex={-1}
        role={status?.tone === "error" ? "alert" : "status"}
        className={status ? "mt-5" : "sr-only"}
      >
        {status ? (
          <p
            className={`flex items-start gap-3 rounded-md border p-4 text-sm leading-6 ${
              status.tone === "success"
                ? "border-teal-700/30 bg-mist text-teal-900"
                : "border-gold-600/40 bg-gold-100 text-gold-700"
            }`}
          >
            {status.tone === "success" ? (
              <CircleCheck size={20} className="mt-0.5 shrink-0 text-teal-700" aria-hidden="true" />
            ) : (
              <CircleAlert size={20} className="mt-0.5 shrink-0 text-gold-700" aria-hidden="true" />
            )}
            <span>{status.message}</span>
          </p>
        ) : null}
      </div>
    </form>
  );
}

function RequiredMark() {
  return (
    <>
      <span aria-hidden="true" className="text-gold-700">
        *
      </span>
      <span className="sr-only">(required)</span>
    </>
  );
}
