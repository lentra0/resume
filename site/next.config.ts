import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/resume",
  assetPrefix: "/resume/",
  trailingSlash: true,
};

export default nextConfig;
