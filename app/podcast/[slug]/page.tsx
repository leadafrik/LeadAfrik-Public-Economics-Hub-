import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { SINGLE_EPISODE_QUERY } from "@/lib/sanity.queries";
import { SanityEpisode } from "@/lib/sanity.types";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

interface EpisodeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: EpisodeDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const episode = await sanityFetch<SanityEpisode>({
    query: SINGLE_EPISODE_QUERY,
    params: { slug },
  });

  if (!episode) {
    return {
      title: "Episode not found",
    };
  }

  const episodeUrl = `${SITE_URL}/podcast/${slug}`;

  return {
    title: `${episode.title} - ${SITE_NAME}`,
    description: episode.summary || episode.title,
    openGraph: {
      title: episode.title,
      description: episode.summary || episode.title,
      type: "video.episode",
      url: episodeUrl,
    },
    twitter: {
      card: "summary",
      title: episode.title,
      description: episode.summary || episode.title,
    },
    alternates: {
      canonical: episodeUrl,
    },
  };
}

export default async function EpisodeDetailPage({
  params,
}: EpisodeDetailPageProps) {
  const { slug } = await params;
  const episode = await sanityFetch<SanityEpisode>({
    query: SINGLE_EPISODE_QUERY,
    params: { slug },
  });

  if (!episode) {
    notFound();
  }

  const publishedDate = new Date(episode.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/podcast" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to podcast
        </Link>

        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            {episode.title}
          </h1>
          <p className="text-gray-600 mb-4">{publishedDate}</p>
          <div className="flex gap-2">
            {(episode.platform === "podcast" || episode.platform === "both") && (
              <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1">
                Podcast
              </span>
            )}
            {(episode.platform === "youtube" || episode.platform === "both") && (
              <span className="text-xs bg-red-100 text-red-700 px-3 py-1">
                YouTube
              </span>
            )}
          </div>
        </header>

        {episode.embedUrl && (
          <div className="mb-12 aspect-video bg-gray-100 overflow-hidden border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              src={episode.embedUrl}
              title={episode.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {episode.summary && (
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Summary</h2>
            <p className="text-gray-700 leading-relaxed font-serif">{episode.summary}</p>
          </div>
        )}

        {episode.timestamps && episode.timestamps.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Timestamps</h2>
            <ul className="space-y-2">
              {episode.timestamps.map((ts, idx) => (
                <li key={idx} className="text-gray-700">
                  <span className="font-semibold text-blue-600">{ts.time}</span> -{" "}
                  {ts.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {episode.references && episode.references.length > 0 && (
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4">References</h2>
            <ul className="space-y-2">
              {episode.references.map((ref, idx) => (
                <li key={idx}>
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {ref.title} ↗
                    </a>
                  ) : (
                    <span>{ref.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
