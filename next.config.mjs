/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'mir-s3-cdn-cf.behance.net',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
