import groq from "groq";
import { type SanityDocument } from "next-sanity";
import { getLocale } from "@/core/getLocale";
import { Language } from "./sanity.core";
import { client } from "@/sanity/lib/client";

export const siteMetadataQuery = groq`
*[_type == "siteMetadata" && language == $language][0]{
    siteName,
    title,
    description,
    dir,
    locale,
    language,
}`;

export async function getSiteMetadata(
  language?: Language,
): Promise<SiteMetadata> {
  const locale = language ?? getLocale();
  return await client.fetch(siteMetadataQuery, { language: locale });
}

export type SiteMetadata = SanityDocument<{
  _type: "siteMetadata";
  siteName: string;
  title: string;
  description: string;
  dir: "rtl" | "ltr";
  locale: string;
  language: Language;
}>;
