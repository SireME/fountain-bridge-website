import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { MapWidget } from "@/components/MapWidget";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { site, whatsappUrl } from "@/data/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact Fountain Bridge for volunteering, donations, partnerships, referrals, and media inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const telHref = `tel:${site.phone.replaceAll(" ", "")}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach Fountain Bridge."
        text="Contact the team for volunteering, donation support, partnership inquiries, media requests, and beneficiary referrals."
      />

      <section aria-labelledby="reach-title" className="section-pad">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <h2 id="reach-title" className="font-serif text-heading font-black text-teal-900">
              Ways to reach us
            </h2>
            <p className="mt-3 leading-7 text-muted">{site.responseTime}</p>

            <ul className="mt-7 space-y-4">
              <ContactCard icon={<MapPin aria-hidden="true" />} title="Office">
                <p className="mt-1 text-sm leading-6 text-muted">{site.location}</p>
              </ContactCard>

              <ContactCard icon={<Phone aria-hidden="true" />} title="Phone">
                <p className="mt-1">
                  <a href={telHref} className="focus-ring rounded-md text-sm font-bold text-teal-800 hover:underline">
                    {site.phone}
                  </a>
                </p>
              </ContactCard>

              <ContactCard icon={<MessageCircle aria-hidden="true" />} title="WhatsApp">
                <p className="mt-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-md text-sm font-bold text-teal-800 hover:underline"
                  >
                    Start a WhatsApp chat
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </p>
              </ContactCard>

              <ContactCard icon={<Mail aria-hidden="true" />} title="Email">
                <ul className="mt-1 space-y-1">
                  {site.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="focus-ring break-all rounded-md text-sm font-bold text-teal-800 hover:underline"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </ContactCard>

              <ContactCard icon={<Clock aria-hidden="true" />} title="Office hours">
                <p className="mt-1 text-sm leading-6 text-muted">{site.officeHours}</p>
              </ContactCard>
            </ul>

            <div className="mt-6 rounded-lg bg-mist p-5">
              <h3 className="font-bold text-teal-900">Follow the daily work</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Field photos, outreach albums, and event notices are posted on Facebook first.
              </p>
              <SocialLinks tone="dark" showLabels className="mt-4" />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section aria-labelledby="map-title" className="bg-mist section-pad">
        <div className="section-shell">
          <SectionHeading
            id="map-title"
            eyebrow="Visit"
            title="Our base in Buea, Cameroon."
            description={site.whereWeWork}
          />
          <div className="mt-10">
            <MapWidget />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="rounded-lg bg-white p-5 shadow-card">
      <div className="flex gap-4">
        <span className="shrink-0 text-teal-700">{icon}</span>
        <div className="min-w-0">
          <h3 className="font-bold text-teal-900">{title}</h3>
          {children}
        </div>
      </div>
    </li>
  );
}
