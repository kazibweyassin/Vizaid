import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Set the root directory to silence the lockfile warning
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
