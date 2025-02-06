import { VueLoaderPlugin } from "vue-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";
import DotEnv from 'dotenv-webpack'
import webpack from "webpack";
import path from 'path';

const { ModuleFederationPlugin } = webpack.container

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: 'http://localhost:3001/',
    },
    devServer: {
        port: 3001
    },
    resolve: {
        alias: {
            '@': path.resolve('./src'), // set '@' as the alias for 'src' directory
        },
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [{ loader: 'file-loader' }],
            },
            {
                test: /\.scss|\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "dashboard",
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardApp': './src/app.js'
            }
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new DotEnv({
            path: path.resolve('./.env'),
            systemvars: true
        })
    ]
}

export default config