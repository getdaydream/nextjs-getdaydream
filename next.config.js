const path = require('path');

module.exports = {
  webpack: function(config) {
    config.externals = config.externals || {};
    config.externals['styletron-server'] = 'styletron-server';

    config.resolve.alias = {
      ...config.resolve.alias,
      '@store': path.resolve(__dirname, './store'),
      '@containers': path.resolve(__dirname, './containers'),
      '@utils': path.resolve(__dirname, './utils'),
    };

    return config;
  },
};
