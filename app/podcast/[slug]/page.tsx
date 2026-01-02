"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { mockEpisodes } from "@/lib/mockData";

export default function EpisodeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const episode = mockEpisodes.find((e) => e.slug === slug);

  if (!episode) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Episode not found</h1>
        <Link href="/podcast" className="text-blue-600 hover:text-blue-700">
          ← Back to podcast
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/podcast" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to podcast
        </Link>

        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {episode.title}
          </h1>
          <p className="text-gray-600 mb-4">{episode.date}</p>
          <div className="flex gap-2">
            {(episode.platform === "podcast" || episode.platform === "both") && (
              <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded">
                Podcast
              </span>
            )}
            {(episode.platform === "youtube" || episode.platform === "both") && (
              <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded">
                YouTube
              </span>
            )}
          </div>
        </header>

        {/* Embed Player */}
        <div className="mb-12 aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
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

        {/* Summary */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{episode.summary}</p>
        </div>

        {/* Timestamps */}
        {episode.timestamps && episode.timestamps.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Timestamps</h2>
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

        {/* References */}
        {episode.references && episode.references.length > 0 && (
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
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
