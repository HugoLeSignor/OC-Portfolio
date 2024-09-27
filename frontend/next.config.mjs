/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/OC-Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/OC-Portfolio' : '',
};

module.exports = nextConfig;
