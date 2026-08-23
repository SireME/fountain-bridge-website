import { ArrowRight, HandCoins, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { ButtonLink, buttonClasses } from "@/components/ButtonLink";
import { MotionSection } from "@/components/MotionSection";
import { revealItem } from "@/components/reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { donationTiers, pageMetadata, paymentMethods, site, whatsappUrl } from "@/data/site";

export const metadata = pageMetadata({
  title: "Donate",
  description: "Support Fountain Bridge programs with transparent giving.",
  path: "/donate",
});

const givingSteps = [
  {
    title: "Choose what to fund",
    detail:
      "Pick one of the giving options above, or tell us the amount and the program you have in mind.",
  },
  {
    title: "Send your gift",
    detail: "Use mobile money, bank transfer, PayPal, or cash using the coordination details on this page.",
  },
  {
    title: "Confirm it reached us",
    detail: 'Use the reason "Donation" and send confirmation by WhatsApp so your gift is recorded and reported back.',
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Fuel health outreach, education support, and community care."
        text={site.donationIntro}
        ctaHref="#how-to-give"
        ctaLabel="How to give"
        secondaryCtaHref="/contact"
        secondaryCtaLabel="Ask a question first"
        meta={
          <p className="flex items-start gap-3 rounded-lg border border-white/20 bg-white/10 p-5 text-sm leading-6 text-white/90 backdrop-blur">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
            {site.transparencyPromise}
          </p>
        }
      />

      <MotionSection labelledBy="options-title" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            id="options-title"
            eyebrow="Giving options"
            title="Three ways to give, and what each one covers."
            description="Each option describes exactly what the contribution covers, so you know what your gift pays for before you send it."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {donationTiers.map((tier, index) => (
              <li
                key={tier.tier}
                {...revealItem(index)}
                className="group card card-interactive card-rule flex flex-col p-7 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700 ring-1 ring-teal-900/5 transition duration-300 group-hover:bg-teal-900 group-hover:text-gold-400">
                    <HandCoins size={26} aria-hidden="true" />
                  </span>
                  <span aria-hidden="true" className="section-index text-teal-900/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-subheading font-black text-teal-900">{tier.tier}</h3>
                <p className="stat-figure mt-3 text-3xl text-gold-600">{tier.amount}</p>
                <div aria-hidden="true" className="mt-5 h-px w-full bg-teal-900/10" />
                <p className="mt-5 flex-1 leading-7 text-muted">{tier.description}</p>
                <ButtonLink href="#how-to-give" variant="secondary" className="mt-7 self-start">
                  Give this way
                  <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection id="how-to-give" labelledBy="how-title" className="bg-white section-pad">
        <div className="section-shell">
          <SectionHeading
            id="how-title"
            eyebrow="How to give"
            title="Three steps from decision to confirmation."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {givingSteps.map((step, index) => (
              <li
                key={step.title}
                {...revealItem(index)}
                className="group card-sunken card-interactive card-rule p-6 sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-md bg-teal-900 font-serif text-lg font-black text-gold-400 transition duration-300 group-hover:bg-teal-700"
                >
                  {index + 1}
                </span>
                <h3 className="mt-5 font-serif text-subheading font-black text-teal-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {paymentMethods.map((method) => (
              <div key={method.accountNumber} className="card bg-linen p-7 sm:p-8">
                <h3 className="font-serif text-heading font-black text-teal-900">Coordination details</h3>
                <div aria-hidden="true" className="mt-5 h-1 w-14 rounded-full bg-gold-400" />
                {/* Rows rather than stacked blocks: a payment detail is a label
                    and a value, and it is read off the screen while typing. */}
                <dl className="mt-7 divide-y divide-teal-900/10 border-y border-teal-900/10 text-sm">
                  <div className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-4">
                    <dt className="eyebrow text-gold-600">Accepted methods</dt>
                    <dd className="text-base font-semibold text-teal-900">{method.type}</dd>
                  </div>
                  <div className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-4">
                    <dt className="eyebrow text-gold-600">Mobile money</dt>
                    <dd className="text-base font-semibold text-teal-900">
                      <a
                        href={`tel:${site.donationHelpContact.replaceAll(" ", "")}`}
                        className="focus-ring link-underline tabular"
                      >
                        {method.provider.replace(/^mobile money:\s*/i, "")}
                      </a>
                    </dd>
                  </div>
                  <div className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-4">
                    <dt className="eyebrow text-gold-600">Account name</dt>
                    <dd className="text-base font-semibold text-teal-900">{method.accountName}</dd>
                  </div>
                  <div className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-4">
                    <dt className="eyebrow text-gold-600">Bank account</dt>
                    <dd className="tabular select-all break-words text-base font-semibold tracking-wide text-teal-900">
                      {method.accountNumber.replace(/^bank account:\s*/i, "")}
                    </dd>
                  </div>
                  <div className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-4">
                    <dt className="eyebrow text-gold-600">Reference</dt>
                    <dd className="text-base font-semibold text-teal-900">{method.instructions}</dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonClasses({ variant: "primary" })}
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    Confirm on WhatsApp
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  <ButtonLink href="/contact" variant="secondary">
                    Contact before donating
                  </ButtonLink>
                </div>
              </div>
            ))}

            <div className="grid gap-6">
              <div className="grain relative overflow-hidden rounded-lg bg-teal-900 p-7 text-white sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
                />
                <ShieldCheck className="relative z-10 text-gold-400" size={28} aria-hidden="true" />
                <h3 className="relative z-10 mt-4 font-serif text-heading font-black">Transparency promise</h3>
                <p className="relative z-10 mt-4 leading-7 text-white/85">{site.transparencyPromise}</p>
              </div>
              <div className="card p-7 sm:p-8">
                <h3 className="font-serif text-subheading font-black text-teal-900">Questions about giving?</h3>
                <p className="mt-3 leading-7 text-muted">
                  Reach the coordination team before or after you send a gift. Every contribution is documented
                  and reported back to supporters.
                </p>
                <ul className="mt-6 grid gap-2 text-sm font-bold text-teal-900">
                  <li>
                    <a
                      href={`tel:${site.phone.replaceAll(" ", "")}`}
                      className="focus-ring group flex min-h-12 items-center gap-3 rounded-md px-3 -mx-3 transition hover:bg-mist hover:text-teal-700"
                    >
                      <Phone size={18} className="shrink-0 text-teal-700" aria-hidden="true" />
                      <span className="tabular">{site.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.emails[0]}`}
                      className="focus-ring group flex min-h-12 items-center gap-3 break-all rounded-md px-3 -mx-3 transition hover:bg-mist hover:text-teal-700"
                    >
                      <Mail size={18} className="shrink-0 text-teal-700" aria-hidden="true" />
                      {site.emails[0]}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
