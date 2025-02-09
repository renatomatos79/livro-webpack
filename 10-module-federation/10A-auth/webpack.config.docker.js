import webpack from "webpack";
import * as path from "node:path";

const { ModuleFederationPlugin } = webpack.container

const config = {
    mode: 'production',
    entry: '/src/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[contenthash].js',
        publicPath: 'http://localhost:4000/auth/',
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
        })
    ]
}

export default config