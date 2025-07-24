// import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
}

module.exports = nextConfig

