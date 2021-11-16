const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '': {
        target: '',
        ws: false,
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack: (config) => {
    // svg rule loader
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
