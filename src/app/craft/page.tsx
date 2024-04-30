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
import { badgeVariants } from "@/components/ui/badge";

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
  const posts = (await getPosts(client, "craft")).filter((post) =>
    tag !== undefined ? post.tags && post.tags.includes(tag) : true,
  );

  return posts.map((post) => (
    <Fragment key={post._id}>
      <Card post={post} />
    </Fragment>
  ));
}

function Card({ post }: { post: Post }) {
  return (
    <div className="mb-2 flex w-11/12 flex-col rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 sm:flex-row">
      {post.gallery && <ImageGallery gallery={post.gallery} />}
      <div className="flex flex-col px-5 pb-2 sm:w-5/6">
        <Article
          className={`${
            post.gallery ? "line-clamp-6" : ""
          } prose-headings:mt-3 prose-headings:text-lg prose-p:text-sm`}
        >
          <Link href={`/craft/${post.slug.current}`}>
            <h2>{post.title}</h2>
          </Link>
          <PortableText value={post.body} />
        </Article>
        <p className="text-right text-xs rtl:text-left">
          <Link href={`/craft/${post.slug.current}`}>
            <LocalTime date={post.publishedAt} />
          </Link>
        </p>
        {post.tags && (
          <div>
            {post.tags
              .filter((tag) => tag !== "craft")
              .map((tag) => (
                <Link
                  key={tag}
                  className={badgeVariants({
                    className: "ltr:mr-0.5 rtl:ml-0.5",
                  })}
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
      slide={false}
      theme={{
        scrollContainer: {
          base: "flex h-full rounded-t-lg sm:ltr:rounded-r-none sm:ltr:rounded-l-lg sm:rtl:rounded-l-none sm:rtl:rounded-r-lg",
        },
      }}
      className="h-56 max-w-lg sm:h-64 xl:h-80 2xl:h-96"
    >
      {gallery.images.map((image) => (
        <SanityImage key={(image._key as string) ?? image.alt} image={image} />
      ))}
    </Carousel>
  );
}
