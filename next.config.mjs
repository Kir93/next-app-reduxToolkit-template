/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', '@chakra-ui/next-js']
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
