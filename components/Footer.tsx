import Link from "next/link";
import { AUTHOR, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">LeadAfrik</h3>
            <p className="text-sm text-gray-600">
              Kenya's economic policy—explained clearly. Documents, analysis, and
              education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/documents" className="text-gray-600 hover:text-blue-600">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/snapshot" className="text-gray-600 hover:text-blue-600">
                  Snapshot
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn" className="text-gray-600 hover:text-blue-600">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-gray-600 hover:text-blue-600">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-gray-600 hover:text-blue-600">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {SOCIAL_LINKS.linkedin !== "#" && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  LinkedIn
                </a>
              )}
              {SOCIAL_LINKS.youtube !== "#" && (
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600"
                >
                  YouTube
                </a>
              )}
              {SOCIAL_LINKS.podcast !== "#" && (
                <a
                  href={SOCIAL_LINKS.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Podcast
                </a>
              )}
            </div>
            <Link href="/contact" className="text-sm text-blue-600 hover:text-blue-700">
              Contact
            </Link>
          </div>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">Data Sources</h4>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-600">
            <li>Kenya National Bureau of Statistics (KNBS)</li>
            <li>Central Bank of Kenya (CBK)</li>
            <li>National Treasury</li>
            <li>Parliament of Kenya</li>
            <li>Kenya Revenue Authority (KRA)</li>
            <li>KIPPRA</li>
            <li>Ministry of Finance</li>
            <li>County Governments</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {currentYear} LeadAfrik Public Economics Hub. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/standards" className="hover:text-gray-900">
              Editorial Standards
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
