import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", 
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media1.tenor.com", 
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
