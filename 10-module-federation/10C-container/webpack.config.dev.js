import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack";

const { ModuleFederationPlugin } = webpack.container

const config = {
    mode: 'development',
    entry: '/src/index.js',
    output: {
        publicPath: 'http://localhost:3002/',
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
                auth: 'auth@http://localhost:3000/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:3001/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            scriptLoading: 'module',
        })
    ]
}

export default config