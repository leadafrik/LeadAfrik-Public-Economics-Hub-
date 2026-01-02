import Link from "next/link";
import { SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl text-gray-900">
            {SITE_NAME}
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 items-center text-sm">
            <li>
              <Link href="/blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/documents" className="hover:text-blue-600">
                Documents
              </Link>
            </li>
            <li>
              <Link href="/snapshot" className="hover:text-blue-600">
                Snapshot
              </Link>
            </li>
            <li>
              <Link href="/learn" className="hover:text-blue-600">
                Learn
              </Link>
            </li>
            <li>
              <Link href="/podcast" className="hover:text-blue-600">
                Podcast
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/consulting"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Consulting
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">☰</button>
        </div>
      </nav>
    </header>
  );
}
