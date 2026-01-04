'use client';

import { useState } from 'react';

export default function CustomDataRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    dataScope: '',
    budget: '',
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Hook up your email service here
      // const response = await fetch('/api/custom-data-request', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        dataScope: '',
        budget: '',
        description: '',
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8 my-8 max-w-2xl">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Custom Data Request</h3>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-400 text-base font-medium text-gray-900 bg-white rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
          />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-400 text-base font-medium text-gray-900 bg-white rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <input
          type="text"
          name="organization"
          placeholder="Organization (optional)"
          value={formData.organization}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-400 text-base font-medium text-gray-900 bg-white rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
        />

        <select
          name="dataScope"
          value={formData.dataScope}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-400 text-base font-medium text-gray-900 bg-white rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
        >
          <option value="">Select data scope...</option>
          <option value="national">National-level data</option>
          <option value="county">County-level breakdown</option>
          <option value="sector">Sector-specific data</option>
          <option value="timeseries">Custom time series</option>
          <option value="other">Other (describe below)</option>
        </select>

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-400 text-base font-medium text-gray-900 bg-white rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
        >
          <option value="">Budget range (optional)</option>
          <option value="under-500">Under KES 500</option>
          <option value="500-2000">KES 500–2,000</option>
          <option value="2000-5000">KES 2,000–5,000</option>
          <option value="5000-plus">KES 5,000+</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe your data needs..."
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-400 text-base font-medium text-gray-900 bg-white rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-4 px-6 py-3 bg-blue-600 text-white text-base font-semibold hover:bg-blue-700 disabled:opacity-50 rounded transition-colors"
      >
        {status === 'loading' ? 'Sending...' : 'Request custom data'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-green-600 mt-3">✓ Request sent. We'll be in touch.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 mt-3">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
