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
    <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 p-8 my-8" aria-label="Newsletter signup form">
      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="newsletter-heading">
        Get data updates + new analysis
      </h3>
      <p className="text-base text-gray-700 mb-6">
        Newsletter: monthly data drops, policy analysis, and economic trends.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          aria-label="Email address for newsletter signup"
          aria-describedby="newsletter-heading"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 border border-gray-400 text-base font-medium text-gray-900 rounded focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
          className="px-6 py-3 bg-blue-600 text-white text-base font-semibold hover:bg-blue-700 disabled:opacity-50 rounded transition-colors"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p 
          className={`text-sm mt-3 font-medium ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}
          role={status === 'success' ? 'status' : 'alert'}
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  );
}
