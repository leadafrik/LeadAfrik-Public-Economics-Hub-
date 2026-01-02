import Link from "next/link";
import PostCard from "@/components/PostCard";
import { sanityFetch } from "@/lib/sanity.client";
import { ALL_POSTS_QUERY } from "@/lib/sanity.queries";
import { SanityPost } from "@/lib/sanity.types";

export default async function BlogPage() {
  const posts = await sanityFetch<SanityPost[]>({ query: ALL_POSTS_QUERY });

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Analysis & Essays</h1>
          <p className="text-lg text-gray-600 font-serif">
            Policy briefs, explainers, and data-informed analysis on Kenya's economy.
          </p>
        </div>

        <div className="mb-12">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-gray-600">No posts yet. Check back soon.</p>
          )}
        </div>
      </section>
    </div>
  );
}
