import DocumentCard from "@/components/DocumentCard";
import { sanityFetch } from "@/lib/sanity.client";
import { ALL_DOCUMENTS_QUERY } from "@/lib/sanity.queries";
import { DOCUMENT_CATEGORIES, DOCUMENT_TAGS } from "@/lib/constants";
import { SanityDocument } from "@/lib/sanity.types";
import ClientSearchDocuments from "@/components/ClientSearchDocuments";

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

        <ClientSearchDocuments documents={documents || []} />
      </section>
    </div>
  );
}
