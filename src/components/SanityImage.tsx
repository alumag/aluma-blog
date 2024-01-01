"use client";

import { Gallery } from "@/lib/sanity.queries";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "@/lib/sanity.client";

const client = getClient();

export function SanityImage({
  image,
  className,
}: {
  image: Gallery["images"][number];
  className?: string;
}) {
  const imageProps = useNextSanityImage(client, image);

  return <Image alt={image.alt} className={className} {...imageProps} />;
}
