import BreadCrumbItem  from './breadcrumb/BreadCrumbItem'
import BreadCrumb  from './breadcrumb/BreadCrumb'
export default {
  install (app) {
    // Vue2中，参数是Vue构造函数
    // Vue3中，参数是根组件的实例对象

    // 配置一个全局组件
    app.component(BreadCrumb.name,BreadCrumb)
    app.component(BreadCrumbItem.name, BreadCrumbItem)
  }
}