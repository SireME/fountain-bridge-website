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

/**
 * The masthead every inner page opens with.
 *
 * Kept deliberately typographic — one deep teal field, a gold rule, and the
 * claim — so the page's own content is the first thing with an image on it.
 */
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
    <section className="grain relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,185,66,0.22),rgba(244,185,66,0)_55%)]"
      />
      {/* Faint oversized rule bleeding off the right edge: the masthead device
          that separates an inner page from the homepage. */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 hidden h-[140%] w-px -translate-y-1/2 rotate-12 bg-gradient-to-b from-transparent via-gold-400/25 to-transparent lg:block"
      />
      <div className="section-shell relative z-10 section-pad">
        <div className="max-w-4xl">
          <p className="eyebrow text-gold-400">
            <span aria-hidden="true" className="eyebrow-rule" />
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-title font-black">{title}</h1>
          <div aria-hidden="true" className="mt-7 h-1 w-16 rounded-full bg-gold-400" />
          <p className="mt-6 max-w-measure text-lead text-white/85">{text}</p>
          {ctaHref && ctaLabel ? (
            <div className="mt-9 flex flex-wrap gap-3">
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
          {meta ? <div className="mt-9">{meta}</div> : null}
        </div>
      </div>
      {/* Hairline hand-off into the page body. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
      />
    </section>
  );
}
