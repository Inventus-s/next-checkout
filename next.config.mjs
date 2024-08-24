/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async rewrites(){
    return [
      {
        source: '/CampaignQuery',
        destination: '/api/campaigns',
      },
    ];
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
};

export default nextConfig;
