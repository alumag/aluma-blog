import { headers } from "next/headers";
import { MetadataRoute } from 'next'
import { Locale } from "@/core/locales.types";

export default function robots(): MetadataRoute.Robots {
  const subdomain = headers().get("host")?.split('.')[0] as Locale;
  const baseUrl = subdomain === "he" ? "https://he.alumagelbard.com" : "https://alumagelbard.com";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: ['/', '/craft'].map(index => `${baseUrl}${index}/sitemap.xml`),
  }
}