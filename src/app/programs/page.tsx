import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { impactAreas, programs, projects } from "@/data/site";

export const metadata = {
  title: "Programs",
  description: "Fountain Bridge programs in health outreach, education support, women and youth empowerment, and elderly inclusion.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs and projects"
        title="Direct support, prevention, education, and community capacity."
        text="Programs combine health prevention, health management, education, inclusion, partnerships, and field-based support."
        ctaHref="/donate"
        ctaLabel="Support a program"
      />
      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <article key={program.title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-64">
                  <Image src={program.image} alt="" fill className="object-cover" />
                </div>
                <div className="p-7">
                  <Icon className="mb-4 text-teal-700" size={32} />
                  <h2 className="font-serif text-3xl font-black text-teal-900">{program.title}</h2>
                  <p className="mt-4 leading-7 text-muted">{program.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-mist py-16">
        <div className="section-shell">
          <h2 className="font-serif text-4xl font-black text-teal-900">Impact focus areas</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {impactAreas.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-56">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-black text-teal-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell">
          <h2 className="font-serif text-4xl font-black text-teal-900">Featured projects</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-64">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-7">
                  <p className="text-sm font-black uppercase tracking-wide text-gold-600">{project.status}</p>
                  <h3 className="mt-2 font-serif text-3xl font-black text-teal-900">{project.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{project.summary}</p>
                  <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                    <div><dt className="font-bold text-teal-900">Year</dt><dd className="text-muted">{project.year}</dd></div>
                    <div><dt className="font-bold text-teal-900">Location</dt><dd className="text-muted">{project.location}</dd></div>
                    <div><dt className="font-bold text-teal-900">Target</dt><dd className="text-muted">{project.target}</dd></div>
                    <div><dt className="font-bold text-teal-900">Progress</dt><dd className="text-muted">{project.progress}</dd></div>
                  </dl>
                  <ul className="mt-5 grid gap-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-md bg-mist px-4 py-2 text-sm font-semibold text-teal-900">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <ButtonLink href="/contact" variant="secondary" className="mt-8">
            Partner with us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
