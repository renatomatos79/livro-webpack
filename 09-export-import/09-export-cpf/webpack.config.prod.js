const config = {
    mode: 'production',
    entry: {
        index: '/src/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        clean: true,
        library: {
            type: 'module'
        }
    },
    experiments: {
        outputModule: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]

    }
}

export default config