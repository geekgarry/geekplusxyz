<template>
  <div>
    <div class="banner_bar">
      <div class="container">
        <div id="page-header ">
          <h3 class="text-center">“ {{ $route.query.keyword }} ”</h3>
        </div>
      </div>
    </div>
    <div class="container-article">
      <div class="container">
        <section class="row">
          <div class="">
            <div class="col-lg-9 col-md-9 animated slideInLeft">
              <div class="article-list">
                <article
                  class="item"
                  v-for="(item, index) in articleList"
                  :key="index"
                >
                  <div class="art-item">
                    <div class="left-art-img">
                      <div class="art-img">
                        <a href="#">
                          <img
                            v-lazy="
                              item.indexPicture
                                ? item.indexPicture
                                : '/imgs/IMG_0541.JPG'
                            "
                          />
                        </a>
                        <!-- class="animated hover_" data-in="swing" data-out="pulse" -->
                        <div class="overlay hidden-sm hidden-xs">
                          <h2>
                            {{
                              item.articleTitle ? item.articleTitle : "title"
                            }}
                          </h2>
                          <router-link class="info" :to="'/article/' + item.id"
                            >详细</router-link
                          >
                        </div>
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <router-link :to="'/article/' + item.id">{{
                            item.articleTitle
                              ? item.articleTitle
                              : "《maike市集》"
                          }}</router-link>
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                v-lazy="require('@/assets/icon/mai.png')"
                                class="article_user_pic"
                              />
                            </li>
                            <li class="hidden-xs">
                              <a href="javascript:void(0);">{{
                                item.authorName ? item.authorName : "geekcjj"
                              }}</a>
                            </li>
                            <li>
                              {{
                                item.createTime
                                  ? getOnlyYearMonthDay(item.createTime)
                                  : "2015-04-04"
                              }}
                            </li>
                          </ul>
                        </div>
                        <div
                          v-if="item.articleContent !== ''"
                          v-text="item.abstractText"
                          class="desc"
                        ></div>
                        <div v-else class="desc">
                          这是一篇文章，虽然他没有文字，市集里最熟悉的陌生人，多年以后，我们又在繁华的市集相遇，伫立对视片刻，便擦肩而过，消失在了人潮中。
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <!-- <article class="item">
                  <div class="art-item">
                    <div class="left-art-img">
                      <div class="art-img">
                        <img
                          src="images/ChMkJ1bKziaIU3lvAAgAJKmcCvEAALJIAFrDQAACAA8015.jpg"
                        />
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="http://www.maike.com/detail_379.html"
                            >DIV+CSS静态HTML网页设计模板</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                src="images/mai.png"
                                class="article_user_pic"
                              />
                            </li>
                            <li class="hidden-xs">
                              <a href="http://www.maike.com">周末</a>
                            </li>
                            <li>2015-04-04</li>
                          </ul>
                        </div>
                        <p class="desc">
                          这个网页设计是否似曾相识，不错就是在《篮球明星网页设计》版本上修改而成的，这款更适合女孩子
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                <article class="item">
                  <div class="art-item">
                    <div class="left-art-img">
                      <div class="art-img">
                        <img
                          src="images/ChMlWl0u8vqIF0m2AAlIzzrVVVQAAL4fwAz3oQACUjn017.jpg"
                        />
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="http://www.maikete.com/detail_346.html"
                            >迷你灰MINIGRAY</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                src="images/mai.png"
                                class="article_user_pic"
                              />
                            </li>
                            <li class="hidden-xs">
                              <a href="http://www.maikete.com">周末</a>
                            </li>
                            <li>2015-04-04</li>
                          </ul>
                        </div>
                        <p class="desc">
                          该模板为纯html5模板，本人很喜欢简洁明了的页面设计，不浮夸，也不冗余，此模板采用黑白为主色
                        </p>
                      </div>
                    </div>
                  </div>
                </article> -->
              </div>
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li :class="queryParams.pageNum == 1 ? 'disabled' : ''">
                    <a
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(queryParams.pageNum - 1)"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <!-- Math.ceil(articleTotal / queryParams.pageSize) -->
                  <li
                    :class="queryParams.pageNum == pageNumber ? 'active' : ''"
                    v-for="(pageNumber, index) in Math.ceil(
                      articleTotal / queryParams.pageSize
                    )"
                    :key="index"
                  >
                    <a
                      v-if="queryParams.pageNum <= 4 && pageNumber <= 9"
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 4
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 3
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 2
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 1
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 1
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 2
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 3
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 4
                      "
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                  </li>
                  <!-- <li >
                    <a v-for="index in Math.ceil(articleTotal / queryParams.pageSize)" :key="index" 
                     href="javascript:void(0);" @click="searchGpArticlesList(index)">{{index}}
                    </a>
                  </li> -->
                  <!-- <li><a href="javascript:void(0);">2</a></li>
                  <li><a href="javascript:void(0);">3</a></li>
                  <li><a href="javascript:void(0);">4</a></li>
                  <li><a href="javascript:void(0);">5</a></li> -->
                  <li
                    :class="
                      queryParams.pageNum ==
                      Math.ceil(articleTotal / queryParams.pageSize)
                        ? 'disabled'
                        : ''
                    "
                  >
                    <a
                      href="javascript:void(0);"
                      @click="searchGpArticlesList(queryParams.pageNum + 1)"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <aside class="col-lg-3 col-md-3 right animated slideInRight">
              <div class="right-fun">
                <div class="alert alert-info alert-dismissible fade in">
                  <a href="#" class="close" data-dismiss="alert">&times;</a>
                  博主自建并正在使用的书单已经放到
                  <a
                    title=""
                    href="https://mubu.com/doc/dlGWUevFA"
                    target="_blank"
                    data-original-title="个人书单"
                    class="alert-link"
                  >
                    幕布</a
                  >了，感兴趣的书友可以参考一下。另外，顺便安利一下
                  <a
                    title=""
                    href="https://mubu.com/inv/44164"
                    target="_blank"
                    data-original-title="注册地址"
                    class="alert-link"
                    >幕布 </a
                  >这个工具，它可以用来整理思维大纲，自动生成好看的思维导图，你值得拥有！
                </div>
                <div class="model hidden-xs">
                  <div class="title">站内搜索</div>
                  <div class="content">
                    <!-- <div class="search_bar_side">
                                            <form>
                                                <input type="text" placeholder="请输入关键词" name="keywords">
                                                <button type="submit">
                                                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                                </button>
                                            </form>
                                        </div> -->
                    <div class="search_aside_bar">
                      <form class="form-horizontal" @submit.prevent="searchResultForResult()">
                        <div class="input-group search-input-group">
                          <input
                            name="keywords"
                            autocomplete="off"
                            type="text"
                            v-model="keywords"
                            class="form-control"
                            placeholder="输入搜索关键字"
                          />
                          <span class="input-group-addon">
                            <button
                              type="button"
                              @click="searchResultForResult()"
                            >
                              <span class="glyphicon glyphicon-search"></span>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  id="my-social"
                  class="panel panel-info hidden-xs"
                  style="margin-top: 20px"
                >
                  <div class="panel-heading">
                    <span class="glyphicon glyphicon-hand-right"></span
                    >&nbsp;我的社交
                  </div>
                  <div class="">
                    <div class="my-social-list">
                      <a
                        id="S_ins"
                        title="Instagram"
                        target="_blank"
                        href="https://www.instagram.com/geekcjj/"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Instagram"
                      >
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                      <a
                        id="s_douban"
                        title="新浪微博"
                        target="_blank"
                        href="https://www.weibo.com/u/5373856458"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="新浪微博"
                      >
                        <i class="fa fa-weibo"></i>
                      </a>
                      <a
                        id="s_douban"
                        title="豆瓣"
                        target="_blank"
                        href="https://www.douban.com/people/geekcjj/"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="豆瓣"
                      >
                        <i class="fa fa-dashcube"></i>
                      </a>
                      <a
                        id="s_qq_music"
                        title="qq音乐"
                        target="_blank"
                        href="https://y.qq.com/portal/profile.html?uin=oKSFNKC57KvA7c**"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="qq音乐"
                      >
                        <i class="fa fa-music"></i>
                      </a>
                      <a
                        id="s_email"
                        title="邮箱"
                        target="_blank"
                        href="mailto:geekcjj@gmail.com"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="EMAIL"
                      >
                        <i class="fa fa-envelope-o"></i>
                      </a>
                      <a
                        id="s_github"
                        title="GitHub"
                        target="_blank"
                        href="https://github.com/geekcjj"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="GITHUB"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                      <a
                        id="s_gitee"
                        title="Gitee码云"
                        target="_blank"
                        href="https://gitee.com/geekcjj"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="码云"
                      >
                        <i class="fa fa-git"></i>
                      </a>
                      <a
                        id="s_rss"
                        title="RSS订阅"
                        target="_blank"
                        href="http://www.zifangsky.cn/feed/"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="RSS"
                      >
                        <i class="fa fa-rss-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- <div
                  id="geekcjj-tool"
                  class="panel panel-info hidden-xs"
                  style="margin-top: 20px"
                >
                  <div class="panel-heading">
                    <span class="glyphicon glyphicon-hand-right"></span
                    >&nbsp;我是GEEKCJJ
                  </div>
                  <div class="">
                    <div class="my-blog-tool">
                      <a
                        id="S_ins"
                        title="Instagram"
                        target="_blank"
                        href="https://www.instagram.com/geekcjj/"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="Instagram"
                      >
                        <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
                      </a>
                      <a
                        id="s_douban"
                        title="新浪微博"
                        target="_blank"
                        href="https://www.weibo.com/u/5373856458"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="新浪微博"
                      >
                        <i class="fa fa-weibo fa-lg"></i>
                      </a>
                      <a
                        id="s_douban"
                        title="豆瓣"
                        target="_blank"
                        href="https://www.douban.com/people/geekcjj/"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="豆瓣"
                      >
                        <i class="fa fa-dashcube fa-lg"></i>
                      </a>
                      <a
                        id="s_qq_music"
                        title="qq音乐"
                        target="_blank"
                        href="https://y.qq.com/portal/profile.html?uin=oKSFNKC57KvA7c**"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="qq音乐"
                      >
                        <i class="fa fa-music fa-lg"></i>
                      </a>
                      <a
                        id="s_email"
                        title="邮箱"
                        target="_blank"
                        href="mailto:geekcjj@gmail.com"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="EMAIL"
                      >
                        <i class="fa fa-envelope-o fa-lg"></i>
                      </a>
                      <a
                        id="s_github"
                        title="GitHub"
                        target="_blank"
                        href="https://github.com/geekcjj"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="GITHUB"
                      >
                        <i class="fa fa-github fa-lg"></i>
                      </a>
                      <a
                        id="s_gitee"
                        title="Gitee码云"
                        target="_blank"
                        href="https://gitee.com/geekcjj"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="码云"
                      >
                        <i class="fa fa-git fa-lg"></i>
                      </a>
                      <a
                        id="s_rss"
                        title="RSS订阅"
                        target="_blank"
                        href="http://www.zifangsky.cn/feed/"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="RSS"
                      >
                        <i class="fa fa-rss-square fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div> -->
                <div class="panel panel-default">
                  <div
                    class="panel-heading"
                    style="background: rgba(0, 0, 0, 0.0001)"
                  >
                    <span class="glyphicon glyphicon-th"></span>&nbsp;分类
                  </div>
                  <div class="panel-body" id="cat-list">
                    <a style="margin-bottom: 3px" class="label label-info"
                      >Linux系统编程<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="label label-info"
                      >Python<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="label label-info"
                      >Django<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="label label-info"
                      >深度学习<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="label label-info"
                      >MySql<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="label label-info"
                      >生活<span class="badge badge-info"></span>
                    </a>
                  </div>
                </div>
                <div
                  class="panel panel-default recommendlist"
                  style="margin-top: 20px"
                >
                  <div
                    class="panel-heading"
                    style="background: rgba(0, 0, 0, 0.0001)"
                  >
                    <span class="glyphicon glyphicon-list"></span>&nbsp;快捷菜单
                  </div>
                  <div class="panel-body">
                    <!-- <div class="model recommend">
                                                                                                                        <div class="title">热门推荐</div>						                            <div class="content"> -->
                    <div class="fastmenu">
                      <span
                        v-for="(item, index) in allCategoryList"
                        :key="index"
                      >
                        <router-link :to="'/articleList/' + item.path">{{
                          item.categoryName
                            ? item.categoryName
                            : "编程技术&nbsp;(13)"
                        }}</router-link>
                      </span>
                      <!-- <span><a href="http://www.maikete.com">文章博客</a></span>
                      <span><a href="http://www.maikete.com">新闻资讯</a></span>
                      <span><a href="http://www.maikete.com">资源文件</a></span>
                      <span><a href="http://www.maikete.com">格物生活</a></span>
                      <span><a href="http://www.maikete.com">给我留言</a></span> -->
                    </div>
                  </div>
                </div>
                <!-- <div class="model">
                                                            <div class="title">快捷菜单</div>
                                                            <div class="menu">
                                                                <span><a
                                                                            href="http://www.maikete.com">文章博客</a></span>
                                                                <span><a
                                                                            href="http://www.maikete.com">新闻资讯</a></span>
                                                                <span><a
                                                                            href="http://www.maikete.com">资源文件</a></span>
                                                                <span><a 
                                                                            href="http://www.maikete.com">格物生活</a></span>
                                                                <span><a
                                                                            href="http://www.maikete.com">给我留言</a></span>
                                                            </div>
                                                        </div> -->

                <div class="panel panel-default" style="margin-top: 20px">
                  <div
                    class="panel-heading"
                    style="background: rgba(0, 0, 0, 0.0001)"
                  >
                    <span class="glyphicon glyphicon-th-list"></span
                    >&nbsp;热门文章
                  </div>
                  <div class="panel-body recommendlist">
                    <!-- <div class="model recommend">
                    <div class="title">热门推荐</div>
                    <div class="content"> -->
                    <p v-for="(item, index) in sixNewArticle" :key="index">
                      <a
                        href="javascript:void(0);"
                        @click="
                          $router.push({
                            name: 'article',
                            params: { articleId: item.id },
                          })
                        "
                      >
                        {{
                          item.articleTitle
                            ? item.articleTitle
                            : "dw个人网页模板作业成品"
                        }}
                      </a>
                    </p>
                    <!-- <p>
                      <a href="http://www.youtiy.com/detail_317.html"
                        >dw个人网页模板作业成品</a
                      >
                    </p> -->
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import {
  selectGpArticlesListByKeyWords,
  getSixNewestArticle,
  listSubCategory,
} from "@/api/geekplus/geekplus";
export default {
  data() {
    return {
      keywords: "",
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        articleTitle: "",
      },
      articleList: [],
      articleTotal: 0,
      pageNum: 9,
      sixNewArticle: [],
      allCategoryList: [],
    };
  },
  created() {
    this.$router.onReady(() => {
      this.keywords = this.$route.query.keyword;
    });
    console.log(this.keywords)
    // document.onkeydown = function (e) {
    //   // 回车提交表单
    //   // 兼容FF和IE和Opera
    //   var theEvent = window.event || e;
    //   var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    //   if (code == 13) {
    //     this.searchResultForResult();
    //   }
    // };
    this.searchGpArticlesList(1);
    this.getSixNewArticle();
    this.getAllArticleCategory();
  },
  mounted(){
    //console.log("mounted");
    // document.addEventListener("keydown", (e) => {
    //   let key = window.event.keyCode;
    //   if (key == 13 && !this.keywords!='') {
    //     // 13是enter键的键盘码 如果等于13 就调用click的登录方法
    //     this.searchResultForResult();
    //   }
    // });
  },
  activated() { // 使用该生命周期方法可以解决第二次进入该页面数据不刷新问题
    this.keywords = this.$route.query.keyword;
    //console.log(this.keywords);
    this.searchGpArticlesList(1)// 这个是获取列表数据的方法
  },
  methods: {
    searchGpArticlesList(pageNum) {
      var total = this.articleTotal;
      var pageSize = this.queryParams.pageSize;
      var pageAllNum = total / pageSize;
      this.queryParams.pageNum = pageNum;
      if (pageNum <= 0) {
        //console.log("页数等于0");
        this.queryParams.pageNum = 1;
      } else if (total <= pageSize) {
        //console.log("页数小于一");
        this.queryParams.pageNum = 1;
      } else if (pageNum >= Math.ceil(pageAllNum)) {
        //console.log("页数等于最大页数");
        this.queryParams.pageNum = Math.ceil(pageAllNum);
      }
      this.queryParams.articleTitle=this.$route.query.keyword;
      //this.queryParams.pageSize=10;
      selectGpArticlesListByKeyWords(this.queryParams)
        .then((response) => {
          console.log(response);
          this.articleList = response.rows;
          this.articleTotal = response.total;
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getSixNewArticle() {
      let data = { isDisplay: 1 };
      getSixNewestArticle(data)
        .then((response) => {
          //console.log(response.data);
          this.sixNewArticle = response.data;
        })
        .catch((error) => {
          //console.log(error.msg)
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getAllArticleCategory() {
      listSubCategory()
        .then((response) => {
          this.allCategoryList = response.data;
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    searchResultForResult() {
      if (this.keywords !== "") {
        //this.$router.push("/search?keayword="+this.keywords);
        this.$router.push({
          path: "/search",
          query: { keyword: this.keywords },
        });
      }
      this.searchGpArticlesList(1);
      this.keywords = "";
    },
  },
};
</script>

<style>
</style>