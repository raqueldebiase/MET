/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.metmuseum.org',
      },
    ],
  },
};

export default nextConfig;
