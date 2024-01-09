// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.alias['gsap/ScrollTrigger'] = 'gsap/dist/ScrollTrigger.min.js';
      }
      return config;
    },
  };
  