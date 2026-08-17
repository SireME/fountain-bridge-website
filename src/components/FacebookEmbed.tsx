"use client";

import { Share2 } from "lucide-react";
import { buttonClasses } from "@/components/ButtonLink";
import { facebook, site } from "@/data/site";

function getFacebookPluginUrl(height: number) {
  const url = new URL("https://www.facebook.com/plugins/page.php");
  url.search = new URLSearchParams({
    href: facebook.pageUrl,
    tabs: "timeline,events",
    width: "500",
    height: String(height),
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
  }).toString();
  return url.toString();
}

export function FacebookEmbed({ compact = false }: { compact?: boolean }) {
  const height = compact ? 420 : 600;

  return (
    <div className="overflow-hidden rounded-lg border border-teal-900/10 bg-white shadow-card">
      <div
        role="region"
        aria-label={`${site.name} Facebook timeline`}
        className="bg-mist/60"
        style={{ minHeight: height }}
      >
        <iframe
          src={getFacebookPluginUrl(height)}
          title={`${site.name} Facebook timeline`}
          className="block w-full"
          style={{ border: "none", minHeight: height }}
          width="500"
          height={height}
          scrolling="no"
          allow="encrypted-media"
          allowFullScreen
        />
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
