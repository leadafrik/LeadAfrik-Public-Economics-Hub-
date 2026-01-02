export default function StandardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Editorial Standards</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p>
              LeadAfrik aims to explain Kenya's economic policy clearly and credibly.
              These standards guide how we work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Facts vs. Analysis
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Facts:</strong> Numbers, dates, and quotes from official sources
              </li>
              <li>
                <strong>Analysis:</strong> Interpretation and context (clearly labeled)
              </li>
              <li>We distinguish between what we know and what we believe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Sources</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>We cite primary sources (KNBS, CBK, National Treasury, Parliament)</li>
              <li>We link to data when possible</li>
              <li>We disclose when data is incomplete or estimates are rough</li>
              <li>We credit peer institutions and researchers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Dates & Updates</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Every post, document, and snapshot includes a publish or update date</li>
              <li>Outdated posts are marked or removed</li>
              <li>
                Major corrections are noted transparently (not silently edited)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Neutrality</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Analysis is not party-political</li>
              <li>We present trade-offs and competing viewpoints</li>
              <li>Personal opinions are flagged as such</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Corrections</h2>
            <p>
              If you spot an error, let us know at{" "}
              <a href="mailto:hello@leadafrik.com" className="text-blue-600">
                hello@leadafrik.com
              </a>
              . We will correct it and note the change.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
