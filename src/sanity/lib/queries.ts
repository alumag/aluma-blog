import { defineQuery } from "next-sanity";

export const socialMediaLinksQuery = defineQuery(
  `*[_type == "socialMediaLink" && hidden == false] | order(_createdAt desc)`,
);
