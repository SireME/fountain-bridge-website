import type { CSSProperties } from "react";

/**
 * Props that opt an element into `MotionSection`'s staggered entrance.
 *
 * This lives outside `MotionSection` on purpose: that file is a client module,
 * and a plain function exported from one becomes a client reference proxy that
 * a server component cannot call.
 *
 * The delay is capped so a long grid (the gallery runs to a dozen cards) never
 * leaves the last item waiting a full second after the first.
 */
export function revealItem(index: number, step = 1) {
  return {
    "data-reveal-item": "",
    style: { "--reveal-i": Math.min(index * step, 8) } as CSSProperties,
  };
}
