'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#faf8f3] flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <span className="text-[#5a6b7a] text-sm font-semibold tracking-wide">500</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-light text-[#1a2847] mb-6 leading-tight">
          Something went wrong
        </h1>
        <p className="text-xl text-[#5a6b7a] mb-4 leading-relaxed">
          We encountered an unexpected error. Our team has been notified and is working to fix it.
        </p>
        {error.message && (
          <p className="text-sm text-[#5a6b7a] mb-8 bg-white border border-[#e8e4db] p-4 rounded-lg">
            Error: {error.message}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-[#e8e4db] text-[#1a2847] rounded-lg hover:bg-[#f5f3ed] font-medium transition-colors"
          >
            Back to home
          </Link>
        </div>

        <p className="text-sm text-[#5a6b7a] mt-8">
          If the problem persists, contact us at{' '}
          <a href="mailto:stephen@leadafrik.com" className="text-amber-600 hover:text-amber-700 font-medium">
            stephen@leadafrik.com
          </a>
        </p>
      </div>
    </div>
  );
}
