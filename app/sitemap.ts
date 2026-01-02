import { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity.client';
import { ALL_POSTS_QUERY, ALL_DOCUMENTS_QUERY, ALL_EPISODES_QUERY } from '@/lib/sanity.queries';
import { SanityPost, SanityDocument, SanityEpisode } from '@/lib/sanity.types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://leadafrikeconomicshub.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all content from Sanity
  const [posts, documents, episodes] = await Promise.all([
    sanityFetch<SanityPost[]>({ query: ALL_POSTS_QUERY }),
    sanityFetch<SanityDocument[]>({ query: ALL_DOCUMENTS_QUERY }),
    sanityFetch<SanityEpisode[]>({ query: ALL_EPISODES_QUERY }),
  ]);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/documents`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/data`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/podcast`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contribute`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Document pages
  const documentPages: MetadataRoute.Sitemap = documents.map((doc) => ({
    url: `${SITE_URL}/documents/${doc.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // Podcast episode pages
  const episodePages: MetadataRoute.Sitemap = episodes.map((episode) => ({
    url: `${SITE_URL}/podcast/${episode.slug.current}`,
    lastModified: new Date((episode as any).date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...documentPages, ...episodePages];
}
