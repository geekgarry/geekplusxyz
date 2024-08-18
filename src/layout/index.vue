<template>
  <div id="app-layout">
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view/> -->
    <header class="header hidden-xs hidden-sm">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="logo">
              <img
                alt="极客普拉斯,梦极客园,geekplus"
                v-lazy="GCLogo"
                class="top_banner_logo"
                @mouseover="mouseOverIt"
                @mouseout="mouseOutIt"
              />
              <span class="logo-text navbar-collapse collapse animated rotateIn"
                >极客普拉斯</span
              >
            </div>
            <!-- <div class="right-block">
              <div class="wow pulse bg-yellow" data-wow-delay="0.1s">人生，</div>
              <div class="wow rollIn bg-red" data-wow-iteration="1" data-wow-duration="0.5s">
                就像一盒巧克力，
              </div>
              <div class="wow bounceInRight bg-blue">你永远不知道下一块会是什么味道！</div>
              <div class="wow bounceInRight bg-blue">---《阿甘正传》</div>
            </div> -->
            <div class="right-block">
              <div class="wow rollIn bg-red" data-wow-iteration="1" data-wow-duration="0.5s">{{ famousWords }}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div :class="topNavBarFixed">
      <nav-bar :navBarStyle="navBarStyle" :menuList="menuList"></nav-bar>
    </div>
    <!-- <div :class="topNavBarFixed">
      <b-t-nav-bar
      :menuList="menuList"
      ></b-t-nav-bar>
    </div> -->
    <!-- <div class="gc-slide">
        <div class="gc_hand_top" id="backToTop">
          <a href="javascript:void(0);" class="gc_hand_top_btn"
            ><i class="gcfont"></i><span>返回顶部</span></a
          >
        </div>
      </div> -->

    <back-to-top
      class="hidden-xs"
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
    <!-- Modal 模态框，弹出层 -->
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div role="document" class="plus-dialog">
        <div style="">
          <span
            class="close"
            style="color: white; opacity: revert-layer;"
            data-dismiss="modal"
            aria-label="Close"
          >
            <!-- <span  aria-hidden="true">&times;</span> -->
            <font-awesome-icon :icon="['fas', 'times']" />
          </span>
        </div>
        <login-page></login-page>
        <!-- <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div> -->
      </div>
    </div>
    <div
      class="modal fade"
      id="firstOpenModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div role="document" class="plus-dialog">
        <div class="alert alert-success" role="alert">
          <span v-if="popUpNotice!=''" v-html="popUpNotice"></span>
          <span v-else>
            <p>欢迎体验AI聊天助手，对话模式，可以帮你解决问题，是你工作中的最佳助手！
              <a href="/chat" rel="noopener noreferrer" target="_blank">点击</a>
              看看吧</p>
          </span>
        </div>
        <div>
          <span
            class="close_dialog"
            data-dismiss="modal"
            aria-label="Close"
          >
            <!-- <span  aria-hidden="true">&times;</span> -->
            <font-awesome-icon :icon="['fas', 'times']" />
          </span>
        </div>
      </div>
    </div>
    <!---网站主页面组件app-main--->
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
                target="_blank"
                >{{ item.linkName }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="custom_footer" :style="{paddingBottom: paddingBottomN+'px'}">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center hidden-xs"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center">
                <h6>
                  <a href="#" target="_blank"
                    >格子壁纸</a
                  >
                </h6>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center">
                <h6>
                  <router-link to="/chat">ChatGPT智能助手</router-link>
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
            <!-- <h2>GeekPlus<span style="color:#FF6347;">'S</span> 梦极客园</h2> -->
            <p>
              由<a
                href="/"
                target="_blank"
                style="color: white; text-decoration: underline"
                >极客普拉斯</a
              >提供技术支持
            </p>
            <p>
              © 2019－2023 geekplus, all rights reserved &nbsp;<a
                href="http://beian.miit.gov.cn"
                target="_blank"
                >苏ICP备0000000号</a
              >
            </p>
            <p>
              <a href="http://beian.miit.gov.cn" target="_blank"
                >苏ICP备0000000号-1 &amp; </a
              ><span id="busuanzi_container_site_pv"
                >本站总访问量<span id="busuanzi_value_site_pv"></span>次</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="draggable-component">
      <gp-player></gp-player>
    </div>
    <nav
      :class="'navbar navbar-default ' + bottomNavBarFixed + ' visible-xs'"
      style="
        background: var(--color-main-container-bg-2, #eff0f0);
        color: var(--color-main-container-text-1, #333535);
        border-radius: 0;
      "
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
  </div>
</template>
  
<script>
import $ from "jquery";
import BackToTop from "@/components/BackToTop";
// import WaveItem from "@/components/effect/Wave";
import GpPlayer from '@/components/music/GpPlayer.vue'
import maiLogo from "@/assets/icon/mai.png";
import {
  getOnlineMusic,
  getOneFamousWords,
  getDailyFamousWords,
  displayFriendlyLink,
  getGpWebTitleInfo,
  listSubParentCategory,
  getWebPopUpNotice
} from "@/api/geekplus/geekplus";
import AppMain from "./components/AppMain";
import NavBar from "./components/NavBar";
// import BTNavBar from "./components/BTNavBar";
import LoginPage from "@/views/login/LoginPage.vue"
import DraggableComponent from "@/utils/DraggableComponent.js"

export default {
  name: "Layout",
  components: {
    BackToTop,
    AppMain,
    NavBar,
    LoginPage,
    // BTNavBar,
    GpPlayer,
    //WaveItem,
  },
  data() {
    return {
      famousWords:"人生，就像一盒巧克力，你永远不知道下一块会是什么味道！---《阿甘正传》",
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
      topNavBarFixed: "",//"navbar navbar-default navbar-static-top",
      bottomNavBarFixed: "navbar-fixed-bottom",
      paddingBottomN: 0,//为了不挡住底部footer网站信息内容区域，在移动端正常显示，需要设置为底部的tab导航的高
      navBarStyle: "",//导航栏固定顶部，导致内容被遮挡的问题，设置margin或padding
      keywords: "", //搜索关键词
      subParentCategoryList: [],
      webHeaderFooterInfo: {},
      // 音频列表
      songInfoList: [],
      popUpNotice: "",
    };
  },
  computed: {
    keyPath() {
      return this.$route.path;
    },
  },
  created() {
    this.getRouterMneuList(); //获取后台菜单动态添加后的路由信息
    this.getBreadcrumb();
    this.displayWebFriendlyLink();
    this.getWebTitleNameFooterInfo();
    var wwidth = window.fullWidth || document.documentElement.clientWidth;
    //console.log(wwidth);
    this.windowWidth = wwidth;
    if (this.windowWidth <= 767) {
      this.topNavBarFixed =
        "navbar-fixed-top animate__animated animate__slideInDown";//mkplus-header-not-on-top
      this.bottomNavBarFixed = "navbar-fixed-bottom animate__animated animate__slideInUp";
      window.document.body.style.paddingTop = "70px";
      // window.document.body.style.paddingBottom = "50px";
      this.paddingBottomN = 50;
    }else{
      this.getOneRandomFamousWords();
    }
  },
  mounted() {
    // 创建一个新的可拖动组件
    const myComponent = new DraggableComponent({
      initialPosition: "right", // 初始位置为右边
      buoyContent: '<svg t="1722832996386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12854" width="25" height="25"><path d="M682.666667 384 682.666667 298.666667 512 298.666667 512 533.333333C494.08 520.106667 472.32 512 448 512 389.12 512 341.333333 559.786667 341.333333 618.666667 341.333333 677.546667 389.12 725.333333 448 725.333333 506.88 725.333333 554.666667 677.546667 554.666667 618.666667L554.666667 384 682.666667 384M512 85.333333C747.52 85.333333 938.666667 276.48 938.666667 512 938.666667 747.52 747.52 938.666667 512 938.666667 276.48 938.666667 85.333333 747.52 85.333333 512 85.333333 276.48 276.48 85.333333 512 85.333333Z" p-id="12855" fill="#fcfcfc"></path></svg>', // 设置箭头内容为 Font Awesome 图标
      content: "<h1>Hello, world!</h1>", // 设置组件内容
    });
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
    //监听华东事件，当入口html和body设置了全局的overflow: scroll或auto，使用window.onscroll=()=>{}/window.addEventListener会失效
    //此时使用document.body.addEventListener("scroll", () =>{});可以,
    window.onscroll = () => {
      return (() => {
        var st =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        // 页面滚动距顶部距离
        var scroll = st - this.contentScrollTop;
        //获取文档实际高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        //获取视口实际高度
        var bodyClientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        this.contentScrollTop = st;
        //console.log("实时页面滚动高度："+st);this.contentScrollTop < 200 &&
        if (this.contentScrollTop < 200 && this.windowWidth > 767) {
          this.topNavBarFixed =
            "navbar-static-top";
          window.document.body.style.paddingTop = "0";
          // window.document.body.style.paddingBottom = "0";
        } else if (this.contentScrollTop >= 200 && this.windowWidth > 767) {
          window.document.body.style.paddingTop = "0";
          if (scroll > 0) {
            this.topNavBarFixed =
              "navbar-static-top animate__animated animate__slideInUp";
            //that.navBarStyle = "margin-top:75px;";
            window.document.body.style.paddingTop = "0";
            //console.log("up");
            //添加你想要的事件
          } else {
            this.topNavBarFixed =
              "navbar-fixed-top animate__animated animate__slideInDown";
            //that.navBarStyle = "margin-top:75px;";
            window.document.body.style.paddingTop = "70px";
            //添加你想要的事件
            //console.log("down");
          }
        } else if (this.contentScrollTop < 200 && this.windowWidth <= 767) {
          this.topNavBarFixed =
            "navbar-fixed-top";
          window.document.body.style.paddingTop = "70px";
          // window.document.body.style.paddingBottom = "50px";
          this.paddingBottomN = 50;
        } else if (this.contentScrollTop >= 200 && this.windowWidth <= 767) {
          this.paddingBottomN = 50;
          if (scroll > 0) {
            window.document.body.style.paddingTop = "0";
            this.topNavBarFixed = "navbar-static-top";
            this.bottomNavBarFixed = "navbar-fixed-bottom animate__animated animate__slideInUp";
            //this.navBarStyle = "mkplus-header-overlay-dark-bg";
            //console.log("up");
            //添加你想要的事件
            if (bodyClientHeight + this.contentScrollTop === scrollHeight) {
              window.document.body.style.paddingTop = "70px";
              this.topNavBarFixed = "navbar-fixed-top animate__animated animate__slideInDown";
              //this.bottomNavBarFixed = "navbar-fixed-bottom animate__animated animate__slideInUp";
            }
          } else {
            window.document.body.style.paddingTop = "70px";
            this.topNavBarFixed = "navbar-fixed-top animate__animated animate__slideInDown";
            this.bottomNavBarFixed = "navbar-fixed-bottom animate__animated animate__slideInUp";
            // this.navBarStyle = "mkplus-header-overlay-light-bg";
            //添加你想要的事件
            if (bodyClientHeight + this.contentScrollTop === scrollHeight) {
              // this.topNavBarFixed = "navbar-fixed-top animate__animated animate__slideInDown";
              this.bottomNavBarFixed = "navbar-fixed-bottom animate__animated animate__slideInUp";
            }
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
            "navbar-fixed-top animate__animated animate__slideInDown";
          window.document.body.style.paddingTop = "70px";
        } else {
          this.topNavBarFixed =
            "navbar-static-top";
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
    //判断变量是否第一次打开,如果webOpenDialog不存在，就要请求后台通知内容，
    //然后赋值webOpenDialog给cookie，14天后过期删除，再次打开就不会弹出
    let openDialog=this.getCookieStorage("webOpenDialog");
    if(!openDialog){
      //打开后,将变量赋值,后续就不会再次出发,除非刷新
      // window.firstOpenDialogFlag = true;
      getWebPopUpNotice({id: 2}).then(response=>{
        this.popUpNotice=response.data.noticeContent;
      }).catch(error=>{
        this.$toasted.error(error.msg, {
          position: "top-center",
          duration: 3000,
          theme: "bubble",
        });
      })
      $('#firstOpenModal').modal();
      this.setCookieStorage("webOpenDialog","ok",{ expires: 11 });
    }
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
    /** 顶部一句随机名言 */
    getOneRandomFamousWords() {
      // getOneFamousWords().then((response) => {
      //   if(response.data!=""&&response.data!=undefined){
      //     this.famousWords=response.data;
      //   }
      // }).catch((error) => {
      //     //console.log(error.msg);
      //     this.$toasted.error(error.msg, {
      //       position: "top-center",
      //       duration: 3000,
      //       theme: "bubble",
      //     });
      //   });
      getDailyFamousWords().then((response) => {
        if(response.data!=""&&response.data!=undefined){
          this.famousWords=response.data.content+"——"+response.data.name;
        }
      }).catch((error) => {
          //console.log(error.msg);
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
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
    //获取网站基本信息
    getWebTitleNameFooterInfo() {
      let queryParams = { id: 1 };
      getGpWebTitleInfo(queryParams)
        .then((response) => {
          console.log("%c" + response.data.gpWebName, " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
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
      that.menuList = this.$store.getters.addRoutes.slice(0, 4);
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
    // showMobileMenu() {
    //   var mobileMenu = document.getElementById("navbar_mobile_div");//$("#navbar_mobile_div");
    //   if (mobileMenu.hasClass("show-nav")) {
    //     setTimeout(function () {
    //       mobileMenu.addClass("hide-nav").removeClass("show-nav");
    //     }, 100);
    //   } else {
    //     setTimeout(function () {
    //       mobileMenu.addClass("show-nav").removeClass("hide-nav");
    //     }, 100);
    //   }
    // },
    //直接获取后台导航的菜单，并加入顶部导航栏
    getGeekplusCategory() {
      //getChildrenPath();
      listSubParentCategory().then((response) => {
          //console.log(response);
          this.menuList = response.data;
        }).catch((error) => {
          //console.log(error);
        }).finally(() => {
          //console.log("获取失败");
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
    deep(obj) {
      let objName1 = JSON.stringify(obj);
      let objName2 = JSON.parse(objName1);
      return objName2;
    },
  },
};
</script>
  
<style lang="scss">
#app-layout {
  /**font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;**/
  .fade-transform-enter-active,
  .fade-transform-leave-avtive {
    /**transition: opacity 2s;**/
    transition: all 0.6s ease;
  }
  .fade-transform-enter,
  .fade-transform-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
}
/**nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}**/
</style>
  