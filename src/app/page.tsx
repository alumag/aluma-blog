import { PortableText } from "@portabletext/react";
import { Header1 } from "@/typography/header";

import { getPost } from "@/lib/sanity.queries";
import { getClient } from "@/lib/sanity.client";
import { Article } from "@/components/Article";

const client = getClient();

export default async function Home() {
  const data = await getPost(client, "/homepage");

  return (
    <>
      <Header1 className="pb-2 text-center underline bg-clip-content decoration-[rgb(223,209,224)] hover:bg-[rgb(223,209,224)]">
        אלומה גלברד
      </Header1>
      <Article>
        <PortableText value={data.body} />
      </Article>
    </>
  );
}
