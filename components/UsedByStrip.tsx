import { FEATURED_TESTIMONIALS } from '@/lib/testimonials';

export default function UsedByStrip() {
  if (FEATURED_TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-12 my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-light text-gray-700 uppercase tracking-wide mb-8">
          Trusted by analysts and policymakers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {FEATURED_TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="text-center">
              {testimonial.logoUrl ? (
                <img
                  src={testimonial.logoUrl}
                  alt={testimonial.organization}
                  className="h-12 mx-auto mb-2 grayscale opacity-60 hover:opacity-100"
                />
              ) : (
                <p className="text-gray-600 text-sm font-medium">{testimonial.organization}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
