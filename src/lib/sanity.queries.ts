import type { PortableTextBlock } from "@portabletext/types";
import type { Slug, Image } from "@sanity/types";
import groq from "groq";
import { type SanityClient, type SanityDocument } from "next-sanity";
import { getLocaleCookie } from "@/core/getLocaleCookie";
import { Language } from "./sanity.core";

export const postsSitemapQuery = groq`
*[_type == "post" && language == $language && defined(slug.current) && $tag in tags[]._key] | order(_updatedAt desc)[]{
  _id,
  slug,
  publishedAt,
  _updatedAt
}`;

export async function getPostsSitemap(
  client: SanityClient,
  tag: string,
  language?: Language,
): Promise<{ _id: string, slug: Slug, publishedAt: string, _updatedAt: string }[]> {
  const locale = language ?? getLocaleCookie();
  return await client.fetch(postsSitemapQuery, { language: locale, tag });
}

export const postsQuery = groq`
  *[_type == "post" && language == $language && defined(slug.current) && $tag in tags[]._key] | order(publishedAt desc)[]{
    _id,
    title,
    slug,
    publishedAt,
    _updatedAt,
    body,
    language,
    "gallery": gallery->{
      "images": images[]{
        ...,
        "alt": alt[$language],
        "url": asset->url,
      },
      display,
      zoom,
    },
    "tags": tags[].value
  }`;

export async function getPosts(
  client: SanityClient,
  tag: string,
  language?: Language,
): Promise<Post[]> {
  const locale = language ?? getLocaleCookie();
  return await client.fetch(postsQuery, { language: locale, tag });
}

export const postBySlugQuery = groq`
*[_type == "post" && language == $language && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  _updatedAt,
  body,
  language,
  "gallery": gallery->{
    "images": images[]{
      ...,
      "alt": alt[$language],
      "url": asset->url,
    },
    display,
    zoom,
  },
  "tags": tags[].value
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
  images: (Image & { alt: string; url: string })[];
  display: "stacked" | "inline" | "carousel" | null;
  zoom: boolean | null;
}

export type Post = SanityDocument<{
  _type: "post";
  title: string;
  slug: Slug;
  publishedAt: string;
  body: PortableTextBlock[];
  language: Language;
  gallery: Gallery | null;
  tags: string[] | null;
}>;
