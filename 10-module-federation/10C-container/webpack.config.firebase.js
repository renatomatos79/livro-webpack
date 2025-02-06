import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack";
import path from "path";

const { ModuleFederationPlugin } = webpack.container
const googleFirebasePublic = path.resolve('../10D-firebase/public')
const containerOutputDir = path.resolve(googleFirebasePublic, '.')

console.log('output dir: ', containerOutputDir)

const config = {
    mode: 'development',
    entry: '/src/index.js',
    output: {
        path: containerOutputDir,
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    devServer: {
        port: 3002,
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
            name: "container",
            filename: 'remoteEntry.js',
            remotes: {
                auth: 'auth@https://udemy-webpack-mf-c2fa9.web.app/auth/remoteEntry.js',
                dashboard: 'dashboard@https://udemy-webpack-mf-c2fa9.web.app/dashboard/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            scriptLoading: 'module',
        })
    ]
}

export default config