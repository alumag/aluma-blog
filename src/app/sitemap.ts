import { getPost, getPostsSitemap } from "@/lib/sanity.queries";
import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { Locale } from "@/core/locales.types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostsSitemap("craft");
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
      lastModified: posts[0]?._updatedAt,
      changeFrequency: "weekly",
    },
  ];
}
