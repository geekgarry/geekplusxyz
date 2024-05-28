import Vue from 'vue'
// import { ref } from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Error404 from '../views/errorpage/ErrorPage404.vue'
import LeaveMessage from '../views/comment/LeaveMessage.vue'
import Write4Me from "@/views/write/Write4Me.vue"
// import { listSubParentCategory } from "@/api/geekplus/geekplus";
import store from "../store";
import { _getLocalStore } from '@/utils/storage'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

//设置type表示页面是菜单类型还是页面，还是跳转的页面
const routes = [
  {
    path: '',
    //name: 'layout',
    component: Layout,
    meta: { title: '框架页面', icon: '' },
    type: 'layout',
    hidden: true,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: '首页', icon: '' },
        type: 'menu',
        children: []
      },
      {
        path: '/homepage',
        name: 'homepage',
        component: () => import(/* webpackChunkName: "about" */'@/views/homepage/HomeIndex.vue'),
        meta: { title: '首页', icon: '' },
        type: 'page',
        hidden: true,
        children: []
      },
      {
        path: '/articleList',
        name: 'articleListCategory',
        meta: { title: '编程技术', icon: 'fa-home' },
        component: (resolve) => require(['../views/categorypage/ArticleListPage.vue'], resolve),
        type: 'menu',
        children: [
          {
            path: 'javaTest',
            name: 'javaListTest',
            meta: { title: 'java', icon: 'fa-home' },
            component: (resolve) => require(['../views/categorypage/ArticleListPage.vue'], resolve),
            type: 'menu',
            children: []
          },
          {
            path: 'nodeJSTest',
            name: 'nodeJSTest',
            meta: { title: 'nodeJS', icon: 'fa-home' },
            component: (resolve) => require(['../views/categorypage/ArticleListPage.vue'], resolve),
            type: 'menu',
            children: []
          },
        ]
      },
      {
        path: '/articleCategory/:categoryPath',
        name: 'articleListPage',
        meta: { title: '文章列表', icon: 'fa-home' },
        component: (resolve) => require(['@/views/categorypage/ArticleListPage.vue'], resolve),
        type: 'generalPage',
        children: []
      },
      {
        path: '/articleListForTag',
        name: 'articleListForTag',
        meta: { title: '标签文章列表', icon: 'fa-home' },
        component: (resolve) => require(['@/views/categorypage/ArticleListPageForTag.vue'], resolve),
        type: 'menu',
        children: []
      },
      {
        path: '/techArticeList',
        name: 'techTest',
        meta: { title: '科技前沿', icon: 'fa-home' },
        component: (resolve) => require(['@/views/categorypage/GeneralListPage.vue'], resolve),
        type: 'menu',
        children: []
      },
      {
        path: '/resourceList',
        name: 'resourceTest',
        meta: { title: '福利资源', icon: 'fa-home' },
        component: () => import(/* webpackChunkName: "about" */'@/views/categorypage/GeneralListPage.vue'),
        type: 'menu',
        children: []
      },
      {
        path: '/lifeArticleList',
        name: 'myLifeTest',
        meta: { title: '生活随笔', icon: 'fa-home' },
        component: () => import(/* webpackChunkName: "about" */'@/views/categorypage/GeneralListPage.vue'),
        type: 'menu',
        children: []
      },
      {
        path: '/leaveMessage',
        name: 'leaveMessage',
        meta: { title: '留言给我', icon: 'fa-home' },
        component: LeaveMessage,//() => import(/* webpackChunkName: "about" */''),
        type: 'menu',
        children: []
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: (resolve) => require(['../views/about/AboutUS.vue'], resolve),
        //component: () => import(/* webpackChunkName: "about" */ '../views/about/AboutUS.vue'),
        meta: { title: '关于', icon: '' },
        type: 'menu',
        children: []
      },
      {
        path: '/search',
        name: 'search',
        meta: { title: '搜索详情页', icon: 'fa-home' },
        component: (resolve) => require(['@/views/categorypage/SearchResult.vue'], resolve),
        type: 'page',
        hidden: true
      },
      {
        path: '/article/:articleId',
        name: 'article',
        meta: { title: '文章详情页', icon: 'fa-home' },
        component: (resolve) => require(['@/views/article/ArticleContent.vue'], resolve),
        type: 'generalPage',
        hidden: true
      },
      {
        path: '/general',
        name: 'generalArticle',
        meta: { title: '文章详情页', icon: 'fa-home' },
        component: (resolve) => require(['@/views/article/GeneralContent.vue'], resolve),
        type: 'generalPage',
        hidden: true
      },
      {
        path: '/write4me',
        name: 'write4me',
        meta: { title: '给我投稿', icon: 'fa-home' },
        component: Write4Me,
        //component: (resolve) => require(['@/views/write/Write4Me.vue'],resolve),
        type: 'page',
        hidden: true
      },
    ]
  },
  // {
  //   path: '/',
  //   name: 'layout',
  //   component: Layout,
  //   //meta: { title: '首页', icon: '' },
  //   type: 'page',
  //   hidden:true,
  //   children:[
  //     {
  //       path: 'homesearch',
  //       name: 'homesearch',
  //       meta: { title: '搜索详情页', icon: 'fa-home' },
  //       component: (resolve) => require(['@/views/categorypage/SearchResult.vue'],resolve),
  //       type: 'page',
  //       hidden: true
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   name: 'layout',
  //   component: Layout,
  //   //meta: { title: '首页', icon: '' },
  //   type: 'page',
  //   hidden:true,
  //   children:[
  //     {
  //       path: '/article/:articleId',
  //       name: 'article',
  //       meta: { title: '文章详情页', icon: 'fa-home' },
  //       component: (resolve) => require(['@/views/article/BlogContent.vue'],resolve),
  //       type: 'page',
  //       hidden: true
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   name: 'layout',
  //   component: Layout,
  //   //meta: { title: '首页', icon: '' },
  //   type: 'page',
  //   hidden:true,
  //   children:[
  //     {
  //       path: '/general',
  //       name: 'article',
  //       meta: { title: '文章详情页', icon: 'fa-home' },
  //       component: (resolve) => require(['@/views/article/GeneralContent.vue'],resolve),
  //       type: 'page',
  //       hidden: true
  //     },
  //   ]
  // },
  {
    path: '/chatgpt',
    name: 'ChatGPT',
    meta: { title: 'ChatGPT智能助手', icon: 'fa-home' },
    component: (resolve) => require(['@/views/chatgpt/index.vue'], resolve),
    type: 'page',
    children: [],
    hidden: true
  },
  {
    path: '/honeyComb',
    name: 'honeyComb',
    meta: { title: '蜂窝结构', icon: 'fa-home' },
    component: (resolve) => require(['../components/HoneyComb.vue'], resolve),
    type: 'page',
    hidden: true
  },
  {
    path: '/404',
    name: 'error404',
    component: Error404,
    meta: { title: '404', icon: '' },
    type: 'error',
    hidden: true
  },
  {
    path: '/403',
    name: 'error403',
    component: (resolve) => require(['@/views/errorpage/ErrorPage403.vue'], resolve),
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

// 公共静态路由
export const constantRoutes = [
  {
    path: '',
    //name: 'layout',
    component: Layout,
    meta: { title: '极客普拉斯', icon: '' },
    type: 'page',
    hidden:true,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: '首页', icon: '' },
        type: 'menu',
        children: []
      },
      {
        path: '/homepage',
        name: 'homepage',
        component: () => import(/* webpackChunkName: "about" */'@/views/homepage/HomeIndex.vue'),
        meta: { title: '首页', icon: '' },
        type: 'page',
        hidden: true,
        children: []
      },
      {
        path: '/articleCategory/:categoryPath',
        name: 'articleListPage',
        meta: { title: '文章列表', icon: 'fa-home' },
        component: (resolve) => require(['@/views/categorypage/ArticleListPage.vue'], resolve),
        type: 'generalPage',
        children: []
      },
      {
        path: '/techArticeList',
        name: 'techTest',
        meta: { title: '科技前沿', icon: 'fa-home' },
        component: (resolve) => require(['@/views/categorypage/GeneralListPage.vue'], resolve),
        type: 'menu',
        children: []
      },
      {
        path: '/lifeArticleList',
        name: 'myLifeTest',
        meta: { title: '生活随笔', icon: 'fa-home' },
        component: () => import(/* webpackChunkName: "about" */'@/views/categorypage/GeneralListPage.vue'),
        type: 'menu',
        children: []
      },
      {
        path: '/leaveMessage',
        name: 'leaveMessage',
        meta: { title: '留言给我', icon: 'fa-home' },
        component: LeaveMessage,//() => import(/* webpackChunkName: "about" */''),
        type: 'menu',
        children: []
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: (resolve) => require(['../views/about/AboutUS.vue'], resolve),
        //component: () => import(/* webpackChunkName: "about" */ '../views/about/AboutUS.vue'),
        meta: { title: '关于', icon: '' },
        type: 'menu',
        children: []
      },
      {
        path: '/article/:articleId',
        name: 'article',
        meta: { title: '文章详情', icon: 'fa-home' },
        component: (resolve) => require(['@/views/article/ArticleContent.vue'], resolve),
        type: 'generalPage',
        hidden: true
      },
      {
        path: '/general',
        name: 'generalArticle',
        meta: { title: '文章详情', icon: 'fa-home' },
        component: (resolve) => require(['@/views/article/GeneralContent.vue'], resolve),
        type: 'generalPage',
        hidden: true
      },
      {
        path: '/write4me',
        name: 'write4me',
        meta: { title: '给我投稿', icon: 'fa-home' },
        component: Write4Me,
        //component: (resolve) => require(['@/views/write/Write4Me.vue'],resolve),
        type: 'page',
        hidden: true
      },
      {
        path: '/articleListForTag',
        name: 'articleListForTag',
        meta: { title: '标签文章列表', icon: 'fa-home' },
        component: (resolve) => require(['@/views/categorypage/ArticleListPageForTag.vue'], resolve),
        type: 'menu',
        children: []
      },
      {
        path: '/search',
        name: 'search',
        meta: { title: '搜索详情页', icon: 'fa-home' },
        component: (resolve) => require(['@/views/categorypage/SearchResult.vue'], resolve),
        type: 'page',
        hidden: true
      },
    ]
  },
  {
    path: '/scrollrefresh',
    name: 'scrollrefresh',
    meta: { title: '滚动刷新', icon: 'fa-home' },
    component: (resolve) => require(['@/views/test/ScrollRefresh.vue'], resolve),
    type: 'page',
    children: [],
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '极客普拉斯登录', icon: 'fa-home' },
    component: (resolve) => require(['@/components/login/SignIn.vue'], resolve),
    type: 'page',
    hidden: true
  },
  {
    path: '/chatgpt',
    name: 'ChatGPT',
    meta: { title: 'ChatGPT智能助手', icon: 'fa-home' },
    component: (resolve) => require(['@/views/chatgpt/index.vue'], resolve),
    type: 'page',
    children: [],
    hidden: true
  },
  {
    path: '/chat',
    name: 'ChatBot',
    meta: { title: 'AI聊天机器人', icon: 'fa-home' },
    component: (resolve) => require(['@/views/chatbot/index.vue'],resolve),
    type: 'page',
    hidden: true
  },
  {
    path: '/waterFall',
    name: 'waterFall',
    meta: { title: '蜂窝结构', icon: 'fa-home' },
    component: (resolve) => require(['@/views/categorypage/TestPage.vue'], resolve),
    type: 'page',
    hidden: true
  },
  {
    path: '/404',
    name: 'error404',
    component: Error404,
    meta: { title: '404', icon: '' },
    type: 'error',
    hidden: true
  },
  {
    path: '/403',
    name: 'error403',
    component: (resolve) => require(['@/views/errorpage/ErrorPage403.vue'], resolve),
    meta: { title: '403', icon: '' },
    type: 'error',
    hidden: true
  },
  //这个*匹配必须放在最后，将改路由配置放到所有路由的配置信息的最后，否则会其他路由path匹配造成影响。     
  // {
  //   path: '*',
  //   redirect: '/404',
  //   type: 'error',
  //   hidden: true
  // }
]

