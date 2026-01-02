import Link from "next/link";
import DocumentCard from "@/components/DocumentCard";
import { mockDocuments } from "@/lib/mockData";
import { DOCUMENT_CATEGORIES, DOCUMENT_TAGS } from "@/lib/constants";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Documents Library</h1>
          <p className="text-lg text-gray-600">
            Searchable archive of major economic and policy documents from Kenya.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search documents..."
            className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
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
        <div className="mb-8">
          <p className="text-sm font-semibold text-gray-600 mb-3">Tags:</p>
          <div className="flex flex-wrap gap-2">
            {DOCUMENT_TAGS.map((tag) => (
              <button
                key={tag}
                className="text-sm bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 px-3 py-1 rounded transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockDocuments.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>
    </div>
  );
}
