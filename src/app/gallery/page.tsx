import { buttonClasses } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { LoadingImage } from "@/components/LoadingImage";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { facebook, gallery, site } from "@/data/site";

export const metadata = {
  title: "Impact gallery",
  description: "Photo gallery for Fountain Bridge programs and community work.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact gallery"
        title="Photos that reflect care, education, and community action."
        text="A visual overview of the health, education, empowerment, and community inclusion work Fountain Bridge represents."
        ctaHref="/programs"
        ctaLabel="Read about the programs"
        secondaryCtaHref="/donate"
        secondaryCtaLabel="Support this work"
      />

      <section aria-labelledby="record-title" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            id="record-title"
            eyebrow="Field record"
            title="Documented outreach, program by program."
            description="Every photo below comes from Fountain Bridge program activity, outreach visits, and community support work."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <li key={item.title}>
                <figure className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-card ring-1 ring-teal-900/5">
                  <div className="relative h-64 overflow-hidden sm:h-72">
                    <LoadingImage
                      src={item.image}
                      alt={item.title}
                      fill
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <figcaption className="flex-1 p-5">
                    <h3 className="font-serif text-lg font-black leading-7 text-teal-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.caption}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-lg bg-teal-900 p-7 text-white sm:p-8">
            <h2 className="font-serif text-heading font-black">More photos are posted as we go</h2>
            <p className="mt-4 max-w-measure leading-8 text-white/85">
              Visit the public Facebook page for field photos, outreach albums, videos, and day-to-day program
              activity from {site.name}.
            </p>
            <a
              href={facebook.pageUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonClasses({ variant: "light", className: "mt-6" })}
            >
              View Facebook photos
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
