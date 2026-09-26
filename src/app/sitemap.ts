import type { MetadataRoute } from "next";

import { profile } from "@/data/profile";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${profile.siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.8,
  }));
}
