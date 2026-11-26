import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.apps.tampilkit.com", "tampilkit.com", "*.tampilkit.com"],
};

export default nextConfig;
