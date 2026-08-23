import { CalendarDays, MapPin } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { FacebookFeed } from "@/components/FacebookFeed";
import { MotionSection } from "@/components/MotionSection";
import { revealItem } from "@/components/reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { events, pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "Events",
  description: "Upcoming events, field visits, and Facebook events for Fountain Bridge.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Field visits, campaign drives, and community events."
        text="Fountain Bridge organizes project-driven activities and shares public event updates through its Facebook channel."
        ctaHref="/contact"
        ctaLabel="Join an activity"
        secondaryCtaHref="/donate"
        secondaryCtaLabel="Fund an outreach"
      />

      <MotionSection labelledBy="activities-title" className="section-pad">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div>
            <SectionHeading
              id="activities-title"
              eyebrow="Planned activities"
              title="Where the team will be working."
              description="Dates are set per project with community leaders and volunteers. Facebook carries the exact schedule once a visit is confirmed."
            />
            <ul className="mt-10 grid gap-5">
              {events.map((event, index) => (
                <li
                  key={event.title}
                  {...revealItem(index)}
                  className="group card card-interactive card-rule p-6 sm:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700 ring-1 ring-teal-900/5 transition duration-300 group-hover:bg-teal-900 group-hover:text-gold-400">
                      <CalendarDays size={22} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-serif text-subheading font-black text-teal-900">{event.title}</h3>
                      <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                        <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1.5 font-bold text-gold-700">
                          <MapPin size={15} className="shrink-0" aria-hidden="true" />
                          {event.location}
                        </span>
                        <span className="font-semibold text-muted">{event.date}</span>
                      </p>
                      <p className="mt-4 leading-7 text-muted">{event.summary}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <FacebookFeed compact />
        </div>
      </MotionSection>

      <CtaBand />
    </>
  );
}
