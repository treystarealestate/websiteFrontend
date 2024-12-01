/** @type {import('next').NextConfig} */

const domains = process.env.NEXT_PUBLIC_IMAGE_DOMAIN?.split?.(",") || [];
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_HOST: process.env.API_HOST,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 120,
    remotePatterns: domains?.map?.((domain) => ({
      hostname: domain?.trim?.(),
    })),
  },
  staticPageGenerationTimeout: Number(process.env.SSG_TIMEOUT) || 120,
};
module.exports = nextConfig;
