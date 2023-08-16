import router from "../../router"
import {constantRoutes} from "../../router";
import store from "../../store";
import HomeView from '@/views/HomeView.vue'
import { listSubParentCategory } from "@/api/geekplus/geekplus";
//import router from 'vue-router'
/* Layout */
import Layout from '@/layout'

// 全局变量state，routes和addRoutes数组
const state = {
    routes: [],
    addRoutes: [],
    menuRouters: [],
}

// Mutation 用户变更Store数据
const mutations = {
    SET_ROUTES: (state, routes) => {
        state.menuRouters = routes
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}

const actions = {
    generateRoutes({ commit }) {
        return new Promise(resolve => {
            let routerList = new Array();
            listSubParentCategory().then(response => { //调用后端接口获取路由列表
                let menus = response.data;
                // console.log(menus)
                menus.forEach(item => {
                    setChild(item, routerList, '', '')
                })
                // var tempRouterList=new Array()
                // let tempRouter=router.options.routes.filter(
                //     (item) => {
                //         item.type==='layout'
                //         return item
                //     }
                // )
                // routerList.forEach(item => {
                //     tempRouter[0].children.push(item)
                //     //router.options.routes.push(item)
                // })
                let layoutRouter = {
                    path: '',
                    name: 'layout',
                    component: Layout,
                    //component: () => import('../layout/index'),
                    meta: { title: '框架页面', icon: '' },
                    type: 'layout',
                    hidden: true,
                    children: routerList,
                }
                routerList.push({ path: '*', redirect: '/404',type:'error', hidden: true })
                commit('SET_ROUTES', routerList);
                resolve(layoutRouter);
            })
        })
        //return routerList;
    }
}

function deep(obj) {
    let objName1 = JSON.stringify(obj);
    let objName2 = JSON.parse(objName1);
    return objName2
}
function setChild(item, routerList, rootName, rootPath) {
    // rootName = rootName+'/'+item.categoryName
    // rootPath = rootPath+'/'+item.path
    rootName = item.categoryName
    let routerName = item.path
    rootPath = item.path
    if (item.children != null && item.children != [] && item.children.length > 0) {
        //有下层则继续递归路由
        let router = {
            name: routerName.replace('/', ''),
            path: rootPath,
            //component: () => import('@/views/categorypage/GeneralListPage'),
            component: loadView(item.component),
            // componentStr: item.component,
            meta: { title: rootName, icon: item.icon, id: item.id},
            type: 'servermenu',
            children: []
        }
        //console.log(router)
        routerList.push(router)
        //如果有下层
        item.children.forEach(node => {
            setChild(node, router.children, rootName, rootPath)
        })
    } else {
        //没有下层则说明这是一个路由
        let router = {
            name: routerName.replace('/', ''),
            path: rootPath,
            //component: () => import('@/views/categorypage/ArticleListPage'),
            component: loadView(item.component),
            // componentStr: item.component,
            meta: { title: rootName, icon: item.icon, id: item.id},
            type: 'servermenu',
            children: []
        }
        //console.log(router)
        routerList.push(router)
    }

}
export const loadView = (view) => { // 路由懒加载
    return (resolve) => require([`@/views/${view}`], resolve)
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}