import { MapPin } from "lucide-react";
import { site } from "@/data/site";

export function MapWidget({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-soft">
      <div className="flex items-start gap-3 border-b border-teal-900/10 p-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700">
          <MapPin size={22} />
        </span>
        <div>
          <p className="font-serif text-xl font-black text-teal-900">Find us in Buea</p>
          <p className="mt-1 text-sm leading-6 text-muted">{site.location}</p>
        </div>
      </div>
      <iframe
        title={`${site.name} location map`}
        src={site.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`block w-full border-0 ${compact ? "h-72" : "h-[420px]"}`}
      />
    </div>
  );
}
