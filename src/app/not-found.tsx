import Link from "next/link";
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
          <h2 id="site-sections" className="font-serif text-heading font-black text-teal-900">
            Every section of the site
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring flex min-h-14 items-center justify-between gap-3 rounded-lg border border-teal-900/10 bg-white px-5 font-bold text-teal-900 shadow-card transition hover:border-teal-700/40 hover:bg-teal-50"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-gold-600">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/donate" variant="primary" className="mt-8">
            Support our work
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
