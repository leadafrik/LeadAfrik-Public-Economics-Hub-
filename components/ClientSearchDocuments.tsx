'use client';

import { useState, useMemo } from 'react';
import DocumentCard from '@/components/DocumentCard';
import { SanityDocument } from '@/lib/sanity.types';
import { DOCUMENT_CATEGORIES } from '@/lib/constants';

interface ClientSearchDocumentsProps {
  documents: SanityDocument[];
}

export default function ClientSearchDocuments({ documents }: ClientSearchDocumentsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch =
        !searchTerm ||
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.institution.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !selectedCategory || doc.category === selectedCategory;
      const matchesYear = !selectedYear || doc.year.toString() === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [documents, searchTerm, selectedCategory, selectedYear]);

  const years = useMemo(() => {
    const yearSet = new Set(documents.map((doc) => doc.year));
    return Array.from(yearSet).sort((a, b) => b - a);
  }, [documents]);

  return (
    <>
      {/* Search & Filters */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by title, institution..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:col-span-2 px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
        >
          <option value="">All categories</option>
          {DOCUMENT_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
        >
          <option value="">All years</option>
          {years.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Results counter */}
      {(searchTerm || selectedCategory || selectedYear) && (
        <p className="text-sm text-gray-600 mb-8">
          Found {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
          {(searchTerm || selectedCategory || selectedYear) && ' matching your filters'}
        </p>
      )}

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredDocuments && filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <DocumentCard key={doc._id} doc={doc} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 mb-4">
              {documents.length === 0
                ? 'No documents yet.'
                : 'No documents match your filters.'}
            </p>
            {(searchTerm || selectedCategory || selectedYear) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSelectedYear('');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
