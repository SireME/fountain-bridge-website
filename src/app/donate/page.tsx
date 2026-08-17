import { HandCoins, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { ButtonLink, buttonClasses } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { donationTiers, paymentMethods, site, whatsappUrl } from "@/data/site";

export const metadata = {
  title: "Donate",
  description: "Support Fountain Bridge programs with transparent giving.",
  alternates: { canonical: "/donate" },
};

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
          <p className="flex items-start gap-3 rounded-lg border border-white/20 bg-white/10 p-4 text-sm leading-6 text-white/90">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
            {site.transparencyPromise}
          </p>
        }
      />

      <section aria-labelledby="options-title" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            id="options-title"
            eyebrow="Giving options"
            title="Three ways to give, and what each one covers."
            description="Each option describes exactly what the contribution covers, so you know what your gift pays for before you send it."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {donationTiers.map((tier) => (
              <li key={tier.tier} className="flex flex-col rounded-lg bg-white p-7 shadow-card">
                <HandCoins className="text-teal-700" size={32} aria-hidden="true" />
                <h3 className="mt-5 font-serif text-subheading font-black text-teal-900">{tier.tier}</h3>
                <p className="mt-3 text-2xl font-black text-gold-600">{tier.amount}</p>
                <p className="mt-4 flex-1 leading-7 text-muted">{tier.description}</p>
                <ButtonLink href="#how-to-give" variant="secondary" className="mt-6">
                  Give this way
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="how-to-give" aria-labelledby="how-title" className="bg-white section-pad">
        <div className="section-shell">
          <SectionHeading
            id="how-title"
            eyebrow="How to give"
            title="Three steps from decision to confirmation."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {givingSteps.map((step, index) => (
              <li key={step.title} className="rounded-lg bg-mist p-6">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-md bg-teal-900 font-serif text-lg font-black text-gold-400"
                >
                  {index + 1}
                </span>
                <h3 className="mt-5 font-serif text-subheading font-black text-teal-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-muted">{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {paymentMethods.map((method) => (
              <div key={method.accountNumber} className="rounded-lg border border-teal-900/10 bg-linen p-7">
                <h3 className="font-serif text-heading font-black text-teal-900">Coordination details</h3>
                <dl className="mt-6 grid gap-5 text-sm">
                  <div>
                    <dt className="font-black uppercase tracking-[0.12em] text-gold-600">Accepted methods</dt>
                    <dd className="mt-1 text-base font-semibold text-teal-900">{method.type}</dd>
                  </div>
                  <div>
                    <dt className="font-black uppercase tracking-[0.12em] text-gold-600">Mobile money</dt>
                    <dd className="mt-1 text-base font-semibold text-teal-900">
                      <a
                        href={`tel:${site.donationHelpContact.replaceAll(" ", "")}`}
                        className="focus-ring rounded-md underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-teal-700"
                      >
                        {method.provider.replace(/^mobile money:\s*/i, "")}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-black uppercase tracking-[0.12em] text-gold-600">Account name</dt>
                    <dd className="mt-1 text-base font-semibold text-teal-900">{method.accountName}</dd>
                  </div>
                  <div>
                    <dt className="font-black uppercase tracking-[0.12em] text-gold-600">Bank account</dt>
                    <dd className="mt-1 select-all text-base font-semibold tracking-wide text-teal-900">
                      {method.accountNumber.replace(/^bank account:\s*/i, "")}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-black uppercase tracking-[0.12em] text-gold-600">Reference</dt>
                    <dd className="mt-1 text-base font-semibold text-teal-900">{method.instructions}</dd>
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
              <div className="rounded-lg bg-teal-900 p-7 text-white">
                <ShieldCheck className="text-gold-400" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-heading font-black">Transparency promise</h3>
                <p className="mt-4 leading-7 text-white/85">{site.transparencyPromise}</p>
              </div>
              <div className="rounded-lg bg-white p-7 shadow-card">
                <h3 className="font-serif text-subheading font-black text-teal-900">Questions about giving?</h3>
                <p className="mt-3 leading-7 text-muted">
                  Reach the coordination team before or after you send a gift. Every contribution is documented
                  and reported back to supporters.
                </p>
                <ul className="mt-5 grid gap-3 text-sm font-bold text-teal-900">
                  <li>
                    <a
                      href={`tel:${site.phone.replaceAll(" ", "")}`}
                      className="focus-ring flex min-h-11 items-center gap-3 rounded-md transition hover:text-teal-700"
                    >
                      <Phone size={18} className="shrink-0 text-teal-700" aria-hidden="true" />
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.emails[0]}`}
                      className="focus-ring flex min-h-11 items-center gap-3 break-all rounded-md transition hover:text-teal-700"
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
      </section>
    </>
  );
}
