import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/xeilao-teiga",
    assetPrefix: "/xeilao-teiga",
    distDir: "/xeilao-teiga",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
