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
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-serif">
            {homeSettings?.heroSubheadline || "Documents, explainers, episodes, and data-informed analysis. Understand how economic decisions shape Kenya."}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/blog"
              className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold"
            >
              Read Analysis
            </Link>
            <Link
              href="/data"
              className="px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-semibold"
            >
              Browse Data
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 py-8 border-t border-gray-200" />

      {/* Latest Content */}
      <section className="max-w-6xl mx-auto px-6">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-24">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-light text-gray-900">Latest Analysis</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Featured Documents */}
        {recentDocuments.length > 0 && (
          <div className="mb-24 border-t border-gray-200 pt-24">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-light text-gray-900">Documents Library</h2>
              <Link href="/documents" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Browse all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentDocuments.map((doc) => (
                <DocumentCard key={doc._id} doc={doc} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Snapshot Preview */}
      {snapshot && (
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-light text-gray-900">Kenya Economy Snapshot</h2>
            <Link href="/snapshot" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Full snapshot →
            </Link>
          </div>
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

      {/* Trust Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200">
        <h2 className="text-2xl font-light text-gray-900 mb-12 text-center">
          Data Sources We Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
          <div>
            <p className="font-semibold text-gray-900 mb-2">KNBS</p>
            <p className="text-xs text-gray-600">Kenya National Bureau of Statistics</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">CBK</p>
            <p className="text-xs text-gray-600">Central Bank of Kenya</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">Treasury</p>
            <p className="text-xs text-gray-600">Public Finance</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">Parliament</p>
            <p className="text-xs text-gray-600">Legislative Records</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200">
        <div className="bg-gray-50 p-12 sm:p-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6">
            Need Cleaned KNBS Data?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Research-ready datasets. CPI, population, employment, government revenue, and more—all cleaned and standardized for analysis.
          </p>
          <Link
            href="/data"
            className="inline-block px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold"
          >
            Browse Data Store
          </Link>
        </div>
      </section>
    </div>
  );
}
