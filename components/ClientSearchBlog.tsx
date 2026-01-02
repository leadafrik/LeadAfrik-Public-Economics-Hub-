'use client';

import { useState, useMemo } from 'react';
import PostCard from '@/components/PostCard';
import { SanityPost } from '@/lib/sanity.types';

interface ClientSearchBlogProps {
  posts: SanityPost[];
}

export default function ClientSearchBlog({ posts }: ClientSearchBlogProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) {
      return posts;
    }

    const term = searchTerm.toLowerCase();
    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(term);
      const excerptMatch = post.excerpt?.toLowerCase().includes(term);
      const tagsMatch = post.tags?.some((tag) => tag.toLowerCase().includes(term));
      const typeMatch = post.type.toLowerCase().includes(term);

      return titleMatch || excerptMatch || tagsMatch || typeMatch;
    });
  }, [posts, searchTerm]);

  return (
    <>
      <div className="mb-12">
        <input
          type="text"
          placeholder="Search posts by title, excerpt, or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
        />
        {searchTerm && (
          <p className="text-sm text-gray-600 mt-2">
            Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 mb-4">
              {posts.length === 0 ? 'No posts yet. Check back soon.' : 'No posts match your search.'}
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
