import Link from "next/link";
import PostCard from "@/components/PostCard";
import DocumentCard from "@/components/DocumentCard";
import { mockPosts, mockDocuments, mockEpisodes } from "@/lib/mockData";

export default function Home() {
  const featuredPosts = mockPosts.filter((p) => p.featured).slice(0, 3);
  const recentDocuments = mockDocuments.slice(0, 3);
  const latestEpisode = mockEpisodes[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Kenya's economic policy—explained clearly.
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Documents, explainers, episodes, and data-informed analysis. Understand how
            economic decisions shape Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Read Analysis
            </Link>
            <Link
              href="/documents"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold"
            >
              Browse Documents
            </Link>
            <Link
              href="/podcast"
              className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 font-semibold"
            >
              Listen
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Analysis</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="mb-16 pb-16 border-t border-gray-200 pt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Documents Library</h2>
            <Link
              href="/documents"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Browse all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentDocuments.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>

        {latestEpisode && (
          <div className="pb-16 border-t border-gray-200 pt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Episode</h2>
              <Link
                href="/podcast"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                All episodes →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {latestEpisode.title}
              </h3>
              <p className="text-gray-600 mb-6">{latestEpisode.summary}</p>
              <Link
                href={`/podcast/${latestEpisode.slug}`}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Listen & Read →
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Snapshot Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Kenya Economy Snapshot</h2>
          <Link
            href="/snapshot"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Full snapshot →
          </Link>
        </div>
        <div className="bg-gray-50 rounded-lg p-8">
          <p className="text-sm text-gray-600 mb-6">Latest update: December 2025</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <p className="text-sm text-gray-600">Inflation (CPI)</p>
              <p className="text-2xl font-bold text-gray-900">2.8%</p>
              <p className="text-xs text-gray-500">↓ 0.2%</p>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <p className="text-sm text-gray-600">FX (KES/USD)</p>
              <p className="text-2xl font-bold text-gray-900">129.5</p>
              <p className="text-xs text-gray-500">↑ 1.2%</p>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <p className="text-sm text-gray-600">CBK Policy Rate</p>
              <p className="text-2xl font-bold text-gray-900">9.50%</p>
              <p className="text-xs text-gray-500">No change</p>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <p className="text-sm text-gray-600">Fuel Price (Premium)</p>
              <p className="text-2xl font-bold text-gray-900">162</p>
              <p className="text-xs text-gray-500">↓ 2.3%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Data Sources We Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-semibold text-gray-900">KNBS</p>
            <p className="text-xs text-gray-600">Kenya National Bureau of Statistics</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">CBK</p>
            <p className="text-xs text-gray-600">Central Bank of Kenya</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">National Treasury</p>
            <p className="text-xs text-gray-600">Public Finance</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Parliament</p>
            <p className="text-xs text-gray-600">Legislative Records</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Kenya's Economy?</h2>
          <p className="text-lg mb-8 opacity-90">
            Request a briefing or policy explainer tailored to your organization's needs.
          </p>
          <Link
            href="/consulting"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold inline-block"
          >
            Explore Consulting Services
          </Link>
        </div>
      </section>
    </div>
  );
}
