// JSON-LD Schema generators for SEO

export function generateArticleSchema(post: {
  title: string;
  excerpt?: string;
  publishedAt: string;
  author?: { name: string };
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt || post.title,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || "LeadAfrik Economics",
    },
    publisher: {
      "@type": "Organization",
      name: "LeadAfrik Economics",
      logo: {
        "@type": "ImageObject",
        url: "https://leadafrik.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://leadafrik.com/blog/${post.slug}`,
    },
  };
}

export function generatePodcastSchema(episode: {
  title: string;
  summary?: string;
  publishedAt: string;
  embedUrl?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.summary || episode.title,
    datePublished: episode.publishedAt,
    url: `https://leadafrik.com/podcast/${episode.slug}`,
    ...(episode.embedUrl && {
      video: {
        "@type": "VideoObject",
        url: episode.embedUrl,
      },
    }),
  };
}

export function generateDatasetSchema(dataset: {
  title: string;
  description?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: dataset.title,
    description: dataset.description || dataset.title,
    url: `https://leadafrik.com/data/${dataset.slug}`,
    provider: {
      "@type": "Organization",
      name: "LeadAfrik Economics",
    },
  };
}
