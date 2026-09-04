import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value: 'geolocation=(self "https://portal.ari.app")',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
