"use server";

import { PortableText } from "@portabletext/react";
import { Article } from "@/components/Article";
import { getClient } from "@/lib/sanity.client";
import { Post, getPosts } from "@/lib/sanity.queries";
import { Fragment } from "react";
import { LocalTime } from "@/components/LocalTime";
import { Gallery } from "@/lib/sanity.queries";
import { Carousel } from "flowbite-react";
import { SanityImage } from "@/components/SanityImage";

const client = getClient();

export default async function Craft() {
  const posts = await getPosts(client, "craft");

  return (
    <>
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Card post={post} />
        </Fragment>
      ))}
    </>
  );
}

function Card({ post }: { post: Post }) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <ImageGallery gallery={post.gallery} />
      <div className="flex flex-col px-5">
        <Article className="line-clamp-4 hover:line-clamp-none prose-p:text-sm">
          <PortableText value={post.body} />
          <p className="text-right text-xs rtl:text-left">
            <LocalTime date={post.publishedAt} />
          </p>
        </Article>
      </div>
    </div>
  );
}

function ImageGallery({ gallery }: { gallery: Gallery }) {
  return (
    <Carousel
      theme={{ scrollContainer: { base: "flex h-full rounded-t-lg" } }}
      className="h-56 pb-1 sm:h-64 xl:h-80 2xl:h-96"
    >
      {gallery.images.map((image) => (
        <SanityImage key={(image._key as string) ?? image.alt} image={image} />
      ))}
    </Carousel>
  );
}
