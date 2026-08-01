import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // useTypeScriptCli: true, // If using latest TS
  },
  images: {
    unoptimized: true, // For now until we migrate all assets
  }
};

export default nextConfig;
