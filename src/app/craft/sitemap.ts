import { getClient } from "@/lib/sanity.client";
import { getPostsSitemap } from "@/lib/sanity.queries";
import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { Locale } from "@/core/locales.types";

const client = getClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostsSitemap(client, "craft");
  const subdomain = headers().get("host")?.split(".")[0] as Locale;
  const baseUrl =
    subdomain === "he"
      ? "https://he.alumagelbard.com"
      : "https://alumagelbard.com";

  return posts.map((post) => ({
    url: `${baseUrl}/craft/${post.slug.current}`,
    lastModified: post._updatedAt,
  }));
}
