/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: ['media.go-clothes.uz'],
  },
  experimental: {
    reactRemoveProperties: {
      properties: ['cz-shortcut-listen'],
    },
  },
};

export default nextConfig;
