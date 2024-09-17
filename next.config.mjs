/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-bog2-2.cdninstagram.com'
      },
      {
        protocol:'https',
        hostname: 'raw.githubusercontent.com'
      }
    ]
  }
};

export default nextConfig;