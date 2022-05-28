const { merge } = require('webpack-merge')
const getWebpackConfig = require('@nrwl/react/plugins/webpack')

module.exports = (config, _context) => {
  const mergedConfig = merge(getWebpackConfig(config), {
    optimization: {
      sideEffects: true,
    },
  })

  console.log("optimizations", mergedConfig.optimization)
  
  return mergedConfig
}