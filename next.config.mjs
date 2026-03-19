/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 性能优化配置
  compiler: {
    // 移除生产环境的 console.log
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 图片优化配置（使用 remotePatterns 替代已废弃的 domains）
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'geo.datav.aliyun.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
