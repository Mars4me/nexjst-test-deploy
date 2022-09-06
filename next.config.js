/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nexjst-test-deploy",
  assetPrefix: "nexjst-test-deploy",
  swcMinify: true,
};

module.exports = nextConfig;
