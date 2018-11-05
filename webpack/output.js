const path = require('path');
const merge = require('webpack-merge');
const files = require('./files.json');

module.exports = (config, dest) => (
  files.map(src => (
    merge(config, {
      entry: `./_javascript/${src}`,
      output: {
        path: path.resolve('./', dest, src),
        filename: `index.js`,
      },
    })
  ))
);
