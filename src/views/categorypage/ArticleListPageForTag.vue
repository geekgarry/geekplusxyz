<template>
  <div>
    <div class="banner_bar">
      <div class="container">
        <div id="page-header ">
          <h3 class="text-center">“ {{ $route.query.tagName }} ”</h3>
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
                        <router-link :to="'/article/' + item.id">
                          <img
                            v-lazy="
                              item.indexPicture
                                ? item.indexPicture
                                : require('@/assets/img/cover'+someNumberCount(4)+'.jpeg')
                            "
                          />
                        </router-link>
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
                                item.authorName ? item.authorName : "geekplus"
                              }}</a>
                            </li>
                            <li>
                              <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>&nbsp;{{ item.viewCount? numFormatKWM(item.viewCount) : 0 }}
                            </li>
                            <li>
                              <span class="glyphicon glyphicon-time" aria-hidden="true"></span>&nbsp;{{ item.createTime ? dateTimeAgo(item.createTime) : "2015-04-04" }}
                            </li>
                            <!-- <li>
                              {{ item.createTime ? getOnlyYearMonthDay(item.createTime) : "2015-04-04" }}
                            </li> -->
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
                          <a href="/"
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
                              <a href="/">周末</a>
                            </li>
                            <li>2015-04-04</li>
                          </ul>
                        </div>
                        <p class="desc">
                          这个网页设计是否似曾相识,不错就是根据《XXX》改编的
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
                          <a href="/"
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
                              <a href="/">周末</a>
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
              <div v-if="articleTotal>queryParams.pageSize" class="load-more-data visible-xs">
                <a href="javascript:void(0);" @click="loadMoreData">{{ loadMoreBtn }}</a>
              </div>
              <!-- <nav aria-label="Page navigation" v-if="articleTotal!=0">
                <ul class="pagination">
                  <li v-if="queryParams.pageNum != 1" :class="queryParams.pageNum == 1 ? 'disabled' : ''">
                    <a
                      href="javascript:void(0);"
                      @click="getArticleList(queryParams.pageNum - 1)"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
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
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 4
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 3
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 2
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 1
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 1
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 2
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 3
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 4
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                  </li>
                  <li v-if="queryParams.pageNum != Math.ceil(articleTotal / queryParams.pageSize)"
                    :class="
                      queryParams.pageNum ==
                      Math.ceil(articleTotal / queryParams.pageSize)
                        ? 'disabled'
                        : ''
                    "
                  >
                    <a
                      href="javascript:void(0);"
                      @click="getArticleList(queryParams.pageNum + 1)"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav> -->
              <div class="row mx-4">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <Adsense
                    data-ad-client="ca-pub-7291512442295477"
                    data-ad-slot="5487504434">
                  </Adsense>
                </div>
              </div>
              <plus-pager class="hidden-xs" :total="articleTotal" :pageNum="queryParams.pageNum" :pageSize="queryParams.pageSize"
               :pluspagerMethod="getArticleList">
              </plus-pager>
            </div>
            <aside class="col-lg-3 col-md-3 right animated slideInRight">
              <div class="right-fun">
                <div class="alert alert-info alert-dismissible fade in">
                  <a href="#" class="close" data-dismiss="alert">&times;</a>
                  <span v-if="oneNewNotice" v-html="oneNewNotice.noticeContent"></span>
                  <span v-else >这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。</span>
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
                  class="panel hidden-xs"
                  style="margin-top: 20px"
                >
                  <div class="panel-heading">
                    <span class="glyphicon glyphicon-hand-right"></span
                    >&nbsp;看看这里
                  </div>
                  <div class="">
                    <div class="my-social-list">
                      <a
                        id="s_email"
                        title="邮箱"
                        target="_blank"
                        href="mailto:geekgarry@hotmail.com"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="EMAIL"
                      >
                        <!-- <i class="fa fa-envelope"></i> -->
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                      </a>
                      <a
                        id="s_github"
                        title="GitHub"
                        target="_blank"
                        href="https://github.com/geekgarry"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="GITHUB"
                      >
                        <!-- <i class="fa fa-github"></i> -->
                        <font-awesome-icon :icon="['fab', 'github']" />
                      </a>
                      <a
                        id="s_rss"
                        title="RSS订阅"
                        target="_blank"
                        href="/rss"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="RSS"
                      >
                        <!-- <i class="fa fa-rss-square"></i> -->
                        <font-awesome-icon :icon="['fas', 'rss-square']" />
                      </a>
                    </div>
                  </div>
                </div>
                <!-- <div
                  id="geekplus-tool"
                  class="panel panel-info hidden-xs"
                  style="margin-top: 20px"
                >
                  <div class="panel-heading">
                    <span class="glyphicon glyphicon-hand-right"></span
                    >&nbsp;我是GeekPlus
                  </div>
                  <div class="">
                    <div class="my-blog-tool">
                      <a
                        id="s_email"
                        title="邮箱"
                        target="_blank"
                        href="mailto:geekgarry@hotmail.com"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="EMAIL"
                      >
                        <i class="fa fa-envelope fa-lg"></i>
                      </a>
                      <a
                        id="s_github"
                        title="GitHub"
                        target="_blank"
                        href="https://github.com/geekgarry"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        data-original-title="GITHUB"
                      >
                        <i class="fa fa-github fa-lg"></i>
                      </a>
                      <a
                        id="s_rss"
                        title="RSS订阅"
                        target="_blank"
                        href="/rss"
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
                    <span class="glyphicon glyphicon-th"></span>&nbsp;标签云图
                  </div>
                  <div class="panel-body tag-list">
                    <span style="display:inline-block;margin:2px;" v-for="(item, index) in allTagArticleCount"
                      :key="index">
                    <router-link :to="{path:'/articleListForTag',query:{tagName:item.tagName}}" class="" > 
                      {{ item.tagName ? item.tagName : "Java" }}
                      <span>{{ item.articleCount != -1 ? numFormatKWM(item.articleCount) : 1 }}</span>
                    </router-link>
                    </span>
                    <!-- <a style="margin-bottom: 3px" class="label label-info"
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
                    </a> -->
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
                    <span class="glyphicon glyphicon-list"></span>&nbsp;图文类目
                  </div>
                  <div class="panel-body">
                    <!-- <div class="model recommend">
                                                                                                                        <div class="title">热门推荐</div>						                            <div class="content"> -->
                    <div class="fastmenu">
                      <span
                        v-for="(item, index) in allCategoryList"
                        :key="index"
                      >
                        <router-link :to="item.path">{{
                          item.categoryName
                            ? item.categoryName
                            : "编程技术&nbsp;(13)"
                        }}</router-link>
                      </span>
                      <!-- <span><a href="/">文章博客</a></span>
                      <span><a href="/">新闻资讯</a></span>
                      <span><a href="/">资源文件</a></span>
                      <span><a href="/">格物生活</a></span>
                      <span><a href="/">给我留言</a></span> -->
                    </div>
                  </div>
                </div>
                <!-- <div class="model">
                                                            <div class="title">快捷菜单</div>
                                                            <div class="menu">
                                                                <span><a
                                                                            href="/">文章博客</a></span>
                                                                <span><a
                                                                            href="/">新闻资讯</a></span>
                                                                <span><a
                                                                            href="/">资源文件</a></span>
                                                                <span><a 
                                                                            href="/">格物生活</a></span>
                                                                <span><a
                                                                            href="/">给我留言</a></span>
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
                    <p v-for="(item, index) in tenNewArticle" :key="index">
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
                            : "个人网页模板源代码"
                        }}
                      </a>
                    </p>
                    <!-- <p>
                      <a href="#"
                        >个人网页模板源代码</a
                      >
                    </p> -->
                  </div>
                </div>
                <div class="ads-container">
                  <Adsense
                    data-ad-client="ca-pub-7291512442295477"
                    data-ad-slot="1460930833">
                  </Adsense>
                </div>
                <!-- <div class="ads-container">
                  <iframe
                    @load="sendIframeAdsWinpMessage"
                    id="frameAds"
                    ref="iframeAds"
                    src="/general/jdunion/ads1.html"
                    scrolling="false"
                    style="width: 100%; min-height:250px; border: 0px; margin: 0;"
                    ></iframe>
                </div> -->
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
  getTenNewestArticle,
  listSubCategory,
  selectArticleListForTag,
  getTagArticleCount,
  getGpNoticeNewOne,
} from "@/api/geekplus/geekplus";
export default {
  data() {
    return {
      keywords:'',
      tagName: '',
      queryParams: {
        tagName: '',
        tagId:null,
        pageNum: 1,
        pageSize: 10,
      },
      articleList: [],
      articleTotal: 0,
      tenNewArticle: [],
      allCategoryList: [],
      allTagArticleCount: [], //查询每个标签的文章数量
      oneNewNotice:{},
      loadMoreBtn:"加载更多",
      iframeAdsWin: null,
    };
  },
  created() {
    this.$router.onReady(() => {
      this.tagName = this.$route.query.tagName;
      this.queryParams.tagName=this.$route.query.tagName;
      window.document.title = this.tagName + " | 文章标签-极客普拉斯&梦极客园" ||
            "极客普拉斯&梦极客园-geekplus";
    });
    //console.log(this.tagName)
    // document.onkeydown = function (e) {
    //   // 回车提交表单
    //   // 兼容FF和IE和Opera
    //   var theEvent = window.event || e;
    //   var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    //   if (code == 13) {
    //     this.searchResultForResult();
    //   }
    // };
    this.getArticleList(1);
    this.getTenNewArticle();
    this.getAllArticleCategory();
    this.getTagAndArticleCount();
    this.getOneNewestNotice();
  },
  mounted(){
    this.iframeAdsWin = this.$refs.iframeAds.contentWindow;
    //console.log("mounted");
    // document.addEventListener("keydown", (e) => {
    //   let key = window.event.keyCode;
    //   if (key == 13 && !this.keywords!='') {
    //     // 13是enter键的键盘码 如果等于13 就调用click的登录方法
    //     this.searchResultForResult();
    //   }
    // });
  },
  watch:{
    tagName(newVal,oldVal){
      //console.log(this.tagName);
      //console.log(newVal, oldVal);
      this.getArticleList(1);
      window.document.title = this.tagName + " | 文章标签-极客普拉斯&梦极客园" ||
            "极客普拉斯&梦极客园-geekplus";
    },
    $route(to, from) {
      //console.log(to, from);
      this.tagName = this.$route.query.tagName;
      this.queryParams.tagName=this.$route.query.tagName;
    },
  },
  activated() { // 使用该生命周期方法可以解决第二次进入该页面数据不刷新问题
    this.tagName = this.$route.query.tagName;
    window.document.title = this.tagName + " | 文章标签-极客普拉斯&梦极客园" ||
            "极客普拉斯&梦极客园-geekplus";
    //console.log(this.keywords);
    this.getArticleList(1)// 这个是获取列表数据的方法
  },
  methods: {
    sendIframeAdsWinpMessage() {
      // this.JDIframeUrl="/general/jdunion/jd1.html";
      // this.iframeAdsWin = this.$refs.iframeAds.contentWindow;
      var jd_union_pid="368131681759285396";
      //var jd_union_pid="368131681753068697"
      this.iframeAdsWin.postMessage({
        params: jd_union_pid /*在iframe页面中接收通过key也就是param接收，因此传输的数据可以是对象，包含多个key以及对应的数据*/
      }, "*");
    },
    //正常分页加载
    getArticleList(pageNum) {
      this.queryParams.pageNum=pageNum;
      // var total = this.articleTotal;
      // var pageSize = this.queryParams.pageSize;
      // var pageAllNum = total / pageSize;
      // if (pageNum <= 0) {
      //   //console.log("页数等于0");
      //   this.queryParams.pageNum = 1;
      // } else if (total <= pageSize) {
      //   //console.log("页数小于一");
      //   this.queryParams.pageNum = 1;
      // } else if (pageNum >= Math.ceil(pageAllNum)) {
      //   //console.log("页数等于最大页数");
      //   this.queryParams.pageNum = Math.ceil(pageAllNum);
      // }
      // this.queryParams.tagName=this.$route.query.tagName;
      //this.queryParams.pageSize=10;
      selectArticleListForTag(this.queryParams)
        .then((response) => {
          //console.log(response);
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
      this.backToTop();
    },
    //懒加载方法
    loadMoreArticleList(pageNum){
      this.queryParams.pageNum=pageNum;
      // this.queryParams.tagName=this.$route.query.tagName;
      this.loadMoreBtn="加载数据...";
      selectArticleListForTag(this.queryParams)
        .then((response) => {
          //console.log(response);
          //this.articleList = response.rows;
          this.articleList = this.articleList.concat(response.rows);
          this.articleTotal = response.total;
          setTimeout(async() => {this.loadMoreBtn="加载更多";},1000);
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
          this.loadMoreBtn="数据加载失败";
        }).finally(() => {
        });
        //this.backToTop()
    },
    getTenNewArticle() {
      let data = {};
      getTenNewestArticle(data)
        .then((response) => {
          //console.log(response.data);
          this.tenNewArticle = response.data;
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
      // let tempMenuList = this.$router.options.routes.filter(
      //   (item) => { return item.type == "servermenu"}
      // );
      this.allCategoryList=this.getListSubCategory(this.$store.getters.addRoutes.slice(0,4));
      //console.log(this.allCategoryList)
      // listSubCategory()
      //   .then((response) => {
      //     //console.log(response)
      //     this.allCategoryList = response.data;
      //   })
      //   .catch((error) => {
      //     this.$toasted.error(error.msg, {
      //       position: "top-center",
      //       duration: 3000,
      //       theme: "bubble",
      //     });
      //   });
    },
    getListSubCategory(list){
      let listCategory=new Array();
      list.forEach(parent => {
        parent.children.forEach(child => {
          let childCategory={
            path:parent.path+'/'+child.path,
            categoryName:child.meta.title,
          }
          listCategory.push(childCategory)
        })
      });
      return listCategory;
    },
    getTagAndArticleCount() {
      getTagArticleCount()
        .then((response) => {
          //console.log(response.data);
          this.allTagArticleCount = response.data;
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
      this.keywords = "";
    },
    getOneNewestNotice(){
      getGpNoticeNewOne().then((response) =>{
        this.oneNewNotice=response.data;
      });
    },
    loadMoreData(){
      this.queryParams.pageNum+=1;
      if(this.queryParams.pageNum<=Math.ceil(this.articleTotal/this.queryParams.pageSize)){
        this.loadMoreArticleList(this.queryParams.pageNum);
      }else{
        this.loadMoreBtn="数据加载完了";
      }
    },
  },
};
</script>

<style>
</style>