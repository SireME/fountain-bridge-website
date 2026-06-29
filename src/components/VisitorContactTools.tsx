"use client";

import Image from "next/image";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/data/site";

const DISMISS_KEY = "fountain-bridge-whatsapp-dismissed-at";
const DISMISS_DAYS = 10;
const DISMISS_MS = DISMISS_DAYS * 24 * 60 * 60 * 1000;

function getWhatsAppHref() {
  const phone = site.phone.replace(/\D/g, "");
  const text = encodeURIComponent(
    `Hello ${site.name}, I visited your website and would like to contact the organisation.`
  );

  return `https://wa.me/${phone}?text=${text}`;
}

export function VisitorContactTools() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const whatsappHref = useMemo(() => getWhatsAppHref(), []);

  useEffect(() => {
    try {
      const dismissedAt = window.localStorage.getItem(DISMISS_KEY);
      const dismissedAtMs = dismissedAt ? Number(dismissedAt) : 0;
      const isDismissed = dismissedAtMs > 0 && Date.now() - dismissedAtMs < DISMISS_MS;

      setShowPrompt(!isDismissed);
    } catch {
      setShowPrompt(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 420);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismissPrompt = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // Storage can be blocked in private or restricted browsing contexts.
    }

    setShowPrompt(false);
  };

  return (
    <>
      {showPrompt ? (
        <aside
          aria-labelledby="whatsapp-contact-title"
          className="fixed inset-x-4 bottom-5 z-[70] mx-auto max-w-md rounded-lg border border-teal-900/10 bg-white p-4 text-ink shadow-2xl sm:left-auto sm:right-5 sm:mx-0"
        >
          <div className="flex gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-teal-900/10">
              <Image src={site.logo} alt="" fill sizes="56px" className="object-contain p-1" />
            </div>
            <div className="min-w-0 flex-1">
              <p id="whatsapp-contact-title" className="font-serif text-lg font-black text-teal-900">
                Contact Fountain Bridge
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">
                Have a question, donation, partnership, or volunteer request? Start a WhatsApp conversation with the team.
              </p>
            </div>
            <button
              type="button"
              onClick={dismissPrompt}
              aria-label="Close WhatsApp contact prompt for 10 days"
              className="focus-ring grid h-9 w-9 shrink-0 place-items-center rounded-md text-teal-900 transition hover:bg-teal-50"
            >
              <X size={18} />
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={dismissPrompt}
              className="focus-ring inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md bg-[#128c7e] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0d6f64]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <button
              type="button"
              onClick={dismissPrompt}
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-teal-900/15 px-4 py-3 text-sm font-bold text-teal-900 transition hover:bg-teal-50"
            >
              Later
            </button>
          </div>
        </aside>
      ) : null}

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Contact ${site.name} on WhatsApp`}
        className={`focus-ring fixed bottom-5 left-5 z-[60] grid h-12 w-12 place-items-center rounded-full bg-[#128c7e] text-white shadow-xl transition hover:bg-[#0d6f64] ${
          showPrompt ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MessageCircle size={22} />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`focus-ring fixed bottom-5 right-5 z-[60] grid h-12 w-12 place-items-center rounded-full bg-teal-900 text-white shadow-xl transition hover:bg-teal-700 ${
          showTopButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
