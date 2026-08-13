// next.config.js
module.exports = {
  images: {
    // La cuota de Image Optimization de Vercel está agotada: /_next/image
    // devuelve 402 (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED) y todas las
    // imágenes servidas por next/image desaparecen en producción.
    // Con unoptimized, next/image apunta al archivo original en /public,
    // que se sirve como estático y no consume cuota.
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['gsap/ScrollTrigger'] = 'gsap/dist/ScrollTrigger.min.js';
    }
    return config;
  },
};
