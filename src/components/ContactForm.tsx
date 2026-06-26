"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          topic: formData.get("topic"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Message could not be sent.");
      form.reset();
      setStatus("Thank you. Your message has been sent to Fountain Bridge.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Message could not be sent.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-teal-900">
          Name
          <input required name="name" className="focus-ring rounded-md border border-teal-900/15 px-4 py-3 font-normal text-ink" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-teal-900">
          Email
          <input required type="email" name="email" className="focus-ring rounded-md border border-teal-900/15 px-4 py-3 font-normal text-ink" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-teal-900">
        Topic
        <select name="topic" className="focus-ring rounded-md border border-teal-900/15 px-4 py-3 font-normal text-ink">
          <option>Volunteer application</option>
          <option>Donation support</option>
          <option>Partnership inquiry</option>
          <option>Media request</option>
          <option>Beneficiary referral</option>
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-teal-900">
        Message
        <textarea required name="message" rows={6} className="focus-ring rounded-md border border-teal-900/15 px-4 py-3 font-normal text-ink" />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-teal-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-900"
      >
        <Send size={18} />
        {sending ? "Sending..." : "Send message"}
      </button>
      {status ? <p className="mt-4 rounded-md bg-mist p-3 text-sm text-teal-900">{status}</p> : null}
    </form>
  );
}
