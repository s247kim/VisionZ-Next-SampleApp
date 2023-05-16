/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["mysql2"],
    typedRoutes: true,
  },
};

module.exports = nextConfig;
