"use server";

import { Fragment } from "react";
import { PortableText } from "@portabletext/react";
import { Article } from "@/components/Article";
import { getClient } from "@/lib/sanity.client";
import { Gallery, getPost } from "@/lib/sanity.queries";
import { Carousel } from "flowbite-react";
import { SanityImage } from "@/components/SanityImage";
import { LocalTime } from "@/components/LocalTime";

const client = getClient();

type Params = {
  slug: string;
};

export default async function Page({ params: { slug } }: { params: Params }) {
  const data = await getPost(client, slug);
  return (
    <>
      <div className="lg:flex lg:justify-between">
        <Article className="max-w-screen-md">
          <h1>{data.title}</h1>
          <PortableText value={data.body} />
          <p className="text-sm">
            <LocalTime date={data.publishedAt} />
          </p>
        </Article>
        <ImageGallery
          className="min-w-full lg:min-w-fit lg:grow"
          gallery={data.gallery}
        />
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
      className={`h-56 object-fill sm:h-96 sm:w-96 lg:h-[30rem] lg:w-[30rem] ${
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
