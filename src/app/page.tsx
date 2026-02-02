import { PortableText } from "@portabletext/react";
import { getPost } from "@/lib/sanity.queries";
import { Article } from "@/components/Article";
import { SocialMedia } from "@/components/SocialMedia";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "https://alumagelbard.com/",
      he: "https://he.alumagelbard.com/",
    },
  },
};

export default async function Home() {
  const data = await getPost("aluma-gelbard");

  return (
    <>
      <main className="container px-8 py-6 md:px-24">
        <h1 className="font-alef decoration-app-pink hover:bg-app-pink bg-clip-content pb-2 text-center text-5xl font-extrabold text-black underline dark:text-white">
          {data.title}
        </h1>
        <SocialMedia />
        <Article>
          <PortableText value={data.body} />
        </Article>
        <hr className="border-app-blue my-2 border-2" />
      </main>
      <footer className="fixed bottom-0 w-full">
        <div className="from-app-purple/60 dark:from-app-purple/20 h-12 w-full bg-linear-to-t to-transparent" />
      </footer>
    </>
  );
}
