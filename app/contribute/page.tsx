"use client";

import { FormEvent } from "react";

export default function ContributePage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your submission. I'll review it soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contribute</h1>
          <p className="text-lg text-gray-600">
            We welcome submissions from economists and policy experts. Contribute articles,
            data analysis, or policy briefs to the hub.
          </p>
        </header>

        {/* Editorial Standards */}
        <div className="mb-12 p-8 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Editorial Standards</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Neutrality:</strong> Analysis is evidence-based, not politically
                partisan
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Clarity:</strong> Jargon is explained; the piece is accessible
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Citations:</strong> Claims are sourced; data is traceable
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Length:</strong> 1,500–3,500 words (shorter for briefs, longer for
                analyses okay with approval)
              </span>
            </li>
          </ul>
        </div>

        {/* Pitch Form */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pitch Your Article</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Article Title
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Article Type
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select type</option>
                <option value="explainer">Explainer</option>
                <option value="brief">Policy Brief</option>
                <option value="longform">Longform Analysis</option>
                <option value="data-note">Data Note</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Brief Summary (2–3 sentences)
              </label>
              <textarea
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Topics / Tags (comma-separated)
              </label>
              <input
                type="text"
                placeholder="e.g., Tax, Debt, Public Finance"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Submit Pitch
            </button>
          </form>
        </div>

        {/* What Happens Next */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="font-bold text-gray-900 flex-shrink-0">1.</span>
              <span>I review your pitch within 5–7 business days</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-gray-900 flex-shrink-0">2.</span>
              <span>If approved, you'll receive editorial feedback and a timeline</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-gray-900 flex-shrink-0">3.</span>
              <span>Submit your draft for copy editing and fact-checking</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-gray-900 flex-shrink-0">4.</span>
              <span>Your article is published and promoted across channels</span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
