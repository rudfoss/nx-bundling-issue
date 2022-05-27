const { merge } = require('webpack-merge')
const getWebpackConfig = require('@nrwl/react/plugins/webpack')

module.exports = (config, _context) => {
  return merge(getWebpackConfig(config), {
    optimization: {
      sideEffects: true,
    },
  })
}