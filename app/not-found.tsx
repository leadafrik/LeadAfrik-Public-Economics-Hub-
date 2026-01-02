import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8f3] flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <span className="text-[#5a6b7a] text-sm font-semibold tracking-wide">404</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-light text-[#1a2847] mb-6 leading-tight">
          Page not found
        </h1>
        <p className="text-xl text-[#5a6b7a] mb-4 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Check the URL and try again.
        </p>
        <p className="text-[#5a6b7a] mb-12">
          If you believe this is an error, please contact us at{' '}
          <a href="mailto:stephen@leadafrik.com" className="text-amber-600 hover:text-amber-700 font-medium">
            stephen@leadafrik.com
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-[#e8e4db] text-[#1a2847] rounded-lg hover:bg-[#f5f3ed] font-medium transition-colors"
          >
            Browse articles
          </Link>
        </div>
      </div>
    </div>
  );
}
