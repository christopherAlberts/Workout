import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-muscle-highlighter"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.exercisedb.dev",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
