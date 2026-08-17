import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  /** Short supporting facts rendered under the call to action. */
  meta?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  text,
  ctaHref,
  ctaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  meta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,185,66,0.22),rgba(244,185,66,0)_55%)]"
      />
      <div className="section-shell relative section-pad">
        <div className="max-w-4xl">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-gold-400 sm:text-sm">
            <span aria-hidden="true" className="h-px w-6 shrink-0 bg-current" />
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-title font-black">{title}</h1>
          <p className="mt-5 max-w-measure text-lead text-white/85">{text}</p>
          {ctaHref && ctaLabel ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={ctaHref} variant="gold" size="lg">
                {ctaLabel}
              </ButtonLink>
              {secondaryCtaHref && secondaryCtaLabel ? (
                <ButtonLink href={secondaryCtaHref} variant="outlineLight" size="lg">
                  {secondaryCtaLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
          {meta ? <div className="mt-8">{meta}</div> : null}
        </div>
      </div>
    </section>
  );
}
