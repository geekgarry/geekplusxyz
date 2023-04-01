import HomeView from '../views/HomeView.vue'
import Error404 from '../views/errorpage/ErrorPage404.vue'
import LeaveMessage from '../views/comment/LeaveMessage.vue'
import Write4Me from "@/views/write/Write4Me.vue"
/* Layout */
import Layout from '@/layout'
/**
 * 动态路由定义
 */
//设置type表示页面是菜单类型还是页面，还是跳转的页面
export const dynamicRouters=[
  {
    path: '',
    name: 'layout',
    component: Layout,
    meta: { title: '首页', icon: '' },
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
  //   path: '',
  //   name: 'layout',
  //   component: Layout,
  //   //meta: { title: '首页', icon: '' },
  //   type: 'page',
  //   hidden:true,
  //   children:[
  //     {
  //       path: '/search',
  //       name: 'search',
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
]
export const constantRoutes = [
  {
    path: '/chatgpt',
    name: 'ChatGPT',
    meta: { title: 'ChatGPT智能助手', icon: 'fa-home' },
    component: (resolve) => require(['@/views/chatgpt/index.vue'], resolve),
    type: 'page',
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

