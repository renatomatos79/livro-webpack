import webpack from "webpack";
import * as path from "node:path";

const { ModuleFederationPlugin } = webpack.container
const googleFirebasePublic = path.resolve('../10D-firebase/public')
const authOutputDir = path.resolve(googleFirebasePublic, 'auth')

console.log('output dir: ', authOutputDir)

const config = {
    mode: 'production',
    entry: '/src/index.js',
    output: {
        path: authOutputDir,
        filename: '[name].[contenthash].js',
        publicPath: 'https://udemy-webpack-mf-c2fa9.web.app/auth/',
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