/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  // Add this line to enable serving files from the static directory
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-nextjs-project' : '',
};

module.exports = nextConfig;

