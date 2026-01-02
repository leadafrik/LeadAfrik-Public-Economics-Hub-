import { mockEpisodes } from "@/lib/mockData";
import Link from "next/link";

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Podcast & Episodes</h1>
          <p className="text-lg text-gray-600">
            Available on Spotify, Apple Podcasts, and YouTube. Episodes dive deep into
            Kenyan economic policy with explainers and key terms.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/podcast/${episode.slug}`} className="hover:text-blue-600">
                    {episode.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 mb-4">{episode.date}</p>
              </div>

              <p className="text-gray-700 mb-6 line-clamp-3">{episode.summary}</p>

              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Available on:</p>
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
              </div>

              <Link
                href={`/podcast/${episode.slug}`}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Listen & Read →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
