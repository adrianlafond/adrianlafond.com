const merge = require('webpack-merge');
const base = require('./config.base');
const output = require('./output');

const config = merge(base, {
  mode: 'production',
});

module.exports = output(config, 'js');
