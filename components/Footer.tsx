import Link from "next/link";
import { AUTHOR, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">LeadAfrik</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Research and analysis on Kenya's public economics. We prepare official documents and data for clarity and understanding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/blog" className="hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:text-gray-900 transition-colors">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/snapshot" className="hover:text-gray-900 transition-colors">
                  Snapshot
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/learn" className="hover:text-gray-900 transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:text-gray-900 transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="hover:text-gray-900 transition-colors">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              {SOCIAL_LINKS.linkedin !== "#" && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {SOCIAL_LINKS.youtube !== "#" && (
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  YouTube
                </a>
              )}
              {SOCIAL_LINKS.podcast !== "#" && (
                <a
                  href={SOCIAL_LINKS.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Podcast
                </a>
              )}
              <Link href="/contact" className="hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <h4 className="font-semibold text-gray-900 mb-4">Data Sources</h4>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-600">
            <li>Kenya National Bureau of Statistics</li>
            <li>Central Bank of Kenya</li>
            <li>National Treasury</li>
            <li>Parliament of Kenya</li>
            <li>Kenya Revenue Authority</li>
            <li>KIPPRA</li>
            <li>Ministry of Finance</li>
            <li>County Governments</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>© {currentYear} LeadAfrik. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/standards" className="hover:text-gray-900 transition-colors">
              Standards
            </Link>
            <Link href="/contact" className="hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
