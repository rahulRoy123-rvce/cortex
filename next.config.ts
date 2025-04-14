import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
