//统一的注册组件的入口文件index.js
import BreadCrumbItem  from './breadcrumb/BreadCrumbItem'
import BreadCrumb  from './breadcrumb/BreadCrumb'
import PlusPager from './pager/PlusPager'
import WaterFall from './waterfall/WaterFall'
//入口文件注册插件（main.js）
export default {
  install (app) {
    // Vue2中，参数是Vue构造函数
    // Vue3中，参数是根组件的实例对象
    // 配置一个全局组件,xxx.name就是我的组件中设置的name，也可以以'XXX'直接表示
    app.component(BreadCrumb.name,BreadCrumb)
    app.component(BreadCrumbItem.name, BreadCrumbItem)
    app.component(PlusPager.name,PlusPager)
    app.component(WaterFall.name,WaterFall)
  }
}