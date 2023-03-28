<template>
  <div class="container">
    <section class="container-content">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
          <div class="article-content">
            <h3>
              {{
                articleInfo.articleTitle
                  ? articleInfo.articleTitle
                  : "代码没有双全法，人生也一样"
              }}
            </h3>
            <!-- <h4>param传值{{ $route.params.articleId }}</h4> -->
            <div class="tt">
              <label
                >作者：{{
                  articleInfo.authorName ? articleInfo.authorName : "周舟"
                }}</label
              >
              |
              <label
                >发布：{{
                  articleInfo.createTime ? getOnlyYearMonthDay(articleInfo.createTime) : "2019.05.31"
                }}</label
              >
              |
              <label
                >浏览：{{
                  articleInfo.viewCount ? articleInfo.viewCount : 38909
                }}</label
              >
            </div>
            <div
              class="content"
              v-if="articleInfo.articleContent"
              v-html="articleInfo.articleContent"
            ></div>
            <div class="content" v-else>
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
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6>评论:</h6>
              <div class="comments_input_area">
                <div class="row">
                  <div class="col-lg-4 col--md-4 col-sm-4">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="inputnickname"
                        name="nickname"
                        required=""
                        placeholder="昵称*"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col--md-4 col-sm-4">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="inputemail"
                        name="email"
                        required=""
                        placeholder="邮箱"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col--md-6 col-sm-4">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="inputwebsite"
                        name="websiteurl"
                        placeholder="网址"
                      />
                    </div>
                  </div>
                </div>
                <div class="Input_Box">
                  <div contenteditable="true" class="Input_text"></div>
                  <div class="Input_Foot">
                    <a class="imgBtn" href="javascript:void(0);">'◡'</a
                    ><a class="imgBtn" href="javascript:void(0);">&lt;/&gt;</a
                    ><a class="postBtn">确定</a>
                  </div>
                </div>
                <div class="faceDiv">
                  <section class="emoji_container"></section>
                  <section class="emoji_tab"></section>
                </div>
              </div>
            </div>
            <!-- <iframe src="squireeditor/source/document.html" onload="top.editor=this.contentWindow.editor" width="100%" height="200"></iframe> -->
            <!-- <div class="col-centered">
                <textarea id="foo"></textarea>
            </div> -->
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
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
                  <form class="form-horizontal">
                    <div class="input-group search-input-group">
                      <input type="hidden" name="scope" value="1" />
                      <input
                        name="key"
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
                标签云图
              </div>
              <div class="panel-body">
                <router-link class="btn btn-info" type="text" to="#"
                   v-for="item,index in allTagArticleCount" :key="index" >
                   {{item.tagName?item.tagName:'Java'}}
                   <span class="badge badge-info">{{item.articleCount!=-1?item.articleCount:1}}</span>
                </router-link>
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
                  <span v-for="(item, index) in allCategoryList" :key="index" >
                    <router-link :to="'/articleList/' + item.path">
                      {{ item.categoryName ? item.categoryName : "编程技术&nbsp;(13)" }}
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
                <p v-for="(item, index) in sixNewArticle" :key="index">
                  <a href="javascript:void(0);"
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
                        : "dw个人网页模板作业成品"  }}
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
  getSixNewestArticle,
  listSubCategory,
  getTagArticleCount,
} from "@/api/geekplus/geekplus";
//import { response } from "express";
export default {
  data() {
    return {
      keywords: "",
      articleInfo: {
        articleCategory: "4",
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
      },
      sixNewArticle: [],
      allCategoryList: [],
      allTagArticleCount:[],
    };
  },
  created() {
    this.getArticle();
    //console.log(this.$route.params.articleId);
    this.getSixNewArticle();
    this.getAllArticleCategory();
    this.getTagAndArticleCount();
  },
  mounted() {},
  methods: {
    getArticle() {
      let that=this;
      var id = that.$route.params.articleId;
      let param = { id: id, isDisplay: 1 };
      getArticleDetail(param)
        .then((response) => {
          that.articleInfo = response.data;
          //console.log(this.articleInfo.articleTitle)
          window.document.title =
            this.articleInfo.articleTitle + " | 极客普拉斯&梦极客园" ||
            "极客普拉斯&梦极客园-geekplus.xyz";
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
    getTagAndArticleCount(){
      getTagArticleCount().then((response) => {
        //console.log(response.data);
        this.allTagArticleCount=response.data;
      }).catch((error) => {
        this.$toasted.error(
          error.msg,
          {
            position:'top-center',
            duration:3000,
            theme:'bubble'
          }
        );
      })
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
  },
};
</script>

<style>
</style>