"use client";

import { FormEvent, useState } from "react";

export default function ContributePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission here - integrate with email service
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
            Contribute Your Analysis
          </h1>
          <p className="text-lg text-gray-600 font-serif mb-4">
            We publish rigorous economic analysis from independent researchers, policy experts, and economists.
          </p>
          <p className="text-gray-600">
            If you have original research or analysis on Kenya's economy, we'd like to hear from you.
          </p>
        </header>

        {/* Why Contribute */}
        <div className="mb-16 p-8 border border-amber-200 bg-amber-50/30 rounded">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Contribute?</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold">→</span>
              <span>Reach policymakers, researchers, and economics professionals across East Africa</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold">→</span>
              <span>Your analysis gets amplified through our newsletter, social media, and partner networks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold">→</span>
              <span>Professional editing and fact-checking support from our team</span>
            </li>
          </ul>
        </div>

        {/* Editorial Standards */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Editorial Standards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-600 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">Neutrality</h3>
              <p className="text-sm text-gray-600">Analysis is evidence-based and independent, not politically partisan</p>
            </div>
            <div className="border-l-2 border-amber-600 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">Clarity</h3>
              <p className="text-sm text-gray-600">Jargon is explained; the piece is accessible to educated general readers</p>
            </div>
            <div className="border-l-2 border-amber-600 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">Citations</h3>
              <p className="text-sm text-gray-600">Claims are sourced; data is traceable and reproducible</p>
            </div>
            <div className="border-l-2 border-amber-600 pl-6">
              <h3 className="font-semibold text-gray-900 mb-2">Length</h3>
              <p className="text-sm text-gray-600">1,500–3,500 words (briefs shorter, analyses longer with approval)</p>
            </div>
          </div>
        </div>

        {/* Pitch Form */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Submit Your Pitch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Article Title
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Article Type
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
              >
                <option value="">Select type</option>
                <option value="explainer">Explainer</option>
                <option value="brief">Policy Brief</option>
                <option value="longform">Longform Analysis</option>
                <option value="data-note">Data Note</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Brief Summary (2–3 sentences)
              </label>
              <textarea
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
                placeholder="Describe your analysis in 2–3 sentences"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Topics / Tags (comma-separated)
              </label>
              <input
                type="text"
                placeholder="e.g., Tax Policy, Public Debt, Fiscal Planning"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors font-medium"
            >
              Submit Pitch
            </button>

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded text-sm">
                ✓ Thanks for your submission. We'll review it within 5–7 business days.
              </div>
            )}
          </form>
        </div>

        {/* What Happens Next */}
        <div className="mb-8">
          <h2 className="text-2xl font-light text-gray-900 mb-8">What Happens Next?</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Pitch Review</h3>
                <p className="text-gray-600 text-sm">We review your pitch within 5–7 business days</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Approval & Editorial Brief</h3>
                <p className="text-gray-600 text-sm">If approved, you'll receive editorial feedback, style guidelines, and a timeline</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Draft Submission</h3>
                <p className="text-gray-600 text-sm">Submit your draft for copy editing, fact-checking, and technical review</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Publication & Promotion</h3>
                <p className="text-gray-600 text-sm">Your article is published and promoted across our newsletter, social channels, and partner networks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
