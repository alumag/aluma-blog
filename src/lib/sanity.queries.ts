import type { PortableTextBlock } from "@portabletext/types";
import type { Slug } from "@sanity/types";
import groq from "groq";
import { type SanityClient } from "next-sanity";
import { getLocaleCookie } from "@/core/getLocaleCookie";

type Language = "en" | "he";

export const postsQuery = groq`*[_type == "post" && language == $language && defined(slug.current)] | order(_createdAt desc)`;

export async function getPosts(
  client: SanityClient,
  language?: Language,
): Promise<Post[]> {
  const locale = language ?? getLocaleCookie();
  return await client.fetch(postsQuery, { language: locale });
}

export const postBySlugQuery = groq`*[_type == "post" && language == $language && slug.current == $slug][0]`;

export async function getPost(
  client: SanityClient,
  slug: string,
  language?: Language,
): Promise<Post> {
  const locale = language ?? getLocaleCookie();
  return await client.fetch(postBySlugQuery, {
    slug,
    language: locale,
  });
}

export const postSlugsQuery = groq`
*[_type == "post" && language == $language && defined(slug.current)][].slug.current
`;

export interface Post {
  _type: "post";
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: Slug;
  publishedAt: string;
  body: PortableTextBlock[];
  language: Language;
}

export const siteMetadataQuery = groq`*[_type == "siteMetadata" && language == $language][0]`;

export async function getSiteMetadata(
  client: SanityClient,
  language?: Language,
): Promise<SiteMetadata> {
  const locale = language ?? getLocaleCookie();
  return await client.fetch(siteMetadataQuery, { language: locale });
}

export interface SiteMetadata {
  siteName: string;
  description: string;
  dir: "rtl" | "ltr";
  language: Language;
}
