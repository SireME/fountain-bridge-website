import { ArrowRight, CircleCheck, HandCoins, HeartHandshake, MapPin } from "lucide-react";
import { ButtonLink, buttonClasses } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { FacebookFeed } from "@/components/FacebookFeed";
import { LoadingImage } from "@/components/LoadingImage";
import { MapWidget } from "@/components/MapWidget";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  donationTiers,
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
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-teal-900 text-white">
        <div className="absolute inset-0">
          <LoadingImage
            src={site.heroImage}
            alt=""
            fill
            priority
            showLogoLoader={false}
            sizes="100vw"
            className="object-cover opacity-35"
          />
          {/* Scrim keeps every headline above 4.5:1 regardless of the photo behind it. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-teal-900/92 via-teal-900/80 to-teal-900/60"
          />
        </div>
        <div className="section-shell relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-24">
          <div>
            <p className="inline-flex rounded-md bg-gold-400 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-teal-900 sm:text-sm">
              {site.type}
            </p>
            <h1 id="hero-title" className="mt-5 font-serif text-display font-black">
              {site.headline}
            </h1>
            <p className="mt-6 max-w-measure text-lead font-semibold text-white/90">{site.tagline}</p>
            <p className="mt-4 max-w-measure text-base leading-8 text-white/80">{site.subheadline}</p>
            <p className="mt-6 flex items-center gap-2 text-sm font-bold text-white/85">
              <MapPin size={18} className="shrink-0 text-gold-400" aria-hidden="true" />
              {site.location}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/donate" variant="gold" size="lg">
                Support our work
              </ButtonLink>
              <ButtonLink href="/programs" variant="light" size="lg">
                Explore programs
              </ButtonLink>
              <a
                href={facebook.pageUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonClasses({ variant: "outlineLight", size: "lg" })}
              >
                Follow on Facebook
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/95 p-5 text-ink shadow-soft backdrop-blur sm:p-6">
            <h2 className="text-xs font-black uppercase tracking-[0.16em] text-gold-600">
              Where the work stands
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse rounded-md bg-mist p-4">
                  <dt className="mt-1 text-sm leading-6 text-muted">{stat.label}</dt>
                  <dd className="font-serif text-3xl font-black text-teal-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 rounded-md bg-teal-900 p-5 text-white">
              <HeartHandshake className="mb-3 text-gold-400" aria-hidden="true" />
              <p className="font-serif text-subheading font-black">Community care, built locally.</p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Programs are shaped through schools, community leaders, health partners, volunteers, and
                families.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="border-b border-teal-900/10 bg-white section-pad-sm" labelledBy="trust-title">
        <div className="section-shell">
          <h2 id="trust-title" className="sr-only">
            How we work
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <li
                  key={badge.label}
                  className="flex items-center gap-3 rounded-lg border border-teal-900/10 bg-linen/60 p-4"
                >
                  <Icon className="shrink-0 text-teal-700" aria-hidden="true" />
                  <span className="text-sm font-bold text-teal-900">{badge.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="section-pad" labelledBy="who-title">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              id="who-title"
              eyebrow="Who we are"
              title="A bridge between vulnerable communities and the support they need."
              description={`${site.aboutIntro} ${site.whereWeWork}`}
            />
            <p className="mt-6 rounded-lg border-l-4 border-gold-400 bg-white p-5 text-base leading-8 text-ink shadow-card">
              <span className="font-black text-teal-900">Our mission:</span> {site.mission}
            </p>
            <ButtonLink href="/about" variant="secondary" className="mt-7">
              Read about {site.name}
            </ButtonLink>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.14em] text-gold-600">What we deliver</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {homepageHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-lg border border-teal-900/10 bg-white p-4 shadow-card"
                >
                  <CircleCheck className="mt-0.5 shrink-0 text-teal-700" size={20} aria-hidden="true" />
                  <span className="text-sm font-bold leading-6 text-teal-900">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white section-pad" labelledBy="impact-title">
        <div className="section-shell">
          <SectionHeading
            id="impact-title"
            eyebrow="Impact"
            title="Health, education, and dignity delivered in person."
            description="Each focus area below is active field work: screening, referrals, nutrition support, hygiene education, and healthier living conditions."
            action={
              <ButtonLink href="/gallery" variant="secondary">
                See the photo record
              </ButtonLink>
            }
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((item) => (
              <li
                key={item.title}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-card ring-1 ring-teal-900/5"
              >
                <div className="relative h-44">
                  <LoadingImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-black leading-7 text-teal-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="bg-mist section-pad" labelledBy="model-title">
        <div className="section-shell">
          <SectionHeading
            id="model-title"
            eyebrow="How the bridge works"
            title="From community needs to practical action."
            description="Three steps keep the work accountable to the people it serves."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {operatingModel.map((item, index) => (
              <li key={item.step} className="rounded-lg bg-white p-6 shadow-card">
                <p className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-teal-900 font-serif text-lg font-black text-gold-400"
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.14em] text-gold-600">
                    {item.step}
                  </span>
                </p>
                <h3 className="mt-5 font-serif text-subheading font-black text-teal-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </MotionSection>

      <MotionSection className="section-pad" labelledBy="programs-title">
        <div className="section-shell">
          <SectionHeading
            id="programs-title"
            eyebrow="Programs"
            title="Practical support where it matters."
            action={
              <ButtonLink href="/programs" variant="secondary">
                View all programs
              </ButtonLink>
            }
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <li
                  key={program.title}
                  className="flex flex-col overflow-hidden rounded-lg bg-white shadow-card sm:flex-row"
                >
                  <div className="relative h-48 shrink-0 sm:h-auto sm:w-40">
                    <LoadingImage
                      src={program.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 160px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-5 sm:p-6">
                    <Icon className="text-teal-700" size={26} aria-hidden="true" />
                    <h3 className="mt-3 font-serif text-lg font-black leading-7 text-teal-900">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{program.summary}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="bg-white section-pad" labelledBy="support-title">
        <div className="section-shell">
          <SectionHeading
            id="support-title"
            eyebrow="Where support goes"
            title="What a contribution actually pays for."
            description={site.donationIntro}
            action={
              <ButtonLink href="/donate" variant="primary">
                See giving options
              </ButtonLink>
            }
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {donationTiers.map((tier) => (
              <li key={tier.tier} className="flex flex-col rounded-lg bg-mist p-6">
                <HandCoins className="text-teal-700" size={28} aria-hidden="true" />
                <h3 className="mt-4 font-serif text-subheading font-black text-teal-900">{tier.tier}</h3>
                <p className="mt-2 text-lg font-black text-gold-600">{tier.amount}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{tier.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-measure text-sm leading-7 text-muted">{site.transparencyPromise}</p>
        </div>
      </MotionSection>

      <MotionSection className="bg-mist section-pad" labelledBy="location-title">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <SectionHeading
              id="location-title"
              eyebrow="Where we work"
              title="Rooted in Buea, serving communities through local partnerships."
              description={site.whereWeWork}
            />
            <ButtonLink href="/contact" variant="secondary" className="mt-7">
              Contact the office
            </ButtonLink>
          </div>
          <MapWidget compact />
        </div>
      </MotionSection>

      <MotionSection className="section-pad" labelledBy="latest-title">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              id="latest-title"
              eyebrow="Latest"
              title="Updates from the field."
              description="Longer announcements live here; day-to-day photos and events are posted on Facebook first."
            />
            <ul className="mt-8 space-y-4">
              {updates.map((update) => (
                <li key={update.title} className="rounded-lg border border-teal-900/10 bg-white p-5 shadow-card">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-gold-600">{update.date}</p>
                  <h3 className="mt-2 font-serif text-lg font-black leading-7 text-teal-900">{update.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{update.summary}</p>
                </li>
              ))}
            </ul>
            <ButtonLink href="/news" className="mt-7">
              More news
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
          <FacebookFeed compact />
        </div>
      </MotionSection>

      <CtaBand />
    </>
  );
}
