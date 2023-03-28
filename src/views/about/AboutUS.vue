<template>
  <!--            梦极客  |  一个渴望成为全栈工程师的伪程序员       
    
                                  _ooOoo_
                                 o8888888o
                                 88" . "88	
                                 (| -_- |)         
                                 O\  =  /O	
                              ____/`---'\____	
                            .'  \\|     |//  `.
                           /  \\|||  :  |||//  \
                          /  _||||| -:- |||||-  \
                          |   | \\\  -  /// |   |
                          | \_|  ''\---/''  |   |
                          \  .-\__  `-`  ___/-. /
                        ___`. .'  /--.--\  `. . __
                     ."" '<  `.___\_<|>_/___.'  >'"".
                    | | :  `- \`.;`\ _ /`;.`/ - ` : | |
                    \  \ `-.   \_ __\ /__ _/   .-` /  /
               ======`-.____`-.___\_____/___.-`____.-'======
                                  `=---='
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
     -本模板源码由麦客工作室倾尽心血二次美化，望佛祖保佑梦极客园永远无BUG!-
     
           -梦极客园邮箱:geekcjj@gmail.com   qq:1789615426 -
    
    -->
  <div class="container">
    <div class="container-content">
      <section class="row">
        <div class="col-lg-9 col-md-9 animated slideInLeft">
          <div class="article-content">
            <div class="article-title">
              <h2>
                {{
                  aboutMeData.gpTitle ? aboutMeData.gpTitle : "关于极客普拉斯"
                }}
              </h2>
            </div>
            <div class="tt">
              <label
                >作者：{{
                  aboutMeData.gpName ? aboutMeData.gpName : "geekplus"
                }}</label
              >
              |
              <label
                >发布：{{
                  aboutMeData.createTime ? aboutMeData.createTime : "2019-12-12"
                }}</label
              >
            </div>
            <article>
              <div
                class="content"
                v-if="aboutMeData.gpContent"
                v-html="aboutMeData.gpContent"
              ></div>
              <div class="content" v-else>
                <p>欢迎来到梦极客园!!!</p>
                <div class="alert alert-info alert-no-margin" role="alert">
                  <p>做政治试卷，是我这辈子，说谎最多的时候。</p>
                  <p>做政治试卷，是我这辈子，说谎最多的时候。</p>
                  <p>做任何事情一定要坚持下去，总会让你看到，失败的那一天。</p>
                </div>
                <p>我坚信技术改变世界,创新引领生活!</p>
                <div class="alert alert-info alert-no-margin" role="alert">
                  <p>
                    本站是一个技术分享,生活记录,个人随笔,科技杂谈的博客类网站!
                  </p>
                  <p>
                    软件设计要考虑诸多方面，权衡各种利弊，以设计一个趋于完美的解决方案。在方案未落实之前，这也是争论的焦点，探讨的是方案的可行性，
                    然而无论再好的方案都有弊端的，只是众多方案中选优罢了，这点正是本文的主题。程序设计不可能集所有优点于一身，必有牺牲的一面，常常
                    因为为了满足准确性，而牺牲了性能，为了满足某些需求，而冗余了代码，甚至入侵了业务也不惜，因此代码是没有双全法的，有得必有失，不必苛求。
                  </p>
                  <p>
                    代码尚且如此，人生又何尝不是？人生是不完美的，也无法做到十全十美，这不是付出多少的问题，这就是一个真命题，就像地球引力一般的存在，
                    再成功的人也有他遗憾的问题，是因为他厚此薄彼的结果，当然厚此薄彼要加上引号，其动机没有不纯，这就是2选1的问题，举个不恰当的例子，一
                    个男人有了外遇，被老婆知道了，老婆和情人其实都有一个共同的诉求，就是男人必须在两者之间选择一个，这时男人不管如何做出选择都是痛的，
                    如若男人继续做出中庸的选择，那么两头都不讨好，最后只能竹篮打水一场空，两个人都得不到，举这个例子可能不太恰当，但能说明问题所在。
                  </p>
                </div>
                <br />
                <div class="container-fluid">
                  <div class=""></div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div class="model">
                        <div class="title">
                          <!-- <span class="glyphicon glyphicon-search"></span>&nbsp; -->我的QQ
                        </div>
                        <div class="content">
                          <img
                            alt="我的QQ"
                            class="qq-image-code"
                            src="../../assets/img/mysocialQRCode/QQCode.jpg"
                          />
                        </div>
                      </div>
                      <!-- <div class="panel panel-info">
                            				<div class="panel-heading">
											    <h3 class="panel-title">我的QQ</h3>
											</div>
											<div class="panel-body">
											    <img alt="我的QQ" class="qq-image-code" src="images/mysocialQRCode/QQCode.jpg">
											</div>
                            			</div> -->
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div class="model">
                        <div class="title">
                          <!-- <span class="glyphicon glyphicon-search"></span>&nbsp; -->我的微信
                        </div>
                        <div class="content">
                          <img
                            alt="我的微信"
                            class="weixin-image-code"
                            src="../../assets/img/mysocialQRCode/WexinCode.jpg"
                          />
                        </div>
                      </div>
                      <!-- <div class="panel panel-warning">
                            				<div class="panel-heading">
											    <h3 class="panel-title">我的微信</h3>
											</div>
											<div class="panel-body">
											    <img alt="我的微信" class="weixin-image-code" src="images/mysocialQRCode/WexinCode.jpg">
											</div>
                            			</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <aside class="col-lg-3 col-md-3 animated slideInRight">
          <div class="right-fun">
            <div class="model hidden-xs">
              <div class="title">
                <span class="glyphicon glyphicon-search"></span>&nbsp;站内搜索
              </div>
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
                  <form class="form-horizontal" @submit.prevent="searchResult()">
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
                <span class="glyphicon glyphicon-th"></span>&nbsp;标签云图
              </div>
              <div class="panel-body" id="cat-list">
                <div style="margin:2px;" v-for="(item, index) in allTagArticleCount"
                      :key="index">
                    <router-link to="#" class="label label-info" > 
                      {{ item.tagName ? item.tagName : "Java" }}
                      <span class="badge">{{ item.articleCount != -1 ? item.articleCount : 1 }}</span>
                    </router-link>
                </div>
                <!-- <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
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
                </a> -->
              </div>
            </div>
            <div class="panel panel-default recommendlist">
              <div
                class="panel-heading"
                style="background: rgba(0, 0, 0, 0.0001)"
              >
                <span class="glyphicon glyphicon-list"></span>&nbsp;快捷菜单
              </div>
              <div class="panel-body">
                <!-- <div class="model recommend">                                                                         						                            <div class="title">热门推荐</div>						                            <div class="content"> -->
                <div class="fastmenu">
                  <span><a href="http://www.maikete.com">文章博客</a></span>
                  <span><a href="http://www.maikete.com">新闻资讯</a></span>
                  <span><a href="http://www.maikete.com">资源文件</a></span>
                  <span><a href="http://www.maikete.com">格物生活</a></span>
                  <span><a href="http://www.maikete.com">给我留言</a></span>
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
            <div class="panel panel-default">
              <div
                class="panel-heading"
                style="background: rgba(0, 0, 0, 0.0001)"
              >
                <span class="glyphicon glyphicon-th-list"></span>&nbsp;热门文章
              </div>
              <div class="panel-body recommendlist">
                <!-- <div class="model recommend">
                            <div class="title">热门推荐</div>
                            <div class="content"> -->
                <p>
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
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
import { getAboutMyGpWeb, getTagArticleCount} from "@/api/geekplus/geekplus";
export default {
  data() {
    return {
      userName: "",
      keywords: "",
      aboutMeData: "",
      allTagArticleCount: [], //查询每个标签的文章数量
    };
  },
  created() {
    this.getAboutMeAndMyWeb();
    this.getTagAndArticleCount();
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
    //var time=this.getNowDate();
    console.log(this.getNowDate());
  },
  methods: {
    getNowDateTime() {
      return this.getNowDate();
    },
    getAboutMeAndMyWeb() {
      //let params = { id: 1 };
      var params=1;
      getAboutMyGpWeb(1)
        .then((response) => {
          //console.log(response)
          this.aboutMeData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
      if(this.keywords!==''){
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