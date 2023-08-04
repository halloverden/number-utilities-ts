const common = require('./webpack.config');
const { mergeWithRules } = require('webpack-merge');
const path = require('path');
const child_process = require('child_process');

const dev = {
  output: {
    path: path.resolve(__dirname, 'dist_dev')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: './tsconfig.dev.json'
        }
      }
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 100,
    ignored: ['node_modules/**']
  }
};

module.exports = mergeWithRules({
  output: "replace",
  module: {
    test: "match",
    rules: "replace"
  }
})(common, dev);
