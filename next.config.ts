import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Mohamed-Mohsen-portfolio',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { cpus: 2 },
};

export default nextConfig;
