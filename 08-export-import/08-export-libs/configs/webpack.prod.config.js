import common from './webpack.common.config.js'
import { merge } from 'webpack-merge'

const config = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.prod.json',
                        }
                    }
                ],
            }
        ]
    },
})

export default config