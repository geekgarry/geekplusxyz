<template>
  <div id="app">
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/> -->
    <header class="header hidden-xs">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="logo">
              <img
                v-lazy="GCLogo"
                class="top_banner_logo"
                @mouseover="mouseOverIt"
                @mouseout="mouseOutIt"
              />
              <span class="logo-text navbar-collapse collapse animated rotateIn"
                >极客普拉斯</span
              >
            </div>
            <div class="right-block">
              <div class="wow pulse bg-yellow" data-wow-delay="0.1s">
                人生，
              </div>
              <div
                class="wow rollIn bg-red"
                data-wow-iteration="1"
                data-wow-duration="0.5s"
              >
                就像一盒巧克力，
              </div>
              <div class="wow bounceInRight bg-blue">
                你永远不知道下一块会是什么味道！
              </div>
              <div class="wow bounceInRight bg-blue">---《阿甘正传》</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- <div class="gc-slide">
        <div class="gc_hand_top" id="backToTop">
          <a href="javascript:void(0);" class="gc_hand_top_btn"
            ><i class="gcfont"></i><span>返回顶部</span></a
          >
        </div>
      </div> -->
    <nav :class="topNavBarFixed" id="navigator_bar">
      <div class="container">
        <div class="navbar-header">
          <button
            class="navbar-toggle pull-right"
            data-toggle="collapse"
            data-target="#navbar_collapse_div"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <button
            class="navbar-toggle pull-right"
            @click="$router.push('/chatgpt')"
          >
            <span class="glyphicon glyphicon-road" aria-hidden="true"></span>
          </button>
          <button
            class="navbar-toggle pull-right"
            data-toggle="collapse"
            data-target="#collapse_searche_div"
          >
            <span class="glyphicon glyphicon-search"></span>
          </button>
          <!-- <div class="navbar-brand-container"> -->
            <router-link class="navbar-brand visible-xs" to="/">
              <!-- <img v-lazy="GCLogo" class="logo_img" @onmouseover="mouseOverIt"
                  @onmouseout="mouseOutIt" style="width:20px;height:20px;" /> -->
              <span class="navbar-brand-logo-text" ref="brandText">极客普拉斯</span>
            </router-link>
          <!-- </div> -->
          <!-- <router-link class="navbar-left visible-xs" href="https://www.geekplus.xyz/">
              <img alt="极客普拉斯" id="navbar-brand-img" v-lazy="GCLogo" >极客普拉斯
            </router-link> -->
        </div>
        <div class="collapse animated fadeInDown" id="collapse_searche_div">
          <div class="search_bar_top">
            <!-- <form action="/searchResult" class="input-group input-group-lg">
                <input type="text" class="form-control" placeholder="请输入您要搜索的内容...">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="submit">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                </span>
              </form> -->
            <form @submit.prevent="searchResult()">
              <input
                type="text"
                class="form-control"
                placeholder="请输入您要搜索的内容..."
                name="keywords"
                v-model="keywords"
                @keyup.enter="searchResult()"
              />
              <button type="button">
                <span
                  class="glyphicon glyphicon-search"
                  @click="searchResult()"
                  aria-hidden="true"
                ></span>
              </button>
            </form>
          </div>
        </div>
        <div class="navbar-collapse collapse" id="navbar_collapse_div">
          <ul class="nav navbar-nav navbar-left navbar_ul">
            <li :class="keyPath == '/' ? 'menuactive' : ''">
              <router-link to="/">
                <!-- <i class="fa fa-home" /> -->
                <a href="javascript:void(0)">首页</a>
              </router-link>
            </li>
            <li
              :class="keyPath == item.path ? 'menuactive' : ''"
              v-for="(item, index) in menuList"
              :key="index"
            >
              <router-link v-if="item.children.length == 0" :to="item.path">
                <a href="javascript:void(0)">{{ item.meta.title }}</a>
              </router-link>
              <a v-if="item.children.length != 0" href="javascript:void(0)">{{
                item.meta.title
              }}</a>
              <!-- v-if="item.children.length===0" <a v-if="item.children.length!==0" href="javascript:void(0)">{{ item.meta.title }}</a> -->
              <div v-if="item.children.length != 0" class="itembox">
                <ul class="nav-pills nav-stacked">
                  <li
                    :class="
                      keyPath == item.path+'/'+ subitem.path
                        ? 'menuactive'
                        : ''
                    "
                    v-for="(subitem, index) in item.children"
                    :key="index"
                  >
                    <router-link
                      :to="item.path+'/'+subitem.path"
                    > <!--:to="'/articleCategory/'+subitem.path"-->
                      <a href="javascript:void(0)">{{
                        /**subitem.categoryName*/subitem.meta.title
                      }}</a>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <!-- <li>
                <a href="/blogArtices">编程技术</a>
              </li>
              <li>
                <a href="/newTalkList">新闻杂谈</a>
              </li>
  
              <li>
                <a href="/resourceDownload">资源文件</a>
              </li>
  
              <li>
                <a href="javascript:0;">生活随笔</a>
                <div class="itembox">
                  <ul>
                    <li><a href="/thinkingLife">格物生活</a></li>
                    <li><a href="/personalEssay">个人随笔</a></li>
                  </ul>
                </div>
              </li> -->

            <li :class="keyPath == '/leaveMessage' ? 'menuactive' : ''">
              <router-link to="/leaveMessage">
                <a href="javascript:void(0)">给我留言</a>
              </router-link>
            </li>
            <li :class="keyPath == '/about' ? 'menuactive' : ''">
              <router-link to="/about">
                <a href="javascript:void(0)">关于</a>
              </router-link>
            </li>
            <!-- <li :class="keyPath == '/programDevelopment/java' ? 'menuactive' : ''">
              <router-link to="/programDevelopment/java">
                <a href="javascript:void(0)">测试</a>
              </router-link>
            </li> -->
          </ul>
          <ul class="nav navbar-nav navbar-right hidden-sm">
            <li>
              <a href="https://maikeadmin.geekplus.xyz/chat"
                >ChatGPT智能助手<span class="badge"></span
              ></a>
            </li>
            <!-- <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >梦极客<span class="caret"></span
                ></a>
                <ul class="dropdown dropdown-menu navbar_ul">
                  <li><a href="#">个人中心</a></li>
                  <li><a href="#">我的收藏</a></li>
                  <li><a href="#">账号设置</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">退出</a></li>
                </ul>
              </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <back-to-top
      class="hidden-xs hidden-sm"
      :transitionName="transName"
      :customStyle="myBackToTopStyle"
      :visibilityHeight="600"
      :backPosition="150"
    >
    </back-to-top>

    <!-- <wave-item></wave-item> -->

    <!-- <div :style="navBarStyle"> -->
    <!-- <div class="container" v-if="getPath() !== '/'">
        <ol class="gp_breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Library</a></li>
          <li class="active">Data</li>
        </ol>
      </div> -->
    <!-- <router-view :key="key" /> -->
    <app-main />
    <!-- </div> -->
    <!-- <div class="gc-slide" v-if="isBackTop">
        <div class="gc_hand_top" id="backToTop">
          <a
            href="javascript:void(0);"
            @click="backToTop"
            class="gc_hand_top_btn"
          >
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            <img
              v-if="isBackTop"
              class="go-top"
              src="imgs/bloglogo.png"
              @click="backToTop"
            />
            <i class="gcfont"></i><span>返回顶部</span>
          </a>
        </div>
      </div> -->
    <nav
      class="navbar navbar-default navbar-fixed-bottom visible-xs"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-3 col-sm-3 text-center">
            <!-- 行内跳转方式(同样可以传参)： -->
            <div class="bg-secondary" @click="$router.push('/')">
              <div class="">
                <span class="glyphicon glyphicon-home"></span>
              </div>
              <div class="navbar-fixed-text-size">
                <small>主页</small>
              </div>
            </div>
          </div>
          <div class="col-xs-3 col-sm-3 text-center">
            <div class="bg-secondary" @click="$router.push('/write4me')">
              <div class="">
                <span class="glyphicon glyphicon-pencil"></span>
              </div>
              <div class="navbar-fixed-text-size">
                <small>投稿</small>
              </div>
            </div>
          </div>
          <div class="col-xs-3 col-sm-3 text-center">
            <!-- @click="$router.push('/leaveMessage')" -->
            <div class="bg-secondary" @click="$router.push('/leaveMessage')">
              <div class="">
                <span class="glyphicon glyphicon-comment"></span>
              </div>
              <div class="navbar-fixed-text-size">
                <small>留言</small>
              </div>
            </div>
          </div>
          <div class="col-xs-3 col-sm-3 text-center">
            <div class="bg-secondary" @click="backToTopBtn">
              <div class="">
                <span class="glyphicon glyphicon-menu-up"></span>
              </div>
              <div class="navbar-fixed-text-size">
                <small>顶部</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="friendlink_container">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="friendlink_title"><label>友情链接:</label></div>
            <div class="friendlink_content" id="friendlink_content">
              <a
                class="friendlink_a"
                ref="friendlinkA"
                data-toggle="tooltip"
                :title="item.linkIntro"
                v-for="(item, index) in friendlyLinkList"
                :key="index"
                :href="item.linkUrl"
                >{{ item.linkName }}</a
              >
              <!-- <a class="friendlink_a" href="https://www.maikete.xyz">麦科特</a> -->
              <!-- <a class="friendlink_a" href="https://www.chitang.club">小池塘</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="custom_footer">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center hidden-xs"
          >
            <div class="row">
              <div
                class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center"
              ></div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center">
                <h6>
                  <router-link to="/chatgpt">ChatGPT智能助手</router-link>
                </h6>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center">
                <h6><router-link to="/write4me">自主投稿</router-link></h6>
              </div>
              <div
                class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center"
              ></div>
            </div>
          </div>
          <div class="col-md-12 col-xs-12 text-center">
            <!-- <h2>GEEKCJJ<span style="color:#FF6347;">'S</span> 梦极客园</h2> -->
            <p>
              由<a
                href="http://www.geekplus.xyz"
                target="_blank"
                style="color: white; text-decoration: underline"
                >极客普拉斯</a
              >提供技术支持
            </p>
            <p>
              © 2019－2023 geekplus.xyz, all rights reserved &nbsp;<a
                href="http://beian.miit.gov.cn"
                target="_blank"
                >苏ICP备19023267号</a
              >
            </p>
            <p>
              <a href="http://beian.miit.gov.cn" target="_blank"
                >苏ICP备19023267号-4 &amp;
              </a><span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import store from "@/store/index";
