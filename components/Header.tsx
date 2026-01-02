'use client';

import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/blog", label: "Analysis" },
    { href: "/documents", label: "Documents" },
    { href: "/data", label: "Data" },
    { href: "/snapshot", label: "Snapshot" },
    { href: "/learn", label: "Learn" },
    { href: "/podcast", label: "Podcast" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="border-b border-current/10 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Masthead */}
        <div className="py-12 border-b border-current/10">
          <Link href="/" className="block">
            <p className="text-xs font-semibold tracking-widest text-gray-700 uppercase mb-2">
              LeadAfrik
            </p>
            <div className="text-2xl font-serif font-bold text-gray-900">
              {SITE_NAME}
            </div>
            <p className="text-sm text-gray-600 font-serif italic mt-2">
              Kenya's economic policy, explained clearly
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="py-6">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-700">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-900 hover:border-b-2 hover:border-amber-600 transition-colors pb-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            <Link
              href="/contribute"
              className="hidden md:inline-block px-6 py-2 bg-amber-600 text-white text-sm font-semibold rounded hover:bg-amber-700 transition-colors"
            >
              Submit Analysis
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 text-lg hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-current/10 mt-6 pt-6">
              <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-gray-900 transition-colors block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 border-t border-current/10">
                  <Link
                    href="/contribute"
                    className="block px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded hover:bg-amber-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Submit Analysis
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
