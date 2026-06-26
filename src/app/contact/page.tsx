import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { MapWidget } from "@/components/MapWidget";
import { PageHero } from "@/components/PageHero";
import { facebook, site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact Fountain Bridge for volunteering, donations, partnerships, referrals, and media inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach Fountain Bridge."
        text="Contact the team for volunteering, donation support, partnership inquiries, media requests, and beneficiary referrals."
      />
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ContactCard icon={<MapPin />} title="Office" text={site.location} />
            <ContactCard icon={<Phone />} title="Phone" text={site.phone} href={`tel:${site.phone.replaceAll(" ", "")}`} />
            {site.emails.map((email) => (
              <ContactCard key={email} icon={<Mail />} title="Email" text={email} href={`mailto:${email}`} />
            ))}
            <ContactCard icon={<Share2 />} title="Facebook" text={`facebook.com/${facebook.handle}`} href={facebook.pageUrl} />
            <div className="rounded-lg bg-mist p-5">
              <p className="font-bold text-teal-900">Office hours</p>
              <p className="mt-2 text-sm leading-6 text-muted">{site.officeHours}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{site.responseTime}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="bg-mist py-16">
        <div className="section-shell">
          <MapWidget />
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon, title, text, href }: { icon: React.ReactNode; title: string; text: string; href?: string }) {
  const content = (
    <div className="rounded-lg bg-white p-5 shadow-soft">
      <div className="flex gap-4">
        <span className="text-teal-700">{icon}</span>
        <div>
          <p className="font-bold text-teal-900">{title}</p>
          <p className="mt-1 text-sm text-muted">{text}</p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="focus-ring block rounded-lg">
      {content}
    </a>
  ) : content;
}
