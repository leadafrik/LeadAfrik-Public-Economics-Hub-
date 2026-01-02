import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { SINGLE_DOCUMENT_QUERY } from "@/lib/sanity.queries";
import { SanityDocument } from "@/lib/sanity.types";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

interface DocumentDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: DocumentDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const doc = await sanityFetch<SanityDocument>({
    query: SINGLE_DOCUMENT_QUERY,
    params: { slug },
  });

  if (!doc) {
    return {
      title: "Document not found",
    };
  }

  const docUrl = `${SITE_URL}/documents/${slug}`;
  const description = `${doc.title} | ${doc.institution} (${doc.year})`;

  return {
    title: `${doc.title} - ${SITE_NAME}`,
    description: description,
    openGraph: {
      title: doc.title,
      description: description,
      type: "article",
      url: docUrl,
    },
    twitter: {
      card: "summary",
      title: doc.title,
      description: description,
    },
    alternates: {
      canonical: docUrl,
    },
  };
}

export default async function DocumentDetailPage({ params }: DocumentDetailPageProps) {
  const { slug } = await params;

  const doc = await sanityFetch<SanityDocument>({
    query: SINGLE_DOCUMENT_QUERY,
    params: { slug },
  });

  if (!doc) {
    notFound();
  }

  return (
    <div className="bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/documents" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to documents
        </Link>

        <header className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4 leading-tight">
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
            {doc.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          {doc.pdfFile && (
            <a
              href={doc.pdfFile.asset.url}
              download
              className="inline-block px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Download PDF
            </a>
          )}
        </header>

        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed font-serif">{doc.summary}</p>
        </div>

        {doc.keyTakeaways && doc.keyTakeaways.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="space-y-3 list-disc list-inside">
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
            <h2 className="text-2xl font-light text-gray-900 mb-4">Commentary</h2>
            <p className="text-gray-700 leading-relaxed font-serif">{doc.commentary}</p>
          </div>
        )}
      </article>
    </div>
  );
}
