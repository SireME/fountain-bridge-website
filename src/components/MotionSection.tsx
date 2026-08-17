"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Ties the section landmark to its own heading for screen-reader navigation. */
  labelledBy?: string;
};

/**
 * Reveals a section the first time it scrolls into view.
 *
 * This is a plain IntersectionObserver rather than an animation library: the
 * homepage renders eight of these, and a CSS transition keeps the same effect
 * without shipping a motion runtime to a mobile-first audience. The global
 * reduced-motion rule in `globals.css` collapses the transition, and the
 * `data-reveal` hook lets the no-JS stylesheet in the root layout reveal
 * everything unconditionally.
 */
export function MotionSection({ children, className = "", id, labelledBy }: MotionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || revealed) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={labelledBy}
      data-reveal=""
      className={`transition-[opacity,transform] duration-500 ease-out ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 motion-reduce:translate-y-0"
      } ${className}`.trim()}
    >
      {children}
    </section>
  );
}
