import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack";

const { ModuleFederationPlugin } = webpack.container

const config = {
    mode: 'development',
    entry: '/src/index.js',
    output: {
        publicPath: 'http://localhost:3000/',
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
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
        new ModuleFederationPlugin({
            name: "auth",
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/app.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            scriptLoading: 'module',
        })
    ]
}

export default config