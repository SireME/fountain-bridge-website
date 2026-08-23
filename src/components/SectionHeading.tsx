import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional trailing call to action, aligned with the heading block on wide screens. */
  action?: ReactNode;
  as?: "h1" | "h2" | "h3";
  tone?: "dark" | "light";
  align?: "start" | "center";
  id?: string;
  className?: string;
};

/**
 * One heading treatment for every section so the page hierarchy stays legible:
 * eyebrow (context) -> heading (claim) -> description (detail).
 *
 * The eyebrow carries a short rule and a gold tick before the label. That mark
 * repeats on the hero, the page heroes, and the CTA band, and it is the cue
 * that tells a reader "a new part of the argument starts here".
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  as: Heading = "h2",
  tone = "dark",
  align = "start",
  id,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div
      className={`flex flex-col gap-6 ${
        action ? "sm:flex-row sm:items-end sm:justify-between sm:gap-8" : ""
      } ${centered ? "items-center text-center" : ""} ${className}`.trim()}
    >
      <div className={centered ? "max-w-measure" : "max-w-2xl"}>
        {eyebrow ? (
          <p
            className={`eyebrow ${centered ? "justify-center" : ""} ${
              light ? "text-gold-400" : "text-gold-600"
            }`}
          >
            <span aria-hidden="true" className="eyebrow-rule" />
            {eyebrow}
          </p>
        ) : null}
        <Heading
          id={id}
          className={`mt-4 font-serif text-heading font-black ${light ? "text-white" : "text-teal-900"}`}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={`mt-5 max-w-measure text-lead ${light ? "text-white/85" : "text-muted"}`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
