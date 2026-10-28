import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true"
    ? {
        output: "export" as const,
        basePath: "/himal-product-and-services",
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: process.env.GITHUB_PAGES === "true",
  },
};

export default nextConfig;
