const { defineConfig } = require('@vue/cli-service')

const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = "极客普拉斯"
const port = process.env.port || process.env.npm_config_port || 8899 // 端口

module.exports = defineConfig({
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
  //publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  //outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  //lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  //productionSourceMap: false,
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    //host: 'localhost',
    port: port,
    open: true,
    //https: false,
    //hot: true,
    //disableHostCheck: true,
    allowedHosts: "all",
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: "https://maikeadmin.geekplus.xyz:8443",
        //target: `https://localhost:8443/`,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      },
      //配置多个代理服务器时，要把process.env.VUE_APP_BASE_API设置为 /,
      //再设置不同代理服务器的地址，之后在写接口时，带上服务器的前缀地址，
      //如：/163coviddata，在写这个服务器的接口时要带上/163coviddata/*，后面匹配上你的服务器的URL
      // "/163coviddata": {
      //   target: "https://c.m.163.com/ug/api/wuhan/app/data/list-total",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/163coviddata": ''
      //   }
      // }
    },
    // client: {
    //     webSocketURL: 'ws://0.0.0.0:8898/ws'
    // }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      })
    ]
  },
  // chainWebpack: config => {
  //   config
  //   .plugin('html')
  //   .tap(args => {
  //       args[0].title = '你的标题'
  //       return args
  //   })
  // },
  chainWebpack: (config) => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }]);
    config.plugin('html')
      .tap(args => {
        args[0].title = name
        return args
      })
  },
  css: {
    sourceMap: true
  },
})
