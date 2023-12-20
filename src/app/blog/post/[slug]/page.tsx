import { PortableText } from "@portabletext/react";
import { getPost } from "@/lib/sanity.queries";
import { getClient } from "@/lib/sanity.client";
import { Article } from "@/components/Article";
import { alefFont } from "@/fonts";

const client = getClient();

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(client, `/${params.slug}`);

  if (!post) {
    return <div>הדף לא קיים</div>;
  }

  return (
    <Article>
      <h1 className={alefFont.className}>{post.title}</h1>
      <PortableText value={post.body} />
    </Article>
  );
}
