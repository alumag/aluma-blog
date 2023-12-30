import { PortableText } from "@portabletext/react";
import { getPost } from "@/lib/sanity.queries";
import { getClient } from "@/lib/sanity.client";
import { Article } from "@/components/Article";
import { SocialMedia } from "@/components/SocialMedia";

const client = getClient();

export default async function Home() {
  const data = await getPost(client, "/homepage");

  return (
    <>
      <h1
        className="bg-clip-content pb-2 text-center font-alef text-5xl font-extrabold
        text-black underline decoration-app-pink hover:bg-app-pink dark:text-white"
      >
        אלומה גלברד
      </h1>
      <SocialMedia />
      <Article>
        <PortableText value={data.body} />
      </Article>
      <hr className="my-2 border-2 border-app-blue" />
    </>
  );
}
