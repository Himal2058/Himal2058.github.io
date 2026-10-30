import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true"
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: process.env.GITHUB_PAGES === "true",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
