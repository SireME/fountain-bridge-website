import { ArrowRight } from "lucide-react";
import { buttonClasses } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { LoadingImage } from "@/components/LoadingImage";
import { MotionSection } from "@/components/MotionSection";
import { revealItem } from "@/components/reveal";
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

      <MotionSection labelledBy="record-title" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            id="record-title"
            eyebrow="Field record"
            title="Documented outreach, program by program."
            description="Every photo below comes from Fountain Bridge program activity, outreach visits, and community support work."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <li key={item.title} {...revealItem(index)}>
                <figure className="group card card-interactive card-rule flex h-full flex-col overflow-hidden">
                  <div className="media-frame h-64 sm:h-72">
                    <LoadingImage
                      src={item.image}
                      alt={item.title}
                      fill
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="media-zoom object-cover"
                    />
                    {/* Plate number, the way a printed photo essay captions its
                        images. Decorative: the caption below carries the text. */}
                    <span
                      aria-hidden="true"
                      className="section-index absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-md bg-teal-900/85 text-gold-400 backdrop-blur"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <figcaption className="flex-1 p-5 sm:p-6">
                    <h3 className="font-serif text-lg font-black leading-7 text-teal-900">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-muted">{item.caption}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="grain relative mt-12 overflow-hidden rounded-lg bg-teal-900 p-7 text-white sm:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
            />
            <h2 className="relative z-10 font-serif text-heading font-black">
              More photos are posted as we go
            </h2>
            <p className="relative z-10 mt-4 max-w-measure leading-8 text-white/85">
              Visit the public Facebook page for field photos, outreach albums, videos, and day-to-day program
              activity from {site.name}.
            </p>
            <a
              href={facebook.pageUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonClasses({ variant: "light", className: "relative z-10 mt-7" })}
            >
              View Facebook photos
              <ArrowRight size={18} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </MotionSection>

      <CtaBand />
    </>
  );
}
