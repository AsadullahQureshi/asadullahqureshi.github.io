import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/asadullahqureshi.github.io",
  assetPrefix: "/asadullahqureshi.github.io/",
};

export default nextConfig;
