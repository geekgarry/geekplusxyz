<template>
  <div>
    <div class="container-article">
      <div class="container">
        <section class="row">
          <div class="">
            <div class="col-lg-9 col-md-9 animate_animated animate_slideInLeft">
              <div class="articleList-bread-crumb">
                <div class="plus-bread-crumb">
                  <bread-crumb>
                    <bread-crumb-item v-for="item,index in breadCrumbList" :key="index" :to="index+1==breadCrumbList.length?'':item.path">{{item.meta.title}}</bread-crumb-item>
                    <!-- <bread-crumb-item>文章</bread-crumb-item> -->
                  </bread-crumb>
                </div>
              </div>
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
                            v-lazy="item.indexPicture ? item.indexPicture : require('@/assets/img/cover'+someNumberCount(4)+'.jpeg')"
                            :alt="item.articleTitle"/>
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
                                alt="geekplus,极客普拉斯"
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
                          src="/imgs/ChMkJ1bKziaIU3lvAAgAJKmcCvEAALJIAFrDQAACAA8015.jpg"
                        />
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="/"
                            >DIV+CSS静态HTML网页设计模板</a>
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                src="/imgs/mai.png"
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
                          src="/imgs/ChMkJlbKzjiIH0M_AAJdB-7pn-MAALJIwFYdAsAAl0f724.jpg"
                        />
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="/"
                            >将网站LOGO放到浏览器地址栏</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                src="/imgs/mai.png"
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
                          首先您必须了解什么是icon，所谓的图标（Icon）是一种特殊的图形文件格式，它是以
                          .ico 作为扩展名。
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
                          src="/imgs/ChMkJlbKzjiIRT2jAAUGaYr8PEsAALJIwFpbtoABQaB552.jpg"
                        />
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="/"
                            >专属学生的简单html静态网页模板</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                src="/imgs/mai.png"
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
                          该模板为纯html5模板，主题为周末·黑色调，此模板采用黑色为主色，不包含任何服务器端code
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
                          src="/imgs/ChMly12Ng9KIdCjVAAiP30n-S5UAAX2nAKAALIACI_3995.jpg"
                        />
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="/"
                            >html个人网页制作源代码</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                src="/imgs/mai.png"
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
                          该模板为纯html5模板，主题为周末·黑色调，此模板采用黑色为主色，不包含任何服务器端code
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
                          src="/imgs/ChMlWl0u-KqIAHkyAAP26MoZWWcAAL4jAH0yZ4AA_cA353.jpg"
                        />
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="/"
                            >html5优秀个人博客模板下载</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                src="/imgs/mai.png"
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
                          该模板为纯html5模板，主题为周末·黑色调，此模板采用黑色为主色，不包含任何服务器端code
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
                          src="/imgs/ChMlWl0u8vqIF0m2AAlIzzrVVVQAAL4fwAz3oQACUjn017.jpg"
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
                                src="/imgs/mai.png"
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
                  <li v-if="queryParams.pageNum != Math.ceil(articleTotal / queryParams.pageSize)" :class="queryParams.pageNum == Math.ceil(articleTotal / queryParams.pageSize) ? 'disabled' : ''">
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
              <plus-pager class="hidden-xs" :total="articleTotal" :pageNum="queryParams.pageNum" :pageSize="queryParams.pageSize"
               :pluspagerMethod="getArticleList">
              </plus-pager>
              <div class="row mx-4">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <Adsense
                    data-ad-client="ca-pub-7291512442295477"
                    data-ad-slot="3158275447">
                  </Adsense>
                </div>
              </div>
            </div>
            <aside class="col-lg-3 col-md-3 right animated slideInRight">
              <div class="right-fun">
                <div class="alert alert-info alert-dismissible fade in">
                  <a href="#" class="close" data-dismiss="alert">&times;</a>
                  <span v-if="oneNewNotice" v-html="oneNewNotice.noticeContent"></span>
                  <span v-else >这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。</span>
                </div>
                <div class="model hidden-xs">
                  <div class="title">
                    <span
                      class="glyphicon glyphicon-search"
                      aria-hidden="true"
                    ></span
                    >&nbsp;站内搜索
                  </div>
                  <div class="content">
                    <div class="search_aside_bar">
                      <form class="form-horizontal" @submit.prevent="searchResult()">
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
                            <button type="button" @click="searchResult()">
                              <span class="glyphicon glyphicon-search"></span>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="my-social" class="panel hidden-xs">
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
                <!-- <div class="panel panel-default">
                  <div
                    class="panel-heading"
                    style="background: rgba(0, 0, 0, 0.0001)"
                  >
                    <span class="glyphicon glyphicon-th"></span>&nbsp;分类
                  </div>
                  <div class="panel-body" id="cat-list">
                    <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                      >Linux系统编程<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                      >Python<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                      >Django<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                      >深度学习<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                      >MySql<span class="badge badge-info"></span>
                    </a>
                    <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                      >生活<span class="badge badge-info"></span>
                    </a>
                  </div>
                </div> -->
                <div class="panel panel-default recommendlist">
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
                      <a href="javascript:void(0);" @click="
                          $router.push({
                            name: 'article',
                            params: { articleId: item.id },
                          })" >
                          {{ item.articleTitle ? item.articleTitle : "个人网页模板源代码" }}
                      </a>
                    </p>
                    <!-- <p>
                      <a href="#"
                        >个人网页模板源码</a
                      >
                    </p>
                    <p>
                      <a href="#"
                        >HTML个人简历源代码</a
                      >
                    </p> -->
                  </div>
                </div>
                <div class="ads-container">
                  <Adsense
                    data-ad-client="ca-pub-7291512442295477"
                    data-ad-slot="1460930833">
                  </Adsense>
                  <!-- <iframe
                    @load="sendIframeAdsWinpMessage"
                    id="frameAds"
                    ref="iframeAds"
                    src="/general/jdunion/ads1.html"
                    scrolling="false"
                    style="width: 100%; min-height:250px; border: 0px; margin: 0;"
                    ></iframe> -->
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
import MKLogo from "@/assets/icon/mai.png";
import {
  getGpArticlesByCategory,
  getTenNewestArticle,
  listSubCategory,
  getGpNoticeNewOne,
} from "@/api/geekplus/geekplus";
import PlusPager from '@/components/pager/PlusPager.vue';
export default {
  name: "ArticleListPage",
  data() {
    return {
      userName: "",
      keywords: "",
      queryParams: {
        pageNum: 1,
        pageSize: 12,
        pathName: "",
      },
      articleTotal: 0,
      articleList: [],
      pageNum: 9,
      tenNewArticle: [],
      allCategoryList: [],
      oneNewNotice:{},
      categoryName:'',
      breadCrumbList:[],
      loadMoreBtn:"加载更多",
      iframeAdsWin: null,
    };
  },
  created() {
    this.$router.onReady(() => {
      //console.log(this.$route.path.split('/'));
      var pathArr=this.$route.path.split('/');
      this.queryParams.pathName = this.$route.path.split('/')[2] || this.$route.params.categoryPath;
      window.document.title=(this.$route.meta.title||this.queryParams.pathName)+"文章列表 | 极客普拉斯&梦极客园" || "极客普拉斯&梦极客园-geekplus";
    });
    //console.log(this.$route.path.split('/')[2]);
    //console.log(this.categoryName);
    //console.log(this.queryParams.pathName);
    this.getArticleList(1);
    this.getTenNewArticle();
    this.getAllArticleCategory();
    this.getOneNewestNotice();
    this.getBreadCrumb();
    // document.onkeydown = function (e) {
    //   // 回车提交表单
    //   // 兼容FF和IE和Opera
    //   var theEvent = window.event || e;
    //   var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    //   if (code == 13) {
    //     this.searchResult();
    //   }
    // };
  },
  mounted() {
    //(adsbygoogle = window.adsbygoogle || []).push({});
    this.iframeAdsWin = this.$refs.iframeAds.contentWindow;
  },
  watch:{
    $route(to, from) {
      var pathArr=this.$route.path.split('/');
      this.queryParams.pathName = this.$route.path.split('/')[2] || this.$route.params.categoryPath;
      window.document.title=(this.$route.meta.title||this.queryParams.pathName)+"文章列表 | 极客普拉斯&梦极客园" || "极客普拉斯&梦极客园-geekplus";
    }
  },
  methods: {
    sendIframeAdsWinpMessage() {
      // this.JDIframeUrl="/general/jdunion/jd1.html";
      // this.iframeAdsWin = this.$refs.iframeAds.contentWindow;
      var jd_union_pid="619641681928506429";
      //var jd_union_pid="368131681753068697"
      this.iframeAdsWin.postMessage({
        params: jd_union_pid /*在iframe页面中接收通过key也就是param接收，因此传输的数据可以是对象，包含多个key以及对应的数据*/
      }, "*");
    },
    //分页测试
    getCurrentNumber(number) {
      this.pageNum = number;
    },
    //正常分页加载
    getArticleList(pageNum) {
      this.queryParams.pageNum=pageNum;
      // var total = this.articleTotal;
      // var pageSize = this.queryParams.pageSize;
      // var pageAllNum = total / pageSize;
      // if (pageNum <= 0) {
      //   //console.log("页数等于0")
      //   this.queryParams.pageNum = 1;
      // } else if (total<=pageSize) {
      //   //console.log("页数小于一")
      //   this.queryParams.pageNum = 1;
      // } else if(pageNum >= Math.ceil(pageAllNum)){
      //   //console.log("页数等于最大页数")
      //   this.queryParams.pageNum = Math.ceil(pageAllNum);
      // }
      //this.queryParams.pageSize=10;
      getGpArticlesByCategory(this.queryParams)
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
        }).finally(() => {});
      setTimeout(() => this.backToTop(),
        1000);
    },
    //懒加载方法
    loadMoreArticleList(pageNum){
      this.queryParams.pageNum=pageNum;
      this.loadMoreBtn="加载数据...";
      getGpArticlesByCategory(this.queryParams)
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
    searchResult() {
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
    //获取路径的面包屑，首页/其他页/其他页
    getBreadCrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title && item.path !== ""
      );
      const first = matched[0];
      if (!this.isHome(first)) {
        matched = [{ path: "/", name: "home", meta: { title: "首页" } }].concat(
          matched
        );
      }
      this.breadCrumbList = matched.filter(
        (item) => item.meta && item.meta.title !== ''
      );
      //console.log(matched); //匹配路由地址，用来显示路径面包屑
      //console.log(this.breadCrumbList);//匹配路由地址，用来显示路径面包屑
    },
    //判断当前路由是否是首页，返回两者等于的结果true
    isHome(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === "home".toLocaleLowerCase(); //返回true
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
  destroyed(){

  },
};
</script>

<style>
</style>