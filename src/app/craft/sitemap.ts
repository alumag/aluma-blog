import { getClient } from '@/lib/sanity.client';
import { getPostsSitemap } from '@/lib/sanity.queries';
import { MetadataRoute } from 'next'

const client = getClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostsSitemap(client, "craft");

  return posts.map((post) => ({
      url: `/craft/${post.slug.current}`,
      lastModified: post._updatedAt,
    }));
}