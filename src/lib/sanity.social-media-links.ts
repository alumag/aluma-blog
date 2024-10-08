import groq from "groq";
import { type SanityDocument, type SanityClient } from "next-sanity";

export const socialMediaLinksQuery = groq`*[_type == "socialMediaLink" && hidden == false] | order(_createdAt desc)`;

export async function getSocialMediaLinks(
  client: SanityClient,
): Promise<SocialMediaLink[]> {
  return await client.fetch(socialMediaLinksQuery);
}

type SocialMediaLink = SanityDocument<{
  _type: "socialMediaLink";
  type:
    | "discord"
    | "telegram"
    | "linkedin"
    | "github"
    | "reddit"
    | "duolingo"
    | "facebook"
    | "instagram"
    | "twitter"
    | "email"
    | "goodreads";
  link: string;
  hidden: boolean;
}>;
