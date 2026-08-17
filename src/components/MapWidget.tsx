import { ExternalLink, MapPin } from "lucide-react";
import { site } from "@/data/site";

export function MapWidget({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-teal-900/10 p-5">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700">
            <MapPin size={22} aria-hidden="true" />
          </span>
          <div>
            <p className="font-serif text-subheading font-black text-teal-900">Find us in Buea</p>
            <p className="mt-1 text-sm leading-6 text-muted">{site.location}</p>
          </div>
        </div>
        <a
          href={site.mapLinkUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-teal-700 px-4 py-2 text-sm font-bold text-teal-900 transition hover:bg-teal-50"
        >
          Open in Maps
          <ExternalLink size={16} aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
      <iframe
        title={`Map showing the ${site.name} office location in ${site.address.locality}`}
        src={site.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`block w-full border-0 ${compact ? "h-72" : "h-[420px]"}`}
      />
    </div>
  );
}
