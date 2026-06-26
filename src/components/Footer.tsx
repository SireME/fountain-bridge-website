import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { FacebookFollow } from "@/components/FacebookFollow";
import { facebook, navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="relative h-14 w-48 overflow-hidden rounded-md bg-white">
              <Image src={site.logo} alt={`${site.name} logo`} fill sizes="192px" className="object-contain p-1" />
            </span>
            <div>
              <p className="font-serif text-xl font-black">{site.name}</p>
              <p className="text-sm text-white/70">{site.tagline}</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/75">
            {site.footerDescription}
          </p>
          <div className="mt-5">
            <FacebookFollow />
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-wide text-gold-400">Explore</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/75">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded-md py-1 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-wide text-gold-400">Contact</h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 text-gold-400" />
              <span>{site.location}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 text-gold-400" />
              <a href={`tel:${site.phone.replaceAll(" ", "")}`} className="focus-ring rounded-md hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 text-gold-400" />
              <a href={`mailto:${site.emails[0]}`} className="focus-ring rounded-md hover:text-white">
                {site.emails[0]}
              </a>
            </li>
            <li className="flex gap-3">
              <Share2 size={18} className="mt-0.5 text-gold-400" />
              <a href={facebook.pageUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-md hover:text-white">
                Facebook /{facebook.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Built for community health, education, and inclusion.</span>
        </div>
      </div>
    </footer>
  );
}
