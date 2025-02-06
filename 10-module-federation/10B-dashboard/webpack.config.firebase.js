import { VueLoaderPlugin } from "vue-loader";
import DotEnv from 'dotenv-webpack'
import webpack from "webpack";
import path from 'path';

const { ModuleFederationPlugin } = webpack.container
const googleFirebasePublic = path.resolve('../10D-firebase/public')
const dashOutputDir = path.resolve(googleFirebasePublic, 'dashboard')

console.log('output dir: ', dashOutputDir)

const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: dashOutputDir,
        filename: '[name].[contenthash].js',
        publicPath: 'https://udemy-webpack-mf-c2fa9.web.app/dashboard/',
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
        new DotEnv({
            path: path.resolve('./.env'),
            systemvars: true
        })
    ]
}

export default config