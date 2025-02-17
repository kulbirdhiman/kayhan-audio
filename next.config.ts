import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kayhanaudio.com.au",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io", // ✅ Added ImageKit domain
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },

    ],
  },
};

export default nextConfig;
