'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error('Subscription failed');

      setStatus('success');
      setMessage('Thank you for subscribing! Check your email to confirm.');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 p-6 my-8">
      <h3 className="text-lg font-light text-gray-900 mb-2">
        Get data updates + new analysis
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Newsletter: monthly data drops, policy analysis, and economic trends.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-2 border border-gray-300 text-sm"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p className={`text-xs mt-2 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
