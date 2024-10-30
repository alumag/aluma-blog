import { defineQuery } from "next-sanity";

export const getSocialMediaLinksQuery = defineQuery(
  `*[_type == "socialMediaLink" && hidden == false] | order(_createdAt desc)`,
);

export const getSiteMetadataQuery = defineQuery(`
*[_type == "siteMetadata" && language == $language][0]{
    siteName,
    title,
    description,
    dir,
    locale,
    language,
}`);
