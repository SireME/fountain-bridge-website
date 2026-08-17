"use client";

import { Share2 } from "lucide-react";
import { buttonClasses } from "@/components/ButtonLink";
import { FacebookSdk, useFacebookXfbml } from "@/components/FacebookSdk";
import { facebook, site } from "@/data/site";

export function FacebookEmbed({ compact = false }: { compact?: boolean }) {
  useFacebookXfbml();

  return (
    <div className="overflow-hidden rounded-lg border border-teal-900/10 bg-white shadow-card">
      <FacebookSdk />
      <div
        role="region"
        aria-label={`${site.name} Facebook timeline`}
        className="bg-mist/60"
        style={{ minHeight: compact ? 420 : 600 }}
      >
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
        >
          <blockquote cite={facebook.pageUrl} className="fb-xfbml-parse-ignore p-5">
            <p className="text-sm leading-6 text-muted">
              The live Facebook timeline loads here. If it does not appear, your browser or network may be
              blocking Facebook content.
            </p>
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
