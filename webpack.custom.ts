/* eslint-disable @typescript-eslint/no-var-requires */
import { Configuration, ids } from "webpack"
const getWebpackConfig = require("@nrwl/react/plugins/webpack.js")

module.exports = (config: Configuration) => {
    getWebpackConfig(config)

    if (config.optimization) {
        delete config.optimization.minimizer
    }

    if (config.plugins) {
        config.plugins.push(new ids.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 4,
        }))
    }
    return config
};
