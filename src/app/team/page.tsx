import { CtaBand } from "@/components/CtaBand";
import { LoadingImage } from "@/components/LoadingImage";
import { MotionSection } from "@/components/MotionSection";
import { revealItem } from "@/components/reveal";
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

      <MotionSection labelledBy="team-title" className="section-pad">
        <div className="section-shell">
          <SectionHeading
            id="team-title"
            eyebrow="Who leads the work"
            title="The people accountable for every program."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <li
                key={member.name}
                {...revealItem(index)}
                className="group card card-interactive card-rule flex flex-col overflow-hidden"
              >
                {member.photo ? (
                  <div className="media-frame h-72 sm:h-80">
                    <LoadingImage
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="media-zoom object-cover"
                    />
                  </div>
                ) : (
                  /* No portrait on file: a monogram plate rather than a stock
                     silhouette, so the card still reads as a person. */
                  <div
                    aria-hidden="true"
                    className={`grid h-72 place-items-center sm:h-80 ${
                      member.character === "male"
                        ? "bg-gradient-to-br from-teal-800 to-teal-900"
                        : "bg-gradient-to-br from-gold-100 to-mist"
                    }`}
                  >
                    <span
                      className={`grid h-28 w-28 place-items-center rounded-full font-serif text-4xl font-black ring-4 transition duration-300 group-hover:scale-105 ${
                        member.character === "male"
                          ? "bg-teal-900/40 text-gold-100 ring-white/25"
                          : "bg-white text-teal-800 ring-teal-900/10"
                      }`}
                    >
                      {initials(member.name)}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-serif text-subheading font-black text-teal-900">{member.name}</h3>
                  <p className="eyebrow mt-2.5 text-gold-600">{member.role}</p>
                  <div aria-hidden="true" className="mt-5 h-px w-10 bg-teal-900/15" />
                  <p className="mt-5 leading-7 text-muted">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="card-sunken mt-12 p-7 sm:p-9">
            <h2 className="font-serif text-heading font-black text-teal-900">Join the work</h2>
            <p className="mt-4 max-w-measure leading-8 text-muted">
              Fountain Bridge welcomes field volunteers, health educators, fundraising support, media volunteers,
              mentors, school partners, health facility partners, corporate sponsors, grant partners, and technical
              supporters.
            </p>
          </div>
        </div>
      </MotionSection>

      <CtaBand
        title="Bring your skills to a community program."
        description="Tell us what you can offer and the coordination team will match it to an active need."
      />
    </>
  );
}
