"use client";

import { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message. I'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-lg text-gray-600">
            Have a question, feedback, or want to collaborate? Let's talk.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Email</p>
            <a
              href="mailto:info@leadafrik.com"
              className="text-lg font-semibold text-blue-600 hover:text-blue-700"
            >
              info@leadafrik.com
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">LinkedIn</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:text-blue-700"
            >
              Stephen Okoth
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Based In</p>
            <p className="text-lg font-semibold text-gray-900">Kenya</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-16">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Subject
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" required className="w-4 h-4" />
              <span className="text-sm text-gray-600">
                I'd like to be invited to speak at an event
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* FAQ */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Answers</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Do you take speaking engagements?
              </h3>
              <p className="text-gray-600">
                Yes. I give talks and workshops on Kenyan economics for organizations.
                Contact me with dates and topic.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                How do I request a briefing?
              </h3>
              <p className="text-gray-600">
                Use the contact form above, or visit the Consulting page and fill out a
                request form with your specific needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Can I use your content?
              </h3>
              <p className="text-gray-600">
                Yes, with attribution. Please link back and cite sources. For large
                reproductions, get in touch first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
