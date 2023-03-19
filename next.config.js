/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
