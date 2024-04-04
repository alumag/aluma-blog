import { getClient } from '@/lib/sanity.client';
import { getPost, getPostsSitemap } from '@/lib/sanity.queries';
import { MetadataRoute } from 'next'

const client = getClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostsSitemap(client, "craft");
  const index = await getPost(client, "aluma-gelbard");

  return [
    {
      url: '/',
      lastModified: index._updatedAt,
      changeFrequency: "monthly",
    },
    {
      url: '/craft',
      lastModified: posts[0]?._updatedAt,
      changeFrequency: "weekly",
    }
  ]
}