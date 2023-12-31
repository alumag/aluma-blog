import type { PortableTextBlock } from "@portabletext/types";
import type { Slug, Image } from "@sanity/types";
import groq from "groq";
import { type SanityClient, type SanityDocument } from "next-sanity";
import { getLocaleCookie } from "@/core/getLocaleCookie";
import { Language } from "./sanity.core";

export const postsQuery = groq`
  *[_type == "post" && language == $language && defined(slug.current)] | order(_createdAt desc)`;

export async function getPosts(
  client: SanityClient,
  language?: Language,
): Promise<Post[]> {
  const locale = language ?? getLocaleCookie();
  return await client.fetch(postsQuery, { language: locale });
}

export const postBySlugQuery = groq`
*[_type == "post" && language == $language && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  language,
  "gallery": gallery->{
    "images": images[]{
      ...,
      "alt": alt[$language],
    },
    display,
    zoom,
  }
}`;

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

export interface Gallery {
  images: (Image & { alt: string })[];
  display?: "stacked" | "inline" | "carousel";
  zoom?: boolean;
}

export type Post = SanityDocument<{
  _type: "post";
  title: string;
  slug: Slug;
  publishedAt: string;
  body: PortableTextBlock[];
  language: Language;
  gallery: Gallery;
}>;