const router = new VueRouter({
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  //代表着是基本的路由请求的路径。参考 ：如：base: ‘/app/’，那么所有的请求都会在url之后加上/app/，应用的基路径。
  //例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 “/app/”
  //base: process.env.VUE_APP_BASE_URL,//和代理服务器的API前缀是不一样的概念
  routes:constantRoutes
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = VueRouter()
  router.matcher = newRouter.matcher // reset router
}

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
// 全局后置钩子-常用于结束动画等,beforeEach每次进行路由跳转时都会执行
router.beforeEach(async(to, from, next) => {
  document.title = to.meta.title + " - 极客普拉斯,梦极客园,极客普拉斯&梦极客园" || "极客普拉斯,梦极客园,极客普拉斯&梦极客园 - geekplus";
  //console.log(store.getters.routes);//重新复制给store
  if (store.getters.routes.length==0 || store.getters.addRoutes==0) {
      //拿到浏览器缓存中动态路由的数据 重新添加
      //const data = JSON.parse( localStorage.getItem('userRouter'))
    if (store.getters.addRoutes.length == 0) {
      //store.dispatch('permission/getChildrenPath').then(accessRoutes => {
      await store.dispatch('permission/generateRoutes').then(accessRoutes => {
        let asyncRouter = accessRoutes
        // 根据roles权限生成可访问的路由表
        // console.log(accessRoutes);
        // accessRoutes.forEach(v => {
        //   //console.log(v);
        //   router.addRoute('layout',v) // 动态添加可访问路由表,循环添加路由
        //   router.options.routes[0].children.push(v)
        // })
        router.addRoute(accessRoutes) // 动态添加可访问路由表
        router.options.routes=store.getters.routes;
        // Vue.AppPage.$emit("loading",true);
        //console.log(router.options.routes)
        next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
        // next({
        //   path: to.path,
        //   replace: true
        // });
      //})
      })
      //接受next
      //next(to.path)  //添加完成后再次进入
    }else{
      // Vue.AppPage.$emit("loading",true);
      next({ ...to, replace: true })  //添加完成后再次进入
    }
  } else {
    // Vue.AppPage.$emit("loading",false);
    //接受next
    next() //如果登录页或首页 或 vuex中有动态路由数据 直接通过
  }
});
export default router
