import { FacebookFeed } from "@/components/FacebookFeed";
import { MotionSection } from "@/components/MotionSection";
import { revealItem } from "@/components/reveal";
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

      <MotionSection labelledBy="updates-title" className="section-pad">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              id="updates-title"
              eyebrow="Announcements"
              title="What the team is working on now."
            />
            {/* Timeline rule: a single vertical hairline down the left of the
                list, so a run of announcements reads in sequence. */}
            <ul className="mt-10 space-y-5 border-l-2 border-teal-900/10 pl-6 sm:pl-8">
              {updates.map((update, index) => (
                <li
                  key={update.title}
                  {...revealItem(index)}
                  className="group card card-interactive card-rule p-6 sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[30px] top-8 h-2.5 w-2.5 rounded-full bg-gold-400 ring-4 ring-linen transition duration-300 group-hover:bg-teal-700 sm:-left-[38px]"
                  />
                  <p className="eyebrow text-gold-600">
                    <span aria-hidden="true" className="eyebrow-rule" />
                    {update.date}
                  </p>
                  <h3 className="mt-3 font-serif text-subheading font-black text-teal-900">{update.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{update.summary}</p>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-7 text-muted">
              {site.name} posts photo updates and short notices on Facebook between announcements.
            </p>
          </div>
          <FacebookFeed />
        </div>
      </MotionSection>
    </>
  );
}
