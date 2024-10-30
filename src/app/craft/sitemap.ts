import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { Locale } from "@/core/locales.types";
import { client } from "@/sanity/lib/client";
import { getCraftSitemapQuery } from "@/sanity/lib/queries";
import { getLocale } from "@/core/getLocale";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const subdomain = headers().get("host")?.split(".")[0] as Locale;

  const baseUrl =
    subdomain === "he"
      ? "https://he.alumagelbard.com"
      : "https://alumagelbard.com";

  const data = await client.fetch(getCraftSitemapQuery, {
    language: getLocale(),
  });

  return data.map((post) => ({
    url: `${baseUrl}/${post.url}`,
    lastModified: post.lastModified,
  }));
}
