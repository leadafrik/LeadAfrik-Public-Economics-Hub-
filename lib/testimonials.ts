// Testimonials / "Used by" configuration

export interface Testimonial {
  organization: string;
  logoUrl?: string;
  testimonial?: string;
  author?: string;
  title?: string;
  link?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  // Add testimonials here:
  // {
  //   organization: "Policy Think Tank",
  //   logoUrl: "/brand/partner-logo.png",
  //   testimonial: "LeadAfrik's data helped us understand budget allocation trends.",
  //   author: "John Doe",
  //   title: "Research Director",
  //   link: "https://example.com",
  // },
];

export const FEATURED_TESTIMONIALS = TESTIMONIALS.slice(0, 4);
