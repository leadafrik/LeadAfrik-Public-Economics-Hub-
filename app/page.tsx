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
  const featuredPosts = (allPosts || []).filter((p) => p.featured).slice(0, 3);
  const leadPost = featuredPosts[0];
  const secondaryPosts = featuredPosts.slice(1, 3);
  const recentDocuments = (allDocuments || []).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-32 sm:py-40">
        <div className="text-center">
          <h1 className="text-6xl sm:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight">
            {homeSettings?.heroHeadline || "Kenya's economic policy - explained clearly."}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-serif italic">
            {homeSettings?.heroSubheadline || "Documents, analysis, and data that clarify how economic decisions shape Kenya."}
          </p>
        </div>
      </section>

      {/* Lead Story + Sidebar Layout */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: Lead Story + Secondary Posts */}
          <div className="lg:col-span-2 space-y-12">
            {/* Lead Story - Featured Post */}
            {leadPost && (
              <article className="border-b border-gray-200 pb-12">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-700 rounded-sm mb-6">
                    {leadPost.type || "Article"}
                  </span>
                  <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    <Link href={`/blog/${leadPost.slug.current}`} className="hover:text-amber-600 transition-colors">
                      {leadPost.title}
                    </Link>
                  </h2>
                  {leadPost.excerpt && (
                    <p className="text-xl text-gray-700 font-serif leading-relaxed mb-8">
                      {leadPost.excerpt}
                    </p>
                  )}
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs text-gray-600 font-medium uppercase tracking-wide">
                  {leadPost.author && (
                    <span>
                      By <span className="text-gray-900 font-semibold">{leadPost.author.name}</span>
                    </span>
                  )}
                  {leadPost.publishedAt && (
                    <span>
                      {new Date(leadPost.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </article>
            )}

            {/* Secondary Posts */}
            {secondaryPosts.length > 0 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900">More Analysis</h3>
                {secondaryPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar: Documents + Snapshot */}
          <div className="lg:col-span-1 space-y-12">
            {/* Featured Documents */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-700 mb-8 border-b border-gray-200 pb-4">
                Latest Documents
              </h3>
              {recentDocuments.length > 0 ? (
                <div className="space-y-6">
                  {recentDocuments.map((doc) => (
                    <div key={doc._id}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-2">
                        {doc.category}
                      </p>
                      <h4 className="text-lg font-serif font-bold text-gray-900 mb-3">
                        <Link href={`/documents/${doc.slug.current}`} className="hover:text-amber-600 transition-colors">
                          {doc.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">{doc.institution} • {doc.year}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 italic">Document library coming soon.</p>
              )}
            </div>

            {/* Snapshot Preview */}
            {snapshot && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-700 mb-8 border-b border-gray-200 pb-4">
                  Economic Snapshot
                </h3>
                <p className="text-xs text-gray-600 mb-6 font-medium">Latest: {snapshot.dateRange}</p>
                <div className="space-y-4">
                  {snapshot.indicators.slice(0, 4).map((indicator, idx) => (
                    <div key={idx}>
                      <p className="text-xs text-gray-600 mb-1 font-medium">{indicator.name}</p>
                      <p className="text-2xl font-serif font-bold text-gray-900 mb-1">{indicator.value}</p>
                      {indicator.change && (
                        <p className="text-xs text-gray-600">{indicator.change}</p>
                      )}
                    </div>
                  ))}
                </div>
                <Link
                  href="/snapshot"
                  className="inline-block mt-6 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  View Full Snapshot →
                </Link>
              </div>
            )}

            {/* Data CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-3">
                Economic Data
              </h4>
              <p className="text-sm text-gray-700 mb-4 font-serif">
                We prepare selected Kenyan economic datasets for research and analysis.
              </p>
              <Link
                href="/data"
                className="inline-block text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Browse Data →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
