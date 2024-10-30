"use client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { ImageType } from "@/lib/schema/Image.type";
import { client } from "@/sanity/lib/client";

export function SanityImage({
  image,
  className,
}: {
  image: ImageType;
  className?: string;
}) {
  const imageProps = useNextSanityImage(client, image);

  return (
    <Image
      alt={image.alt}
      className={className}
      {...imageProps}
      {...(image.asset?.metadata && {
        placeholder: "blur",
        blurDataURL: image.asset.metadata.lqip,
      })}
    />
  );
}
