import Link from "next/link";
import { Document } from "@/lib/types";

interface DocumentCardProps {
  doc: Document;
}

export default function DocumentCard({ doc }: DocumentCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          <Link href={`/documents/${doc.slug}`} className="hover:text-blue-600">
            {doc.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600">{doc.institution}</p>
        <p className="text-xs text-gray-500 mt-1">Published: {doc.year}</p>
      </div>

      <p className="text-sm text-gray-700 mb-4 line-clamp-2">{doc.summary}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded">
          {doc.category}
        </span>
        {doc.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/documents/${doc.slug}`}
        className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
      >
        Read Summary →
      </Link>
    </article>
  );
}
