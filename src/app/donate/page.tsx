import { HandCoins, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { donationTiers, paymentMethods, site } from "@/data/site";

export const metadata = {
  title: "Donate",
  description: "Support Fountain Bridge programs with transparent giving.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Fuel health outreach, education support, and community care."
        text="Donations help fund school materials, outreach logistics, emergency support, training sessions, and community events."
      />
      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {donationTiers.map((tier) => (
            <article key={tier.tier} className="rounded-lg bg-white p-7 shadow-soft">
              <HandCoins className="mb-4 text-teal-700" size={34} />
              <h2 className="font-serif text-2xl font-black text-teal-900">{tier.tier}</h2>
              <p className="mt-3 text-3xl font-black text-gold-600">{tier.amount}</p>
              <p className="mt-4 leading-7 text-muted">{tier.description}</p>
            </article>
          ))}
        </div>
        <div className="section-shell mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg bg-teal-900 p-7 text-white">
            <ShieldCheck className="mb-4 text-gold-400" />
            <h2 className="font-serif text-3xl font-black">Transparency promise</h2>
            <p className="mt-4 leading-7 text-white/75">
              {site.transparencyPromise}
            </p>
          </div>
          <div className="rounded-lg bg-white p-7 shadow-soft">
            <h2 className="font-serif text-3xl font-black text-teal-900">Donation coordination</h2>
            <div className="mt-4 grid gap-3">
              {paymentMethods.map((method) => (
                <div key={method.accountNumber} className="rounded-md bg-mist p-4">
                  <p className="text-sm font-black uppercase tracking-wide text-gold-600">{method.type}</p>
                  <p className="mt-2 font-bold text-teal-900">{method.provider}</p>
                  <p className="mt-1 text-sm text-muted">{method.accountName}</p>
                  <p className="mt-1 text-sm text-muted">{method.accountNumber}</p>
                  <p className="mt-2 text-sm font-semibold text-teal-900">{method.instructions}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-bold text-teal-900">For donation coordination, contact {site.emails[0]} or {site.phone}.</p>
            <ButtonLink href="/contact" className="mt-5">
              Contact before donating
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
