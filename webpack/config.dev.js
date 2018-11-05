const merge = require('webpack-merge');
const base = require('./config.base');
const output = require('./output');

const config = merge(base, {
  mode: 'development',
  devtool: 'source-map'
});

module.exports = output(config, '_site/js');
