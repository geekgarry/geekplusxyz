<template>
  <nav class="navbar navbar-default " id="navigator_bar">
    <div class="container">
      <div class="navbar-header">
        <div class="navbar-nav-container">
          <button
            class="navbar-toggle pull-left"
            data-toggle="collapse"
            data-target="#navbar_collapse_div"
          >
            <!-- <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span> -->
            <span class="glyphicon glyphicon-menu-hamburger"></span>
          </button>
          <div class="navbar-nav-brand">
            <div class="navbar-brand-logo">
              <router-link class="visible-xs" to="/">
                <!-- <img v-lazy="GCLogo" class="logo_img" @onmouseover="mouseOverIt"
                      @onmouseout="mouseOutIt" style="width:20px;height:20px;" /> -->
                <span class="navbar-brand-logo-text" ref="brandText"
                  >极客普拉斯</span
                >
              </router-link>
            </div>
          </div>
          <!-- <button
              class="navbar-toggle pull-right"
              @click="$router.push('/chatgpt')"
            >
              <span class="glyphicon glyphicon-road" aria-hidden="true"></span>
            </button> -->
          <button
            class="navbar-toggle pull-right"
            data-toggle="collapse"
            data-target="#collapse_searche_div"
          >
            <span class="glyphicon glyphicon-search"></span>
          </button>
          <!-- <router-link class="navbar-left visible-xs" href="/">
                <img alt="极客普拉斯" id="navbar-brand-img" v-lazy="GCLogo" >极客普拉斯
              </router-link> -->
        </div>
      </div>
      <div
        class="collapse animate__animated animate__fadeInDown"
        id="collapse_searche_div"
      >
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
      <div
        class="navbar-collapse collapse animate__animated animate__fadeInLeftBig"
        id="navbar_collapse_div"
      >
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
                    keyPath == item.path + '/' + subitem.path
                      ? 'menuactive'
                      : ''
                  "
                  v-for="(subitem, index) in item.children"
                  :key="index"
                >
                  <router-link :to="item.path + '/' + subitem.path">
                    <!--:to="'/articleCategory/'+subitem.path"-->
                    <a href="javascript:void(0)">{{
                      /**subitem.categoryName*/ subitem.meta.title
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
            <a href="/chat"
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
</template>

<script>
export default {
  name: "BTNavBar",
  props: {
    topNavBarFixed:{
        type:String,
        default:()=>{
           return "navbar navbar-default navbar-static-top"
        }
    },
    menuList: {
      type: Array,
    },
  },
  data() {
    return {
      keywords: "",
    };
  },
  computed: {
    keyPath() {
      // console.log(this.$route.path);
      return this.$route.path;
    },
  },
  created() {},
  methods: {
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