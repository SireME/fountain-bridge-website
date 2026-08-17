import { CalendarDays, MapPin } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { FacebookFeed } from "@/components/FacebookFeed";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { events } from "@/data/site";

export const metadata = {
  title: "Events",
  description: "Upcoming events, field visits, and Facebook events for Fountain Bridge.",
  alternates: { canonical: "/events" },
};

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

      <section aria-labelledby="activities-title" className="section-pad">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div>
            <SectionHeading
              id="activities-title"
              eyebrow="Planned activities"
              title="Where the team will be working."
              description="Dates are set per project with community leaders and volunteers. Facebook carries the exact schedule once a visit is confirmed."
            />
            <ul className="mt-8 grid gap-5">
              {events.map((event) => (
                <li key={event.title} className="rounded-lg bg-white p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700">
                      <CalendarDays size={22} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-serif text-subheading font-black text-teal-900">{event.title}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm font-bold text-gold-700">
                        <MapPin size={16} className="shrink-0" aria-hidden="true" />
                        {event.location}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-muted">{event.date}</p>
                      <p className="mt-3 leading-7 text-muted">{event.summary}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <FacebookFeed compact />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
