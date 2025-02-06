const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.js')
const devConfig = {
    mode: 'development'
}
module.exports = merge(commonConfig, devConfig)
