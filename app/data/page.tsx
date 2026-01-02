'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Dataset {
  id: string;
  title: string;
  description: string;
  category: string;
  coverage: string;
  variables: string[];
  format: string;
  price: number;
  preview?: string;
}

const DATASETS: Dataset[] = [
  {
    id: 'cpi-monthly',
    title: 'CPI Monthly (2005–2025)',
    description: 'Consumer Price Index by month, cleaned and indexed. All subindices included.',
    category: 'Inflation & Prices',
    coverage: 'Monthly, 2005–2025 (240 data points)',
    variables: ['Month', 'Year', 'Overall CPI', 'Food & Non-Alcoholic Beverages', 'Alcoholic Beverages & Tobacco', 'Clothing & Footwear', 'Housing & Utilities', 'Health', 'Transport', 'Communication', 'Recreation', 'Education', 'Restaurants & Hotels', 'Miscellaneous'],
    format: 'Excel (.xlsx)',
    price: 25,
  },
  {
    id: 'population-county',
    title: 'Population by County (2009–2024)',
    description: 'Consistent county boundaries, cleaned from census and KNBS estimates. Total population and breakdown.',
    category: 'Demographics',
    coverage: '47 counties, annual (2009, 2012, 2019, annual estimates 2020–2024)',
    variables: ['County', 'Year', 'Total Population', 'Male', 'Female', 'Urban', 'Rural', 'Density (per km²)'],
    format: 'Excel (.xlsx)',
    price: 20,
  },
  {
    id: 'unemployment-labour',
    title: 'Employment & Unemployment (2005–2024)',
    description: 'Quarterly unemployment rate, labour force participation, employment by sector.',
    category: 'Labour Market',
    coverage: 'Quarterly, 2005–2024 (80 data points)',
    variables: ['Quarter', 'Year', 'Unemployment Rate (%)', 'Labour Force Participation (%)', 'Employed (thousands)', 'Agriculture', 'Manufacturing', 'Services', 'Other'],
    format: 'Excel (.xlsx)',
    price: 30,
  },
  {
    id: 'government-revenue',
    title: 'Government Revenue & Tax Collection (2010–2024)',
    description: 'Monthly government revenue, tax collection by type, breakdown by source.',
    category: 'Public Finance',
    coverage: 'Monthly, 2010–2024 (168 data points)',
    variables: ['Month', 'Year', 'Total Revenue', 'Income Tax', 'VAT', 'Excise Duty', 'Import Duty', 'Licenses & Fees', 'Other'],
    format: 'Excel (.xlsx)',
    price: 35,
  },
  {
    id: 'fuel-prices',
    title: 'Fuel Prices Retail (2010–2025)',
    description: 'Weekly retail prices for petrol, diesel, and kerosene. Cleaned from Energy & Petroleum Regulatory Authority.',
    category: 'Inflation & Prices',
    coverage: 'Weekly, 2010–2025 (780 data points)',
    variables: ['Week', 'Date', 'Petrol (KES/litre)', 'Diesel (KES/litre)', 'Kerosene (KES/litre)'],
    format: 'Excel (.xlsx)',
    price: 20,
  },
  {
    id: 'exchange-rate',
    title: 'KES/USD Exchange Rate (2000–2025)',
    description: 'Daily, monthly, and annual average exchange rates. Central Bank of Kenya official rates.',
    category: 'Monetary',
    coverage: 'Daily, 2000–2025 (9,000+ data points)',
    variables: ['Date', 'Daily Rate', 'Monthly Average', 'Annual Average'],
    format: 'Excel (.xlsx)',
    price: 25,
  },
];

const BUNDLES = [
  {
    id: 'inflation-bundle',
    name: 'Kenya Inflation Pack',
    description: 'CPI + Fuel Prices + Exchange Rate',
    datasets: ['cpi-monthly', 'fuel-prices', 'exchange-rate'],
    regularPrice: 70,
    bundlePrice: 55,
    savings: '21%',
  },
  {
    id: 'labour-bundle',
    name: 'Kenya Labour Market Pack',
    description: 'Employment + Unemployment + Population',
    datasets: ['unemployment-labour', 'population-county'],
    regularPrice: 50,
    bundlePrice: 40,
    savings: '20%',
  },
  {
    id: 'fiscal-bundle',
    name: 'Kenya Public Finance Pack',
    description: 'Government Revenue + Selected Economic Indicators',
    datasets: ['government-revenue', 'cpi-monthly'],
    regularPrice: 60,
    bundlePrice: 48,
    savings: '20%',
  },
];

