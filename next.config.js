/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: false,
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
