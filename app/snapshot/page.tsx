import { mockSnapshot } from "@/lib/mockData";

export default function SnapshotPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kenya Economy Snapshot
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Key economic indicators updated regularly.
          </p>
          <p className="text-sm font-semibold text-gray-700">
            Latest Update: {mockSnapshot.dateRange}
          </p>
        </header>

        {/* Key Indicators */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Indicators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockSnapshot.indicators.map((indicator, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white">
                <p className="text-sm text-gray-600 mb-2">{indicator.name}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  {indicator.value}
                </p>
                {indicator.change && (
                  <p
                    className={`text-sm font-semibold ${
                      indicator.change.includes("↓")
                        ? "text-green-600"
                        : indicator.change.includes("↑")
                          ? "text-red-600"
                          : "text-gray-600"
                    }`}
                  >
                    {indicator.change}
                  </p>
                )}
                {indicator.note && (
                  <p className="text-xs text-gray-500 mt-2">{indicator.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What Changed */}
        <div className="mb-16 border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What Changed</h2>
          <ul className="space-y-4">
            {mockSnapshot.narrative.map((point, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Data Sources</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockSnapshot.sources.map((source, idx) => (
              <li key={idx} className="text-gray-700">
                {source}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
