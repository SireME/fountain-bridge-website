import { FacebookFeed } from "@/components/FacebookFeed";
import { PageHero } from "@/components/PageHero";
import { updates } from "@/data/site";

export const metadata = {
  title: "News",
  description: "Latest Fountain Bridge updates and live Facebook feed.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Latest updates from Fountain Bridge."
        text="Follow Fountain Bridge's program highlights, field updates, public announcements, and live Facebook posts."
      />
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {updates.map((update) => (
              <article key={update.title} className="rounded-lg bg-white p-6 shadow-soft">
                <p className="text-sm font-black uppercase tracking-wide text-gold-600">{update.date}</p>
                <h2 className="mt-2 font-serif text-2xl font-black text-teal-900">{update.title}</h2>
                <p className="mt-3 leading-7 text-muted">{update.summary}</p>
              </article>
            ))}
          </div>
          <FacebookFeed />
        </div>
      </section>
    </>
  );
}
