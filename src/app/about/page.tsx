import { BadgeCheck, Users } from "lucide-react";
import { buttonClasses } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { LoadingImage } from "@/components/LoadingImage";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { achievements, facebook, partners, site } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Who Fountain Bridge is, why it exists, and the values guiding its community work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A community-built bridge to health, education, and dignity."
        text="Fountain Bridge is a Buea-based nonprofit working with vulnerable populations, women, youth, children, elderly people, schools, community leaders, and health partners."
        ctaHref="/programs"
        ctaLabel="See what we run"
        secondaryCtaHref="/contact"
        secondaryCtaLabel="Talk to the team"
      />

      <section aria-labelledby="story-title" className="section-pad">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="rounded-lg bg-white p-7 shadow-card">
            <h2 id="story-title" className="text-sm font-black uppercase tracking-[0.14em] text-gold-600">
              Founded
            </h2>
            <p className="mt-2 font-serif text-display font-black leading-none text-teal-900">{site.founded}</p>
            <p className="mt-6 leading-8 text-muted">
              {site.aboutIntro} {site.history} {site.whereWeWork}
            </p>
            <dl className="mt-6 grid gap-4 border-t border-teal-900/10 pt-6 text-sm">
              <div>
                <dt className="font-black text-teal-900">Organization type</dt>
                <dd className="mt-1 text-muted">{site.type}</dd>
              </div>
              <div>
                <dt className="font-black text-teal-900">Headquarters</dt>
                <dd className="mt-1 text-muted">{site.location}</dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-5">
            <article className="rounded-lg bg-white p-7 shadow-card sm:p-8">
              <h2 className="font-serif text-heading font-black text-teal-900">Mission</h2>
              <p className="mt-4 text-lead text-muted">{site.mission}</p>
            </article>
            <article className="rounded-lg border-l-4 border-gold-400 bg-mist p-7 sm:p-8">
              <h2 className="font-serif text-heading font-black text-teal-900">Vision</h2>
              <p className="mt-4 text-lead text-muted">{site.vision}</p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-white section-pad">
        <div className="section-shell">
          <SectionHeading
            id="values-title"
            eyebrow="What guides us"
            title="Values we can be held to."
            description="These five commitments decide how programs are designed, documented, and reported."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {site.values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-3 rounded-lg bg-mist p-5 font-bold text-teal-900 lg:flex-col lg:text-center"
              >
                <BadgeCheck className="shrink-0 text-teal-700" size={22} aria-hidden="true" />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="serve-title" className="section-pad">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              id="serve-title"
              eyebrow="Who we serve"
              title="People whose wellbeing depends on someone showing up."
              description="The organization prioritizes people whose wellbeing is shaped by poverty, lack of health information, limited access to quality healthcare, educational exclusion, age-related vulnerability, and social marginalization."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {site.audiences.map((audience) => (
                <li
                  key={audience}
                  className="flex items-center gap-3 rounded-md border border-teal-900/10 bg-white px-4 py-3 font-semibold text-teal-900 shadow-card"
                >
                  <Users size={18} className="shrink-0 text-teal-700" aria-hidden="true" />
                  {audience}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Who we work with"
              title="Local institutions make the work possible."
              description="Programs are delivered alongside the people and institutions already trusted in each community."
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {partners.map((partner) => (
                <li
                  key={partner}
                  className="rounded-md border border-teal-900/10 bg-mist px-4 py-2 text-sm font-semibold text-teal-900"
                >
                  {partner}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg bg-teal-900 p-7 text-white">
              <h3 className="font-serif text-subheading font-black">Follow the work live.</h3>
              <p className="mt-3 leading-7 text-white/80">
                Facebook is the active public channel for {site.name} field updates, posts, photos, and events.
              </p>
              <SocialLinks tone="light" showLabels className="mt-5" />
              <a
                href={facebook.pageUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({ variant: "light", className: "mt-5" })}
              >
                Open the Facebook page
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="recognition-title" className="bg-white section-pad">
        <div className="section-shell">
          <SectionHeading
            id="recognition-title"
            eyebrow="Recognition and milestones"
            title="Work that has been documented and recognized."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {achievements.map((item) => (
              <li key={item.title} className="flex flex-col overflow-hidden rounded-lg bg-linen shadow-card">
                <div className="relative h-56 sm:h-64">
                  <LoadingImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="font-serif text-subheading font-black text-teal-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
