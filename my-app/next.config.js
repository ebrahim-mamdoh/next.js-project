/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // ✅ تشغيل الوضع الصارم لـ React
  output: 'standalone', 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 