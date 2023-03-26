/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.js/,
      use: [options.defaultLoaders.babel],
    });
    return config;
  },
};
