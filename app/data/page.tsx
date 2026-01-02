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
    const dataset = DATASETS.find(d => d.id === datasetId);
    if (!requestForm.name || !requestForm.email) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create mailto link with request details
    const subject = `Data Request: ${dataset?.title}`;
    const body = `Name: ${requestForm.name}\nEmail: ${requestForm.email}\nDataset: ${dataset?.title}\n\nPlease send me this dataset.`;
    const mailtoLink = `mailto:omukokookoth@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRequestForm({ name: '', email: '', dataset: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="text-sm font-semibold text-amber-600 tracking-wide">DATASETS</span>
          </div>
          <h1 className="font-serif text-5xl font-light text-[#1a2847] mb-6 leading-tight">Kenya Data Store</h1>
          <p className="text-xl text-[#5a6b7a] mb-6 font-light">
            Official KNBS data, cleaned and structured for immediate use
          </p>
          <p className="text-lg text-[#1a2847] mb-8 leading-relaxed">
            Download cleaned Excel files for research, analysis, and journalism. All datasets are sourced from Kenya's National Bureau of Statistics with standardized formatting, proper documentation, and clear variable definitions.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">Prepared for all users</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Academic Researchers', description: 'Clean datasets for empirical analysis, econometric modeling, and publishable research' },
            { title: 'Policy Makers', description: 'Reliable data for evidence-based policy decisions and government strategy' },
            { title: 'Journalists', description: 'Verified data for investigations, fact-checking, and economic reporting' },
            { title: 'Data Analysts', description: 'Merged time series and consistent methodologies for modeling and forecasting' },
            { title: 'Students', description: 'Ready-to-use datasets for academic projects, theses, and coursework' },
            { title: 'Businesses', description: 'Market data and economic indicators for strategic planning and risk analysis' },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-lg text-[#1a2847] mb-3">{item.title}</h3>
              <p className="text-[#5a6b7a] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Datasets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">Available datasets</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DATASETS.map((dataset) => (
            <div key={dataset.id} className="border border-[#e8e4db] rounded-lg p-8 bg-white hover:border-amber-600/30 hover:shadow-md transition-all">
              <div className="mb-4">
                <span className="text-xs font-semibold text-amber-600 tracking-wide">{dataset.category}</span>
              </div>
              <h3 className="font-serif text-xl font-light text-[#1a2847] mb-4">{dataset.title}</h3>
              <p className="text-[#5a6b7a] mb-6">{dataset.description}</p>

              <div className="mb-6 pb-6 border-t border-[#e8e4db] pt-6">
                <p className="text-sm font-semibold text-[#1a2847] mb-1">Coverage</p>
                <p className="text-sm text-[#5a6b7a]">{dataset.coverage}</p>
              </div>

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

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-[#5a6b7a] mb-1">{dataset.format}</p>
                  <p className="font-serif text-2xl font-light text-[#1a2847]">KES {dataset.price}</p>
                </div>
                <button
                  onClick={() => setSelectedDataset(dataset.id)}
                  className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium text-sm transition-colors"
                >
                  Request
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bundles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">Save with bundles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUNDLES.map((bundle) => (
            <div key={bundle.id} className="border border-amber-600/40 rounded-lg p-8 bg-white relative hover:border-amber-600 transition-all">
              <div className="absolute top-6 right-6 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Save {bundle.savings}
              </div>
              <h3 className="font-serif text-lg text-[#1a2847] mb-2 mt-4">{bundle.name}</h3>
              <p className="text-sm text-[#5a6b7a] mb-6">{bundle.description}</p>

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
          ))}
        </div>
      </section>

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

      {/* Data Quality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <h2 className="font-serif text-3xl font-light text-[#1a2847] mb-16">Data standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-lg text-[#1a2847] mb-6">Our approach</h3>
            <ul className="space-y-4 text-[#5a6b7a]">
              <li className="flex gap-3">
                <span className="text-amber-600 font-semibold flex-shrink-0">✓</span>
                <span>Download official KNBS data directly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-semibold flex-shrink-0">✓</span>
                <span>Remove duplicates and inconsistencies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-semibold flex-shrink-0">✓</span>
                <span>Standardize column names and data types</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-semibold flex-shrink-0">✓</span>
                <span>Verify completeness and data integrity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-semibold flex-shrink-0">✓</span>
                <span>Document all variables and definitions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-semibold flex-shrink-0">✓</span>
                <span>Include methodology and data notes</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg text-[#1a2847] mb-6">What we don't do</h3>
            <ul className="space-y-4 text-[#5a6b7a]">
              <li className="flex gap-3">
                <span className="text-[#5a6b7a] font-semibold flex-shrink-0">—</span>
                <span>Alter underlying data values</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5a6b7a] font-semibold flex-shrink-0">—</span>
                <span>Add interpretations or projections</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5a6b7a] font-semibold flex-shrink-0">—</span>
                <span>Sell proprietary analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5a6b7a] font-semibold flex-shrink-0">—</span>
                <span>Claim ownership of public data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5a6b7a] font-semibold flex-shrink-0">—</span>
                <span>Remove source attribution</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#5a6b7a] font-semibold flex-shrink-0">—</span>
                <span>Guarantee data completeness</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-[#e8e4db]">
        <h3 className="font-serif text-lg text-[#1a2847] mb-6">Legal notice</h3>
        <div className="max-w-3xl space-y-4 text-[#5a6b7a]">
          <p>
            All data provided is sourced from the <strong className="text-[#1a2847]">Kenya National Bureau of Statistics</strong> and is in the public domain. LeadAfrik provides value through data cleaning, standardization, and documentation only.
          </p>
          <p>
            By requesting our datasets, you agree to use them for educational, analytical, research, and journalistic purposes consistent with KNBS terms and conditions.
          </p>
          <p className="text-sm pt-4 border-t border-[#e8e4db]">
            Questions about these datasets or custom extractions? Contact <a href="mailto:omukokookoth@gmail.com" className="text-amber-600 hover:text-amber-700 font-medium">omukokookoth@gmail.com</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl font-light text-[#1a2847] mb-6">Ready to access Kenya's data</h2>
          <p className="text-lg text-[#5a6b7a] mb-8">
            Select a dataset above and submit your request. You'll receive an invoice within one business day.
          </p>
          <p className="text-[#5a6b7a]">
            Looking for a custom extraction or specific data not listed here? <a href="mailto:omukokookoth@gmail.com" className="text-amber-600 hover:text-amber-700 font-medium">Get in touch with us</a>
          </p>
        </div>
      </section>
    </div>
  );
}
