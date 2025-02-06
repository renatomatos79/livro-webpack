import HtmlWebpackPlugin from "html-webpack-plugin"

const config = {
    mode: 'development',
    entry: '/src/index.js',
    output: {
        publicPath: '/'
    },
    devServer: {
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
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
        new HtmlWebpackPlugin({
            template: 'index.html',
            scriptLoading: 'module',
        })
    ]
}

export default config