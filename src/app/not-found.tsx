import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { navItems, site } from "@/data/site";

export const metadata = {
  title: "Page not found",
  description: `The page you requested is not available on the ${site.name} website.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="That page is not here."
        text="The link may be out of date, or the page may have moved. Use the shortcuts below to pick up where you left off."
        ctaHref="/"
        ctaLabel="Back to the homepage"
        secondaryCtaHref="/contact"
        secondaryCtaLabel="Contact the team"
      />
      <section aria-labelledby="site-sections" className="section-pad">
        <div className="section-shell">
          <p className="eyebrow text-gold-600">
            <span aria-hidden="true" className="eyebrow-rule" />
            Site index
          </p>
          <h2 id="site-sections" className="mt-4 font-serif text-heading font-black text-teal-900">
            Every section of the site
          </h2>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring link-arrow group card flex min-h-16 items-center justify-between gap-3 px-5 font-bold text-teal-900 transition duration-300 ease-out hover:-translate-y-1 hover:border-gold-400/70 hover:shadow-soft"
                >
                  <span className="flex items-center gap-3.5">
                    <span aria-hidden="true" className="section-index text-teal-900/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>
                  <ArrowRight size={18} className="shrink-0 text-gold-600" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/donate" variant="primary" className="mt-9">
            Support our work
            <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
