"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { mockDocuments } from "@/lib/mockData";

export default function DocumentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const doc = mockDocuments.find((d) => d.slug === slug);

  if (!doc) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Document not found</h1>
        <Link href="/documents" className="text-blue-600 hover:text-blue-700">
          ← Back to documents
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/documents" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to documents
        </Link>

        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {doc.title}
          </h1>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <p>
              <span className="font-semibold">Institution:</span> {doc.institution}
            </p>
            <p>
              <span className="font-semibold">Year:</span> {doc.year}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {doc.category}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {doc.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={doc.pdfUrl}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download PDF
          </a>
        </header>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{doc.summary}</p>
        </div>

        {doc.keyTakeaways && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="space-y-2 list-disc list-inside">
              {doc.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="text-gray-700">
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        )}

        {doc.commentary && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Commentary</h2>
            <p className="text-gray-700 leading-relaxed">{doc.commentary}</p>
          </div>
        )}
      </article>
    </div>
  );
}
