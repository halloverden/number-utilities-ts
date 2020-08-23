const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const path = require('path');
const child_process = require('child_process');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist_test'),
    filename: 'index.js',
    publicPath: './'
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 100,
    ignored: ['node_modules/**']
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('RunAfterBuild', () => {
          child_process.exec('node dist_test/index.js', (err, stdout, stderr) => {
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
          });
        });
      }
    }
  ]
});
