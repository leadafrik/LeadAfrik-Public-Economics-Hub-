import Link from "next/link";
import PostCard from "@/components/PostCard";
import { sanityFetch } from "@/lib/sanity.client";
import { ALL_POSTS_QUERY } from "@/lib/sanity.queries";
import { SanityPost } from "@/lib/sanity.types";

export default async function BlogPage() {
  const posts = await sanityFetch<SanityPost[]>({ query: ALL_POSTS_QUERY });

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Analysis</h1>
          <p className="text-lg text-gray-600">
            Policy briefs, explainers, and data-informed analysis on Kenya's economy.
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
