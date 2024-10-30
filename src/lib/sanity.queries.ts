import type { PortableTextBlock } from "@portabletext/types";
import type { Slug } from "@sanity/types";
import groq from "groq";
import { type SanityDocument } from "next-sanity";
import { getLocale } from "@/core/getLocale";
import { Language } from "./sanity.core";
import { ImageType } from "./schema/Image.type";
import { client } from "@/sanity/lib/client";

export const postsQuery = groq`
  *[_type == "post" && language == $language && defined(slug.current) && $filterByTag in tags[]._key] | order(publishedAt desc)[]{
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
        alt._type == "localeString" => {
          "alt": alt[$language],
        },
        asset->{
          ...,
          metadata
        }
      },
      display,
      zoom,
    },
    "tags": tags[].value
  }`;

export async function getPosts(
  tag: string,
  language?: Language,
): Promise<Post[]> {
  const locale = language ?? getLocale();
  return await client.fetch(postsQuery, { language: locale, filterByTag: tag });
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
      alt._type == "localeString" => {
        "alt": alt[$language],
      },
      asset->{
        ...,
        metadata
      }
    },
    display,
    zoom,
  },
  "tags": tags[].value
}`;

export async function getPost(
  slug: string,
  language?: Language,
): Promise<Post> {
  const locale = language ?? getLocale();
  return await client.fetch(postBySlugQuery, {
    slug,
    language: locale,
  });
}

export const postSlugsQuery = groq`
*[_type == "post" && language == $language && defined(slug.current)][].slug.current
`;

export interface Gallery {
  images: ImageType[];
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
