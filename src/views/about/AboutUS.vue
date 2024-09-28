<template>
  <!--            梦极客  |  非典型开发者
    
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
     
           -梦极客园邮箱:geekgarry@hotmail.com   qq:1789615426 -
    
    -->
  <div class="container">
    <div class="container-content">
      <section class="row">
        <div class="col-lg-9 col-md-9 animated slideInLeft">
          <div class="article-container" v-viewer>
            <div class="article-title">
              <h2>
                {{
                  aboutMeData.gpTitle ? aboutMeData.gpTitle : "关于极客普拉斯"
                }}
              </h2>
            </div>
            <div class="article-meta">
              <label
                >作者：{{
                  aboutMeData.gpName ? aboutMeData.gpName : "geekplus"
                }}
              </label>|
              <label
                >发布：{{
                  aboutMeData.createTime ? aboutMeData.createTime : "2019-12-12"
                }}
              </label>
            </div>
            <article>
              <div
                class="article-content"
                v-if="aboutMeData.gpContent"
                v-html="aboutMeData.gpContent"
              ></div>
              <div class="article-content" v-else>
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
                            alt="geekplus,极客普拉斯,我的QQ"
                            class="donate-image-code"
                            src="/imgs/mysocialQRCode/QQCode.jpg"
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
                            alt="geekplus,极客普拉斯,我的微信"
                            class="donate-image-code"
                            src="/imgs/mysocialQRCode/WexinCode.jpg"
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
            <div class="row mx-4">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Adsense
                  data-ad-client="ca-pub-7291512442295477"
                  data-ad-slot="6482220433">
                </Adsense>
              </div>
            </div>
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
              <div class="panel-body tag-list">
                <span style="display:inline-block;margin:2px;" v-for="(item, index) in allTagArticleCount"
                      :key="index">
                    <router-link :to="{path:'/articleListForTag',query:{tagName:item.tagName}}" class="" > 
                      {{ item.tagName ? item.tagName : "Java" }}
                      <span>{{ item.articleCount != -1 ? numFormatKWM(item.articleCount) : 1 }}</span>
                    </router-link>
                </span>
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
                  <span v-for="(item, index) in allCategoryList"
                    :key="index" >
                    <router-link :to="item.path">
                      {{ item.categoryName ? item.categoryName : "编程技术&nbsp;(13)" }}
                    </router-link>
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
                                                        <span><a href="/">文章博客</a></span>
                                                        <span><a href="/">新闻资讯</a></span>
                                                        <span><a href="/">资源文件</a></span>
                                                        <span><a href="/">格物生活</a></span>
                                                        <span><a href="/">给我留言</a></span>
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
                <p v-for="(item, index) in tenMostViewedArticles" :key="index">
                  <a href="javascript:void(0);" @click="$router.push({
                          name: 'article',
                          params: { articleId: item.id },
                        }) ">
                    {{ item.articleTitle ? item.articleTitle : "个人网页模板源代码" }}
                  </a>
                </p>
                <!-- <p>
                  <a href="#"
                    >个人网页模板源码</a
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
                style="width: 100%; min-height:250px; border: 0px; margin: 0;"
                ></iframe>
            </div>
          </div>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
import { getAboutMyGpWeb, getTagArticleCount,getMostViewedArticle,listSubCategory,} from "@/api/geekplus/geekplus";
export default {
  data() {
    return {
      userName: "",
      keywords: "",
      aboutMeData: "",
      allTagArticleCount: [], //查询每个标签的文章数量
      tenMostViewedArticles:[],
      allCategoryList:[],
      menuList:[],
      iframeAdsWin: null,
    };
  },
  created() {
    this.getAboutMeAndMyWeb();
    this.getTenMostViewedArticle();
    this.getAllArticleCategory();
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
    //this.getRouterMneuList();
  },
  mounted() {
    this.iframeAdsWin = this.$refs.iframeAds.contentWindow;
    //var time=this.getNowDate();
    //console.log(this.getNowDate());
  },
  methods: {
    sendIframeAdsWinpMessage() {
      // this.JDIframeUrl="/general/jdunion/jd1.html";
      // this.iframeAdsWin = this.$refs.iframeAds.contentWindow;
      var jd_union_pid= "368131681753068697";//"368131681760272824";
      //var jd_union_pid="368131681753068697"
      this.iframeAdsWin.postMessage({
        params: jd_union_pid /*在iframe页面中接收通过key也就是param接收，因此传输的数据可以是对象，包含多个key以及对应的数据*/
      }, "*");
    },
    getNowDateTime() {
      return this.getNowDate();
    },
    //从Vue路由配置js中拿到路由信息，并做处过滤加入顶部导航菜单，本地无需配置路由，后台管理处配置
    getRouterMneuList() {
      let that = this;
      // let matched = this.$route.matched.filter(
      //   (item) => item.meta && item.meta.title
      // );
      let tempMenuList = that.$router.options.routes.filter(
        (item) => { return item.type == "layout"}
      );
      console.log(tempMenuList);
      //that.menuList=getChildrenPath();
      //console.log(that.menuList.length)
      // deep(mmm).forEach((item) => {
      //   console.log(item)
      // });
      let menuLList = tempMenuList[0].children;
      console.log(menuLList.length);
      for(var i=0;i<menuLList.length;i++){
        let item = menuLList[i];
        if(item.type=='servermenu'){
          console.log(item)
        }
      }
      
      //that.menuList=store.state.menuList;
      //that.menuList=menuResult
      // that.menuList.filter(
      //   (item) => item.type=='menu'
      // );
      //matched = this.menuList.concat(matched);
      // this.menuList = matched.filter(
      //   (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      // );
      console.log(that.$route.matched)
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
    getTenMostViewedArticle() {
      let data = {};
      getMostViewedArticle(data)
        .then((response) => {
          //console.log(response.data);
          this.tenMostViewedArticles = response.data;
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
      //console.log(this.$store.getters.addRoutes.slice(0,4))
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