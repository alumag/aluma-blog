import { type SchemaTypeDefinition } from "sanity";
import { localeString } from "./localeStringType";
import { localePicture } from "./localePictureType";
import Post from "./post";
import SiteMetadata from "./site-metadata";
import SocialMediaLink from "./social-media-link";
import Gallery from "./gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localePicture,
    Post,
    SiteMetadata,
    SocialMediaLink,
    Gallery,
  ],
};
