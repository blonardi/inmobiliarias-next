// habilito pre-parcial-rerendering
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false
  }
};

module.exports = nextConfig;