const path = require('path');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: path.resolve(__dirname, 'node_modules'),
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
