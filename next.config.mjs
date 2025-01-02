
import { withPayload } from '@payloadcms/next/withPayload';



const nextConfig = {
  images: {

    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};

export default withPayload(withPayload(nextConfig));