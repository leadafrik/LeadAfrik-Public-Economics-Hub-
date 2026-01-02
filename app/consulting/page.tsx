import { CONSULTING_OFFERINGS } from "@/lib/constants";
import Link from "next/link";

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Consulting Services</h1>
          <p className="text-lg text-gray-600">
            For organizations seeking economic briefings, research support, or policy
            analysis tailored to your needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CONSULTING_OFFERINGS.map((offering, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {offering.title}
              </h3>
              <p className="text-gray-600">{offering.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Request a Briefing</h2>
          <p className="text-lg mb-8">
            Tell us what you need. I'll prepare a tailored economic briefing or analysis.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </div>
  );
}
