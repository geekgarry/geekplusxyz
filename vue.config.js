const { defineConfig } = require('@vue/cli-service')

// 预渲染插件
const PrerenderSPAPlugin = require('prerender-spa-plugin-next')
// const renderer = PrerenderSPAPlugin.PuppeteerRenderer;
// 可选
const renderer = require("@prerenderer/renderer-puppeteer")

const webpack = require('webpack')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = "极客普拉斯"
const port = process.env.PORT || process.env.npm_config_port || 8899 // 端口

module.exports = defineConfig({
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.xxx.xx/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.xxx.xx/admin/，则设置 baseUrl 为 /admin/。
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
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
        target: `https://localhost:8008`,//后端URI地址
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      },
      //配置多个代理服务器时，要把process.env.VUE_APP_BASE_API设置为 /,
      //再设置不同代理服务器的地址，之后在写接口时，带上服务器的前缀地址，
      //如：/api，在写这个服务器的接口时要带上/api/*，后面匹配上你的服务器的URL
      // "/api": {
      //   target: "api地址",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/api": ''
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
        'Quill': 'quill/dist/quill.js',
      }),
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 100000, // 通过合并小于 minChunkSize 大小的 chunk，将 chunk 体积保持在指定大小限制以上
        // maxAssetSize: 300000,
      }),
      new PrerenderSPAPlugin({
        routes: ["/", "/programDevelopment/java", "/programDevelopment/frontWeb", "/programDevelopment/sql", "/programDevelopment/linuxServer", 
        "/welfareResource/networkResource", "/welfareResource/webSoftware", "/leaveMessage", "/about", "/search", "/articleListForTag", "/chat"],
        // rendererOptions: {
        //   // headless: false,
        //   renderAfterDocumentEvent: "render-event",
        //   inject: {},
        //   timeout: 10000,
        // },
        // postProcess (renderedRoute) {
        //   // Ignore any redirects.
        //   renderedRoute.route = renderedRoute.originalRoute
        //   // Basic whitespace removal. (Don't use this in production.)
        //   renderedRoute.html = renderedRoute.html.split(/>[\s]+</gmi).join('><')
        //   // Remove /index.html from the output path if the dir name ends with a .html file extension.
        //   // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
        //   if (renderedRoute.route.endsWith('.html')) {
        //     renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
        //   }
        //   return renderedRoute
        // },
        // server:{
        //   proxy:{
        //     [process.env.VUE_APP_BASE_API]: {
        //       target: `https://localhost:`+port,
        //       changeOrigin: true,
        //       secure: false,
        //       pathRewrite: {
        //         ['^' + process.env.VUE_APP_BASE_API]: ''
        //       }
        //     },
        //   }
        // },
        // 可选
        renderer,
        // postProcess(context) {
        //   context.outputPath = path.join(
        //       // 不要拼__dirname,最终会转成绝对路径,拼了反而出错。
        //       // PS: 为什么要加一层文件夹? 因为默认写入首页叫index.html, 不加会导致写入冲突 ——_——#
        //     "rerender",
        //     (context.route.replace("/", "") || "index") + ".html"
        //   );
        //   return context;
        // },
        // postProcess: function (context) {
        //   var titles = {
        //     "/": "首页-极客普拉斯",
        //     "/programDevelopment/java": "Java开发-极客普拉斯",
        //     "/programDevelopment/frontWeb": "前端开发-极客普拉斯",
        //     "/programDevelopment/sql": "数据库开发-极客普拉斯",
        //     "/programDevelopment/linuxServer": "Linux服务器-极客普拉斯",
        //     "/welfareResource/networkResource": "网络资源-极客普拉斯",
        //     "/welfareResource/webSoftware": "趣站软件-极客普拉斯",
        //     "/leaveMessage": "给我留言-极客普拉斯",
        //     "/about": "关于-极客普拉斯"
        //   };
        //   context.html = context.html.replace(
        //     /<title>[^<]*<\/title>/i,
        //     "<title>" + titles[context.route] + "</title>"
        //   );
        // },
      })
    ],
  },
  // configureWebpack: () => {
  //   if (process.env.ENV !== 'production') return;
  //   return {
  //     plugins: [
  //     ]
  //   }
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
      }
    );
    // config.plugin('prerender').use(PrerenderSPAPlugin, [
    //   {
    //     // 生成文件的路径，也可以与webpakc打包的一致。
    //     // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
    //     staticDir: path.join(__dirname, 'dist'),
    //     // outputDir: path.join(__dirname, './'),
    //     // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
    //     // routes: ['/','/programDevelopment/java','/programDevelopment/frontWeb','/article/:articleId',
    //     // '/programDevelopment/linuxServer','/programDevelopment/python','/welfareResource/networkResource',
    //     // '/welfareResource/beautyPicture','/welfareResource/webSoftware','/essayJournal/personalEssay',
    //     // '/essayJournal/studyNote','/newTalk/technologyNew','/leaveMessage','/about'],
    //     routes: ['/','/leaveMessage','/about','/search'],
    //     // server:{
    //     //   proxy:{
    //     //     [process.env.VUE_APP_BASE_API]: {
    //     //       target: `https://localhost:`+port,
    //     //       changeOrigin: true,
    //     //       secure: false,
    //     //       pathRewrite: {
    //     //         ['^' + process.env.VUE_APP_BASE_API]: ''
    //     //       }
    //     //     },
    //     //   }
    //     // },
    //     // 这个很重要，如果没有配置这段，也不会进行预编译
    //     renderer: new Renderer({
    //         inject: { //默认挂在window.__PRERENDER_INJECTED对象上，可以通过window.__PRERENDER_INJECTED.foo在预渲染页面取值
    //         foo: 'bar'
    //       },
    //       headless: false,
    //       renderAfterTime: 5000,
    //       // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    //       renderAfterDocumentEvent: 'render-event'//等到事件触发去渲染，此处我理解为是Puppeteer获取页面的时机
    //     })
    //   }
    // ]);
  },
  css: {
    sourceMap: true
  },
})
