import { AUTHOR } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">About</h1>

        {/* About the Hub */}
        <div className="mb-16 pb-16 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            LeadAfrik Public Economics Hub
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              LeadAfrik Public Economics Hub is a media and education platform focused on
              Kenyan economic policy. We publish document summaries, explainers, and
              data-informed analysis to help Kenyans understand how economic decisions
              shape daily life - taxes, prices, public spending, debt, and devolution.
            </p>
            <p>
              Our work prioritizes clarity, evidence, and context. Where possible, we link
              directly to primary sources such as KNBS, CBK, National Treasury, Parliament,
              and public research institutions.
            </p>
            <p>
              We believe that public economics should be accessible. Policy decisions made
              in parliament and treasury affect every Kenyan, yet remain opaque and
              technical. We exist to change that.
            </p>
          </div>
        </div>

        {/* About Stephen */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Stephen</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              I'm <strong>Stephen Omukoko Okoth</strong>, an Oberlin College graduate with
              a B.A. in <strong>Mathematical Economics (Honors)</strong>, a{" "}
              <strong>Politics minor</strong>, and a <strong>Business concentration</strong>.
            </p>
            <p>
              My academic work has focused on public economics and development outcomes,
              including research on <strong>fiscal decentralization and neonatal/maternal
              health outcomes in Kenya</strong>. I've also worked in fixed income through a
              Morgan Stanley internship in New York, rotating across securitized products,
              structured financing, and municipal/private lending.
            </p>
            <p>
              I'm interested in public finance, political economy, and international
              affairs - and in making economic policy understandable to everyday Kenyans.
            </p>
            <p>
              <strong>Languages:</strong> English, Swahili
              <br />
              <strong>Tools:</strong> SQL, Stata, Excel, data visualization, and financial
              analysis
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-center"
            >
              LinkedIn
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-center"
            >
              YouTube
            </a>
            <a
              href="https://podcast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 font-semibold text-center"
            >
              Podcast
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
