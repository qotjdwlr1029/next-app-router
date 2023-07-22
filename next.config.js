/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/600/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/150/**",
      },
    ],
  },
};

module.exports = nextConfig;