import BackToTop from "@/components/BackToTop";
// import WaveItem from "@/components/effect/Wave";
// import GpPlayer from '@/components/music/GpPlayer.vue'
import maiLogo from "@/assets/icon/mai.png";
import {
  displayFriendlyLink,
  getGpWebTitleInfo,
  listSubParentCategory,
} from "@/api/geekplus/geekplus";
import AppMain from "./components/AppMain";
export default {
  name: "Layout",
  components: {
    BackToTop,
    AppMain,
    // GpPlayer,
    //WaveItem,
  },
  data() {
    return {
      theme1: "light",
      visible: false,
      contentScrollTop: 0,
      windowWidth: 0,
      windowHeight: 0,
      isBackTop: false, //显示返回顶部按钮
      menuList: [], //导航栏菜单
      friendlyLinkList: [],
      dynamicsMenuRouter: [],
      levelList: [], //面包屑菜单
      transName: "plusBack", //变化动画名称前缀
      myBackToTopStyle: {
        //自定义响应式plushome.css,不用这个
        // 'right': '100px',
        // 'bottom': '150px',
        // 'width': '40px',
        // 'height': '40px',
        // 'border-radius': '20px',
        // 'line-height': '40px',
        // 'background': '#fff'
      },
      GCLogo: require("@/assets/logo.png"),
      MKLogo: maiLogo,
      topNavBarFixed: "navbar navbar-default navbar-static-top",
      //navBarStyle: "",//导航栏固定顶部，导致内容被遮挡的问题，设置margin或padding
      keywords: "", //搜索关键词
      subParentCategoryList: [],
      webHeaderFooterInfo: {},
      // 音频配置
      songInfo: {
        title: "我爱祖国.map3", //歌曲名称
        artist: "123", //演唱者
        lrc: "", //LRC 歌词或者歌词文件的 URL
        pic: "", //封面图片 URL
        src: "https://music.163.com/song/media/outer/url?id=1466598056.mp3", //音频文件的 URL
      },
    };
  },
  computed: {
    keyPath() {
      return this.$route.path;
    },
  },
  created() {
    //this.getGeekplusCategory();//直接获取后台菜单
    this.getRouterMneuList();//获取后台菜单动态添加后的路由信息
    this.getBreadcrumb();
    this.displayWebFriendlyLink();
    this.getWebTitleNameFooterInfo();
    var wwidth = window.fullWidth || document.documentElement.clientWidth;
    //console.log(wwidth);
    this.windowWidth = wwidth;
    if (this.windowWidth <= 767) {
      this.topNavBarFixed =
        "navbar navbar-default navbar-static-top navbar-fixed-top animate__animated animate__slideInDown";
      window.document.body.style.paddingTop = "70px";
      window.document.body.style.paddingBottom="65px"
    }
  },
  mounted() {
    // document.onkeydown = function (e){
    //     if (e.defaultPrevented) {
    //       return;
    //     }
    //     const body = document.getElementsByTagName('body')[0];
    //     var theEvent = window.event || e;
    //     var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    //       // match(xxxx应填写文件在浏览器中的地址，不需要包括https、http或者www)，这里是为了防止其他页面触发
    //     if (code === 13 && e.target === body) {
    //           console.log("按下了回车键");
    //           this.searchResult(); //需要调用的方法
    //     }
    // };
    // document.addEventListener("keydown", (e) => {
    //   let key = window.event.keyCode;
    //   if (key == 13 && !this.keywords!='') {
    //     // 13是enter键的键盘码 如果等于13 就调用click的登录方法
    //     this.searchResult();
    //   }
    // });
    window.onscroll = () => {
      return (() => {
        var st =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        // 页面滚动距顶部距离
        var scroll = st - this.contentScrollTop;
        this.contentScrollTop = st;
        //console.log("实时页面滚动高度："+st);this.contentScrollTop < 200 && 
        if (this.contentScrollTop < 200 && this.windowWidth > 767) {
          this.topNavBarFixed =
            "navbar navbar-default navbar-static-top animate__animated animate__fadeInUp";
          window.document.body.style.paddingTop = "0";
          window.document.body.style.paddingBottom="0";
        }else if(this.contentScrollTop >= 200 && this.windowWidth > 767){
          window.document.body.style.paddingTop = "0";
          window.document.body.style.paddingBottom="0";
          if (scroll < 0) {
          this.topNavBarFixed =
            "navbar navbar-default navbar-static-top animate__animated animate__zoomOutUp";
            //that.navBarStyle = "margin-top:75px;";
            window.document.body.style.paddingTop = "0";
            //console.log("up");
            //添加你想要的事件
          } else {
            this.topNavBarFixed =
              "navbar navbar-default navbar-static-top navbar-fixed-top animate__animated animate__slideInDown";
            //that.navBarStyle = "margin-top:75px;";
            window.document.body.style.paddingTop = "70px";
            //添加你想要的事件
            //console.log("down");
          }
        }else if(this.contentScrollTop < 200 && this.windowWidth <= 767){
          this.topNavBarFixed =
            "navbar navbar-default navbar-static-top navbar-fixed-top animate__animated animate__fadeInUp";
          window.document.body.style.paddingTop = "70px";
          window.document.body.style.paddingBottom="65px";
        }else if(this.contentScrollTop >= 200 && this.windowWidth <= 767){
          window.document.body.style.paddingTop = "70px";
          window.document.body.style.paddingBottom="65px";
          if (scroll < 0) {
          this.topNavBarFixed =
            "navbar navbar-default navbar-static-top animate__animated animate__zoomOutUp";
            //that.navBarStyle = "margin-top:75px;";
            window.document.body.style.paddingTop = "0";
            window.document.body.style.paddingBottom="65px";
            //console.log("up");
            //添加你想要的事件
          } else {
            this.topNavBarFixed =
              "navbar navbar-default navbar-static-top navbar-fixed-top animate__animated animate__slideInDown";
            //that.navBarStyle = "margin-top:75px;";
            window.document.body.style.paddingTop = "70px";
            window.document.body.style.paddingBottom="65px";
            //添加你想要的事件
            //console.log("down");
          }
        }
        
        if (this.contentScrollTop > 777) {
          //判断滚动后高度超过750px,就显示
          //backToTop.fadeIn(1100);//淡入
          this.isBackTop = true;
        } else {
          //backToTop.stop().fadeOut(1100); //如果返回或者没有超过,就淡出.必须加上stop()停止之前动画,否则会出现闪动//.fadeOut(1500);
          this.isBackTop = false;
        }
      })();
      //this.$refs.friendlinkA.tooltip();
    };
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        var hheight =
          window.fullHeight || document.documentElement.clientHeight;
        var wwidth = window.fullWidth || document.documentElement.clientWidth;
        this.windowHeight = hheight; // 高
        this.windowWidth = wwidth; // 宽
        // 页面宽度小于750px时，操作
        if (this.windowWidth <= 767) {
          this.topNavBarFixed =
            "navbar navbar-default navbar-static-top navbar-fixed-top animate__animated animate__slideInDown";
          window.document.body.style.paddingTop = "70px";
        } else {
          this.topNavBarFixed =
            "navbar navbar-default navbar-static-top animate__animated animate__slideInDown";
          window.document.body.style.paddingTop = "0";
        }
        //console.log("实时窗口宽度："+this.windowWidth)
      })();
    };
    // var a_idx = 0;
    // document.addEventListener("onreadystatechange",function () {
    //   alert("i你背包")
    //   document.body.addEventListener("onclick", function (e) {
    //     var a = new Array("三民主义", "民族", "民权", "民生");
    //     var ii = document.createElement("span").text(a[a_idx]);
    //     a_idx = (a_idx + 1) % a.length;
    //     var x = e.pageX,
    //       y = e.pageY;
    //     ii.css({
    //       "z-index": 9999999,
    //       top: y - 20,
    //       left: x,
    //       position: "absolute",
    //       "font-weight": "bold",
    //       color: "#ff6651",
    //     });
    //     document.body.innerHTML += ii;
    //     ii.animate(
    //       {
    //         top: y - 180,
    //         opacity: 0,
    //       },
    //       1500,
    //       function () {
    //         ii.remove();
    //       }
    //     );
    //   });
    // });
  },
  watch: {
    contentScrollTop(val) {
      let that = this;
      //console.log("实时屏幕滚动高度：", val, that.contentScrollTop);
      //chatHeight=that.windowHeight
      //var backToTop = document.getElementById("backToTop");
    },
    windowHeight(val) {
      let that = this;
      //console.log("实时屏幕高度：", val, that.windowHeight);
      //chatHeight=that.windowHeight
    },
    windowWidth(val) {
      let that = this;
      //console.log("实时屏幕宽度：", val, that.windowHeight);
    },
    $route: {
      handler: function (val, oldVal) {
        //console.log(val);
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
    getPath() {
      //console.log(this.$route.path);
      return this.$route.path;
    },
    /** 首页显示友情链接 */
    displayWebFriendlyLink() {
      displayFriendlyLink()
        .then((response) => {
          this.friendlyLinkList = response.data;
          //console.log(response)
        })
        .catch((error) => {
          //console.log(error.msg);
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getWebTitleNameFooterInfo() {
      let queryParams = { id: 1 };
      getGpWebTitleInfo(queryParams)
        .then((response) => {
          console.log(response.data.gpWebName);
          this.webHeaderFooterInfo = response.data;
        })
        .catch((error) => {
          //console.log(error);
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    backToTopBtn() {
      //document.documentElement.scrollTop = 0;
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    //动态滚动到顶部
    afterBackToTop(num) {
      //document.documentElement.scrollTop = 0;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = num;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    handleOpen() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    mouseOverIt() {
      this.GCLogo = require("@/assets/logo.png");
    },
    mouseOutIt() {
      this.GCLogo = require("@/assets/logo.png");
    },
    //从Vue路由配置js中拿到路由信息，并做处过滤加入顶部导航菜单，本地无需配置路由，后台管理处配置
    getRouterMneuList() {
      let that = this;
      // let matched = this.$route.matched.filter(
      //   (item) => item.meta && item.meta.title
      // );
      // let tempMenuList = that.$router.options.routes.filter(
      //   (item) => { return item.type == "servermenu"}
      // );
      //console.log(this.$store.getters.addRoutes.slice(0,4));
      that.menuList=this.$store.getters.addRoutes.slice(0,4);
      //that.menuList=getChildrenPath();
      //console.log(that.menuList.length)
      // deep(mmm).forEach((item) => {
      //   console.log(item)
      // });
      //console.log(this.$router.options.routes);
      // for(var i=0;i<menuLList.length;i++){
      //   let item = menuLList[i];
      //   if(item.type=='servermenu'){
      //     console.log(item)
      //   }
      // }
      //matched = this.menuList.concat(matched);
      // this.menuList = matched.filter(
      //   (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      // );
      //console.log(menuLList)
    },
    //获取路径的面包屑，首页/其他页/其他页
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title && item.path !== ""
      );
      //console.log(matched)
      const first = matched[0];
      if (!this.isHome(first)) {
        matched = [{ path: "/", name: "home", meta: { title: "首页" } }].concat(
          matched
        );
      }

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title !== false
      );
      //console.log(matched); //匹配路由地址，用来显示路径面包屑
      //console.log(this.levelList);//匹配路由地址，用来显示路径面包屑
    },
    //判断当前路由是否是首页，返回两者等于的结果true
    isHome(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === "home".toLocaleLowerCase(); //返回true
    },
    //直接获取后台导航的菜单，并加入顶部导航栏
    getGeekplusCategory() {
      //getChildrenPath();
      listSubParentCategory()
        .then((response) => {
          //console.log(response);
          this.menuList = response.data;
        })
        .catch((error) => {
          //console.log(error);
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        })
        .finally(() => {
          //console.log("获取失败");
        });
      
    },
    searchResult() {
      if (this.keywords !== "") {
        //this.$router.push("/search?keayword="+this.keywords);
        this.$router.push({
          path: "/search",
          query: { keyword: this.keywords,},
        });
      }
      this.keywords = "";
    },
    deep(obj) {
      let objName1 = JSON.stringify(obj);
      let objName2 = JSON.parse(objName1);
      return objName2;
    },
  },
};
</script>
  
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}
nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
  