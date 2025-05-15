/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable server actions with correct format
    serverActions: {
      allowedOrigins: ['localhost:3000', 'sse-mcp.amino.zonos.com'],
    },
  },
  // Configure headers for CORS support
  async headers() {
    return [
      {
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
        // Apply these headers to all API routes
        source: '/api/:path*',
      },
    ];
  },
  // Preserve the existing public directory for static assets
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
