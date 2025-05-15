/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable server actions with correct format
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  // Preserve the existing public directory for static assets
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
