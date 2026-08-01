import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Image Optimization */
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
    // Enable optimization and caching
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  
  /* Performance and SEO */
  compress: true,
  poweredByHeader: false,
  
  /* Security and Headers */
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Block admin and api routes from being indexed
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },

  /* Redirects */
  redirects: async () => {
    return [
      // Redirect www to non-www if needed
    ];
  },
};

export default nextConfig;

