import { sanityFetch } from '@/lib/sanity.client';
import { ALL_POSTS_QUERY } from '@/lib/sanity.queries';
import { SanityPost } from '@/lib/sanity.types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://leadafrikeconomicshub.com';

export async function GET() {
  try {
    const posts = await sanityFetch<SanityPost[]>({
      query: ALL_POSTS_QUERY,
    });

    // Filter to published posts only and limit to 20 most recent
    const publishedPosts = posts
      .filter((post) => new Date(post.publishedAt) <= new Date())
      .slice(0, 20);

    // Generate RSS XML
    const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LeadAfrik Economics Hub - Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Economic insights, analysis, and data for Africa</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/rss" rel="self" type="application/rss+xml" />
    <managingEditor>info@leadafrik.com</managingEditor>
    <webMaster>info@leadafrik.com</webMaster>
    <image>
      <url>${SITE_URL}/brand/logo.png</url>
      <title>LeadAfrik Economics Hub</title>
      <link>${SITE_URL}</link>
    </image>
    ${publishedPosts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug.current}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug.current}</guid>
      <description>${escapeXml(post.excerpt || '')}</description>
      ${post.content ? `<content:encoded><![CDATA[${post.content}]]></content:encoded>` : ''}
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${post.author?.name || 'LeadAfrik'}</author>
      ${post.image?.asset?.url ? `<image><url>${escapeXml(post.image.asset.url)}</url></image>` : ''}
      ${
        post.tags && post.tags.length > 0
          ? post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n      ')
          : ''
      }
    </item>
    `
      )
      .join('')}
  </channel>
</rss>`;

    return new Response(rssContent, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('RSS feed generation error:', error);
    return new Response('Error generating RSS feed', { status: 500 });
  }
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
