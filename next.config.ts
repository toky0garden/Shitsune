import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '26.172.117.24',
				port: '8000',
			},
		],
	},
};

export default nextConfig;
