/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            },
            {
                protocol: 'https',
                hostname:'farm66.staticflickr.com'
            }
        ]
    }
};

export default nextConfig;
