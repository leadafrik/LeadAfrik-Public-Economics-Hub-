'use client';

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/blog", label: "Blog" },
    { href: "/documents", label: "Documents" },
    { href: "/snapshot", label: "Snapshot" },
    { href: "/data", label: "Data" },
    { href: "/learn", label: "Learn" },
    { href: "/podcast", label: "Podcast" },
    { href: "/about", label: "About" },
  ];

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

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-12 items-center text-sm text-gray-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 text-lg hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 mt-4 pt-4">
            <ul className="flex flex-col gap-4 text-sm text-gray-600">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-900 transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
