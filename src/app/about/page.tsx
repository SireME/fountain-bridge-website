import { ArrowRight, BadgeCheck, Users } from "lucide-react";
import { buttonClasses } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { LoadingImage } from "@/components/LoadingImage";
import { MotionSection } from "@/components/MotionSection";
import { revealItem } from "@/components/reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { achievements, facebook, pageMetadata, partners, site } from "@/data/site";

export const metadata = pageMetadata({
  title: "About",
  description: "Who Fountain Bridge is, why it exists, and the values guiding its community work.",
  path: "/about",
});

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

      <MotionSection labelledBy="story-title" className="section-pad">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* The founding year set at display scale: the one number that anchors
              everything else on this page. */}
          <div className="card p-7 sm:p-8" {...revealItem(0)}>
            <h2 id="story-title" className="eyebrow text-gold-600">
              <span aria-hidden="true" className="eyebrow-rule" />
              Founded
            </h2>
            <p className="stat-figure mt-3 text-display">{site.founded}</p>
            <div aria-hidden="true" className="mt-7 h-px w-full bg-teal-900/10" />
            <p className="mt-7 leading-8 text-muted">
              {site.aboutIntro} {site.history} {site.whereWeWork}
            </p>
            <dl className="mt-7 grid gap-4 border-t border-teal-900/10 pt-7 text-sm">
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
            <article className="card p-7 sm:p-8" {...revealItem(1)}>
              <h2 className="eyebrow text-gold-600">
                <span aria-hidden="true" className="eyebrow-rule" />
                Mission
              </h2>
              <p className="mt-4 font-serif text-subheading font-black leading-snug text-teal-900">
                {site.mission}
              </p>
            </article>
            <article
              className="card-sunken border-l-4 border-l-gold-400 p-7 sm:p-8"
              {...revealItem(2)}
            >
              <h2 className="eyebrow text-gold-600">
                <span aria-hidden="true" className="eyebrow-rule" />
                Vision
              </h2>
              <p className="mt-4 font-serif text-subheading font-black leading-snug text-teal-900">
                {site.vision}
              </p>
            </article>
          </div>
        </div>
      </MotionSection>

      <MotionSection labelledBy="values-title" className="bg-white section-pad">
        <div className="section-shell">
          <SectionHeading
            id="values-title"
            eyebrow="What guides us"
            title="Values we can be held to."
            description="These five commitments decide how programs are designed, documented, and reported."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {site.values.map((value, index) => (
              <li
                key={value}
                {...revealItem(index)}
                className="group card-sunken flex items-center gap-3 p-5 font-bold text-teal-900 transition duration-300 ease-out hover:-translate-y-1 hover:border-gold-400/70 hover:bg-white hover:shadow-card lg:flex-col lg:gap-4 lg:py-7 lg:text-center"
              >
                <BadgeCheck
                  className="shrink-0 text-teal-700 transition duration-300 group-hover:text-gold-600"
                  size={24}
                  aria-hidden="true"
                />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection labelledBy="serve-title" className="section-pad">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="serve-title"
              eyebrow="Who we serve"
              title="People whose wellbeing depends on someone showing up."
              description="The organization prioritizes people whose wellbeing is shaped by poverty, lack of health information, limited access to quality healthcare, educational exclusion, age-related vulnerability, and social marginalization."
            />
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {site.audiences.map((audience, index) => (
                <li
                  key={audience}
                  {...revealItem(index)}
                  className="card flex items-center gap-3 px-4 py-3.5 font-semibold text-teal-900 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-gold-400/70 hover:shadow-soft"
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
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {partners.map((partner, index) => (
                <li
                  key={partner}
                  {...revealItem(index)}
                  className="rounded-full border border-teal-900/10 bg-mist px-4 py-2 text-sm font-semibold text-teal-900 transition duration-300 hover:border-gold-400/70 hover:bg-white"
                >
                  {partner}
                </li>
              ))}
            </ul>
            <div className="grain relative mt-9 overflow-hidden rounded-lg bg-teal-900 p-7 text-white sm:p-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
              />
              <h3 className="relative z-10 font-serif text-subheading font-black">Follow the work live.</h3>
              <p className="relative z-10 mt-3 leading-7 text-white/80">
                Facebook is the active public channel for {site.name} field updates, posts, photos, and events.
              </p>
              <SocialLinks tone="light" showLabels className="relative z-10 mt-6" />
              <a
                href={facebook.pageUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({ variant: "light", className: "relative z-10 mt-5" })}
              >
                Open the Facebook page
                <ArrowRight size={18} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection labelledBy="recognition-title" className="bg-white section-pad">
        <div className="section-shell">
          <SectionHeading
            id="recognition-title"
            eyebrow="Recognition and milestones"
            title="Work that has been documented and recognized."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {achievements.map((item, index) => (
              <li
                key={item.title}
                {...revealItem(index)}
                className="group card card-interactive card-rule flex flex-col overflow-hidden bg-linen"
              >
                <div className="media-frame h-56 sm:h-64">
                  <LoadingImage
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="media-zoom object-cover"
                  />
                </div>
                <div className="flex-1 p-6 sm:p-7">
                  <h3 className="font-serif text-subheading font-black text-teal-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <CtaBand />
    </>
  );
}
