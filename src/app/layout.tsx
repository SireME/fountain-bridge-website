import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.summary,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ftnbridge.org"),
  icons: {
    icon: [
      { url: "/icon.jpg", type: "image/jpeg" },
      { url: site.logo, type: "image/jpeg" },
    ],
    apple: [{ url: "/apple-icon.jpg", type: "image/jpeg" }],
    shortcut: [{ url: "/icon.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: site.name,
    description: site.summary,
    url: "/",
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/fountain-bridge-preview.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.summary,
    images: ["/fountain-bridge-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <div id="fb-root" />
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
          strategy="afterInteractive"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
