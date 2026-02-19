import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enable React Compiler (already present)
  reactCompiler: true,

  // 2. Image Optimization: Prioritize AVIF (smaller) then WebP
  images: {
    formats: ['image/avif', 'image/webp'],
    // Optional: Set infinite TTL for static imported images if needed, 
    // but defaults are usually fine. 
    minimumCacheTTL: 60,
  },

  // 3. Compression: Enable Gzip/Brotli compression for all text-based assets
  compress: true,

  // 4. Security & Size: Remove "X-Powered-By: Next.js" header
  poweredByHeader: false,

  // 5. Bundle Optimization: Optimize heavy package imports
  experimental: {
    // Automatically treeshake huge libraries if used
    optimizePackageImports: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/react-fontawesome',
      'gsap'
    ],
  },

  // 6. Caching Headers for immutable static assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
