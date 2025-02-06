import path from 'path'

const config = {
    entry: {
        isCPF: './src/libs/isCPF/index.ts',
        isCNPJ: './src/libs/isCNPJ/index.ts',
        index: {
            dependOn: ['isCPF', 'isCNPJ'],
            import: './src/libs/index.ts',
        }
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'node10',
}

export default config