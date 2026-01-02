import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
          >
            {SITE_NAME}
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-12 items-center text-sm text-gray-600">
            <li>
              <Link
                href="/blog"
                className="hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/documents"
                className="hover:text-gray-900 transition-colors"
              >
                Documents
              </Link>
            </li>
            <li>
              <Link
                href="/snapshot"
                className="hover:text-gray-900 transition-colors"
              >
                Snapshot
              </Link>
            </li>
            <li>
              <Link
                href="/data"
                className="hover:text-gray-900 transition-colors"
              >
                Data
              </Link>
            </li>
            <li>
              <Link
                href="/learn"
                className="hover:text-gray-900 transition-colors"
              >
                Learn
              </Link>
            </li>
            <li>
              <Link
                href="/podcast"
                className="hover:text-gray-900 transition-colors"
              >
                Podcast
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-900 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 text-lg">☰</button>
        </div>
      </nav>
    </header>
  );
}
