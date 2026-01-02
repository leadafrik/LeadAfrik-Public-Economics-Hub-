'use client';

import { useState } from 'react';

interface CitationBoxProps {
  citation: string;
  title: string;
  year?: number;
}

export default function CitationBox({ citation, title, year }: CitationBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded p-6 my-8">
      <h3 className="text-sm font-light text-gray-700 uppercase tracking-wide mb-3">
        Cite this data
      </h3>
      <pre className="bg-white p-4 border border-gray-200 text-sm font-mono text-gray-800 overflow-x-auto mb-4">
        {citation}
      </pre>
      <button
        onClick={handleCopy}
        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
      >
        {copied ? '✓ Copied' : '📋 Copy citation'}
      </button>
    </div>
  );
}
