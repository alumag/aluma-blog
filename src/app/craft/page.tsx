import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Article } from "@/components/Article";
import { Post, getPosts } from "@/lib/sanity.queries";
import { Fragment } from "react";
import { LocalTime } from "@/components/LocalTime";
import { SanityImage } from "@/components/SanityImage";
import { Metadata } from "next";
import { badgeVariants } from "@/components/ui/badge";
import { ImageGallery } from "./ImageGallery";

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
  const posts = (await getPosts("craft")).filter((post) =>
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
    <div className="mb-2 flex w-11/12 flex-col rounded-lg border border-gray-200 bg-white shadow-sm sm:flex-row dark:border-gray-700 dark:bg-gray-800">
      {post.gallery && (
        <ImageGallery>
          {post.gallery.images.map((image) => (
            <div key={(image._key as string) ?? image.alt}>
              <SanityImage image={image} />
            </div>
          ))}
        </ImageGallery>
      )}
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