export default function DataPage() {
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null);
  const [requestForm, setRequestForm] = useState({ name: '', email: '', dataset: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleRequestSubmit = (e: React.FormEvent, datasetId: string) => {
    e.preventDefault();
    setRequestForm({ ...requestForm, dataset: datasetId });
    // In production, this would send to your backend or email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kenya Data Store</h1>
          <p className="text-xl text-gray-600 mb-6">
            KNBS data, cleaned, structured, and ready for analysis.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Download cleaned datasets for research, analysis, and journalism. All data is sourced from Kenya's official statistics authority and prepared for immediate use.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-sm text-gray-700">
              <strong>📊 What you get:</strong> Cleaned Excel files with standardized column names, proper units, and complete documentation. No more manual data cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Who Uses Our Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '👨‍🎓', title: 'Students', description: 'Ready-to-use datasets for projects and theses' },
            { icon: '🔬', title: 'Researchers', description: 'Clean data for academic analysis and papers' },
            { icon: '📰', title: 'Journalists', description: 'Verified data for investigations and reports' },
            { icon: '🏛️', title: 'Policy Makers', description: 'Reliable data for evidence-based decisions' },
            { icon: '📊', title: 'Analysts', description: 'Merged, consistent time series for modeling' },
            { icon: '🏢', title: 'Businesses', description: 'Market data for strategy and planning' },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <p className="text-4xl mb-4">{item.icon}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Datasets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Available Datasets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATASETS.map((dataset) => (
            <div key={dataset.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dataset.title}</h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">{dataset.category}</p>
              <p className="text-gray-700 mb-4">{dataset.description}</p>

              <div className="bg-gray-50 rounded p-3 mb-4 text-sm">
                <p className="font-semibold text-gray-900 mb-2">📅 Coverage</p>
                <p className="text-gray-700">{dataset.coverage}</p>
              </div>

              <div className="mb-4 text-sm">
                <p className="font-semibold text-gray-900 mb-2">📋 Variables</p>
                <ul className="text-gray-700 space-y-1">
                  {dataset.variables.slice(0, 5).map((v, idx) => (
                    <li key={idx}>• {v}</li>
                  ))}
                  {dataset.variables.length > 5 && (
                    <li className="text-gray-600 italic">+ {dataset.variables.length - 5} more</li>
                  )}
                </ul>
              </div>

              <div className="flex justify-between items-center mb-4 pb-4 border-t border-gray-200 pt-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900">KES {dataset.price}</p>
                  <p className="text-xs text-gray-600">{dataset.format}</p>
                </div>
                <button
                  onClick={() => handleRequestSubmit({ preventDefault: () => {} } as any, dataset.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-sm"
                >
                  Request
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Dataset Bundles (Save Up to 21%)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUNDLES.map((bundle) => (
            <div key={bundle.id} className="border-2 border-green-600 rounded-lg p-6 relative">
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                Save {bundle.savings}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
              <p className="text-gray-700 mb-4">{bundle.description}</p>

              <div className="mb-4">
                <p className="text-lg">
                  <span className="line-through text-gray-500">KES {bundle.regularPrice}</span>{' '}
                  <span className="text-2xl font-bold text-green-600 ml-2">KES {bundle.bundlePrice}</span>
                </p>
              </div>

              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
                Request Bundle
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Browse', description: 'Explore available datasets and bundles' },
            { step: '2', title: 'Request', description: 'Click "Request" and provide your details' },
            { step: '3', title: 'Pay', description: 'Receive invoice and pay via M-Pesa or card' },
            { step: '4', title: 'Download', description: 'Get your cleaned Excel file immediately' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Quality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Quality & Transparency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ What We Do</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Download official KNBS data</li>
              <li>✓ Remove duplicates and inconsistencies</li>
              <li>✓ Standardize column names and formats</li>
              <li>✓ Verify data integrity and completeness</li>
              <li>✓ Document all variables clearly</li>
              <li>✓ Provide ReadMe with methodology</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">⚠️ What We Don't Do</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✗ Alter underlying data values</li>
              <li>✗ Add interpretations or projections</li>
              <li>✗ Sell proprietary analysis</li>
              <li>✗ Claim ownership of public data</li>
              <li>✗ Remove source attribution</li>
              <li>✗ Make guarantees about accuracy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Legal Notice</h3>
        <p className="text-gray-700 mb-3">
          All data provided is sourced from the <strong>Kenya National Bureau of Statistics (KNBS)</strong> and is in the public domain. LeadAfrik provides value through data cleaning, standardization, and documentation only.
        </p>
        <p className="text-gray-700 mb-3">
          By purchasing our datasets, you agree to use them for educational, analytical, and journalistic purposes consistent with KNBS terms.
        </p>
        <p className="text-sm text-gray-600">
          Questions? Contact us at <Link href="/contact" className="text-blue-600 hover:underline">contact@leadafrik.io</Link>
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Pick a dataset above and submit your request. You'll receive an invoice within 24 hours.
        </p>
        <p className="text-gray-700">
          Need a custom extraction or different data? <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact us</Link>
        </p>
      </section>
    </div>
  );
}
