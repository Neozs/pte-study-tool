import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/pte-study-tool",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
