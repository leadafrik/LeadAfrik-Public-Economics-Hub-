import Link from "next/link";
import PostCard from "@/components/PostCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { sanityFetch } from "@/lib/sanity.client";
import { ALL_POSTS_QUERY } from "@/lib/sanity.queries";
import { SanityPost } from "@/lib/sanity.types";
import ClientSearchBlog from "@/components/ClientSearchBlog";

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

        <ClientSearchBlog posts={posts || []} />

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
