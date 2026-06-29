import { UserRound } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { LoadingImage } from "@/components/LoadingImage";
import { PageHero } from "@/components/PageHero";
import { team } from "@/data/site";

export const metadata = {
  title: "Team",
  description: "Leadership and team profiles for Fountain Bridge.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Community experience with a public-health and service mindset."
        text="The leadership team combines community experience, professional commitment, and a shared focus on transparent service."
      />
      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-lg bg-white shadow-soft">
              {member.photo ? (
                <div className="relative h-80">
                  <LoadingImage src={member.photo} alt={member.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              ) : (
                <div className={`grid h-80 place-items-center ${member.character === "male" ? "bg-teal-900" : "bg-gold-100"}`}>
                  <div className="relative h-44 w-44">
                    <div className={`absolute inset-x-5 top-0 mx-auto h-24 w-24 rounded-full ${member.character === "male" ? "bg-gold-100" : "bg-teal-100"}`} />
                    <div className={`absolute inset-x-0 bottom-0 h-28 rounded-t-[5rem] ${member.character === "male" ? "bg-gold-400" : "bg-teal-800"}`} />
                    <div className={`absolute left-1/2 top-10 grid h-20 w-20 -translate-x-1/2 place-items-center rounded-full ${member.character === "male" ? "bg-white text-teal-900" : "bg-white text-teal-800"}`}>
                      <UserRound size={46} strokeWidth={1.8} />
                    </div>
                  </div>
                </div>
              )}
              <div className="p-6">
                <h2 className="font-serif text-2xl font-black text-teal-900">{member.name}</h2>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-gold-600">{member.role}</p>
                <p className="mt-4 leading-7 text-muted">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-shell mt-10 rounded-lg bg-mist p-7">
          <h2 className="font-serif text-3xl font-black text-teal-900">Join the work</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            Fountain Bridge welcomes field volunteers, health educators, fundraising support, media volunteers, mentors, school partners, health facility partners, corporate sponsors, grant partners, and technical supporters.
          </p>
          <ButtonLink href="/contact" className="mt-5">
            Contact the team
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
