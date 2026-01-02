import Link from "next/link";
import PostCard from "@/components/PostCard";
import DocumentCard from "@/components/DocumentCard";
import { sanityFetch } from "@/lib/sanity.client";
import {
  HOME_SETTINGS_QUERY,
  ALL_POSTS_QUERY,
  ALL_DOCUMENTS_QUERY,
  LATEST_SNAPSHOT_QUERY,
} from "@/lib/sanity.queries";
import { SanityPost, SanityDocument, SanitySnapshot, HomeSettings } from "@/lib/sanity.types";

export default async function Home() {
  // Fetch data from Sanity
  const homeSettings = await sanityFetch<HomeSettings>({ query: HOME_SETTINGS_QUERY });
  const allPosts = await sanityFetch<SanityPost[]>({ query: ALL_POSTS_QUERY });
  const allDocuments = await sanityFetch<SanityDocument[]>({ query: ALL_DOCUMENTS_QUERY });
  const snapshot = await sanityFetch<SanitySnapshot>({ query: LATEST_SNAPSHOT_QUERY });

  // Get featured items
  const featuredPosts = (allPosts || []).filter((p) => p.featured).slice(0, 2);
  const recentDocuments = (allDocuments || []).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-8 leading-tight">
            {homeSettings?.heroHeadline || "Kenya's economic policy—explained clearly."}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-serif">
            {homeSettings?.heroSubheadline || "Documents, analysis, and data that clarify how economic decisions shape Kenya."}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-200" />

      {/* Latest Content */}
      <section className="max-w-6xl mx-auto px-6">
        {/* Featured Posts */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Latest Analysis</h2>
          {featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">New analysis coming soon.</p>
          )}
        </div>

        {/* Featured Documents */}
        <div className="mb-24 border-t border-gray-200 pt-24">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Economic Documents</h2>
          {recentDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentDocuments.map((doc) => (
                <DocumentCard key={doc._id} doc={doc} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">Document library coming soon.</p>
          )}
        </div>
      </section>

      {/* Snapshot Preview */}
      {snapshot && (
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Kenya Economy Snapshot</h2>
          <p className="text-sm text-gray-600 mb-8">Latest: {snapshot.dateRange}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {snapshot.indicators.map((indicator, idx) => (
              <div key={idx}>
                <p className="text-xs text-gray-600 mb-2">{indicator.name}</p>
                <p className="text-3xl font-light text-gray-900 mb-1">{indicator.value}</p>
                {indicator.change && <p className="text-xs text-gray-500">{indicator.change}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
