import {listSubParentCategory} from "@/api/geekplus/geekplus";
import router from "../router/index";
import store from "../store";
import HomeView from '../views/HomeView.vue'

//import router from 'vue-router'
/* Layout */
import Layout from '@/layout'

export function getChildrenPath () {
    let routerList =new Array();
    let homePage={
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: '首页', icon: '' },
        type: 'menu',
        children: []
      };
      routerList.push(homePage);
    listSubParentCategory().then(response =>{ //调用后端接口获取路由列表
        let menus =response.data
        //console.log(response)
        menus.forEach(item =>{
            setChild(item, routerList, '', '')
        })
        let layoutRouter = {
            path: '',
            name: 'layout',
            //component: () => import('../layout/index'),
            component:Layout,
            type:'layout1',
            children: routerList,
        }
        var tempRouterList=new Array()
        let tempRouter=router.options.routes.filter(
            (item) => {
                item.type==='layout'
                return item
            }
        )
        routerList.forEach(item => {
            tempRouter[0].children.push(item)
            //router.options.routes.push(item)
        })
        router.addRoute(tempRouter[0])
        //store.state.menuList=tempRouter[0].children
        //console.log(store.state.menuList)
        // router.options.routes.push(layoutRouter)
        //router.options.routes.push(tempRouter);
        //router.addRoute(router.options.routes)
        //router.options.routes.push(...tempRouter);
        //router.addRoutes(router.options.routes);
        //console.log(layoutRouter)
        // tempRouter.children.push(routerList);
        // router.addRoute(tempRouter);
        //console.log(router.options.routes)
    }).catch((error) => {
        console.log(error);
        //return error;
    })
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
    let routerName=item.path
    rootPath = item.path
    if (item.children !=null && item.children != [] && item.children.length>0){
        //有下层则继续递归路由
        let router = {
            name: routerName.replace('/',''),
            path: rootPath,
            component: () =>import('@/views/categorypage/ArticleListPage.vue'),// + item.component
            meta: {title:rootName},
            type:'servermenu',
            children:[]
        }
        //console.log(router)
        routerList.push(router)
        //如果有下层
        item.children.forEach(node =>{
            setChild(node, router.children, rootName,rootPath)
        })
    }else{
        //没有下层则说明这是一个路由
        let router = {
            name: routerName.replace('/',''),
            path: rootPath,
            component: () =>import('@/views/categorypage/ArticleListPage.vue'),// + item.component
            meta: {title:rootName},
            type:'servermenu',
            children:[]
        }
        //console.log(router)
        routerList.push(router)
    }

}