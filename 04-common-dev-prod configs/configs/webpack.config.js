const path = require('path')
const source = path.resolve(__dirname, '..')
console.log('source: ', source)
const dist = path.resolve(source, 'dist')
console.log('dist: ', dist)

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
    output: {
        path: dist,
        filename: '[name].bundle.js',
    }
}