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

  return (
    <div
      className={`flex flex-col gap-5 ${
        action ? "sm:flex-row sm:items-end sm:justify-between" : ""
      } ${centered ? "items-center text-center" : ""} ${className}`.trim()}
    >
      <div className={centered ? "max-w-measure" : "max-w-2xl"}>
        {eyebrow ? (
          <p
            className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] sm:text-sm ${
              centered ? "justify-center" : ""
            } ${tone === "light" ? "text-gold-400" : "text-gold-600"}`}
          >
            <span aria-hidden="true" className="h-px w-6 shrink-0 bg-current" />
            {eyebrow}
          </p>
        ) : null}
        <Heading
          id={id}
          className={`mt-3 font-serif text-heading font-black ${
            tone === "light" ? "text-white" : "text-teal-900"
          }`}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={`mt-4 max-w-measure text-lead ${
              tone === "light" ? "text-white/85" : "text-muted"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
