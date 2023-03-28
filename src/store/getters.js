const getters = {
    sidebar: state => state.app.sidebar,
    size: state => state.app.size,
    device: state => state.app.device,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    userName: state => state.user.userName,
    nickName: state => state.user.nickName,
    userId: state => state.user.userId,
    introduction: state => state.user.introduction,
    roles: state => state.user.roles,
    permissions: state => state.user.permissions,
    menus: state => state.user.menus,
    //permission_routes: state => state.permission.routes,
    routes: state => state.permission.routes,
    addRoutes: state => state.permission.addRoutes,
    notifyStatus: state=> state.user.notifyStatus,
  }
  export default getters
  