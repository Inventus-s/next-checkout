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
  }
};

export default nextConfig;
