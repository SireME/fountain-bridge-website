import { FacebookFeed } from "@/components/FacebookFeed";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site, updates } from "@/data/site";

export const metadata = {
  title: "News",
  description: "Latest Fountain Bridge updates and live Facebook feed.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Latest updates from Fountain Bridge."
        text="Follow Fountain Bridge's program highlights, field updates, public announcements, and live Facebook posts."
        ctaHref="/donate"
        ctaLabel="Support the next campaign"
      />

      <section aria-labelledby="updates-title" className="section-pad">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <SectionHeading
              id="updates-title"
              eyebrow="Announcements"
              title="What the team is working on now."
            />
            <ul className="mt-8 space-y-5">
              {updates.map((update) => (
                <li key={update.title} className="rounded-lg bg-white p-6 shadow-card">
                  <p className="inline-flex rounded-md bg-mist px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-gold-700">
                    {update.date}
                  </p>
                  <h3 className="mt-3 font-serif text-subheading font-black text-teal-900">{update.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{update.summary}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-muted">
              {site.name} posts photo updates and short notices on Facebook between announcements.
            </p>
          </div>
          <FacebookFeed />
        </div>
      </section>
    </>
  );
}
