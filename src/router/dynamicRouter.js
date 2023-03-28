/* Layout */
import Layout from '@/layout'
/**
 * 动态路由定义
 */
let dynamicRouter = {
    routes: [
        {
            path: "",
            name: "layout",
            component: () => import("@/layout/index"),
            type:'layout',
            children: [

            ]
        },
        {
            path: '/chatgpt',
            name: 'ChatGPT',
            meta: { title: 'ChatGPT智能助手', icon: 'fa-home' },
            component: (resolve) => require(['@/views/chatgpt/index.vue'],resolve),
            type: 'page',
            hidden: true
          },
          {
            path: '/honeyComb',
            name: 'honeyComb',
            meta: { title: '蜂窝结构', icon: 'fa-home' },
            component: (resolve) => require(['../components/HoneyComb.vue'],resolve),
            type: 'page',
            hidden:true
          },
          {
            path: '/404',
            name: 'error',
            component: Error404,
            meta: { title: '404', icon: '' },
            type: 'error',
            hidden: true
          },
          {
            path: '/403',
            name: 'error',
            component: (resolve) => require(['@/views/errorpage/error403.vue'],resolve),
            meta: { title: '403', icon: '' },
            type: 'error',
            hidden: true
          },
          //这个*匹配必须放在最后，将改路由配置放到所有路由的配置信息的最后，否则会其他路由path匹配造成影响。     
          {
            path: '*',
            redirect: '/404',
            type: 'error',
            hidden: true
          }
    ]
}
let layoutFooter={
    routes:[
        {
            path: '/search',
            name: 'search',
            meta: { title: '搜索详情页', icon: 'fa-home' },
            component: (resolve) => require(['@/views/categorypage/SearchResult.vue'],resolve),
            type: 'page',
            hidden: true
          },
          {
            path: '/article/:articleId',
            name: 'article',
            meta: { title: '文章详情页', icon: 'fa-home' },
            component: (resolve) => require(['@/views/article/BlogContent.vue'],resolve),
            type: 'page',
            hidden: true
          },
          {
            path: '/general',
            name: 'article',
            meta: { title: '文章详情页', icon: 'fa-home' },
            component: (resolve) => require(['@/views/article/GeneralContent.vue'],resolve),
            type: 'page',
            hidden: true
          },
    ]
}

export default dynamicRouter;
