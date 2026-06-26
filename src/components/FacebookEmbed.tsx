"use client";

import { useEffect } from "react";
import { Share2 } from "lucide-react";
import { facebook } from "@/data/site";

declare global {
  interface Window {
    FB?: { XFBML?: { parse: () => void } };
  }
}

export function FacebookEmbed({ compact = false }: { compact?: boolean }) {
  useEffect(() => {
    const timer = window.setTimeout(() => window.FB?.XFBML?.parse(), 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-teal-900/10 bg-white shadow-soft">
      <div
        className="fb-page"
        data-href={facebook.pageUrl}
        data-tabs="timeline,events"
        data-width="500"
        data-height={compact ? "420" : "600"}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      />
      <div className="border-t border-teal-900/10 bg-mist p-5">
        <div className="flex items-start gap-3">
          <Share2 className="mt-1 text-blue-600" size={22} />
          <div>
            <p className="font-bold text-teal-900">Stay connected</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              Follow us on Facebook for the latest news, photos, events, and updates.
            </p>
            <a
              href={facebook.pageUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-3 inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-900"
            >
              Follow on Facebook →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
