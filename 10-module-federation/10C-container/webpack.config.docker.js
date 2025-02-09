import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack";
import path from "path";

const { ModuleFederationPlugin } = webpack.container

const config = {
    mode: 'production',
    entry: '/src/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
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
            name: "container",
            filename: 'remoteEntry.js',
            remotes: {
                auth: 'auth@http://localhost:4000/auth/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:4001/dash/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            scriptLoading: 'module',
        })
    ]
}

export default config