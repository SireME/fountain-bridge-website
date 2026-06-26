import { CalendarDays, MapPin } from "lucide-react";
import { FacebookFeed } from "@/components/FacebookFeed";
import { PageHero } from "@/components/PageHero";
import { events } from "@/data/site";

export const metadata = {
  title: "Events",
  description: "Upcoming events, field visits, and Facebook events for Fountain Bridge.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Field visits, campaign drives, and community events."
        text="Fountain Bridge organizes project-driven activities and shares public event updates through its Facebook channel."
      />
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5">
            {events.map((event) => (
              <article key={event.title} className="rounded-lg bg-white p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <CalendarDays className="mt-1 text-teal-700" />
                  <div>
                    <h2 className="font-serif text-2xl font-black text-teal-900">{event.title}</h2>
                    <p className="mt-2 flex items-center gap-2 text-sm font-bold text-gold-600">
                      <MapPin size={16} />
                      {event.location}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted">{event.date}</p>
                    <p className="mt-3 leading-7 text-muted">{event.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <FacebookFeed compact />
        </div>
      </section>
    </>
  );
}
