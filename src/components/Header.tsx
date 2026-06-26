"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { facebook, navItems, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-linen/95 backdrop-blur">
      <div className="section-shell flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex min-w-0 items-center gap-2 rounded-md sm:gap-3">
          <span className="relative h-11 w-24 shrink-0 overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-teal-900/10 sm:h-12 sm:w-48">
            <Image src={site.logo} alt={`${site.name} logo`} fill priority sizes="(max-width: 640px) 96px, 192px" className="object-contain p-1" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-black uppercase tracking-wide text-teal-900">{site.shortName}</span>
            <span className="hidden text-xs text-muted sm:block">Buea, Cameroon</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-teal-700 text-white" : "text-ink hover:bg-teal-50 hover:text-teal-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={facebook.pageUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md border border-teal-700 px-4 py-2 text-sm font-bold text-teal-900 transition hover:bg-teal-50"
          >
            Follow
          </a>
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-teal-900/15 text-teal-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <nav aria-label="Mobile navigation" className="border-t border-teal-900/10 bg-linen px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-sm font-bold text-ink hover:bg-teal-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
