import { LEARN_MODULES } from "@/lib/constants";
import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn</h1>
          <p className="text-lg text-gray-600">
            Structured learning about Kenya's economy - without being overly academic.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEARN_MODULES.map((module) => (
            <div
              key={module.id}
              className="border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 transition-colors cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {module.title}
              </h3>
              <p className="text-gray-600 mb-6">{module.description}</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Start learning →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">1.</span>
              <span>Pick a module based on your interests</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">2.</span>
              <span>Work through the lessons (estimated 20–45 min per module)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">3.</span>
              <span>Read related blog posts and documents for deeper dives</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">4.</span>
              <span>Listen to episodes that cover the same topics</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
