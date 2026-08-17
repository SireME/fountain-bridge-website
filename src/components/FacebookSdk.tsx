"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    FB?: { XFBML?: { parse: () => void } };
  }
}

const POLL_INTERVAL_MS = 250;
const MAX_ATTEMPTS = 40;

/**
 * Renders the Facebook SDK next to the widget that needs it, instead of on
 * every page. `next/script` de-duplicates by `id`, so several widgets on one
 * page still share a single request.
 */
export function FacebookSdk() {
  return (
    <Script
      id="facebook-sdk"
      src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  );
}

/**
 * Parses XFBML markup as soon as the SDK is available. Polling replaces the
 * previous fixed delay, which silently failed whenever the script took longer
 * than expected on a slow connection.
 */
export function useFacebookXfbml() {
  useEffect(() => {
    let attempts = 0;

    const parse = () => {
      if (window.FB?.XFBML?.parse) {
        window.FB.XFBML.parse();
        return true;
      }
      return false;
    };

    if (parse()) return;

    const timer = window.setInterval(() => {
      attempts += 1;
      if (parse() || attempts >= MAX_ATTEMPTS) {
        window.clearInterval(timer);
      }
    }, POLL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);
}
