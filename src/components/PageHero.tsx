import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({ eyebrow, title, text, ctaHref, ctaLabel }: PageHeroProps) {
  return (
    <section className="bg-teal-900 py-16 text-white">
      <div className="section-shell max-w-4xl">
        <p className="mb-4 text-sm font-black uppercase tracking-wide text-gold-400">{eyebrow}</p>
        <h1 className="font-serif text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{text}</p>
        {ctaHref && ctaLabel ? (
          <ButtonLink href={ctaHref} variant="light" className="mt-7">
            {ctaLabel}
          </ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
