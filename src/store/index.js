import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import permission from './modules/permission'

Vue.use(Vuex)

//var store=window.localStorage;

// export function setToken(val){
//     store.token=val;
// }

// export function deleteKey(key){
//     store.removeItem(key)
// }

// export function getToken(){
//     return store.token;
// }
// const state= {
//   menuList:[],
// }

// const store = new Vuex.Store({
//     // modules: {
//     //   app,
//     //   settings,
//     //   tagsView,
//     //   user,
//     //   permission
//     // },
//     state,
//     getters
//   })
  
//export default store
export default new Vuex.Store({
  state: {
    routes:[],
    addRoutes:[],
    menuRouters:[]
  },
  getters,
  mutations: {
    // addMenuRouters(state, routes){
		// 	state.menuRouters = routes;
    //   state.routes=routes;
		// }
  },
  actions: {
  },
  modules: {
    permission
  }
})
