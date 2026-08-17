import type { MetadataRoute } from "next";
import { navItems, siteUrl } from "@/data/site";

const priorities: Record<string, number> = {
  "/": 1,
  "/donate": 0.9,
  "/programs": 0.8,
  "/about": 0.8,
  "/contact": 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navItems.map((item): MetadataRoute.Sitemap[number] => ({
    url: `${siteUrl}${item.href}`,
    lastModified,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: priorities[item.href] ?? 0.7,
  }));
}
