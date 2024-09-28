import request from '@/utils/request'

// 网站首页聚合数据
export function getHomeViewData(queryParams) {
  return request({
    url: '/geekplusapp/getHomeView',
    method: 'post',
    params: queryParams
  })
}

// 网站顶部每日名言
export function getOneFamousWords() {
  return request({
    url: '/geekplusapp/getTodayFamousWords',
    method: 'get',
  })
}

// 网站顶部每日名言
export function getDailyFamousWords() {
  return request({
    url: '/geekplusapp/getDailyFamousWords',
    method: 'get',
  })
}

//首页在线音乐
export function getOnlineMusic() {
  return request({
    url: '/geekplusapp/getOnlineMusic',
    method: 'get',
  })
}

//获取首页轮播图
export function getCarousel() {
    return request({
      url: '/geekplusapp/getCarousel',
      method: 'get',
    })
}

// 查询首页网站友情链接，is_display=1,表示显示
export function displayFriendlyLink() {
  return request({
    url: '/geekplusapp/displayFriendlyLink',
    method: 'get',
    //params: query
  })
}

// 用户申请首页友情链接，is_display=0,默认不显示，需要审核
export function userAppFriendlyLink(gpdata) {
  return request({
    url: '/geekplusapp/userAppFriendlyLink',
    method: 'post',
    data: gpdata
  })
}

// 网站用户评论留言
export function sendUserComment(data) {
  return request({
    url: '/geekplusapp/userCommentMessage',
    method: 'post',
    data: data
  })
}

// 网站用户文章评论留言
export function sendArticleComment(data) {
  return request({
    url: '/geekplusapp/articleCommentMessage',
    method: 'post',
    data: data
  })
}

// 获取用户的留言信息
export function getAllUserComment(query) {
  return request({
    url: '/geekplusapp/getAllUserComment',
    method: 'get',
    params: query
  })
}

// 获取用户的文章留言信息
export function getAllArticleComment(query) {
  return request({
    url: '/geekplusapp/getAllArticleComment',
    method: 'get',
    params: query
  })
}

// 获取用户的留言评论数量
export function getUserCommentCount() {
  return request({
    url: '/geekplusapp/getUserCommentCount',
    method: 'get'
  })
}

// 获取最新的十条用户的留言评论
export function getArticleLatestUserComment() {
  return request({
    url: '/geekplusapp/getLatestArticleUserComment',
    method: 'get'
  })
}

// 获取热门的六条用户的留言评论
export function getWebHotUserComment() {
  return request({
    url: '/geekplusapp/getHotWebUserComment',
    method: 'get'
  })
}

// 查询网站信息，比如标题，网站介绍，网站底部备案信息等
export function getGpWebTitleInfo(id) {
  return request({
    url: '/geekplusapp/getGpWebTitleInfo',
    method: 'get',
    params:id
  })
}

// 查询关于我的信息，我的个人介绍等
export function getAboutMyGpWeb(id) {
  return request({
    url: '/geekplusapp/getAboutMyGpWeb/'+id,
    method: 'get',
  })
}

// 博客网站查询浏览量最多的前十条的文章
export function getMostViewedArticle(param) {
  return request({
    url: '/geekplusapp/getMostViewedArticle',
    method: 'get',
    params:param
  })
}

// 动态查询不同目录的前多少条文章列表
export function getArticlesByCategoryLimit(param) {
  return request({
    url: '/geekplusapp/getArticlesListByCategoryLimit',
    method: 'get',
    params:param
  })
}

// 动态分页查询不同目录的文章列表
export function getGpArticlesByCategory(param) {
  return request({
    url: '/geekplusapp/getGpArticlesListByCategory',
    method: 'get',
    params:param
  })
}

// 搜索标题分页查询的文章列表
export function selectGpArticlesListByKeyWords(param) {
  return request({
    url: '/geekplusapp/selectGpArticlesListByKeyWords',
    method: 'get',
    params:param
  })
}

// 博客网站查询四加一大屏显示特别推荐的文章
export function getFourPlusOneArticles(param) {
  return request({
    url: '/geekplusapp/getFourPlusOneArticles',
    method: 'get',
    params:param
  })
}

/*****************************下面请求还未被实际赋予功能，不能使用，用作保留接口**********************************/
// 博客网站查询十条特别推荐的文章
export function getTenRecommendArticle(param) {
  return request({
    url: '/geekplusapp/getTenRecommendArticle',
    method: 'get',
    params:param
  })
}

