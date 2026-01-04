import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance & Security */
  compress: true,
  poweredByHeader: false,
  
  /* Security Headers */
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },

  /* Image Optimization */
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
