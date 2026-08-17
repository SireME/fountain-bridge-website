import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#5E6A78",
        linen: "#F8F5EF",
        mist: "#EEF7F4",
        teal: {
          50: "#E9F8F3",
          100: "#C9EFE4",
          200: "#A4E0CE",
          600: "#12805C",
          700: "#0E6D50",
          800: "#0A5642",
          900: "#073B32",
        },
        blue: {
          600: "#2358D6",
          900: "#15306E",
        },
        gold: {
          100: "#FFF4D1",
          200: "#FBE3A2",
          400: "#F4B942",
          // gold-600/700 are text-only tones, darkened so they clear WCAG AA
          // (4.5:1) on white, linen, and mist surfaces.
          600: "#96590C",
          700: "#7A4708",
        },
      },
      // Fluid display sizes keep long headlines readable on small phones
      // without a stack of breakpoint overrides.
      fontSize: {
        display: ["clamp(2.5rem, 7vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        title: ["clamp(2rem, 5vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        heading: ["clamp(1.75rem, 3.6vw, 2.5rem)", { lineHeight: "1.14", letterSpacing: "-0.01em" }],
        subheading: ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.25" }],
        lead: ["clamp(1.0625rem, 1.5vw, 1.25rem)", { lineHeight: "1.7" }],
      },
      maxWidth: {
        measure: "68ch",
      },
      borderRadius: {
        md: "0.5rem",
        lg: "0.875rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 51, 0.12)",
        card: "0 6px 20px rgba(23, 32, 51, 0.07)",
        lift: "0 22px 45px rgba(7, 59, 50, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-merriweather)", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};
export default config;
