import common from './webpack.common.config.js'
import { merge } from 'webpack-merge'

const config = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.dev.json',
                        }
                    }
                ],
            }
        ]
    },
})

export default config