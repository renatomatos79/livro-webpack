const path = require('path')
const dist = path.resolve(__dirname, 'dist')
console.log('output: ', dist)

module.exports = {
    entry: {
        index: {
            import: './src/main.js',
            dependOn: 'math'
        },
        math: {
            import: './src/lib/math.js'
        }
    },
    mode: 'production',
    output: {
        path: dist,
        filename: '[name].bundle.js',
    },
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