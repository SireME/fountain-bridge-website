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
          600: "#12805C",
          700: "#0E6D50",
          900: "#073B32",
        },
        blue: {
          600: "#2358D6",
          900: "#15306E",
        },
        gold: {
          100: "#FFF4D1",
          400: "#F4B942",
          600: "#B97916",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 51, 0.12)",
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
