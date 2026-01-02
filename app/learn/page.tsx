import Link from "next/link";
import { sanityFetch } from "@/lib/sanity.client";
import { ALL_LEARNING_MODULES_QUERY, LEARN_SETTINGS_QUERY } from "@/lib/sanity.queries";
import { LearningModule, LearnSettings } from "@/lib/sanity.types";

export default async function LearnPage() {
  const [modules, settings] = await Promise.all([
    sanityFetch<LearningModule[]>({ query: ALL_LEARNING_MODULES_QUERY }),
    sanityFetch<LearnSettings>({ query: LEARN_SETTINGS_QUERY }),
  ]);

  const pageTitle = settings?.pageTitle || "Learn";
  const pageDescription = settings?.pageDescription || "Structured learning about Kenya's economy - without being overly academic.";
  const instructionsTitle = settings?.instructionsTitle || "How to Use This";
  const instructions = settings?.instructions || [];

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <div>
          <span className="text-sm font-semibold text-amber-600 tracking-wide">EDUCATION</span>
          <h1 className="font-serif text-5xl font-light text-[#1a2847] mt-2 mb-6">{pageTitle}</h1>
          <p className="text-lg text-[#5a6b7a] max-w-2xl">{pageDescription}</p>
        </div>
      </section>

      {/* Learning Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules && modules.length > 0 ? (
            modules.map((module) => (
              <Link
                key={module._id}
                href={`/learn/${module.slug.current}`}
                className="group border border-[#e8e4db] rounded-lg p-8 bg-white hover:border-amber-600 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl font-light text-[#1a2847] group-hover:text-amber-600 transition-colors">
                    {module.title}
                  </h3>
                  {module.estimatedTime && (
                    <span className="text-xs font-semibold text-amber-600 whitespace-nowrap ml-2">
                      {module.estimatedTime}
                    </span>
                  )}
                </div>
                <p className="text-[#5a6b7a] mb-6">{module.description}</p>
                <span className="text-amber-600 hover:text-amber-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Start learning
                  <span className="ml-1">→</span>
                </span>
              </Link>
            ))
          ) : (
            <p className="text-[#5a6b7a]">Learning modules coming soon.</p>
          )}
        </div>
      </section>

      {/* Instructions Section */}
      {instructions && instructions.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-12">{instructionsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructions.map((instruction, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-600/10">
                    <span className="font-serif text-lg font-light text-amber-600">{instruction.step}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[#5a6b7a]">{instruction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
