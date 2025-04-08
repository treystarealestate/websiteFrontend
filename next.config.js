/** @type {import('next').NextConfig} */

const domains = process.env.NEXT_PUBLIC_IMAGE_DOMAIN?.split?.(",") || [];
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_HOST: process.env.API_HOST,
    NEXT_PUBLIC_IMAGE_DOMAIN : process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
    WHATSAPP_LINK : process.env.WHATSAPP_LINK,
    GOOGLE_TAG_MANAGER: process.env.GOOGLE_TAG_MANAGER
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
