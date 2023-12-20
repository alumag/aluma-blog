import { PortableText } from "@portabletext/react";
import { Header2 } from "@/typography/header";
import { Prose } from "@/typography/paragraph";

import { getPost } from "@/lib/sanity.queries";
import { getClient } from "@/lib/sanity.client";

const client = getClient();

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(client, `/${params.slug}`);

  if (!post) {
    return <div>הדף לא קיים</div>;
  }

  return (
    <>
      <Header2>{post.title}</Header2>
      <Prose>
        <PortableText value={post.body} />
      </Prose>
    </>
  );
}
