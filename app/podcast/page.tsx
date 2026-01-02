import { sanityFetch } from "@/lib/sanity.client";
import { ALL_EPISODES_QUERY } from "@/lib/sanity.queries";
import Link from "next/link";
import { SanityEpisode } from "@/lib/sanity.types";

export default async function PodcastPage() {
  const episodes = await sanityFetch<SanityEpisode[]>({ query: ALL_EPISODES_QUERY });

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <header className="mb-16">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Podcast & Episodes</h1>
          <p className="text-lg text-gray-600 font-serif">
            Dive deep into Kenyan economic policy with explainers, analysis, and key interviews.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {episodes && episodes.length > 0 ? episodes.map((episode) => (
            <div
              key={episode._id}
              className="border-b border-gray-200 pb-8"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/podcast/${episode.slug.current}`} className="hover:text-blue-600 transition-colors">
                    {episode.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 mb-4">{new Date(episode.publishedAt).toLocaleDateString()}</p>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{episode.summary}</p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-widest">Available on</p>
                <div className="flex gap-3">
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
              </div>

              <Link
                href={`/podcast/${episode.slug.current}`}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                Listen & read →
              </Link>
            </div>
          )) : (
            <p className="text-gray-600">No episodes yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
