"use client";

import { useEffect } from "react";
import { facebook } from "@/data/site";

export function FacebookFollow() {
  useEffect(() => {
    const timer = window.setTimeout(() => window.FB?.XFBML?.parse(), 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-8">
      <div
        className="fb-follow"
        data-href={facebook.pageUrl}
        data-layout="button_count"
        data-size="large"
      />
    </div>
  );
}
