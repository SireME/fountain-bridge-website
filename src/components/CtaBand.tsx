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
      className="relative section-pad bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
      />
      <div className="section-shell">
        <SectionHeading
          id="get-involved"
          tone="light"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {waysToHelp.map((way) => {
            const Icon = way.icon;
            return (
              <li
                key={way.title}
                className="flex flex-col rounded-lg border border-white/15 bg-white/5 p-6 transition hover:border-gold-400/60 hover:bg-white/10"
              >
                <Icon className="text-gold-400" size={30} aria-hidden="true" />
                <h3 className="mt-4 font-serif text-subheading font-black">{way.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/80">{way.description}</p>
                <Link
                  href={way.href}
                  className="focus-ring mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-md text-sm font-bold text-gold-400 transition hover:text-gold-200 hover:underline"
                >
                  {way.action}
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
