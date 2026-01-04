'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { sanityFetch } from '@/lib/sanity.client';
import { ABOUT_SETTINGS_QUERY } from '@/lib/sanity.queries';
import { AboutSettings } from '@/lib/sanity.types';
import { PortableText } from 'next-sanity';

export const metadata = {
  title: 'About LeadAfrik | Kenya\'s Economic Policy Hub',
  description: 'Learn about LeadAfrik\'s mission to make Kenya\'s economic data accessible and drive evidence-based policy conversations.',
};

const portableTextComponents = {
  block: {
    p: ({children}: any) => <p className="text-[#5a6b7a] leading-relaxed">{children}</p>,
    h2: ({children}: any) => <h2 className="font-serif text-2xl text-[#1a2847] mt-6 mb-4">{children}</h2>,
    h3: ({children}: any) => <h3 className="font-serif text-xl text-[#1a2847] mt-5 mb-3">{children}</h3>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-semibold text-[#1a2847]">{children}</strong>,
  },
};

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<AboutSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await sanityFetch<AboutSettings>({
          query: ABOUT_SETTINGS_QUERY,
        });
        setAboutData(data);
      } catch (error) {
        console.error('Failed to fetch about page:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf8f3] flex items-center justify-center">
        <div className="text-[#5a6b7a]">Loading...</div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="min-h-screen bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-[#5a6b7a]">About page content not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <div>
          <span className="text-sm font-semibold text-amber-600 tracking-wide">ABOUT</span>
          <h1 className="font-serif text-5xl font-light text-[#1a2847] mt-2 mb-8">About us</h1>
        </div>
      </section>

      {/* Hub Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-8">{aboutData.hubTitle}</h2>
        <div className="space-y-6">
          {aboutData.hubDescription && (
            <PortableText value={aboutData.hubDescription} components={portableTextComponents} />
          )}
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Founder Bio */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-8">{aboutData.founderTitle}</h2>
            <div className="space-y-6">
              {aboutData.founderBio && (
                <PortableText value={aboutData.founderBio} components={portableTextComponents} />
              )}
            </div>

            {/* Social Links */}
            {(aboutData.founderLinkedin || aboutData.founderEmail) && (
              <div className="mt-10 pt-10 border-t border-[#e8e4db] flex flex-wrap gap-3">
                {aboutData.founderLinkedin && (
                  <a
                    href={aboutData.founderLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium text-sm transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {aboutData.founderEmail && (
                  <a
                    href={`mailto:${aboutData.founderEmail}`}
                    className="px-5 py-2 border border-[#e8e4db] text-[#1a2847] rounded-lg hover:border-amber-600 hover:text-amber-600 font-medium text-sm transition-colors"
                  >
                    Email
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Founder Image */}
          {aboutData.founderImage?.asset?.url && (
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[#e8e4db]">
                  <Image
                    src={aboutData.founderImage.asset.url}
                    alt={aboutData.founderName}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <h3 className="font-serif text-lg text-[#1a2847] mt-6">{aboutData.founderName}</h3>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
