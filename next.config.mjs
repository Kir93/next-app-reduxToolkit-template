/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
