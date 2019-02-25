const path = require('path');

module.exports = {
  entry: './src/index.ts',

  mode: 'production',

  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },

  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [path.join(__dirname, 'src')],
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: require.resolve('babel-loader'),
          },
        ],
      },
    ],
  },
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
  },
};
