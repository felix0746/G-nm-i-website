/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // 圖片優化已重新啟用
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
