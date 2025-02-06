const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config.js')
const prodConfig = {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all', // Ensures splitting applies to both dynamically imported and statically imported modules.
            cacheGroups: {
                mathjs: {
                    test: /[\\/]node_modules[\\/]mathjs[\\/]/,
                    name: 'mathjs', // Name of the vendor chunk ()
                    chunks: 'all', // Include all types of chunks
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // any other vendor library
                    name: 'vendors', // Name of the vendor chunk
                    chunks: 'all', // Include all types of chunks
                },
            },
        },
    }
}
module.exports = merge(commonConfig, prodConfig)
