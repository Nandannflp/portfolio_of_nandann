import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gzip/Brotli compress all responses
  compress: true,

  async headers() {
    return [
      {
        // Cache the sequence frames for 1 year (they are immutable — filenames include delay hash)
        source: "/sequence/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache other static assets (fonts, icons, og-image) for 24 hours
        source: "/:path((?!_next).*\\.(?:png|jpg|jpeg|svg|ico|webp|woff2?))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
