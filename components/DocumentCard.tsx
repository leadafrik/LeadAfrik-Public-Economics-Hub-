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
    <article className="border border-gray-200/60 rounded-lg p-8 hover:shadow-lg hover:border-gold transition-all duration-200 bg-white">
      {/* Category + Year */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-700 rounded-sm">
          {category}
        </span>
        <span className="text-xs text-gray-600 font-medium">{year}</span>
      </div>

      {/* Title + Institution */}
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 leading-tight">
        <Link href={`/documents/${slug}`} className="hover:text-gold transition-colors">
          {title}
        </Link>
      </h3>

      <p className="text-sm text-gray-700 font-medium mb-6 uppercase tracking-wide">
        {institution}
      </p>

      {/* Summary */}
      {summary && (
        <p className="text-gray-700 mb-6 leading-relaxed line-clamp-2 font-serif">
          {summary}
        </p>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 border-t border-gray-100 pt-6">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs text-gray-600 border border-gray-200 rounded-sm hover:border-gold transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <Link
        href={`/documents/${slug}`}
        className="text-sm font-semibold text-gold hover:text-gold/80 transition-colors inline-flex items-center gap-2"
      >
        View Document
        <span>→</span>
      </Link>
    </article>
  );
}
