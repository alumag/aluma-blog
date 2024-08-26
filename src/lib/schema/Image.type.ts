import type { Image, ImageAsset } from "@sanity/types";

export type ImageType = Image & {
  readonly asset?: ImageAsset;
  readonly alt: string;
};
