import path from 'path'

const config = {
    entry: {
        index: './src/libs/index.ts',
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js',
        clean: true,
        library: {
            type: 'module',
        }
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    experiments: {
        outputModule: true
    }
}

export default config