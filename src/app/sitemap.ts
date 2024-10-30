import { getPost } from "@/lib/sanity.queries";
import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { Locale } from "@/core/locales.types";
import { client } from "@/sanity/lib/client";
import { getCraftPostsLastModifiedQuery } from "@/sanity/lib/queries";
import { getLocale } from "@/core/getLocale";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const craftLastUpdated = await client.fetch(getCraftPostsLastModifiedQuery, {
    language: getLocale(),
  });
  const index = await getPost("aluma-gelbard");
  const subdomain = headers().get("host")?.split(".")[0] as Locale;
  const baseUrl =
    subdomain === "he"
      ? "https://he.alumagelbard.com"
      : "https://alumagelbard.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: index._updatedAt,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/craft`,
      ...(craftLastUpdated === null ? {} : { lastModified: craftLastUpdated }),
      changeFrequency: "weekly",
    },
  ];
}
