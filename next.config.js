// habilito pre-parcial-rerendering
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false
  },
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: ['images.pexels.com', 'fincaraiz.com.co', 'a0.muscache.com']
	},
};

module.exports = nextConfig;