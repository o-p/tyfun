/* eslint-disable strict, @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    'aws-lambda-handler': path.join(__dirname, './aws-lambda-handler/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build/webpack'),
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { allowTsInNodeModules: true }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  externals: {
    'aws-sdk': 'aws-sdk',
  },
};
