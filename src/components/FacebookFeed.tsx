"use client";

import dynamic from "next/dynamic";

/**
 * The Facebook widget is client-only. The placeholder reserves the same height
 * as the loaded timeline so the surrounding page does not shift.
 */
export const FacebookFeed = dynamic(
  () => import("@/components/FacebookEmbed").then((mod) => mod.FacebookEmbed),
  {
    ssr: false,
    loading: () => (
      <div className="card p-6 sm:p-7" style={{ minHeight: 480 }}>
        <p className="eyebrow text-gold-600">
          <span aria-hidden="true" className="eyebrow-rule" />
          Facebook
        </p>
        <p className="mt-3 font-serif text-lg font-black text-teal-900">Stay connected</p>
        <p className="mt-2 text-sm leading-6 text-muted" role="status">
          Loading the Facebook timeline…
        </p>
        <div aria-hidden="true" className="mt-6 space-y-3">
          <div className="h-4 w-2/3 animate-pulse rounded-md bg-mist" />
          <div className="h-4 w-full animate-pulse rounded-md bg-mist" />
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-mist" />
          <div className="h-44 w-full animate-pulse rounded-md bg-mist" />
        </div>
      </div>
    ),
  }
);
