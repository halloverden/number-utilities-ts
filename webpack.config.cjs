const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  experiments: {
    outputModule: true
  },
  target: 'web',
  output: {
    filename: 'index.min.js',
    globalObject: 'this',
    library: {
      type: 'module'
    }
  },
  entry: path.join(__dirname, '/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          useBabel: true,
          babelCore: '@babel/core'
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src')],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  // Produce sourcemap
  devtool: 'source-map'
};
