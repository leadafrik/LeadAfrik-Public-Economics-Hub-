'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { sanityFetch } from '@/lib/sanity.client';
import { ALL_DATASETS_QUERY, ALL_DATASET_BUNDLES_QUERY, DATA_SETTINGS_QUERY } from '@/lib/sanity.queries';
import { Dataset, DatasetBundle, DataSettings } from '@/lib/sanity.types';

export default function DataPage() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [bundles, setBundles] = useState<DatasetBundle[]>([]);
  const [settings, setSettings] = useState<DataSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [datasetsData, bundlesData, settingsData] = await Promise.all([
          sanityFetch<Dataset[]>({ query: ALL_DATASETS_QUERY }),
          sanityFetch<DatasetBundle[]>({ query: ALL_DATASET_BUNDLES_QUERY }),
          sanityFetch<DataSettings>({ query: DATA_SETTINGS_QUERY }),
        ]);
        setDatasets(datasetsData || []);
        setBundles(bundlesData || []);
        setSettings(settingsData);
      } catch (error) {
        console.error('Failed to fetch data page content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf8f3] flex items-center justify-center">
        <div className="text-[#5a6b7a]">Loading...</div>
      </div>
    );
  }

  const pageTitle = settings?.pageTitle || 'Kenya Data Store';
  const pageDescription = settings?.pageDescription || 'Official KNBS data, cleaned and structured for immediate use';
  const pageIntro = settings?.pageIntro || '';
  const audiences = settings?.audiences || [];
  const approachItems = settings?.dataStandardsApproach || [];
  const dontItems = settings?.dataStandardsDont || [];
  const legalNotice = settings?.legalNotice || '';
  const ctaHeadline = settings?.ctaHeadline || "Ready to access Kenya's data";
  const ctaDescription = settings?.ctaDescription || '';

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="text-sm font-semibold text-amber-600 tracking-wide">DATASETS</span>
          </div>
          <h1 className="font-serif text-5xl font-light text-[#1a2847] mb-6 leading-tight">{pageTitle}</h1>
          <p className="text-xl text-[#5a6b7a] mb-6 font-light">
            {pageDescription}
          </p>
          {pageIntro && (
            <p className="text-lg text-[#1a2847] mb-8 leading-relaxed">
              {pageIntro}
            </p>
          )}
        </div>
      </section>

      {/* Audiences Section */}
      {audiences && audiences.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
          <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">Prepared for all users</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {audiences.map((audience, idx) => (
              <div key={idx}>
                <h3 className="font-serif text-lg text-[#1a2847] mb-3">{audience.title}</h3>
                <p className="text-[#5a6b7a] leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Datasets */}
      {datasets.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
          <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">Available datasets</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {datasets.map((dataset) => (
              <div key={dataset._id} className="border border-[#e8e4db] rounded-lg p-8 bg-white hover:border-amber-600/30 hover:shadow-md transition-all">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-amber-600 tracking-wide">{dataset.category}</span>
                </div>
                <h3 className="font-serif text-xl font-light text-[#1a2847] mb-4">{dataset.title}</h3>
                <p className="text-[#5a6b7a] mb-6">{dataset.description}</p>

                {dataset.coverage && (
                  <div className="mb-6 pb-6 border-t border-[#e8e4db] pt-6">
                    <p className="text-sm font-semibold text-[#1a2847] mb-1">Coverage</p>
                    <p className="text-sm text-[#5a6b7a]">{dataset.coverage}</p>
                  </div>
                )}

                {dataset.variables && dataset.variables.length > 0 && (
                  <div className="mb-6 pb-6 border-b border-[#e8e4db]">
                    <p className="text-sm font-semibold text-[#1a2847] mb-3">Variables</p>
                    <div className="text-sm text-[#5a6b7a] space-y-2">
                      {dataset.variables.slice(0, 4).map((v, idx) => (
                        <div key={idx}>{v}</div>
                      ))}
                      {dataset.variables.length > 4 && (
                        <div className="text-[#5a6b7a]">+ {dataset.variables.length - 4} more</div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-end">
                  <div>
                    {dataset.format && <p className="text-xs text-[#5a6b7a] mb-1">{dataset.format}</p>}
                    <p className="font-serif text-2xl font-light text-[#1a2847]">KES {dataset.price}</p>
                  </div>
                  <button className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium text-sm transition-colors">
                    Request
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bundles */}
      {bundles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
          <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">Save with bundles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundles.map((bundle) => {
              const savings = Math.round(((bundle.regularPrice - bundle.bundlePrice) / bundle.regularPrice) * 100);
              return (
                <div key={bundle._id} className="border border-amber-600/40 rounded-lg p-8 bg-white relative hover:border-amber-600 transition-all">
                  <div className="absolute top-6 right-6 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Save {savings}%
                  </div>
                  <h3 className="font-serif text-lg text-[#1a2847] mb-2 mt-4">{bundle.name}</h3>
                  {bundle.description && <p className="text-sm text-[#5a6b7a] mb-6">{bundle.description}</p>}

                  <div className="mb-8 pb-8 border-b border-[#e8e4db]">
                    <p className="text-xs text-[#5a6b7a] tracking-wide mb-2">PRICING</p>
                    <div className="flex items-baseline gap-3">
                      <span className="line-through text-[#5a6b7a] text-sm">KES {bundle.regularPrice}</span>
                      <span className="font-serif text-2xl font-light text-amber-600">KES {bundle.bundlePrice}</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium transition-colors">
                    Request Bundle
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Browse', description: 'Explore available datasets and bundles' },
            { step: '02', title: 'Request', description: 'Submit your details and dataset preferences' },
            { step: '03', title: 'Invoice', description: 'Receive payment details within 24 hours' },
            { step: '04', title: 'Download', description: 'Access your cleaned data immediately' },
          ].map((item) => (
            <div key={item.step}>
              <p className="text-3xl font-serif font-light text-amber-600/40 mb-4">{item.step}</p>
              <h3 className="font-serif text-lg text-[#1a2847] mb-3">{item.title}</h3>
              <p className="text-[#5a6b7a] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Standards */}
      {(approachItems.length > 0 || dontItems.length > 0) && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
          <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">Data standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {approachItems.length > 0 && (
              <div>
                <h3 className="font-serif text-lg text-[#1a2847] mb-6">Our approach</h3>
                <ul className="space-y-4 text-[#5a6b7a]">
                  {approachItems.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-amber-600 font-semibold flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {dontItems.length > 0 && (
              <div>
                <h3 className="font-serif text-lg text-[#1a2847] mb-6">What we don''t do</h3>
                <ul className="space-y-4 text-[#5a6b7a]">
                  {dontItems.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-[#5a6b7a] font-semibold flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Legal Notice */}
      {legalNotice && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
          <h3 className="font-serif text-lg text-[#1a2847] mb-6">Legal notice</h3>
          <div className="max-w-3xl space-y-4 text-[#5a6b7a]">
            <p>{legalNotice}</p>
            <p className="text-sm pt-4 border-t border-[#e8e4db]">
              Questions about these datasets or custom extractions? Contact <a href="mailto:info@leadafrik.com" className="text-amber-600 hover:text-amber-700 font-medium">info@leadafrik.com</a>
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl font-light text-[#1a2847] mb-6">{ctaHeadline}</h2>
          <p className="text-lg text-[#5a6b7a] mb-8">
            {ctaDescription}
          </p>
          <p className="text-[#5a6b7a]">
            Looking for a custom extraction or specific data not listed here? <a href="mailto:info@leadafrik.com" className="text-amber-600 hover:text-amber-700 font-medium">Get in touch with us</a>
          </p>
        </div>
      </section>
    </div>
  );
}
