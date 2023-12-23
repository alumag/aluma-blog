import { PortableText } from "@portabletext/react";
import { getPost } from "@/lib/sanity.queries";
import { getClient } from "@/lib/sanity.client";
import { Article } from "@/components/Article";

const client = getClient();

export default async function Home() {
  const data = await getPost(client, "/homepage");

  return (
    <>
      <h1
        className="text-5xl font-alef font-extrabold text-black dark:text-white text-center
        underline bg-clip-content decoration-app-pink hover:bg-app-pink pb-2"
      >
        אלומה גלברד
      </h1>
      <Article>
        <PortableText value={data.body} />
      </Article>
    </>
  );
}
