import Link from "next/link";
import DocumentCard from "@/components/DocumentCard";
import { sanityFetch } from "@/lib/sanity.client";
import { ALL_DOCUMENTS_QUERY } from "@/lib/sanity.queries";
import { DOCUMENT_CATEGORIES, DOCUMENT_TAGS } from "@/lib/constants";
import { SanityDocument } from "@/lib/sanity.types";

export default async function DocumentsPage() {
  const documents = await sanityFetch<SanityDocument[]>({ query: ALL_DOCUMENTS_QUERY });

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Documents Library</h1>
          <p className="text-lg text-gray-600 font-serif">
            Economic policy documents, research, and government records.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="md:col-span-2 px-4 py-3 border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors"
          />
          <select className="px-4 py-3 border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors">
            <option value="">Category</option>
            {DOCUMENT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="">Year</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        {/* Tags */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-gray-600 mb-4 uppercase tracking-widest">Filter by topic</p>
          <div className="flex flex-wrap gap-3">
            {DOCUMENT_TAGS.map((tag) => (
              <button
                key={tag}
                className="text-sm text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-600 px-4 py-2 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents && documents.length > 0 ? (
            documents.map((doc) => (
              <DocumentCard key={doc._id} doc={doc} />
            ))
          ) : (
            <p className="text-gray-600">No documents yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
