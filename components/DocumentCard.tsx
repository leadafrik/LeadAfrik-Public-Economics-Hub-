import Link from "next/link";
import { Document } from "@/lib/types";
import { SanityDocument } from "@/lib/sanity.types";

interface DocumentCardProps {
  doc: Document | SanityDocument;
}

export default function DocumentCard({ doc }: DocumentCardProps) {
  const isDocument = (d: Document | SanityDocument): d is Document => 'id' in d;

  const slug = isDocument(doc) ? doc.slug : doc.slug.current;
  const title = doc.title;
  const institution = doc.institution;
  const year = doc.year;
  const summary = doc.summary;
  const category = doc.category;
  const tags = doc.tags || [];

  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          <Link href={`/documents/${slug}`} className="hover:text-blue-600">
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600">{institution}</p>
        <p className="text-xs text-gray-500 mt-1">Published: {year}</p>
      </div>

      <p className="text-sm text-gray-700 mb-4 line-clamp-2">{summary}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded">
          {category}
        </span>
        {tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/documents/${slug}`}
        className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
      >
        Read Summary →
      </Link>
    </article>
  );
}
