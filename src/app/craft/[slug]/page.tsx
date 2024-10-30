"use server";

import { Fragment } from "react";
import { notFound } from "next/navigation";
import { Carousel } from "flowbite-react";
import { PortableText } from "@portabletext/react";
import { Gallery, getPost } from "@/lib/sanity.queries";
import { Article } from "@/components/Article";
import { SanityImage } from "@/components/SanityImage";
import { LocalTime } from "@/components/LocalTime";

type Params = {
  slug: string;
};

export default async function Page({ params: { slug } }: { params: Params }) {
  const data = await getPost(slug);

  if (data === null) {
    notFound();
  }

  return (
    <>
      <div className="xl:flex xl:justify-between">
        <Article className={data.gallery ? "max-w-prose" : "max-w-none"}>
          <h1>{data.title}</h1>
          <PortableText value={data.body} />
          <p className="text-sm">
            <LocalTime date={data.publishedAt} />
          </p>
        </Article>
        {data.gallery && <ImageGallery gallery={data.gallery} />}
      </div>

      <hr className="my-2 border-2 border-app-blue" />
    </>
  );
}

function ImageGallery({
  gallery,
  className,
}: {
  gallery: Gallery;
  className?: string;
}) {
  return (
    <div
      className={`h-56 w-56 object-fill sm:h-96 sm:w-96 lg:h-[40rem] lg:w-[40rem] ${
        className ?? ""
      }`}
    >
      <Carousel>
        {gallery.images.map((image) => (
          <Fragment key={(image._key as string) ?? image.alt}>
            <SanityImage image={image} />
          </Fragment>
        ))}
      </Carousel>
    </div>
  );
}