// 博客网站查询四个大屏显示特别推荐的文章
export function getFourRecommendArticle(param) {
  return request({
    url: '/geekplusapp/getFourRecommendArticle',
    method: 'get',
    params:param
  })
}
/***************************************************************/

// 查询父子目录菜单循环递归文章类型目录列表
export function listSubParentCategory() {
  return request({
    url: '/geekplusapp/listSubParentCategory',
    method: 'get',
  })
}

// 查询所有文章类型目录列表，不查询父级目录
export function listSubCategory() {
  return request({
    url: '/geekplusapp/listSubCategory',
    method: 'get',
  })
}

// 查询各个标签的文章数量
export function getTagArticleCount() {
  return request({
    url: '/geekplusapp/getTagArticleCount',
    method: 'get',
  })
}

// 根据标签的tagId或者name查询每个标签的所有文章列表
export function selectArticleListForTag(param) {
  return request({
    url: '/geekplusapp/selectArticleListForTag',
    method: 'get',
    params:param
  })
}

// 查询最新的一条通知
export function getGpNoticeNewOne() {
  return request({
    url: '/geekplusapp/getGpNoticeNewOne',
    method: 'get',
  })
}

// 查询网站弹窗通知
export function getWebPopUpNotice(query) {
  return request({
    url: '/geekplusapp/getWebPopUpNotice',
    method: 'get',
    params: query
  })
}

// 查询最新的五条通知
export function getGpNoticeNewFive() {
  return request({
    url: '/geekplusapp/getGpNoticeNewFive',
    method: 'get',
  })
}

// 用户投稿
export function userWriteGpArticles(data) {
  return request({
    url: '/geekplusapp/userWriteGpArticles',
    method: 'post',
    data:data
  })
}

// 获取文章详情
export function getArticleDetail(ddt) {
  return request({
    url: '/geekplusapp/getArticle',
    method: 'post',
    data:ddt
  })
}

// 获取文章详情,条件为is_display=1
export function getArticleDetailIsDisplay(id) {
  return request({
    url: '/geekplusapp/getArticleIsDisplay/'+id,
    method: 'get',
  })
}

// 用户查询文章列表,首页混合所有类型,
export function getIndexAllCategoryArticleList(param) {
  return request({
    url: '/geekplusapp/getArticleList',
    method: 'get',
    params:param
  })
}

// 用户查询文章列表,根据不同的文章目录
export function getArticleCategoryListByPath(param) {
  return request({
    url: '/geekplusapp/getArticleList',
    method: 'get',
    params:param
  })
}

// 提供在写文章时查询所有标签
export function getArticleTagList(param) {
  return request({
    url: '/geekplusapp/getArticleTagList',
    method: 'get',
    params:param
  })
}

// 在写文章时，需要插入文章的所属标签
export function insertArticleMapTag(dataM) {
  return request({
    url: '/geekplusapp/insertArticleMapTag',
    method: 'post',
    data:dataM
  })
}

//上传图片文件
export function uploadAllFile(formData) {
  return request({
    url: '/geekplusapp/uploadFile',
    method: 'post',
    data: formData,
    headers:{'Content-Type': 'multipart/form-data'}
  })
}

// 获取某个文件夹下的图片list
export function getImageList(filePath) {
  return request({
    url: '/geekplusapp/getImageList',
    method: 'get',
    params:filePath
  })
}

// 删除某文件路径下的文件
export function deleteFile(filePath) {
  return request({
    url: '/geekplusapp/deleteFile',
    method: 'post',
    data:filePath
  })
}

// 更新文章浏览量和文章点赞量
export function updateViewCountAndLikeCount(queryParams) {
  return request({
    url: '/geekplusapp/updateArticleViewCount',
    method: 'get',
    params:queryParams
  })
}

// 查询当前文章的前一条
export function getCurrentPrevArticle(queryParams) {
  return request({
    url: '/geekplusapp/getCurrentPrevArticle',
    method: 'get',
    params:queryParams
  })
}

// 查询当前文章的后一条
export function getCurrentNextArticle(queryParams) {
  return request({
    url: '/geekplusapp/getCurrentNextArticle',
    method: 'get',
    params:queryParams
  })
}

//获取疫情数据
export function getcovid() {
    return request({
      url: '/covid/getAllData',
      method: 'get',
    })
}

//获取世界疫情数据
export function getWorldCovid() {
    return request({
      url: '/covid/getCovid19Foreign',
      method: 'get',
    })
}

//获取世界疫情数据
export function get163coviddata() {
  return request({
    url: '/163coviddata',
    method: 'get',
  })
}