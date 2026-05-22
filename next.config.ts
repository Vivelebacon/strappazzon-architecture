import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.strappazzon-architecture.ch',
      },
      {
        protocol: 'https',
        hostname: 'web.archive.org',
      },
    ],
  },
};

export default nextConfig;
