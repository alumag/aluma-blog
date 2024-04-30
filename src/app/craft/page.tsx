import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Article } from "@/components/Article";
import { getClient } from "@/lib/sanity.client";
import { Post, getPosts } from "@/lib/sanity.queries";
import { Fragment } from "react";
import { LocalTime } from "@/components/LocalTime";
import { Gallery } from "@/lib/sanity.queries";
import { Carousel } from "flowbite-react";
import { SanityImage } from "@/components/SanityImage";
import { Metadata } from "next";
import { Badge, badgeVariants } from "@/components/ui/badge";

const client = getClient();

export const metadata: Metadata = {
  alternates: {
    canonical: "/craft",
    languages: {
      en: "https://alumagelbard.com/craft",
      he: "https://he.alumagelbard.com/craft",
    },
  },
};

export default async function Craft({
  searchParams: { tag },
}: {
  searchParams: { tag?: string };
}) {
  console.log("tag", tag);
  const posts = (await getPosts(client, "craft")).filter((post) =>
    tag !== undefined ? post.tags && post.tags.includes(tag) : true,
  );

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Card post={post} />
        </Fragment>
      ))}
    </div>
  );
}

function Card({ post }: { post: Post }) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      {post.gallery && <ImageGallery gallery={post.gallery} />}
      <div className="flex flex-col px-5 pb-2">
        <Article
          className={`${post.gallery ? "line-clamp-6" : ""} prose-p:text-sm`}
        >
          <p className="text-right text-xs rtl:text-left">
            <Link href={`/craft/${post.slug.current}`}>
              <LocalTime date={post.publishedAt} />
            </Link>
          </p>
          <PortableText value={post.body} />
        </Article>
        {post.tags && (
          <div>
            {post.tags
              .filter((tag) => tag !== "craft")
              .map((tag) => (
                <Link
                  key={tag}
                  className={badgeVariants()}
                  href={`?tag=${tag}`}
                >
                  #{tag}
                </Link>
              ))}
          </div>
        )}
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
