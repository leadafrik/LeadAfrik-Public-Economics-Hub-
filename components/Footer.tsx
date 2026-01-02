import Link from "next/link";
import { AUTHOR, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-16">
          {/* LeadAfrik */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold tracking-widest text-gray-700 uppercase mb-3">
              LeadAfrik
            </p>
            <p className="text-lg font-serif font-bold text-gray-900 mb-4">
              Kenya's Economic Policy Institute
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-serif">
              Research and analysis on Kenya's public economics. We prepare official documents and data for clarity and understanding.
            </p>
          </div>

          {/* Research */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">Research</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>
                <Link href="/blog" className="hover:text-gray-900 transition-colors">
                  Analysis
                </Link>
              </li>
              <li>
                <Link href="/documents" className="hover:text-gray-900 transition-colors">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/data" className="hover:text-gray-900 transition-colors">
                  Data
                </Link>
              </li>
              <li>
                <Link href="/snapshot" className="hover:text-gray-900 transition-colors">
                  Snapshot
                </Link>
              </li>
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">Learning</h4>
            <ul className="space-y-4 text-sm text-gray-700">
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
                <Link href="/about" className="hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-700">
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
        <div className="border-t border-current/10 pt-16 mb-16">
          <h4 className="font-semibold text-gray-900 mb-8 text-sm uppercase tracking-wider">Data Sources</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-700 leading-relaxed">
            <div>
              <p className="font-medium mb-2">Official Statistics</p>
              <ul className="space-y-2 text-gray-600">
                <li>Kenya National Bureau of Statistics</li>
                <li>Central Bank of Kenya</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Government</p>
              <ul className="space-y-2 text-gray-600">
                <li>National Treasury</li>
                <li>Parliament of Kenya</li>
                <li>Kenya Revenue Authority</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Research</p>
              <ul className="space-y-2 text-gray-600">
                <li>KIPPRA</li>
                <li>Ministry of Finance</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Subnational</p>
              <ul className="space-y-2 text-gray-600">
                <li>County Governments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-current/10 pt-12 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 gap-6">
          <p>© {currentYear} LeadAfrik. All rights reserved.</p>
          <div className="flex gap-8">
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
