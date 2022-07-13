/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  source: '/api/:hello*',
  destination: 'https://main--beamish-bublanina-9fca22.netlify.app/products',
}

module.exports = nextConfig
