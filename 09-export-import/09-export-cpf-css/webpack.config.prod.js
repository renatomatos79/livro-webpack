import MiniCssExtractPlugin  from 'mini-css-extract-plugin';

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
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // For regular CSS files
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into files
                    'css-loader', // Turns CSS into CommonJS
                ],
            },
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

    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css', // Output CSS bundle
        })
    ]
}

export default config