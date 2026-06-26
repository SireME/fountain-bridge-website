import Image from "next/image";
import { ArrowRight, CheckCircle2, HeartHandshake, MapPin, Share2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FacebookFeed } from "@/components/FacebookFeed";
import { MapWidget } from "@/components/MapWidget";
import { MotionSection } from "@/components/MotionSection";
import {
  facebook,
  homepageHighlights,
  impactAreas,
  operatingModel,
  programs,
  proofStats,
  site,
  trustBadges,
  updates,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-teal-900 text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={site.heroImage}
            alt="Fountain Bridge community outreach"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative section-shell grid min-h-[690px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-md bg-gold-400 px-3 py-2 text-sm font-black uppercase tracking-wide text-teal-900">
              {site.type}
            </p>
            <h1 className="font-serif text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
              {site.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-white/86">{site.tagline}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">{site.subheadline}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white/85">
              <MapPin size={18} className="text-gold-400" />
              <span>{site.location}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/donate" variant="light">
                Support Our Work
              </ButtonLink>
              <ButtonLink href="/programs" className="bg-gold-400 text-teal-900 hover:bg-gold-100">
                Explore Programs
              </ButtonLink>
              <a
                href={facebook.pageUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                <Share2 size={18} />
                Follow us on Facebook
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/92 p-5 text-ink shadow-soft backdrop-blur">
            <div className="grid grid-cols-2 gap-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-md bg-mist p-4">
                  <p className="font-serif text-3xl font-black text-teal-900">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-md bg-teal-900 p-5 text-white">
              <HeartHandshake className="mb-3 text-gold-400" />
              <p className="font-serif text-2xl font-black">Community care, built locally.</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Programs are shaped through schools, community leaders, health partners, volunteers, and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="bg-white py-14">
        <div className="section-shell grid gap-5 md:grid-cols-4">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-3 rounded-lg border border-teal-900/10 p-4">
                <Icon className="text-teal-700" />
                <span className="text-sm font-bold text-teal-900">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-gold-600">Who we are</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-teal-900">
              A bridge between vulnerable communities and the support they need.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              {site.aboutIntro} {site.whereWeWork}
            </p>
            <ButtonLink href="/about" variant="secondary" className="mt-7">
              Read about Fountain Bridge
            </ButtonLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {homepageHighlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 rounded-lg border border-teal-900/10 bg-white p-4 shadow-soft">
                <CheckCircle2 className="shrink-0 text-teal-700" />
                <span className="text-sm font-bold leading-6 text-teal-900">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-gold-600">Mission</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-teal-900">Health, education, and opportunity for vulnerable communities.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{site.mission}</p>
            <ButtonLink href="/about" variant="secondary" className="mt-7">
              Learn who we are
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {impactAreas.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-44">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <CheckCircle2 className="mb-4 text-teal-700" />
                  <h3 className="font-serif text-xl font-black text-teal-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-gold-600">How the bridge works</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-teal-900">From community needs to practical action.</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {operatingModel.map((item) => (
              <article key={item.step} className="rounded-lg bg-mist p-6">
                <p className="grid h-12 w-12 place-items-center rounded-md bg-teal-900 text-sm font-black uppercase text-gold-400">
                  {item.step}
                </p>
                <h3 className="mt-5 font-serif text-2xl font-black text-teal-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-mist py-16">
        <div className="section-shell">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-gold-600">Programs</p>
              <h2 className="mt-3 font-serif text-4xl font-black text-teal-900">Practical support where it matters.</h2>
            </div>
            <ButtonLink href="/programs" variant="secondary">
              View all programs
            </ButtonLink>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <article key={program.title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                  <div className="relative h-44">
                    <Image src={program.image} alt="" fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <Icon className="mb-4 text-teal-700" />
                    <h3 className="font-serif text-xl font-black text-teal-900">{program.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{program.summary}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-gold-600">Location</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-teal-900">Rooted in Buea, serving communities through local partnerships.</h2>
            <p className="mt-5 leading-8 text-muted">
              {site.whereWeWork}
            </p>
            <ButtonLink href="/contact" variant="secondary" className="mt-7">
              Contact the office
            </ButtonLink>
          </div>
          <MapWidget compact />
        </div>
      </MotionSection>

      <MotionSection className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-gold-600">Latest</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-teal-900">Updates from the field and Facebook.</h2>
            <div className="mt-6 space-y-4">
              {updates.map((update) => (
                <article key={update.title} className="rounded-lg border border-teal-900/10 bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-wide text-gold-600">{update.date}</p>
                  <h3 className="mt-2 font-serif text-xl font-black text-teal-900">{update.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{update.summary}</p>
                </article>
              ))}
            </div>
            <ButtonLink href="/news" className="mt-6">
              More news <ArrowRight size={18} className="ml-2" />
            </ButtonLink>
          </div>
          <FacebookFeed compact />
        </div>
      </MotionSection>
    </>
  );
}
