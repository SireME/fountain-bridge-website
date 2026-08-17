"use client";

import { Share2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { buttonClasses } from "@/components/ButtonLink";
import { facebook, site } from "@/data/site";

declare global {
  interface Window {
    FB?: {
      init: (options: { version: string; xfbml?: boolean }) => void;
      XFBML?: { parse: (element?: Element) => void };
    };
    __fountainBridgeFacebookInitialized?: boolean;
  }
}

const POLL_INTERVAL_MS = 250;
const MAX_ATTEMPTS = 40;

export function FacebookEmbed({ compact = false }: { compact?: boolean }) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let attempts = 0;

    const parse = () => {
      if (window.FB?.XFBML?.parse) {
        if (!window.__fountainBridgeFacebookInitialized) {
          window.FB.init({ version: "v19.0", xfbml: false });
          window.__fountainBridgeFacebookInitialized = true;
        }
        window.FB.XFBML.parse(widgetRef.current?.parentElement ?? undefined);
        return true;
      }
      return false;
    };

    if (parse()) return;

    const timer = window.setInterval(() => {
      attempts += 1;
      if (parse() || attempts >= MAX_ATTEMPTS) window.clearInterval(timer);
    }, POLL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-teal-900/10 bg-white shadow-card">
      <div
        role="region"
        aria-label={`${site.name} Facebook timeline`}
        className="bg-mist/60"
        style={{ minHeight: compact ? 420 : 600 }}
      >
        <div
          ref={widgetRef}
          className="fb-page"
          data-href={facebook.pageUrl}
          data-tabs="timeline,events"
          data-width="500"
          data-height={compact ? "420" : "600"}
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote cite={facebook.pageUrl} className="fb-xfbml-parse-ignore p-5">
            <a href={facebook.pageUrl} className="text-sm leading-6 text-muted">
              View Fountain Bridge on Facebook.
            </a>
          </blockquote>
        </div>
      </div>
      <div className="border-t border-teal-900/10 bg-mist p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Share2 className="mt-1 shrink-0 text-blue-600" size={22} aria-hidden="true" />
          <div>
            <p className="font-serif text-lg font-black text-teal-900">Stay connected</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              Facebook is where {site.name} posts field photos, outreach albums, and event announcements first.
            </p>
            <a
              href={facebook.pageUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Follow ${site.name} on Facebook (opens in a new tab)`}
              className={buttonClasses({ variant: "brandFacebook", className: "mt-4" })}
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
