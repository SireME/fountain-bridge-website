import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { waysToHelp } from "@/data/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

/**
 * The standing "what can I do next" band. Repeating the same three routes at the
 * end of every page means a visitor never has to hunt for a way to help.
 */
export function CtaBand({
  eyebrow = "Get involved",
  title = "Three ways to move this work forward.",
  description = "Give, volunteer, or partner with us. Every request reaches the coordination team directly.",
}: CtaBandProps) {
  return (
    <section
      aria-labelledby="get-involved"
      className="grain relative section-pad bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
      />
      <div className="section-shell relative z-10">
        <SectionHeading
          id="get-involved"
          tone="light"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {waysToHelp.map((way, index) => {
            const Icon = way.icon;
            return (
              <li
                key={way.title}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-gold-400/70 hover:bg-white/[0.11] focus-within:-translate-y-1 focus-within:border-gold-400/70 focus-within:bg-white/[0.11] sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-gold-400/15 text-gold-400 ring-1 ring-gold-400/30 transition duration-300 group-hover:bg-gold-400 group-hover:text-teal-900">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span aria-hidden="true" className="section-index text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-subheading font-black">{way.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/80">{way.description}</p>
                <Link
                  href={way.href}
                  className="focus-ring link-arrow mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-md text-sm font-bold text-gold-400 transition hover:text-gold-200"
                >
                  <span className="underline decoration-gold-400/45 decoration-2 underline-offset-4 group-hover:decoration-gold-200">
                    {way.action}
                  </span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
