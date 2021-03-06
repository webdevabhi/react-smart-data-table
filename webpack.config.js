const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  context: path.join(__dirname, '/lib'),
  entry: [
    '@babel/polyfill',
    './SmartDataTable.js',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'react-smart-data-table.js',
    library: 'SmartDataTable',
    // libraryTarget: 'umd',
    libraryTarget: 'commonjs',
  },
})
