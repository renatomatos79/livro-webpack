import common from './webpack.common.config.js'
import { merge } from 'webpack-merge'

const config = merge(common, {
    mode: 'production'
})

export default config