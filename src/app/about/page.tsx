import { Share2 } from "lucide-react";
import { FacebookFollow } from "@/components/FacebookFollow";
import { PageHero } from "@/components/PageHero";
import { facebook, site } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Who Fountain Bridge is, why it exists, and the values guiding its community work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A community-built bridge to health, education, and dignity."
        text="Fountain Bridge is a Buea-based nonprofit working with vulnerable populations, women, youth, children, elderly people, schools, community leaders, and health partners."
      />
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-white p-7 shadow-soft">
            <p className="text-sm font-black uppercase tracking-wide text-gold-600">Founded</p>
            <p className="mt-2 font-serif text-5xl font-black text-teal-900">{site.founded}</p>
            <p className="mt-4 leading-7 text-muted">
              {site.aboutIntro} {site.history} {site.whereWeWork}
            </p>
          </div>
          <div className="grid gap-5">
            <article className="rounded-lg bg-white p-7 shadow-soft">
              <h2 className="font-serif text-3xl font-black text-teal-900">Mission</h2>
              <p className="mt-4 leading-8 text-muted">{site.mission}</p>
            </article>
            <article className="rounded-lg bg-white p-7 shadow-soft">
              <h2 className="font-serif text-3xl font-black text-teal-900">Vision</h2>
              <p className="mt-4 leading-8 text-muted">{site.vision}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-mist py-16">
        <div className="section-shell">
          <h2 className="font-serif text-4xl font-black text-teal-900">Values</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {site.values.map((value) => (
              <div key={value} className="rounded-lg bg-white p-5 text-center font-bold text-teal-900 shadow-soft">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl font-black text-teal-900">Who we serve</h2>
            <p className="mt-4 leading-8 text-muted">
              The organization prioritizes people whose wellbeing is shaped by poverty, lack of health information, limited access to quality healthcare, educational exclusion, age-related vulnerability, and social marginalization.
            </p>
            <ul className="mt-6 grid gap-3">
              {site.audiences.map((audience) => (
                <li key={audience} className="rounded-md border border-teal-900/10 bg-white px-4 py-3 font-semibold text-teal-900">
                  {audience}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-teal-900 p-7 text-white">
            <Share2 className="mb-4 text-gold-400" />
            <h2 className="font-serif text-3xl font-black">Follow the work live.</h2>
            <p className="mt-4 leading-7 text-white/75">
              Facebook is the active public channel for Fountain Bridge field updates, posts, photos, and events.
            </p>
            <div className="mt-5">
              <FacebookFollow />
            </div>
            <a href={facebook.pageUrl} target="_blank" rel="noreferrer" className="focus-ring mt-5 inline-flex rounded-md bg-white px-4 py-2 text-sm font-bold text-teal-900">
              Open Facebook page
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
