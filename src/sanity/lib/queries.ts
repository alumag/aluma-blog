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

export const getCraftPostsLastModifiedQuery = defineQuery(`
  *[_type == "post" && language == $language && defined(slug.current) && "craft" in tags[].value] | order(_updatedAt desc)[0]._updatedAt`);

export const getCraftSitemapQuery = defineQuery(`
*[_type == "post" && language == $language && defined(slug.current) && "craft" in tags[].value] | order(_updatedAt desc)[]{
  'url': "/craft/" + slug.current,
  'lastModified': _updatedAt,
}`);
