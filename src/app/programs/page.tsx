import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { LoadingImage } from "@/components/LoadingImage";
import { MotionSection } from "@/components/MotionSection";
import { revealItem } from "@/components/reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { impactAreas, pageMetadata, programs, projects } from "@/data/site";

export const metadata = pageMetadata({
  title: "Programs",
  description: "Fountain Bridge programs in health outreach, education support, women and youth empowerment, and elderly inclusion.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs and projects"
        title="Direct support, prevention, education, and community capacity."
        text="Programs combine health prevention, health management, education, inclusion, partnerships, and field-based support."
        ctaHref="/donate"
        ctaLabel="Support a program"
        secondaryCtaHref="/contact"
        secondaryCtaLabel="Partner with us"
      />

      <MotionSection labelledBy="core-title" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            id="core-title"
            eyebrow="Core programs"
            title="Four programs, one purpose."
            description="Every program starts from a need raised by families, schools, or health partners in the communities we serve."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <li
                  key={program.title}
                  {...revealItem(index)}
                  className="group card card-interactive card-rule flex flex-col overflow-hidden"
                >
                  <div className="media-frame h-56 sm:h-64">
                    <LoadingImage
                      src={program.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="media-zoom object-cover"
                    />
                    {/* Index numeral over the photo: the editorial device that
                        turns four cards into a numbered set. */}
                    <span
                      aria-hidden="true"
                      className="section-index absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-md bg-teal-900/85 text-gold-400 backdrop-blur"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-md bg-teal-50 text-teal-700 ring-1 ring-teal-900/5 transition duration-300 group-hover:bg-teal-900 group-hover:text-gold-400">
                      <Icon size={26} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-serif text-heading font-black text-teal-900">{program.title}</h3>
                    <p className="mt-4 leading-8 text-muted">{program.summary}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </MotionSection>

      <MotionSection labelledBy="focus-title" className="bg-mist section-pad">
        <div className="section-shell">
          <SectionHeading
            id="focus-title"
            eyebrow="Impact focus areas"
            title="What the work looks like on the ground."
            action={
              <ButtonLink href="/gallery" variant="secondary">
                Browse the gallery
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            }
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {impactAreas.map((item, index) => (
              <li
                key={item.title}
                {...revealItem(index)}
                className="group card card-interactive card-rule flex flex-col overflow-hidden"
              >
                <div className="media-frame h-52 sm:h-56">
                  <LoadingImage
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="media-zoom object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="font-serif text-subheading font-black text-teal-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection labelledBy="projects-title" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            id="projects-title"
            eyebrow="Featured projects"
            title="Campaigns you can fund right now."
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <li
                key={project.title}
                {...revealItem(index)}
                className="group card card-interactive card-rule flex flex-col overflow-hidden"
              >
                <div className="media-frame h-60 sm:h-72">
                  <LoadingImage
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="media-zoom object-cover"
                  />
                  <p className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-teal-900 shadow-card backdrop-blur">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                    {project.status}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-serif text-heading font-black text-teal-900">{project.title}</h3>
                  <p className="mt-4 leading-8 text-muted">{project.summary}</p>

                  {typeof project.progressPercent === "number" ? (
                    <div className="mt-7 rounded-lg bg-mist p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="eyebrow text-gold-600">
                          <span aria-hidden="true" className="eyebrow-rule" />
                          Progress
                        </p>
                        <p className="tabular text-sm font-bold text-teal-900">{project.progress}</p>
                      </div>
                      <div
                        role="progressbar"
                        aria-valuenow={project.progressPercent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`Funding progress for ${project.title}`}
                        className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white ring-1 ring-teal-900/10"
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-700 to-teal-600"
                          style={{ width: `${project.progressPercent}%` }}
                        />
                      </div>
                    </div>
                  ) : null}

                  <dl className="mt-7 grid gap-4 border-t border-teal-900/10 pt-7 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="eyebrow text-gold-600">Year</dt>
                      <dd className="tabular mt-2 font-semibold text-teal-900">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-gold-600">Location</dt>
                      <dd className="mt-2 font-semibold text-teal-900">{project.location}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-gold-600">Target</dt>
                      <dd className="mt-2 font-semibold text-teal-900">{project.target}</dd>
                    </div>
                  </dl>
                  <ul className="mt-7 grid gap-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 rounded-md bg-mist px-4 py-3 text-sm font-semibold text-teal-900"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/donate" className="mt-8 self-start">
                    Fund this project
                    <ArrowRight size={18} aria-hidden="true" />
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <CtaBand />
    </>
  );
}
