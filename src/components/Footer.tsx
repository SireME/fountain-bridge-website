import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SocialLinks } from "@/components/SocialLinks";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="grain relative bg-teal-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
      />
      <div className="section-shell relative z-10 grid gap-12 py-16 lg:grid-cols-[1.6fr_0.9fr_1.2fr] lg:gap-12">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="relative h-14 w-44 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-white/20">
              <Image src={site.logo} alt="" fill sizes="176px" className="object-contain p-1" />
            </span>
            <div>
              <p className="font-serif text-xl font-black">{site.name}</p>
              <p className="text-sm text-white/75">{site.tagline}</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/75">{site.footerDescription}</p>
          <ButtonLink href="/donate" variant="gold" className="mt-7">
            Support our work
          </ButtonLink>
          <SocialLinks tone="light" showLabels className="mt-6" />
        </div>

        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="eyebrow mb-5 text-gold-400">
            <span aria-hidden="true" className="eyebrow-rule" />
            Explore
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-white/80 lg:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring group flex min-h-10 items-center gap-2.5 rounded-md transition hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-0 shrink-0 bg-gold-400 transition-[width] duration-300 ease-out group-hover:w-4"
                  />
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow mb-5 text-gold-400">
            <span aria-hidden="true" className="eyebrow-rule" />
            Contact
          </h2>
          <address className="space-y-3.5 text-sm not-italic text-white/80">
            <p className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
              <span>{site.location}</span>
            </p>
            <p className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
              <a
                href={`tel:${site.phone.replaceAll(" ", "")}`}
                className="focus-ring rounded-md transition hover:text-white hover:underline"
              >
                {site.phone}
              </a>
            </p>
            {site.emails.map((email) => (
              <p key={email} className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
                <a
                  href={`mailto:${email}`}
                  className="focus-ring break-all rounded-md transition hover:text-white hover:underline"
                >
                  {email}
                </a>
              </p>
            ))}
            <p className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
              <span>
                {site.officeHours} {site.responseTime}
              </span>
            </p>
          </address>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10 py-6">
        <div className="section-shell flex flex-col gap-2 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>{site.type} based in Buea, Cameroon.</span>
        </div>
      </div>
    </footer>
  );
}
