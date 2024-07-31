// habilito pre-parcial-rerendering
/** @type {import('next').NextConfig} */

const nextConfig = {
	webpack: (config) => {
		config.experiments = { ...config.experiments, topLevelAwait: true };
		return config;
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com'
			},
			{
				protocol: 'https',
				hostname: '*.fincaraiz.com.co' // Permite todos los subdominios
			},
			{
				protocol: 'https',
				hostname: 'a0.muscache.com'
			}
		]
	}, experimental: {
		ppr: false,
		esmExternals: 'loose', // o 'true' si 'loose' no funciona
	},
};

module.exports = nextConfig;
