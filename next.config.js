/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["localhost", "santafe-selection.vercel.app"],
    unoptimized: false,
  },
};

module.exports = nextConfig;
