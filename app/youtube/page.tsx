export default function YouTubePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">YouTube</h1>
          <p className="text-lg text-gray-600">
            Video explainers and episodes on Kenya's economy.
          </p>
        </header>

        <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center mb-12 border-2 border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-600 font-semibold">YouTube channel feed</p>
            <p className="text-sm text-gray-500 mt-2">
              Coming soon. Subscribe to be notified of new videos.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold inline-block"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
