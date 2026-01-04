import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity.client";
import { ALL_EPISODES_QUERY } from "@/lib/sanity.queries";
import { SanityEpisode } from "@/lib/sanity.types";
import ClientSearchPodcast from "@/components/ClientSearchPodcast";

export const metadata: Metadata = {
  title: 'Podcast & Episodes | Kenya Economic Policy Insights | LeadAfrik',
  description: 'Listen to LeadAfrik\'s podcast episodes featuring in-depth analysis and interviews on Kenya\'s economic policy.',
};

export default async function PodcastPage() {
  const episodes = await sanityFetch<SanityEpisode[]>({ query: ALL_EPISODES_QUERY });

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <header className="mb-16">
          <h1 className="text-3xl font-light text-gray-900 mb-4">Podcast & Episodes</h1>
          <p className="text-lg text-gray-600 font-serif">
            Dive deep into Kenyan economic policy with explainers, analysis, and key interviews.
          </p>
        </header>

        <ClientSearchPodcast episodes={episodes || []} />
      </section>
    </div>
  );
}
