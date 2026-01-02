'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SanityEpisode } from '@/lib/sanity.types';

interface ClientSearchPodcastProps {
  episodes: SanityEpisode[];
}

export default function ClientSearchPodcast({ episodes }: ClientSearchPodcastProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEpisodes = useMemo(() => {
    if (!searchTerm.trim()) {
      return episodes;
    }

    const term = searchTerm.toLowerCase();
    return episodes.filter((episode) => {
      const titleMatch = episode.title.toLowerCase().includes(term);
      const summaryMatch = episode.summary?.toLowerCase().includes(term);
      return titleMatch || summaryMatch;
    });
  }, [episodes, searchTerm]);

  return (
    <>
      <div className="mb-12">
        <input
          type="text"
          placeholder="Search episodes by title or topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
        />
        {searchTerm && (
          <p className="text-sm text-gray-600 mt-2">
            Found {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredEpisodes && filteredEpisodes.length > 0 ? (
          filteredEpisodes.map((episode) => (
            <div key={episode._id} className="border-b border-gray-200 pb-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link
                    href={`/podcast/${episode.slug.current}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {episode.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {new Date(episode.publishedAt).toLocaleDateString()}
                </p>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                {episode.summary}
              </p>

              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-widest">
                  Available on
                </p>
                <div className="flex gap-3">
                  {(episode.platform === 'podcast' || episode.platform === 'both') && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded">
                      Podcast
                    </span>
                  )}
                  {(episode.platform === 'youtube' || episode.platform === 'both') && (
                    <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded">
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
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 mb-4">
              {episodes.length === 0 ? 'No episodes yet.' : 'No episodes match your search.'}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
