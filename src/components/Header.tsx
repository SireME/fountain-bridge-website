"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { SocialLinks } from "@/components/SocialLinks";
import { donateNavItem, primaryNavItems, site } from "@/data/site";

const MENU_ID = "primary-navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the panel after navigating so the next page starts from the top.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // The bar sits on a linen page, so at the top it should read as part of the
  // page. Once content scrolls under it, it earns a border and a shadow.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the disclosure and returns focus to the button that opened it
  // (WAI-ARIA disclosure navigation pattern).
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Stop the page behind the open menu from scrolling.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-teal-900/10 bg-linen/95 shadow-[0_10px_30px_-18px_rgba(7,59,50,0.55)] backdrop-blur"
          : "border-transparent bg-linen"
      }`}
    >
      <div className="section-shell flex h-[var(--header-height)] items-center justify-between gap-3">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="focus-ring group flex min-w-0 items-center gap-2 rounded-md sm:gap-3"
        >
          <span className="relative h-10 w-24 shrink-0 overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-teal-900/10 transition duration-300 group-hover:ring-gold-400/70 sm:h-12 sm:w-40 lg:w-36 xl:w-44">
            <Image
              src={site.logo}
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 96px, 176px"
              className="object-contain p-1"
            />
          </span>
          <span className="min-w-0 leading-tight lg:hidden xl:block">
            <span className="block truncate text-sm font-black uppercase tracking-wide text-teal-900">
              {site.shortName}
            </span>
            <span className="hidden text-xs text-muted sm:block">Buea, Cameroon</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {primaryNavItems.map((item) => {
            const current = isCurrent(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`focus-ring relative rounded-md px-2.5 py-2 text-[13px] transition duration-200 xl:px-3 xl:text-sm ${
                  current
                    ? "font-black text-teal-900"
                    : "font-semibold text-ink hover:bg-teal-50 hover:text-teal-900"
                }`}
              >
                {item.label}
                {/* Position + weight carry the current page, not colour alone. */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-2.5 -bottom-0.5 h-[3px] rounded-full bg-gold-400 transition-transform duration-300 ease-out xl:inset-x-3 ${
                    current ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <SocialLinks tone="dark" className="hidden xl:flex" />
          <ButtonLink
            href={donateNavItem.href}
            variant="gold"
            size="sm"
            aria-current={isCurrent(donateNavItem.href) ? "page" : undefined}
            className="hidden lg:inline-flex"
          >
            {donateNavItem.label}
          </ButtonLink>

          <a
            href={`tel:${site.phone.replaceAll(" ", "")}`}
            aria-label={`Call ${site.name} on ${site.phone}`}
            className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-teal-900/15 text-teal-800 transition hover:border-teal-700 hover:bg-teal-50 sm:hidden"
          >
            <Phone size={20} aria-hidden="true" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-teal-900/15 text-teal-900 transition hover:border-teal-700 hover:bg-teal-50 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-[var(--header-height)] z-30 bg-teal-900/35 lg:hidden"
        />
      ) : null}
      {/* Kept in the DOM so `aria-controls` always resolves; `hidden` removes it
          from the accessibility tree and the tab order while collapsed. */}
      <nav
        id={MENU_ID}
        aria-label="Primary"
        hidden={!open}
        className="relative z-40 max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-teal-900/10 bg-linen px-4 pb-6 pt-4 shadow-soft lg:hidden"
      >
        <ButtonLink href={donateNavItem.href} variant="gold" className="w-full">
          {donateNavItem.label}
        </ButtonLink>
        <ul className="mt-4 grid gap-1">
          {primaryNavItems.map((item) => {
            const current = isCurrent(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`focus-ring flex min-h-12 items-center gap-3 rounded-md border-l-[3px] px-3 text-sm transition ${
                    current
                      ? "border-gold-400 bg-white font-black text-teal-900 shadow-card"
                      : "border-transparent font-bold text-ink hover:border-teal-700/40 hover:bg-teal-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-5 border-t border-teal-900/10 pt-5">
          <a
            href={`tel:${site.phone.replaceAll(" ", "")}`}
            className="focus-ring flex min-h-12 items-center gap-3 rounded-md px-3 text-sm font-bold text-teal-900 transition hover:bg-teal-50"
          >
            <Phone size={18} aria-hidden="true" className="text-teal-700" />
            {site.phone}
          </a>
          <SocialLinks tone="dark" showLabels className="mt-3 px-1" />
        </div>
      </nav>
    </header>
  );
}
