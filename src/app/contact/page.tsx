import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { MapWidget } from "@/components/MapWidget";
import { MotionSection } from "@/components/MotionSection";
import { revealItem } from "@/components/reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { pageMetadata, site, whatsappUrl } from "@/data/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Fountain Bridge for volunteering, donations, partnerships, referrals, and media inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  const telHref = `tel:${site.phone.replaceAll(" ", "")}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach Fountain Bridge."
        text="Contact the team for volunteering, donation support, partnership inquiries, media requests, and beneficiary referrals."
      />

      <MotionSection labelledBy="reach-title" className="section-pad">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="eyebrow text-gold-600">
              <span aria-hidden="true" className="eyebrow-rule" />
              Direct lines
            </p>
            <h2 id="reach-title" className="mt-4 font-serif text-heading font-black text-teal-900">
              Ways to reach us
            </h2>
            <p className="mt-4 leading-7 text-muted">{site.responseTime}</p>

            <ul className="mt-8 space-y-4">
              <ContactCard icon={<MapPin size={22} aria-hidden="true" />} title="Office" index={0}>
                <p className="mt-1.5 text-sm leading-6 text-muted">{site.location}</p>
              </ContactCard>

              <ContactCard icon={<Phone size={22} aria-hidden="true" />} title="Phone" index={1}>
                <p className="mt-1.5">
                  <a href={telHref} className="focus-ring link-underline tabular text-sm font-bold text-teal-800">
                    {site.phone}
                  </a>
                </p>
              </ContactCard>

              <ContactCard icon={<MessageCircle size={22} aria-hidden="true" />} title="WhatsApp" index={2}>
                <p className="mt-1.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring link-underline text-sm font-bold text-teal-800"
                  >
                    Start a WhatsApp chat
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </p>
              </ContactCard>

              <ContactCard icon={<Mail size={22} aria-hidden="true" />} title="Email" index={3}>
                <ul className="mt-1.5 space-y-1.5">
                  {site.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="focus-ring link-underline break-all text-sm font-bold text-teal-800"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </ContactCard>

              <ContactCard icon={<Clock size={22} aria-hidden="true" />} title="Office hours" index={4}>
                <p className="mt-1.5 text-sm leading-6 text-muted">{site.officeHours}</p>
              </ContactCard>
            </ul>

            <div className="card-sunken mt-8 p-6">
              <h3 className="font-serif text-lg font-black text-teal-900">Follow the daily work</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Field photos, outreach albums, and event notices are posted on Facebook first.
              </p>
              <SocialLinks tone="dark" showLabels className="mt-5" />
            </div>
          </div>

          <ContactForm />
        </div>
      </MotionSection>

      <MotionSection labelledBy="map-title" className="bg-mist section-pad">
        <div className="section-shell">
          <SectionHeading
            id="map-title"
            eyebrow="Visit"
            title="Our base in Buea, Cameroon."
            description={site.whereWeWork}
          />
          <div className="mt-12">
            <MapWidget />
          </div>
        </div>
      </MotionSection>
    </>
  );
}

function ContactCard({
  icon,
  title,
  index,
  children,
}: {
  icon: ReactNode;
  title: string;
  index: number;
  children: ReactNode;
}) {
  return (
    <li
      {...revealItem(index)}
      className="group card card-interactive card-rule p-5 sm:p-6"
    >
      <div className="flex gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-teal-50 text-teal-700 ring-1 ring-teal-900/5 transition duration-300 group-hover:bg-teal-900 group-hover:text-gold-400">
          {icon}
        </span>
        <div className="min-w-0">
          <h3 className="font-bold text-teal-900">{title}</h3>
          {children}
        </div>
      </div>
    </li>
  );
}
