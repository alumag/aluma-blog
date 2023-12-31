import groq from "groq";
import { type SanityDocument, type SanityClient } from "next-sanity";
import { getLocaleCookie } from "@/core/getLocaleCookie";
import { Language } from "./sanity.core";

export const siteMetadataQuery = groq`
*[_type == "siteMetadata" && language == $language][0]{
    siteName,
    description,
    dir,
    language,
}`;

export async function getSiteMetadata(
  client: SanityClient,
  language?: Language,
): Promise<SiteMetadata> {
  const locale = language ?? getLocaleCookie();
  return await client.fetch(siteMetadataQuery, { language: locale });
}

export type SiteMetadata = SanityDocument<{
  _type: "siteMetadata";
  siteName: string;
  description: string;
  dir: "rtl" | "ltr";
  language: Language;
}>;
