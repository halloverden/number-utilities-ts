const common = require('./webpack.config');
const { mergeWithRules } = require('webpack-merge');
const path = require('path');

const prod = {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: './tsconfig.prod.json'
        }
      }
    ]
  },
};

module.exports = mergeWithRules({
  module: {
    test: "match",
    rules: "replace"
  }
})(common, prod);
