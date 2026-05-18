import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") ?? "";
const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
