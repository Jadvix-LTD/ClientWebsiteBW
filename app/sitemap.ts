import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.85, freq: "monthly" as const })),
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/industries", priority: 0.7, freq: "yearly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
    { path: "/careers", priority: 0.4, freq: "monthly" },
    { path: "/privacy-policy", priority: 0.2, freq: "yearly" },
    { path: "/cookie-policy", priority: 0.2, freq: "yearly" },
  ];
  return pages.map((p) => ({ url: absoluteUrl(p.path), lastModified: now, changeFrequency: p.freq, priority: p.priority }));
}
