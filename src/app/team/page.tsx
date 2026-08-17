import { CtaBand } from "@/components/CtaBand";
import { LoadingImage } from "@/components/LoadingImage";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { team } from "@/data/site";

export const metadata = {
  title: "Team",
  description: "Leadership and team profiles for Fountain Bridge.",
  alternates: { canonical: "/team" },
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Community experience with a public-health and service mindset."
        text="The leadership team combines community experience, professional commitment, and a shared focus on transparent service."
        ctaHref="/contact"
        ctaLabel="Contact the team"
      />

      <section aria-labelledby="team-title" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            id="team-title"
            eyebrow="Who leads the work"
            title="The people accountable for every program."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li
                key={member.name}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-card ring-1 ring-teal-900/5"
              >
                {member.photo ? (
                  <div className="relative h-72 sm:h-80">
                    <LoadingImage
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className={`grid h-72 place-items-center sm:h-80 ${
                      member.character === "male"
                        ? "bg-gradient-to-br from-teal-800 to-teal-900"
                        : "bg-gradient-to-br from-gold-100 to-mist"
                    }`}
                  >
                    <span
                      className={`grid h-28 w-28 place-items-center rounded-full font-serif text-4xl font-black ring-4 ${
                        member.character === "male"
                          ? "bg-teal-900/40 text-gold-100 ring-white/25"
                          : "bg-white text-teal-800 ring-teal-900/10"
                      }`}
                    >
                      {initials(member.name)}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-subheading font-black text-teal-900">{member.name}</h3>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-gold-600">
                    {member.role}
                  </p>
                  <p className="mt-4 leading-7 text-muted">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-lg bg-mist p-7 sm:p-8">
            <h2 className="font-serif text-heading font-black text-teal-900">Join the work</h2>
            <p className="mt-4 max-w-measure leading-8 text-muted">
              Fountain Bridge welcomes field volunteers, health educators, fundraising support, media volunteers,
              mentors, school partners, health facility partners, corporate sponsors, grant partners, and technical
              supporters.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Bring your skills to a community program."
        description="Tell us what you can offer and the coordination team will match it to an active need."
      />
    </>
  );
}
