const path = require('path')
const dist = path.resolve(__dirname, 'dist')
console.log('output: ', dist)

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        path: dist,
        filename: 'bundle.js',
    }
}