<template>
  <div class="container">
    <section class="container-content">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div class="article-container" v-viewer>
            <div class="plus-bread-crumb">
              <bread-crumb>
                <bread-crumb-item
                  v-for="(item, index) in breadCrumbList"
                  :key="index"
                  :to="index + 1 == breadCrumbList.length ? '' : item.path"
                  >{{ item.meta.title }}</bread-crumb-item
                >
                <!-- <bread-crumb-item>文章</bread-crumb-item> -->
              </bread-crumb>
            </div>
            <h3 class="article-title">
              {{
                articleInfo.articleTitle
                  ? articleInfo.articleTitle
                  : "代码没有双全法，人生也一样"
              }}
            </h3>
            <!-- <h4>param传值{{ $route.params.articleId }}</h4> -->
            <div class="article-meta">
              <label
                >作者：{{
                  articleInfo.authorName ? articleInfo.authorName : "周舟"
                }}</label
              >
              |
              <label
                >发布：{{
                  articleInfo.createTime
                    ? getOnlyYearMonthDay(articleInfo.createTime)
                    : "2019.05.31"
                }}</label
              >
              |
              <label
                >浏览：{{
                  articleInfo.viewCount ? articleInfo.viewCount + 1 : 0
                }}</label
              >
            </div>
            <div
              class="article-content"
              v-if="articleInfo.articleContent"
              v-html="articleInfo.articleContent"
              v-highlight
            ></div>
            <div class="article-content" v-else>
              <p>
                软件设计要考虑诸多方面，权衡各种利弊，以设计一个趋于完美的解决方案。在方案未落实之前，这也是争论的焦点，探讨的是方案的可行性，然而无论再好的方案都有弊端的，只是众多方案中选优罢了，这点正是本文的主题。程序设计不可能集所有优点于一身，必有牺牲的一面，常常因为为了满足准确性，而牺牲了性能，为了满足某些需求，而冗余了代码，甚至入侵了业务也不惜，因此代码是没有双全法的，有得必有失，不必苛求。
              </p>
              <p>
                代码尚且如此，人生又何尝不是？人生是不完美的，也无法做到十全十美，这不是付出多少的问题，这就是一个真命题，就像地球引力一般的存在，再成功的人也有他遗憾的问题，是因为他厚此薄彼的结果，当然厚此薄彼要加上引号，其动机没有不纯，这就是2选1的问题，举个不恰当的例子，一个男人有了外遇，被老婆知道了，老婆和情人其实都有一个共同的诉求，就是男人必须在两者之间选择一个，这时男人不管如何做出选择都是痛的，如若男人继续做出中庸的选择，那么两头都不讨好，最后只能竹篮打水一场空，两个人都得不到，举这个例子可能不太恰当，但能说明问题所在。
              </p>
              <p>
                说了这么多，无非就是论证并无双全法之说，唯一的办法是以自己的诉求为出发点，偏向和放大一方，以最小的代价舍弃另一方。以上纯属个人无稽之谈，愉悦而已，喜则取之，厌则弃之。
              </p>
            </div>
            <div class="plus-article-toolbar">
              <button
                class="toolbar-button"
                data-container="body"
                data-trigger="hover"
                data-toggle="popover"
                title="觉得有帮助，可以给我赞赏!"
              >
                <span class="glyphicon glyphicon-gift"></span>
                赞助
              </button>
              <button
                class="toolbar-button"
                type="button"
                @click="onThumbsUpButtonTap()"
              >
                <span class="glyphicon glyphicon-thumbs-up"></span>
                点赞({{ numFormatKWM(articleViewAndLike.likeCount) }})
              </button>
              <button
                class="toolbar-button"
                type="button"
                @click="onLinkButtonTap()"
              >
                <span class="glyphicon glyphicon-link"></span>
                链接
                <div id="generatelink" value="生成链接" style="display: none">
                  生成链接
                </div>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <span
                v-for="(item, index) in articleInfo.tags"
                :key="index"
                class="plus-tag"
                aria-hidden="true"
              >
                <span class="plus-tag-label">
                  <router-link
                    :to="{
                      path: '/articleListForTag',
                      query: { tagName: item.tagName },
                    }"
                  >
                    <span class="glyphicon glyphicon-tags"></span>&nbsp;{{
                      item.tagName
                    }}
                  </router-link>
                </span>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6>评论:(文章评论功能上线正在测试中，可以留言评论！)</h6>
              <div class="comments_input_area">
                <div class="row">
                  <div
                    class="col-lg-6 col--md-6 col-sm-6 col-xs-12"
                    id="comment-left"
                  >
                    <div class="row row-no-gutters">
                      <div class="col-lg-12 col--md-12 col-sm-12">
                        <div class="form-group">
                          <input
                            type="text"
                            v-model="userMessage.name"
                            class="form-control"
                            id="inputnickname"
                            name="nickname"
                            required=""
                            placeholder="昵称*"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col--md-12 col-sm-12">
                        <div class="form-group">
                          <input
                            type="email"
                            v-model="userMessage.email"
                            class="form-control"
                            id="inputemail"
                            name="email"
                            required=""
                            placeholder="邮箱"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col--md-12 col-sm-12">
                        <div class="form-group">
                          <input
                            type="text"
                            v-model="userMessage.website"
                            class="form-control"
                            id="inputwebsite"
                            name="websiteurl"
                            placeholder="网址"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col--md-6 col-sm-6 col-xs-12">
                    <div class="Input_Box">
                      <textarea
                        placeholder="请输入内容*"
                        hidden
                        id="textarea-content"
                        name="editordata-web"
                        v-model="userMessage.content"
                      ></textarea>
                      <div
                        contenteditable="true"
                        class="Input_text"
                        v-on:keyup="putTextAreaValue"
                        id="div_msg_content"
                      ></div>
                      <div class="Input_Foot">
                        <a class="imgBtn" href="javascript:void(0);">'◡'</a
                        ><a class="imgBtn" href="javascript:void(0);"
                          >&lt;/&gt;</a
                        ><a class="postBtn" @click="userLeaveMessage">确定</a>
                      </div>
                    </div>
                    <div class="faceDiv">
                      <section class="emoji_container"></section>
                      <section class="emoji_tab"></section>
                    </div>
                  </div>
                </div>
              </div>
              <div class="leavewords-container" v-if="leaveMessageTotal > 0">
                <div class="articleComment">
                  <div
                    class="comment-lw"
                    v-for="(item, index) in leaveMessage"
                    :key="index"
                  >
                    <div class="comment-main">
                      <a class="user-logo"><img v-lazy="UserLogo" /></a>
                      <div class="comment-content">
                        <div class="comment-info">
                          <a>{{ item.name }}</a>
                          <span class="comment_info_time">{{
                            dateTimeAgo(item.createTime)
                          }}</span>
                        </div>
                        <div
                          class="comment-text"
                          :style="'color:' + someColor() + ';'"
                          v-if="checkHtml(item.content)"
                          v-html="item.content"
                        ></div>
                        <div
                          class="comment-text"
                          :style="'color:' + someColor() + ';'"
                          v-else
                          v-text="item.content"
                        ></div>
                        <div class="comment-action">
                          <a
                            href="javascript:void(0)"
                            @click="openReplyBox(item.id)"
                            >回复</a
                          >
                          &nbsp;
                          <a
                            v-if="item.id === replyBoxIndex"
                            href="javascript:void(0)"
                            @click="closeReplyBox"
                            >关闭</a
                          >
                        </div>
                        <!-- <div v-if="isDisplayMsgBox"> -->
                        <reply-message-box
                          :messageReplyInfo="{
                            id: item.id,
                            repId: item.id,
                            name: item.name,
                          }"
                          v-if="item.id === replyBoxIndex"
                          v-on:getReplyMsg="getReplyMessage"
                          ref="replyMsgRef"
                        ></reply-message-box>
                        <!-- </div> -->
                      </div>
                    </div>
                    <div v-if="item.children" class="sub-comment-lw">
                      <div
                        class="comment-main"
                        v-for="(subitem, index) in item.children"
                        :key="index"
                      >
                        <a class="user-logo"
                          ><img
                            v-lazy="
                              subitem.userId == 'sysUser:1' ? GPLogo : UserLogo
                            "
                        /></a>
                        <div class="comment-content">
                          <div class="comment-info">
                            <a>{{ subitem.name }}</a>
                            <span
                              >&nbsp;回复：<a
                                ><strong class="">{{
                                  subitem.replyName
                                }}</strong></a
                              ></span
                            >
                            <span class="comment_info_time"
                              >&nbsp;{{ dateTimeAgo(subitem.createTime) }}</span
                            >
                          </div>
                          <div
                            class="comment-text"
                            :style="'color:' + someColor() + ';'"
                            v-if="checkHtml(subitem.content)"
                            v-html="subitem.content"
                          ></div>
                          <div
                            class="comment-text"
                            :style="'color:' + someColor() + ';'"
                            v-else
                            v-text="subitem.content"
                          ></div>
                          <div class="comment-action">
                            <a
                              href="javascript:void(0)"
                              @click="openReplyBox(subitem.id)"
                              >回复</a
                            >
                            &nbsp;
                            <a
                              v-if="subitem.id === replyBoxIndex"
                              href="javascript:void(0)"
                              @click="closeReplyBox"
                              >关闭</a
                            >
                          </div>
                          <!-- <div v-if="isDisplayMsgBox"> -->
                          <reply-message-box
                            :messageReplyInfo="{
                              id: item.id,
                              repId: subitem.id,
                              name: subitem.name,
                            }"
                            v-if="subitem.id === replyBoxIndex"
                            v-on:getReplyMsg="getReplyMessage"
                            ref="replyMsgRef"
                          ></reply-message-box>
                          <!-- </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="leaveMessageTotal > queryParams.pageSize"
                  class="load-more-data"
                >
                  <a href="javascript:void(0);" @click="loadMoreData">{{
                    loadMoreBtn
                  }}</a>
                </div>
              </div>
            </div>
            <!-- <iframe src="squireeditor/source/document.html" onload="top.editor=this.contentWindow.editor" width="100%" height="200"></iframe> -->
            <!-- <div class="col-centered">
                <textarea id="foo"></textarea>
            </div> -->
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div class="right-fun">
            <div class="model">
              <div class="title">站内搜索</div>
              <div class="content">
                <!-- <div class="search_bar_side">
                                    <form>
                                        <input type="text" placeholder="请输入关键词" name="crid" />
                                        <button type="submit">
                                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                        </button>
                                    </form>
                                </div> -->
                <div class="search_aside_bar">
                  <form
                    class="form-horizontal"
                    @submit.prevent="searchResult()"
                  >
                    <div class="input-group search-input-group">
                      <input type="hidden" name="scope" value="1" />
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
            <div class="panel panel-default">
              <div
                class="panel-heading"
                style="background: rgba(0, 0, 0, 0.0001)"
              >
                &nbsp;标签云图
              </div>
              <div class="panel-body tag-list">
                <!-- <router-link class="btn btn-info" type="text" to="#"
                   v-for="item,index in allTagArticleCount" :key="index" >
                   {{item.tagName?item.tagName:'Java'}}
                   <span class="badge badge-info">{{item.articleCount!=-1?item.articleCount:1}}</span>
                </router-link> -->
                <span
                  style="display: inline-block; margin: 2px"
                  v-for="(item, index) in allTagArticleCount"
                  :key="index"
                >
                  <router-link
                    :to="{
                      path: '/articleListForTag',
                      query: { tagName: item.tagName },
                    }"
                    class=""
                    >{{ item.tagName ? item.tagName : "Java" }}
                    <span>{{
                      item.articleCount != -1
                        ? numFormatKWM(item.articleCount)
                        : 1
                    }}</span>
                  </router-link>
                </span>
                <!-- <a style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm" >
                  Linux系统编程<span class="badge"></span>
                </a>
                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  Python<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  Django<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  深度学习<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  MySql<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  生活<span class="badge"></span>
                </a> -->
              </div>
            </div>
            <div class="panel panel-default recommendlist">
              <div
                class="panel-heading"
                style="background: rgba(0, 0, 0, 0.0001)"
              >
                快捷菜单
              </div>
              <div class="panel-body">
                <!-- <div class="model recommend">
                                                                                                                    						                            <div class="title">热门推荐</div>						                            <div class="content"> -->
                <div class="fastmenu">
                  <span v-for="(item, index) in allCategoryList" :key="index">
                    <router-link :to="item.path">
                      {{
                        item.categoryName
                          ? item.categoryName
                          : "编程技术&nbsp;(13)"
                      }}
                    </router-link>
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
                                                        <span><a href="http://www.maikete.com">文章博客</a></span>
                                                        <span><a href="http://www.maikete.com">新闻资讯</a></span>
                                                        <span><a href="http://www.maikete.com">资源文件</a></span>
                                                        <span><a href="http://www.maikete.com">格物生活</a></span>
                                                        <span><a href="http://www.maikete.com">给我留言</a></span>
                                                </div>
                                                </div> -->
            <div class="panel panel-default recommendlist">
              <div
                class="panel-heading"
                style="background: rgba(0, 0, 0, 0.0001)"
              >
                热门推荐
              </div>
              <div class="panel-body">
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
                        : "dw个人网页模板作业成品"
                    }}
                  </a>
                </p>
                <!-- <p>
                  <a href="http://www.youtiy.com/detail_317.html"
                    >dw个人网页模板作业成品</a
                  >
                </p>
                <p>
                  <a href="http://www.youtiy.com/detail_382.html"
                    >HTML个人简历源代码</a
                  >
                </p>
                <p>
                  <a href="http://www.youtiy.com/detail_381.html"
                    >自我介绍个人网页设计模板</a
                  >
                </p>
                <p>
                  <a href="http://www.youtiy.com/detail_379.html"
                    >DIV+CSS静态HTML网页设计模板</a
                  >
                </p>
                <p>
                  <a href="http://www.youtiy.com/detail_377.html"
                    >一个完整的html网页设计代码免费下载</a
                  >
                </p> -->
              </div>
            </div>
            <div class="ads-container">
              <iframe
                @load="sendIframeAdsWinpMessage"
                id="frameAds"
                ref="iframeAds"
                src="/general/jdunion/ads1.html"
                scrolling="false"
                style="width: 100%; min-height:200px; border: 0px; margin: 0;"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {
  getArticleDetail,
  getArticleDetailIsDisplay,
  getTenNewestArticle,
  listSubCategory,
  getTagArticleCount,
  updateViewCountAndLikeCount,
  sendUserComment,
  getAllUserComment,
  getUserCommentCount,
  getWebHotUserComment,
  getArticleLatestUserComment,
} from "@/api/geekplus/geekplus";
import ReplyMessageBox from "@/components/comment/ReplyMessageBox.vue";
// 引入插件
import $ from "jquery";
// import 'viewerjs/dist/viewer.css'
// import Viewer from 'v-viewer'
export default {
  components: {
    ReplyMessageBox,
  },
  data() {
    return {
      windowUrl: "",
      keywords: "",
      articleInfo: {
        articleCategory: "",
        articleContent: null,
        articleTitle: "",
        authorId: null,
        authorName: "",
        createBy: null,
        createTime: "2023-03-21 08:36:14",
        id: 1,
        isDisplay: "0",
        likeCount: null,
        params: {},
        remark: null,
        searchValue: null,
        updateBy: null,
        updateTime: "2023-03-21 17:32:28",
        viewCount: null,
        tags: {},
      },
      articleDetail: {},
      tenNewArticle: [],
      allCategoryList: [],
      allTagArticleCount: [],
      breadCrumbList: [],
      articleViewAndLike: {
        likeCount: null,
        viewCount: null,
        id: null,
      },
      GPLogo: require("@/assets/logo.png"),
      UserLogo: require("@/assets/icon/mai.png"),
      isDisplayMsgBox: false,
      replyBoxIndex: -1,
      //网站直接留言
      userMessage: {
        name: null,
        email: null,
        website: null,
        content: null,
        topicId: null,
      },
      leaveMessageTotal: 2,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        replyId: null,
        name: null,
        email: null,
        website: null,
        content: null,
        topicId: null,
        topicType: null,
        userId: null,
        parentId: 0,
      },
      leaveMessage: [
        // {
        //   id: "1",
        //   name: "普通用户",
        //   email: "",
        //   website: "",
        //   content: "你好",
        //   createTime: "2023-03-03",
        //   children: [
        //     {
        //       id: "11",
        //       name: "geekplus",
        //       email: "",
        //       website: "",
        //       content: "嗯！你好！",
        //       createTime: "2023-03-11",
        //     },
        //     {
        //       id: "12",
        //       name: "geekplus",
        //       email: "",
        //       website: "",
        //       content: "what？你在说什么？我不知道！",
        //       createTime: "2023-03-09",
        //     },
        //   ],
        // },
        // {
        //   id: "111",
        //   name: "普通用户",
        //   email: "",
        //   website: "",
        //   content: "你是做什么的，你为什么要建这个网站？",
        //   createTime: "2023-03-13",
        //   children: [
        //     {
        //       id: "121",
        //       name: "普通用户",
        //       email: "",
        //       website: "",
        //       content: "我是一个孤独的人，一个没有朋友的人？",
        //       createTime: "2023-03-17",
        //     },
        //   ],
        // },
      ],
      loadMoreBtn: "加载更多留言",
      iframeAdsWin: null,
    };
  },
  created() {
    this.getArticle();
    //console.log(this.$route.params.articleId);
    this.getTenNewArticle();
    this.getAllArticleCategory();
    this.getTagAndArticleCount();
    this.windowUrl = window.location.href;
    this.getUserCommentMessage(1);
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
  watch: {
    articleInfo: function (val) {
      //console.log(val); // 有数据
      this.$nextTick(() => {
        window.document.title =
          this.articleInfo.articleTitle + " | 极客普拉斯&梦极客园" ||
          "极客普拉斯&梦极客园-geekplus.xyz";
      });
      this.articleViewAndLike.viewCount = this.articleInfo.viewCount;
      this.articleViewAndLike.likeCount = this.articleInfo.likeCount;
      this.modifyViewCount();
    },
    // $route(to, from) {
    //   console.log("数据变化")
    // }
  },
  mounted() {
    // let script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "https://ads-union.jd.com/static/js/union.js";
    // document.body.appendChild(script);
    let _this = this;
    this.iframeAdsWin = this.$refs.iframeAds.contentWindow;
    $(function () {
      $('[data-toggle="popover"]').popover({
        html: true,
        placement: "top",
        content:
          "<div class='popover-container' ><img src='/imgs/earnmoney/alipay.jpg' width='100px' height='100px'>&nbsp;<img src='/imgs/earnmoney/wxpay.jpg' width='100px' height='100px'></div>",
      });
    });
    //setTimeout(() => {
    // console.log(this.articleInfo);
    //}, 1000);
    // setInterval(()=>{
    //   console.log("hello")
    // },1000);
    document.getElementsByClassName("article-content")[0].oncopy = function (
      e
    ) {
      // 部分监听
      if (e.target.textContent.length > 100) {
        _this.addLink();
      }
    };
    // console.log(document.getElementById('comment-left').offsetHeight)
    var height = document.getElementById("comment-left").offsetHeight - 52;
    document.getElementsByClassName("Input_text")[0].style.height =
      height + "px";
    window.onresize = () => {
      var height = document.getElementById("comment-left").offsetHeight - 52;
      document.getElementsByClassName("Input_text")[0].style.height =
        height + "px";
    };
  },
  activated() {
    window.document.title =
      this.articleInfo.articleTitle + " | 极客普拉斯&梦极客园" ||
      "极客普拉斯&梦极客园-geekplus.xyz";
  },
  methods: {
    sendIframeAdsWinpMessage() {
      // this.JDIframeUrl="/general/jdunion/jd1.html";
      this.iframeAdsWin = this.$refs.iframeAds.contentWindow;
      // var jd_union_pid="368131681750707715";
      var jd_union_pid="368131681753068697"
      this.iframeAdsWin.postMessage({
        params: jd_union_pid /*在iframe页面中接收通过key也就是param接收，因此传输的数据可以是对象，包含多个key以及对应的数据*/
      }, "*");
    },
    setHeight(obj) {
      var w = obj;
      if (document.getElementById) {
        if (w && !window.opera) {
          if (w.contentDocument && w.contentDocument.body.offsetHeight) {
            w.height = w.contentDocument.body.offsetHeight + 40;
          } else if (w.Document && window.document.body.scrollHeight) {
            w.height = window.document.body.scrollHeight + 40;
          }
        }
      }
    },
    getArticle() {
      //let _this=this;
      var id = this.$route.params.articleId;
      let param = { id: id, isDisplay: null };
      getArticleDetail(param)
        .then((response) => {
          this.articleInfo = response.data;
          this.getBreadCrumb(this.articleInfo.articleCategory);
          //this.articleDetail=JSON.parse(JSON.stringify(response.data));
          // console.log(this.articleDetail);
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getTenNewArticle() {
      let data = { isDisplay: 1 };
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
      this.allCategoryList = this.getListSubCategory(
        this.$store.getters.addRoutes.slice(0, 4)
      );
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
    getListSubCategory(list) {
      let listCategory = new Array();
      list.forEach((parent) => {
        parent.children.forEach((child) => {
          let childCategory = {
            path: parent.path + "/" + child.path,
            categoryName: child.meta.title,
          };
          listCategory.push(childCategory);
        });
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
    //修改文章的浏览量和点赞数
    modifyViewCount() {
      if (this.articleInfo.viewCount == null) {
        this.articleInfo.viewCount = 0;
      }
      //this.articleViewAndLike.viewCount = this.articleInfo.viewCount;
      this.articleViewAndLike.viewCount = this.articleViewAndLike.viewCount + 1;
      this.articleViewAndLike.id = this.$route.params.articleId;
      updateViewCountAndLikeCount(this.articleViewAndLike)
        .then((response) => {})
        .catch((error) => {});
    },
    modifyLikeCount() {
      if (this.articleInfo.likeCount == null) {
        this.articleInfo.likeCount = 0;
      }
      //this.articleViewAndLike.likeCount = this.articleInfo.likeCount;
      this.articleViewAndLike.likeCount = this.articleInfo.likeCount + 1;
      this.articleViewAndLike.id = this.$route.params.articleId;
      updateViewCountAndLikeCount(this.articleViewAndLike)
        .then((response) => {})
        .catch((error) => {});
    },
    //获取路径的面包屑，首页/其他页/其他页
    getBreadCrumb(categoryId) {
      //let categoryId=this.articleInfo.articleCategory;
      let servermenu = this.$store.getters.addRoutes.slice(0, 4);
      let breadCrumbList = [];
      servermenu.forEach((item) => {
        item.children.forEach((childItem) => {
          if (childItem.meta.id == categoryId) {
            // let parentMenu={
            //   path: item.path,
            //   meta: {
            //     title: item.meta.title,
            //   }
            // }
            let tempMenu = [
              {
                path: item.path,
                meta: {
                  title: item.meta.title,
                },
              },
              {
                path: item.path + "/" + childItem.path,
                meta: {
                  title: childItem.meta.title,
                },
              },
            ];
            breadCrumbList = tempMenu;
          }
        });
      });
      //console.log(breadCrumbList); //匹配路由地址，用来显示路径面包屑
      // let matched = this.$route.matched.filter(
      //   (item) => item.meta && item.meta.title && item.path !== ""
      // );
      const first = breadCrumbList[0];
      if (!this.isHome(first)) {
        this.breadCrumbList = [
          { path: "/", name: "home", meta: { title: "首页" } },
        ].concat(breadCrumbList);
      }
      this.breadCrumbList.push({ path: "", meta: { title: "文章" } });
      // this.breadCrumbList = matched.filter(
      //   (item) => item.meta && item.meta.title !== ''
      // );
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
    // onNavigationBarButtonTap(e) {
    //   var domUrl = document.createElement("input");
    //   domUrl.value = this.windowUrl;
    //   domUrl.id = "creatDom";
    //   document.body.appendChild(domUrl);
    //   domUrl.select(); // 选择对象
    //   document.execCommand("Copy"); // 执行浏览器复制命令
    //   let creatDom = document.getElementById("creatDom");
    //   creatDom.parentNode.removeChild(creatDom);
    // },
    onThumbsUpButtonTap() {
      this.articleViewAndLike.likeCount += 1;
      this.modifyLikeCount();
    },
    onLinkButtonTap(e) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(
            "【" + this.articleInfo.articleTitle + "】  \r\n" + this.windowUrl
          )
          .then(() => {
            this.$toasted.info("复制成功", {
              position: "top-center",
              duration: 3000,
              theme: "bubble",
            });
          })
          .catch(() => {
            this.$toasted.error("复制失败", {
              position: "top-center",
              duration: 3000,
              theme: "bubble",
            });
          });
      } else {
        // 创建text area
        const textArea = document.createElement("textarea");
        textArea.value =
          "【" + this.articleInfo.articleTitle + "】  \r\n" + this.windowUrl;
        // 使text area不在viewport，同时设置不可见
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((resolve, reject) => {
          // 执行复制命令并移除文本框
          document.execCommand("copy")
            ? resolve()
            : reject(new Error("出错了"));
          textArea.remove();
        }).then(
          () => {
            this.$toasted.info("复制成功", {
              position: "top-center",
              duration: 3000,
              theme: "bubble",
            });
          },
          () => {
            this.$toasted.error("复制失败", {
              position: "top-center",
              duration: 3000,
              theme: "bubble",
            });
          }
        );
      }
      // navigator.clipboard.writeText(this.windowUrl).then(() => {
      // }).catch(() => {
      // });
    },
    // 表单重置
    reset() {
      this.userMessage = {
        id: null,
        replyId: null,
        name: null,
        email: null,
        website: null,
        content: null,
        topicId: null,
        topicType: null,
        createTime: null,
        userId: null,
        parent: 0,
      };
      document.getElementById("div_msg_content").innerHTML = "";
      //this.resetForm("userCommentForm");
    },
    getUserCommentMessage(number) {
      //let data = { parentId: 0, topicId: null };
      //this.queryParams.parentId=0;
      if (number == 0 || number == null || number == "") {
        this.queryParams.pageNum = 1;
      } else {
        this.queryParams.pageNum = number;
      }
      this.queryParams.topicId = this.$route.params.articleId;
      getAllUserComment(this.queryParams)
        .then((response) => {
          //console.log(response);
          this.leaveMessage = this.leaveMessage.concat(response.rows);
          this.leaveMessageTotal = response.total;
          this.loadMoreBtn = "加载数据。。。";
        })
        .catch((error) => {
          //console.log(error);
          this.loadMoreBtn = "数据加载失败";
        })
        .finally(() => {
          //this.loadMoreBtn="数据加载完成";
        });
      //document.getElementsByClassName("leavewords-container")[0].scrollIntoView();
      //this.afterBackToTop();
      setTimeout(async () => {
        this.loadMoreBtn = "数据加载完了";
      }, 1000);
    },
    // getAllUserCommentMsg() {
    //   //let data = { parentId: 0, topicId: null };
    //   //this.queryParams.parentId=0;
    //   getAllUserComment(this.queryParams)
    //     .then((response) => {
    //       //console.log(response);
    //       this.leaveMessage = response.rows;
    //       this.leaveMessageTotal = response.total;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    //用户留言
    userLeaveMessage() {
      //this.userMessage.dateTime=this.getNowDate()
      //this.userMessage.parentId=0;
      this.userMessage.topicId = this.$route.params.articleId;
      let data = this.userMessage;
      //console.log(this.userMessage)
      if (
        data.name == null ||
        data.content == null ||
        data.content == "" ||
        data.name == ""
      ) {
        //console.log("不为空！")
        this.$toasted.error("*必填项不能为空！", {
          position: "top-center",
          duration: 3000,
        });
      } else {
        sendUserComment(this.userMessage)
          .then((response) => {
            //console.log(response);
            this.closeReplyBox();
            this.getUserCommentMessage();
            this.$toasted.success("留言成功！", {
              position: "top-center",
              duration: 2000,
            });
          })
          .catch((error) => {
            //console.log(error);
            this.$toasted.error(error.msg, {
              position: "top-center",
              duration: 3000,
            });
          });
        this.reset();
      }
    },
    getReplyMessage(data) {
      let replyMsg = {
        name: data.name,
        email: data.email,
        website: data.website,
        content: data.content,
        //dateTime: this.getNowDate(),
        parentId: data.parentId,
        replyId: data.replyId,
        replyName: data.replyName,
        topicId: this.$route.params.articleId,
      };
      //this.isDisplayMsgBox=false;
      //this.leaveMessage.filter(item => item.id===this.replyBoxIndex)[0].children.push(replyMsg);
      //console.log(this.leaveMessage.filter(item => item.id===this.replyBoxIndex))
      //console.log(data)
      if (
        data.name == null ||
        data.content == null ||
        data.content == "" ||
        data.name == ""
      ) {
        //console.log("不为空！")
        this.$toasted.error("*必填项不能为空！", {
          position: "top-center",
          duration: 3000,
        });
      } else {
        sendUserComment(replyMsg)
          .then((response) => {
            //console.log(response);
            this.closeReplyBox();
            this.getUserCommentMessage();
            this.$toasted.success("回复留言成功", {
              position: "top-center",
              duration: 2000,
            });
          })
          .catch((error) => {
            this.$toasted.error(error.msg, {
              position: "top-center",
              duration: 3000,
            });
          });
      }
    },
    openReplyBox(index) {
      //this.isDisplayMsgBox=true;
      this.replyBoxIndex = index;
      //console.log(this.replyBoxIndex)
    },
    closeReplyBox() {
      //this.isDisplayMsgBox=false;
      this.replyBoxIndex = -1;
    },
    putTextAreaValue(e) {
      //console.log(e.target)
      // $(document).on("keyup","#div_content",function(){
      //   $("#textarea_content").html($(this).html());
      // });
      document.getElementById("textarea-content").value = e.target.innerHTML;
      this.userMessage.content = e.target.innerHTML;
    },
    loadMoreData() {
      this.queryParams.pageNum += 1;
      if (
        this.queryParams.pageNum <=
        Math.ceil(this.leaveMessageTotal / this.queryParams.pageSize)
      ) {
        this.getUserCommentMessage(this.queryParams.pageNum + 1);
      } else {
        this.loadMoreBtn = "数据加载完了";
      }
    },
  },
  destroyed() {
    //this.modifyLikeCount();
    this.articleViewAndLike.viewCount = null;
  },
};
</script>

<style>
.popover {
  text-align: center;
  background-color: var(--color-container, #242323e2);
}
</style>