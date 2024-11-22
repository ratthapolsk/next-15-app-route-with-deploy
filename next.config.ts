import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Add this line to enable standalone build
  reactStrictMode: true,
  distDir: 'build',
  /* config options here */
};

export default nextConfig;
