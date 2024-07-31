<template>
  <!-- mkplus HEADER -->
  <header
    :class="'mkplus-header mkplus-header-aligned-left ' + navBarStyle"
    role="banner"
  >
    <div
      class="mkplus-container mkplus-flex mkplus-align-middle mkplus-align-justify"
    >
      <!-- MOBILE MENU TOGGLE -->
      <div class="mkplus-menu-toggler mkplus-mobile-only">
        <label for="mkplus-NAV">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                        <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path>
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                    </svg> -->
          <!-- <font-awesome-icon :icon="['fa', 'bars']" /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1109 1024"
            version="1.1"
          >
            <path
              d="M938.666667 725.333333v85.333334H85.333333v-85.333334h853.333334z m0-256v85.333334H85.333333v-85.333334h853.333334z m0-256v85.333334H85.333333V213.333333h853.333334z"
            ></path>
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                      <path d="M65.012178 128.544655 65.012178 230.875275 959.381795 230.875275 959.381795 128.544655 65.012178 128.544655Z"></path>
                      <path d="M64.729745 563.201126 959.269231 563.201126 959.269231 460.870506 64.729745 460.870506 64.729745 563.201126Z"></path>
                      <path d="M64.729745 895.525953 959.269231 895.525953 959.269231 793.195334 64.729745 793.195334 64.729745 895.525953Z"></path>
                    </svg> -->
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" version="1.1" >
                      <path d="M128 469.333333m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533334l0 4.266666q0 40.533333-40.533333 40.533334l-686.933334 0q-40.533333 0-40.533333-40.533334l0-4.266666q0-40.533333 40.533333-40.533334Z" ></path>
                      <path d="M128 682.666667m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z" ></path>
                      <path d="M128 256m40.533333 0l686.933334 0q40.533333 0 40.533333 40.533333l0 4.266667q0 40.533333-40.533333 40.533333l-686.933334 0q-40.533333 0-40.533333-40.533333l0-4.266667q0-40.533333 40.533333-40.533333Z" ></path>
                    </svg> -->
        </label>
      </div>
      <!-- MOBILE MENU TOGGLE END -->

      <!-- MOBILE/DESKTOP LOGO -->
      <div class="mkplus-logo flex-row-1 hidden-lg hidden-md">
        <h1>
          <router-link to="/" title="极客普拉斯">
            <!-- <img v-lazy="require('@/assets/logo.png')" alt="极客普拉斯" class="mkplus-logo-light"> -->
            <!-- <img v-lazy="require('@/assets/logo.png')" alt="极客普拉斯" class="mkplus-logo-dark"> -->
            <span>极客普拉斯</span>
          </router-link>
          <!-- <span class="mkplus-logo-text">极客普拉斯</span> -->
        </h1>
      </div>
      <!-- MOBILE/DESKTOP LOGO END -->

      <div class="mkplus-flex mkplus-align-middle lg:mkplus-flex-auto">
        <input
          type="checkbox"
          id="mkplus-NAV"
          class="mkplus-menu-monitor mkplus-hidden"
        />
        <label for="mkplus-NAV" class="mkplus-menu-overlay"></label>

        <!-- mkplus MENU -->
        <nav class="mkplus-menu" role="navigation">
          <ul class="mkplus-menu-title">
            <li>
              <!-- MOBILE MENU TOGGLE -->
              <div class="mkplus-menu-toggler">
                <label for="mkplus-NAV">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"
                    ></path>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                  </svg>
                </label>
              </div>
              <!-- MOBILE MENU TOGGLE END -->

              <!-- MOBILE LOGO -->
              <div class="mkplus-logo">
                <h1>
                  <router-link to="/" title="极客普拉斯">
                    <!-- <a href="" title="极客普拉斯"> -->
                    <img
                      v-lazy="require('@/assets/logo.png')"
                      alt="极客普拉斯"
                      class="mkplus-logo-light"
                    />
                    <img
                      v-lazy="require('@/assets/logo.png')"
                      alt="极客普拉斯"
                      class="mkplus-logo-dark"
                    />
                    <span>极客普拉斯</span>
                    <!-- </a> -->
                  </router-link>
                </h1>
              </div>
              <!-- MOBILE LOGO END -->
            </li>
          </ul>
          <ul class="mkplus-menu-body">
            <!-- <li class="mkplus-menu-item mkplus-menu-active">
                            <router-link to="/">
                                <span>测试</span>
                            </router-link>
                        </li> -->
            <li
              :class="
                keyPath == '/'
                  ? 'mkplus-menu-item mkplus-menu-active'
                  : 'mkplus-menu-item '
              "
            >
              <router-link to="/">
                <!-- <i class="fa fa-home"></i> -->
                <span>首页</span>
              </router-link>
            </li>
            <li
              :class="
                keyPath == item.path
                  ? 'mkplus-menu-item mkplus-menu-active'
                  : 'mkplus-menu-item '
              "
              v-for="(item, index) in menuList"
              :key="index"
            >
              <router-link v-if="item.children.length == 0" :to="item.path">
                <!-- <i class="fas fa-shipping-fast"></i> -->
                <span>{{ item.meta.title }}</span>
              </router-link>
              <router-link v-if="item.children.length != 0" to="">
                <span>{{ item.meta.title }}</span>
                <span class="mkplus-menu-arrow"></span>
              </router-link>
              <ul v-if="item.children.length != 0">
                <!-- DROPDOWN MENU -->
                <li
                  :class="
                    keyPath == item.path + '/' + subitem.path
                      ? 'mkplus-menu-item mkplus-menu-active'
                      : 'mkplus-menu-item '
                  "
                  v-for="(subitem, index) in item.children"
                  :key="index"
                >
                  <router-link
                    v-if="subitem.children.length == 0"
                    :to="item.path + '/' + subitem.path"
                  >
                    <!-- <i class="fas fa-fingerprint"></i> -->
                    <span>{{ subitem.meta.title }}</span>
                    <span
                      v-if="subitem.children.length != 0"
                      class="mkplus-menu-arrow"
                    ></span>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- <li class="mkplus-menu-item">
                            <a href="#">
                                <i class="fas fa-shipping-fast"></i>
                                <span>Veritatis Tatum</span>
                                <span class="mkplus-menu-arrow"></span>
                            </a>
                            <ul>DROPDOWN MENU
                                <li class="mkplus-menu-item"><a href="#"><i class="fas fa-fingerprint"></i> <span>Lorem
                                            ipsum</span></a></li>
                                <li class="mkplus-menu-item"><a href="#"><i class="fas fa-basketball-ball"></i>
                                        <span>Nobis perspiciatis</span></a></li>
                                <li class="mkplus-menu-item">
                                    <a href="#"><i class="fas fa-baby-carriage"></i> <span>Fugit totam</span> <span
                                            class="mkplus-menu-arrow"></span></a>
                                </li>
                                <li class="mkplus-menu-item">
                                    <a href="#"><i class="fas fa-calendar-check"></i> <span>Consectetur illum</span>
                                        <span class="mkplus-menu-arrow"></span></a>
                                </li>
                            </ul>
                        </li> -->
            <li
              :class="
                keyPath == '/leaveMessage'
                  ? 'mkplus-menu-item mkplus-menu-active'
                  : 'mkplus-menu-item '
              "
            >
              <router-link to="/leaveMessage">
                <span href="javascript:void(0)">给我留言</span>
              </router-link>
            </li>
            <li
              :class="
                keyPath == '/about'
                  ? 'mkplus-menu-item mkplus-menu-active'
                  : 'mkplus-menu-item '
              "
            >
              <router-link to="/about">
                <span href="javascript:void(0)">关于</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- mkplus MENU END -->
        <div class="mkplus-menu-right-section" @submit.prevent="searchResult()">
          <div class="header-toolbar">
            <button
              class="toolbar-button"
              data-toggle="modal"
              data-target="#myModal"
            >
              <font-awesome-icon :icon="['fas', 'user']" />
            </button>
          </div>
          <div class="header-toolbar">
            <button class="toolbar-button" @click="setUpTheme">
              <font-awesome-icon v-if="lightTheme" :icon="['fas', 'moon']" />
              <font-awesome-icon v-else :icon="['fas', 'sun']" />
            </button>
          </div>
          <!-- mkplus MENU SEARCH -->
          <form class="mkplus-menu-search">
            <input class="mkplus-hidden" id="mkplus-SEARCH" type="checkbox" />
            <label
              class="mkplus-transparent-overlay"
              for="mkplus-SEARCH"
            ></label>
            <label
              class="mkplus-pointer mkplus-flex js-mkplus-menu-search-icon"
              for="mkplus-SEARCH"
            >
              <svg
                class="mkplus-search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewbox="0 0 24 24"
              >
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                ></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </label>
            <div class="mkplus-menu-search-field">
              <div class="mkplus-container">
                <div class="mkplus-menu-search-field-inner">
                  <label class="mkplus-flex mkplus-pointer" for="mkplus-SEARCH">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    class="js-mkplus-menu-search-field"
                    type="search"
                    placeholder="搜索..."
                    v-model="keywords"
                    name="keywords"
                    autocapitalize="off"
                    autocomplete="off"
                    @keyup.enter="searchResult()"
                  />
                </div>
              </div>
            </div>
          </form>
          <!-- mkplus MENU SEARCH END -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navBarStyle: {
      type: String,
    },
    menuList: {
      type: Array,
    }
  },
  data() {
    return {
      keywords: '',
      lightTheme: true
    }
  },
  computed: {
    keyPath() {
      // console.log(this.$route.path);
      return this.$route.path;
    },
  },
  created() {
    let themeMode = this.getLocalStore("theme-mode");//||"light"
    if (themeMode) {
      this.lightTheme = themeMode == 'light';
    } else {
      if (this.isLightDay()) {
        this.lightTheme = true;
      } else {
        this.lightTheme = false;
      }
    }
  },
  mounted() {
    window.KnoxMenu = (function () {
      /*
      * MOBILE MENU TOGGLE
      * */
      var menu_monitor = document.querySelector(".mkplus-menu-monitor");

      if (menu_monitor) {
        menu_monitor.onchange = function (event) {
          if (event.target.checked) {
            //console.log(document.body.c)
            document.body.style.overflowY = "hidden";
            // document.documentElement.classList.add("mkplus-no-scroll");
          } else {
            document.body.style.overflowY = "scroll";
            // document.documentElement.classList.remove("mkplus-no-scroll");
          }
        };
      }

      /*
      * MOBILE SUBMENU TOGGLE
      * */
      Array.prototype.slice.call(document.querySelectorAll(".mkplus-menu-arrow")).forEach(function (item) {
        item.onclick = function (event) {
          event.preventDefault();
          event.stopPropagation();
          var item = event.target.parentNode.parentNode;

          if (item.classList.contains("mkplus-submenu-open")) {
            item.classList.remove("mkplus-submenu-open");
          } else {
            item.classList.add("mkplus-submenu-open");
          }
        };
      });

      /*
      * STICKY HEADER
      * */
      // var window_last_position = -1;
      // var body = document.body;
      // var node_monitor = document.querySelector(".mkplus-header");
      // if (node_monitor) {
      //     var stop = node_monitor.offsetTop + 320;
      //     var scroll = window.requestAnimationFrame ||
      //         window.webkitRequestAnimationFrame ||
      //         window.mozRequestAnimationFrame ||
      //         window.msRequestAnimationFrame ||
      //         window.oRequestAnimationFrame ||
      //         // IE Fallback, you can even fallback to onscroll
      //         function (callback) { window.setTimeout(callback, 1000 / 60) };

      //     function loop() {
      //         // avoid calculations if not needed
      //         if (window_last_position === window.pageYOffset) {
      //             scroll(loop);
      //             return false;
      //         } else {
      //             window_last_position = window.pageYOffset;
      //         }

      //         //... calculations
      //         if (window_last_position > stop) {
      //             // stick the header
      //             if (!body.classList.contains("mkplus-header-not-on-top")) {
      //                 body.classList.add("mkplus-header-not-on-top");
      //             }
      //         } else {
      //             // release the header
      //             if (body.classList.contains("mkplus-header-not-on-top")) {
      //                 body.classList.remove("mkplus-header-not-on-top");
      //             }
      //         }

      //         scroll(loop);
      //     }

      //     // call the loop for the first time
      //     loop();
      // }

      /*
      * SEARCH FIELD FOCUS/ESCAPE
      * */
      var searchIcons = document.querySelectorAll(".js-mkplus-menu-search-icon");
      var searchField = document.querySelector(".js-mkplus-menu-search-field");

      if (searchIcons.length > 0 && searchField) {
        Array.prototype.slice.call(searchIcons).forEach(function (search) {
          search.onclick = function () {
            searchField.focus();
          };
        });

        searchField.onkeydown = function (event) {
          if (event.keyCode === 27) {
            if (event.target.value.length > 0) {
              event.target.value = "";
            } else {
              searchIcons[0].click();
              searchField.blur();
            }
          }
        };
      }
    });
    window.KnoxMenu();
  },
  methods: {
    // changeTheme(color){
    //      // 切换主题方式1：修改全局CSS变量
    //   document.documentElement.style.setProperty("--pl-con-white", color);
    //   document.documentElement.style.setProperty("--pl-con-text", color);
    // },
    setUpTheme() {
      // console.log(this.getLocalStore("theme-mode"));
      if (this.lightTheme==true) {
        this.lightTheme = false;
        document.body.setAttribute("theme-mode", "dark");
        this.setLocalStore("theme-mode","","dark");
        // this.setCookieStorage("theme-mode", "dark", { expires: 17 });

      } else {
        this.lightTheme = true;
        document.body.setAttribute("theme-mode", "light");
        this.setLocalStore("theme-mode","","light");
        // this.setCookieStorage("theme-mode", "light", { expires: 17 });
      }
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
  destroyed() {

  }
};
</script>

<style scoped>
/*body {
  color: var(--color-black, #151918);
  background-color: var(--color-white, #FFFFFF);
  font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.45; 
}*/

element.style {
}
body,
input,
textarea,
button,
select {
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
body {
  color: #151918;
  color: var(--color-black, #151918);
  background-color: #ffffff;
  background-color: var(--color-white, #ffffff);
  font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.45;
}
.navbar-fixed-top {
  background-attachment: fixed;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  top: -1px;
}
/*-------------------------------*/
/*       Hamburger-Cross         */
/*-------------------------------*/
.hamburger {
  background: transparent;
  border: none;
  display: block;
  height: 32px;
  margin-left: 15px;
  position: fixed;
  top: 20px;
  width: 32px;
  z-index: 999;
}

.hamburger:hover {
  outline: none;
}

.hamburger:focus {
  outline: none;
}

.hamburger:active {
  outline: none;
}

.hamburger.is-closed:before {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  color: #ffffff;
  content: "";
  display: block;
  font-size: 14px;
  line-height: 32px;
  opacity: 0;
  text-align: center;
  width: 100px;
}

.hamburger.is-closed:hover before {
  -webkit-transform: translate3d(-100px, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  display: block;
  opacity: 1;
}

.hamburger.is-closed:hover .hamb-top {
  -webkit-transition: all 0.35s ease-in-out;
  top: 0;
}

.hamburger.is-closed:hover .hamb-bottom {
  -webkit-transition: all 0.35s ease-in-out;
  bottom: 0;
}

.hamburger.is-closed .hamb-top {
  -webkit-transition: all 0.35s ease-in-out;
  background-color: rgba(255, 255, 255, 0.7);
  top: 5px;
}

.hamburger.is-closed .hamb-middle {
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-closed .hamb-bottom {
  -webkit-transition: all 0.35s ease-in-out;
  background-color: rgba(255, 255, 255, 0.7);
  bottom: 5px;
}

.hamburger.is-closed .hamb-top,
.hamburger.is-closed .hamb-middle,
.hamburger.is-closed .hamb-bottom,
.hamburger.is-open .hamb-top,
.hamburger.is-open .hamb-middle,
.hamburger.is-open .hamb-bottom {
  height: 4px;
  left: 0;
  position: absolute;
  width: 100%;
}

.hamburger.is-open .hamb-top {
  -webkit-transform: rotate(45deg);
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
  background-color: #ffffff;
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-open .hamb-middle {
  background-color: #ffffff;
  display: none;
}

.hamburger.is-open .hamb-bottom {
  -webkit-transform: rotate(-45deg);
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
  background-color: #ffffff;
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-open:before {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  color: #ffffff;
  content: "";
  display: block;
  font-size: 14px;
  line-height: 32px;
  opacity: 0;
  text-align: center;
  width: 100px;
}

.hamburger.is-open:hover before {
  -webkit-transform: translate3d(-100px, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  display: block;
  opacity: 1;
}

/*-------------------------------*/
/*          Dark Overlay         */
/*-------------------------------*/
.overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
/**html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html,
body {
  overflow-x: hidden;
}**/

.mkplus-shadow-sm {
  -webkit-box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.095) !important;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.095) !important;
}

.mkplus-shadow {
  -webkit-box-shadow: 0 0.42rem 1.22rem rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 0.42rem 1.22rem rgba(0, 0, 0, 0.12) !important;
}

.mkplus-shadow-md {
  -webkit-box-shadow: 0 0.67rem 2.15rem rgba(0, 0, 0, 0.14) !important;
  box-shadow: 0 0.67rem 2.15rem rgba(0, 0, 0, 0.14) !important;
}

.mkplus-shadow-lg {
  -webkit-box-shadow: 0 1rem 3.2rem rgba(0, 0, 0, 0.165) !important;
  box-shadow: 0 1rem 3.2rem rgba(0, 0, 0, 0.165) !important;
}

@media (max-width: 991px) {
  .mkplus-menu-overlay {
    position: fixed;
    top: -100vh;
    bottom: -100vh;
    left: 0;
    right: 0;
    z-index: 1024;
    opacity: 0;
    pointer-events: none;
    will-change: opacity;
    -webkit-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
    cursor: default !important;
  }
  .mkplus-menu-monitor:checked ~ .mkplus-menu-overlay {
    opacity: 1;
    pointer-events: auto;
  }
}

.mkplus-transparent-overlay {
  position: fixed;
  top: -100vh;
  bottom: -100vh;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 1023;
  opacity: 0;
  pointer-events: none;
  will-change: opacity;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  cursor: default;
}

.mkplus-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
@media (max-width: 991px) {
  .mkplus-row {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

.mkplus-col,
.mkplus-column {
  padding: 20px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
@media (max-width: 991px) {
  .mkplus-col,
  .mkplus-column {
    padding: 10px 20px;
  }
}
@media (min-width: 992px) {
  .mkplus-col:first-child,
  .mkplus-column:first-child {
    padding-left: 40px;
  }
  .mkplus-col:last-child,
  .mkplus-column:last-child {
    padding-right: 40px;
  }
}

.mkplus-pointer {
  cursor: pointer;
  margin: 0 auto;
}

@media (max-width: 991px) {
  .mkplus-no-scroll {
    overflow: hidden !important;
  }
}

.mkplus-hidden {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  width: 0;
  height: 0;
}

@media (min-width: 992px) {
  .mkplus-mobile-only {
    display: none !important;
    visibility: hidden !important;
  }
}

@media (max-width: 991px) {
  .mkplus-menu-item .mkplus-menu-active {
    color: #89b4ca;
  }
  .mkplus-desktop-only {
    display: none !important;
    visibility: hidden !important;
  }
}

.mkplus-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -o-flexbox;
  display: -moz-flexbox;
  display: flex;
  padding: 8px 0;
}

.mkplus-align-left {
  -webkit-box-pack: start !important;
  -ms-flex-pack: start !important;
  justify-content: flex-start !important;
}

.mkplus-align-right {
  -webkit-box-pack: end !important;
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}

.mkplus-align-center {
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.mkplus-align-justify {
  -webkit-box-pack: justify !important;
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}

.mkplus-align-spaced {
  -ms-flex-pack: distribute !important;
  justify-content: space-around !important;
}

.mkplus-align-top {
  -webkit-box-align: start !important;
  -ms-flex-align: start !important;
  align-items: flex-start !important;
}

.mkplus-align-middle {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}

.mkplus-align-bottom {
  -webkit-box-align: end !important;
  -ms-flex-align: end !important;
  align-items: flex-end !important;
}

.mkplus-align-stretch {
  -webkit-box-align: stretch !important;
  -ms-flex-align: stretch !important;
  align-items: stretch !important;
}

.mkplus-flex-row {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

.mkplus-flex-row-reverse {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: reverse !important;
  -ms-flex-direction: row-reverse !important;
  flex-direction: row-reverse !important;
}

.mkplus-flex-column {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

.mkplus-flex-column-reverse {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: reverse !important;
  -ms-flex-direction: column-reverse !important;
  flex-direction: column-reverse !important;
}

.mkplus-flex-auto {
  -webkit-box-flex: 1 !important;
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}

@media (min-width: 992px) {
  .lg\:mkplus-align-left {
    -webkit-box-pack: start !important;
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .lg\:mkplus-align-right {
    -webkit-box-pack: end !important;
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .lg\:mkplus-align-center {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .lg\:mkplus-align-justify {
    -webkit-box-pack: justify !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .lg\:mkplus-align-spaced {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .lg\:mkplus-align-top {
    -webkit-box-align: start !important;
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .lg\:mkplus-align-middle {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .lg\:mkplus-align-bottom {
    -webkit-box-align: end !important;
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .lg\:mkplus-align-stretch {
    -webkit-box-align: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .lg\:mkplus-flex-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .lg\:mkplus-flex-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .lg\:mkplus-flex-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .lg\:mkplus-flex-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .lg\:mkplus-flex-auto {
    -webkit-box-flex: 1 !important;
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
}

.mkplus-static {
  position: static;
}

.mkplus-relative {
  position: relative;
}

.mkplus-absolute {
  position: absolute;
}

.mkplus-fixed {
  position: fixed;
}

@media (min-width: 992px) {
  .lg\:mkplus-static {
    position: static;
  }
  .lg\:mkplus-relative {
    position: relative;
  }
  .lg\:mkplus-absolute {
    position: absolute;
  }
  .lg\:mkplus-fixed {
    position: fixed;
  }
}

.mkplus-container {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1280px;
  position: relative;
}
@media (min-width: 640px) {
  .mkplus-container {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .mkplus-container {
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .mkplus-container {
    /**min-width: 992px;**/
    margin: 0 20px;
  }
}
@media (min-width: 1280px) {
  .mkplus-container {
    /**max-width: 1280px;**/
    min-width: 1280;
    margin: 0 50px;
  }
}

.mkplus-header {
  position: relative;
  will-change: top, transform;
  z-index: 1024;
  font-size: 14px;
  font-family: Arial, sans-serif;
  line-height: 1.45;
}
.mkplus-header:before {
  content: "";
  top: 0;
  bottom: 0;
  right: 0;
}

.mkplus-header:before,
.mkplus-header-shadow {
  position: absolute;
  left: 0;
  z-index: -1;
}

.mkplus-header-shadow {
  top: 100%;
  width: 100%;
  height: 30px;
  overflow: hidden;
}
.mkplus-header-shadow:after {
  display: block;
  position: relative;
  content: "";
  width: 100%;
  height: 60px;
  top: -60px;
  border-radius: 50%;
}

.mkplus-header {
  -webkit-box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.095);
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.095);
}
@media (min-width: 992px) {
  .mkplus-header .mkplus-menu-item > ul {
    -webkit-box-shadow: 0 0.13rem 0.5rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.13rem 0.5rem rgba(0, 0, 0, 0.15);
  }
}

.mkplus-header.mkplus-shadow-medium {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.mkplus-header.mkplus-shadow-medium .mkplus-header-shadow:after {
  -webkit-box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
}
@media (min-width: 992px) {
  .mkplus-header.mkplus-shadow-medium .mkplus-menu-item > ul {
    -webkit-box-shadow: 0 0.45rem 1.22rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.45rem 1.22rem rgba(0, 0, 0, 0.15);
  }
}

.mkplus-header.mkplus-shadow-large {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.mkplus-header.mkplus-shadow-large .mkplus-header-shadow:after {
  -webkit-box-shadow: 0 10px 30px -1px rgba(0, 0, 0, 0.12);
  box-shadow: 0 10px 30px -1px rgba(0, 0, 0, 0.12);
}
@media (min-width: 992px) {
  .mkplus-header.mkplus-shadow-large .mkplus-menu-item > ul {
    -webkit-box-shadow: 0 0.67rem 2.15rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.67rem 2.15rem rgba(0, 0, 0, 0.15);
  }
}

.mkplus-header-not-on-top .mkplus-header {
  height: 70px;
  position: fixed;
  top: -70px;
  left: 0;
  width: 100%;
  -webkit-transform: translateY(70px);
  transform: translateY(70px);
  -webkit-transition: -webkit-transform 0.25s ease;
  transition: -webkit-transform 0.25s ease;
  transition: transform 0.25s ease;
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
}

.mkplus-header-not-on-top .mkplus-header-spacer {
  padding-top: 85px;
}

.mkplus-header-not-on-top .mkplus-logo {
  height: 70px;
}
.mkplus-logo img.mkplus-logo-light {
  width: 40px;
  height: 40px;
}
.mkplus-logo img.mkplus-logo-dark {
  width: 40px;
  height: 40px;
}
.mkplus-header-not-on-top .mkplus-logo.mkplus-logo-top {
  display: none;
}

.mkplus-header-not-on-top .mkplus-menu-search-field-inner {
  height: 70px;
}

@media (max-width: 991px) {
  .mkplus-header-not-on-top .mkplus-menu-title {
    height: 70px;
    min-height: 70px;
  }
}

@media (min-width: 992px) {
  .mkplus-header-not-on-top .mkplus-menu-item {
    height: 70px;
  }
  .mkplus-header-not-on-top .mkplus-header-center-3 ~ .mkplus-header-spacer {
    padding-top: 170px;
  }
}

.mkplus-header.mkplus-header-overlay-light-bg,
.mkplus-header.mkplus-header-overlay-dark-bg,
.mkplus-header.mkplus-header-transparent-light,
.mkplus-header.mkplus-header-transparent-dark {
  position: absolute;
  left: 0;
  right: 0;
}
.mkplus-header.mkplus-header-overlay-light-bg + .mkplus-header-spacer,
.mkplus-header.mkplus-header-overlay-dark-bg + .mkplus-header-spacer,
.mkplus-header.mkplus-header-transparent-light + .mkplus-header-spacer,
.mkplus-header.mkplus-header-transparent-dark + .mkplus-header-spacer {
  padding: 0;
}
.mkplus-header-not-on-top .mkplus-header.mkplus-header-overlay-light-bg,
.mkplus-header-not-on-top .mkplus-header.mkplus-header-overlay-dark-bg,
.mkplus-header-not-on-top .mkplus-header.mkplus-header-transparent-light,
.mkplus-header-not-on-top .mkplus-header.mkplus-header-transparent-dark {
  position: fixed;
}

.mkplus-header.mkplus-header-aligned-left .mkplus-menu-search {
  margin-left: auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /*color: val(--color-header-text,#404342);
  background-color: val(--color-header);*/
}

@media (min-width: 992px) {
  .mkplus-header.mkplus-header-aligned-left .mkplus-logo {
    margin-right: 0;
  }
  /*.mkplus-header.mkplus-header-aligned-left .mkplus-menu {
    margin: 0 auto;
  }*/
  .mkplus-header.mkplus-header-aligned-left .mkplus-menu-right-section {
    margin-left: auto;
  }
}

@media (max-width: 991px) {
  .mkplus-header.mkplus-header-aligned-center .mkplus-logo {
    margin: 0 auto;
  }
}

@media (max-width: 991px) {
  .mkplus-header.mkplus-header-center-1 .mkplus-logo {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 992px) {
  .mkplus-header.mkplus-header-center-1 .mkplus-menu-search {
    position: absolute;
    right: 20px;
  }
  .mkplus-header.mkplus-header-center-1 .mkplus-menu-body-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .mkplus-header.mkplus-header-center-1 .mkplus-menu-body-center,
  .mkplus-header.mkplus-header-center-1 .mkplus-menu-body-center > li > ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .mkplus-header.mkplus-header-center-1
    .mkplus-menu-body-center
    > li:nth-child(1) {
    margin-left: auto;
  }
  .mkplus-header.mkplus-header-center-1
    .mkplus-menu-body-center
    > li:nth-child(1)
    > ul {
    width: 412px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .mkplus-header.mkplus-header-center-1
    .mkplus-menu-body-center
    > li:nth-child(3) {
    margin-right: auto;
  }
  .mkplus-header.mkplus-header-center-1
    .mkplus-menu-body-center
    > li:nth-child(3)
    > ul {
    width: 412px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
}

@media (min-width: 992px) {
  .mkplus-header.mkplus-header-center-2 .mkplus-menu {
    width: 100%;
  }
  .mkplus-header.mkplus-header-center-2 .mkplus-menu-body-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .mkplus-header.mkplus-header-center-2 .mkplus-menu-body-center,
  .mkplus-header.mkplus-header-center-2 .mkplus-menu-body-center > li > ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .mkplus-header.mkplus-header-center-2
    .mkplus-menu-body-center
    > li:nth-child(1) {
    margin-right: auto;
  }
  .mkplus-header.mkplus-header-center-2
    .mkplus-menu-body-center
    > li:nth-child(1)
    > ul {
    width: 412px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .mkplus-header.mkplus-header-center-2
    .mkplus-menu-body-center
    > li:nth-child(3) {
    margin-left: auto;
  }
  .mkplus-header.mkplus-header-center-2
    .mkplus-menu-body-center
    > li:nth-child(3)
    > ul {
    width: 412px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}

@media (max-width: 991px) {
  .mkplus-header.mkplus-header-center-3 .mkplus-logo {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 992px) {
  .mkplus-header.mkplus-header-center-3 .mkplus-menu:before {
    content: "";
    height: 1px;
    width: 100%;
    display: block;
    margin-top: -1px;
    background-color: currentColor;
    opacity: 0.1;
  }
  .mkplus-header.mkplus-header-center-3 .mkplus-logo.mkplus-logo-top {
    margin: 0 auto;
  }
  .mkplus-header.mkplus-header-center-3 .mkplus-menu-search {
    position: absolute;
    right: 20px;
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-center-3
    .mkplus-menu-search-field-inner {
    height: 170px;
  }
}

.mkplus-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 991px) {
  .mkplus-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    z-index: 1024;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    pointer-events: none;
    -webkit-transform: translateX(-103%);
    transform: translateX(-103%);
    will-change: transform;
    -webkit-transition: -webkit-transform 0.25s ease;
    transition: -webkit-transform 0.25s ease;
    transition: transform 0.25s ease;
    transition: transform 0.25s ease, -webkit-transform 0.25s ease;
  }
  .mkplus-menu-monitor:checked ~ .mkplus-menu {
    pointer-events: auto;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .mkplus-menu ul {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
}

@media (min-width: 992px) {
  .mkplus-menu > ul:not(.mkplus-menu-title) {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

@media (max-width: 991px) {
  .mkplus-menu-title {
    -webkit-box-flex: 0 !important;
    -ms-flex: 0 !important;
    flex: 0 !important;
    padding: 0 20px !important;
    height: 85px;
    min-height: 85px;
  }
  .mkplus-menu-title,
  .mkplus-menu-title > li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .mkplus-menu-title > li {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .mkplus-menu-title a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
  }
  .mkplus-menu-title .mkplus-logo {
    margin-left: auto;
    margin-right: auto;
  }
  .mkplus-menu-title .mkplus-menu-toggler {
    position: absolute;
    width: 40px;
    height: 56px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media (min-width: 992px) {
  .mkplus-menu-title {
    display: none;
  }
}

@media (max-width: 991px) {
  .mkplus-menu-body {
    padding: 12px 0 !important;
    overflow: hidden;
  }
  .mkplus-menu-body::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }
  .mkplus-menu-body::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: #c9c9c9;
  }
  .mkplus-header-dark .mkplus-menu-body::-webkit-scrollbar-thumb {
    background-color: #494949;
  }
  .mkplus-menu-body:hover {
    overflow-y: auto;
    overflow-y: overlay;
  }
  .mkplus-menu-body a {
    padding: 8.5px 40px 8.5px 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
  }
  .mkplus-menu-body a > i {
    -ms-flex-item-align: start;
    align-self: flex-start;
    margin-top: 3px;
  }
  .mkplus-menu-body input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .mkplus-menu-body input[type="checkbox"] ~ ul {
    display: none;
  }
  .mkplus-menu-body input[type="checkbox"]:checked ~ ul {
    display: block;
  }
  .mkplus-menu-body input[type="checkbox"]:checked ~ a label {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .mkplus-menu-body .mkplus-row {
    display: block;
  }
  .mkplus-menu-body .mkplus-menu-arrow {
    overflow: hidden;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: auto;
    position: absolute;
    right: 8px;
    top: 0;
  }
  .mkplus-menu-body .mkplus-menu-arrow:before {
    content: "";
    height: 8px;
    width: 8px;
    display: block;
    border: 1px solid currentColor;
    border-right-width: 0;
    border-top-width: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    bottom: 18px;
    left: 16px;
    -webkit-transition: -webkit-transform 0.25s ease;
    transition: -webkit-transform 0.25s ease;
    transition: transform 0.25s ease;
    transition: transform 0.25s ease, -webkit-transform 0.25s ease;
  }
  .mkplus-menu-body .mkplus-menu-item {
    position: relative;
    /* width: 300px; */
    width: inherit;
  }
  .mkplus-menu-body .mkplus-menu-item > a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mkplus-menu-body .mkplus-menu-item .mkplus-menu-item {
    width: 100%;
  }
  .mkplus-menu-body .mkplus-menu-item .mkplus-menu-item a {
    padding-left: 40px;
  }
  .mkplus-menu-body .mkplus-menu-item .mkplus-menu-item .mkplus-menu-item a {
    padding-left: 60px;
  }
  .mkplus-menu-body
    .mkplus-menu-item
    .mkplus-menu-item
    .mkplus-menu-item
    .mkplus-menu-item
    a {
    padding-left: 80px;
  }
  .mkplus-menu-body
    .mkplus-menu-item
    .mkplus-menu-item
    .mkplus-menu-item
    .mkplus-menu-item
    .mkplus-menu-item
    a {
    padding-left: 100px;
  }
}

.mkplus-menu-item a {
  outline: 0;
  color: currentColor;
  text-decoration: none;
}

.mkplus-menu-item > a,
.mkplus-menu-item > a:before {
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

@media (max-width: 991px) {
  .mkplus-menu-item > a {
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
    font-family: "Roboto", Arial, sans-serif;
  }
  .mkplus-menu-item > a > i {
    opacity: 0.75;
    margin-right: 10px;
  }
  .mkplus-menu-item > ul {
    display: none;
  }
  .mkplus-menu-item .mkplus-menu-item > a {
    font-size: 14px;
    font-weight: normal;
    text-transform: none;
  }
  .mkplus-menu-item.mkplus-submenu-open > ul {
    display: block;
  }
  .mkplus-menu-item.mkplus-submenu-open > a .mkplus-menu-arrow:before {
    bottom: 15px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
}

@media (min-width: 992px) {
  .mkplus-menu-item {
    list-style: none;
    height: 50px;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
  .mkplus-menu-item,
  .mkplus-menu-item a {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .mkplus-menu-item a {
    padding: 0 20px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
    color: currentColor;
  }
  .mkplus-menu-item > a {
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
    font-family: "Roboto", Arial, sans-serif;
  }
  .mkplus-menu-item > a > i {
    margin-right: 7px;
  }
  .mkplus-menu-item .mkplus-menu-item > a,
  .mkplus-menu-item .mkplus-menu-item > a:before,
  .mkplus-menu-item .mkplus-menu-item > a:after,
  .mkplus-menu-item .mkplus-menu-item > a > i {
    -webkit-transition: none;
    transition: none;
  }
  .mkplus-menu-item:hover {
    /* include &:focus-within if needed */
  }
  .mkplus-menu-item:hover > ul {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
  .mkplus-menu-item .mkplus-menu-item {
    color: currentColor;
    height: auto;
  }
  .mkplus-menu-item .mkplus-menu-item a {
    padding: 10px 40px 10px 20px;
  }
  .mkplus-menu-item .mkplus-menu-item > a {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    font-weight: normal;
    text-transform: none;
    font-family: Arial, sans-serif;
  }
  .mkplus-menu-item .mkplus-menu-item > a > span:not(.mkplus-menu-arrow) {
    opacity: 0.55;
  }
  .mkplus-menu-item .mkplus-menu-item > a > i {
    -ms-flex-item-align: start;
    align-self: flex-start;
    margin-top: 3px;
    margin-right: 10px;
  }
  .mkplus-menu-item > ul {
    border-top-width: 3px;
    border-top-style: solid;
    width: 230px;
    padding: 15px 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    will-change: opacity, transform;
  }
  .mkplus-menu-item > ul ul {
    left: 100%;
    top: -18px;
  }
}

@media (min-width: 992px) {
  .mkplus-submenu-right.mkplus-menu-item > ul {
    left: auto;
    right: 0;
  }
  .mkplus-submenu-right.mkplus-menu-item > ul ul {
    left: -100%;
  }
}

@media (min-width: 992px) {
  .mkplus-menu-item.mkplus-item-mega-menu {
    position: static;
  }
  .mkplus-menu-item.mkplus-item-mega-menu .mkplus-menu-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .mkplus-menu-item.mkplus-item-mega-menu > ul {
    width: 100%;
  }
}

.mkplus-media {
  margin-bottom: 35px;
}
.mkplus-media a {
  height: auto !important;
  padding: 0 !important;
}
@media (max-width: 991px) {
  .mkplus-media {
    margin: 20px 0;
  }
}
@media (min-width: 992px) {
  .mkplus-media:last-child {
    margin-bottom: 0;
  }
}

.mkplus-media.mkplus-media-small {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.mkplus-media.mkplus-media-small .mkplus-media-thumbnail {
  margin: 0;
}
.mkplus-media.mkplus-media-small .mkplus-media-thumbnail a {
  width: 110px;
}
.mkplus-media.mkplus-media-small .mkplus-media-info {
  padding-left: 20px;
}
@media (max-width: 991px) {
  .mkplus-media.mkplus-media-small .mkplus-media-thumbnail a {
    width: 80px;
  }
}

.mkplus-media.mkplus-media-links ul {
  -webkit-transform: none !important;
  transform: none !important;
}
.mkplus-media.mkplus-media-links ul a {
  line-height: 2.25;
  font-size: 14px;
  font-weight: normal;
  text-transform: none;
  font-family: Arial, sans-serif;
}

.mkplus-media-thumbnail {
  display: block;
  overflow: hidden;
  margin-bottom: 20px;
}
.mkplus-media-thumbnail a:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
.mkplus-media-thumbnail img {
  max-width: 100%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

a.mkplus-media-title {
  display: block;
  font-size: 14px;
  text-transform: uppercase !important;
  margin-bottom: 10px;
}
@media (max-width: 991px) {
  a.mkplus-media-title {
    font-size: 12px;
  }
}
@media (min-width: 992px) {
  a.mkplus-media-title {
    font-weight: bold;
  }
}

.mkplus-media-description {
  margin: 0;
  opacity: 0.55;
  line-height: 1.8;
  font-size: 14px;
  font-weight: normal;
  text-transform: none;
  font-family: Arial, sans-serif;
}
@media (max-width: 991px) {
  .mkplus-media-description {
    font-size: 14px;
  }
}

.mkplus-menu-arrow {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
@media (max-width: 991px) {
  .mkplus-menu-arrow:before {
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
}
@media (min-width: 992px) {
  .mkplus-menu-arrow {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    width: 14px;
    height: 14px;
    margin-left: 5px;
    margin-right: 0;
  }
  .mkplus-menu-arrow:before {
    content: "";
    display: block;
    border: 1px solid currentColor;
    border-right-width: 0;
    border-top-width: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    height: 7px;
    width: 7px;
    bottom: 6px;
    left: 4px;
  }
  .mkplus-menu-item .mkplus-menu-item .mkplus-menu-arrow {
    margin-left: 0;
    margin-right: 0;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    position: absolute;
    right: 20px;
    top: 12px;
  }
}

.mkplus-menu-toggler {
  padding: 8px 0;
  margin-left: -8px;
  margin-right: 8px;
  /*width: 84px;*/
}
.mkplus-menu-toggler > label {
  margin: 0;
  padding: 0;
  outline: none;
  background: none;
  border: none;
  line-height: 0;
  cursor: pointer;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.mkplus-menu-toggler svg {
  fill: currentColor;
}
.mkplus-logo + .mkplus-menu-toggler {
  margin: 0;
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item > a:after {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 0;
    height: 3px;
    -webkit-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item > ul {
    top: calc(100% - 3px);
  }
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item.mkplus-item-mega-menu
    > ul {
    top: 100%;
  }
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item .mkplus-menu-item > ul {
    top: -18px;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-menu-line-separator .mkplus-menu-item > a:before {
    content: "";
    position: absolute;
    left: 0;
    width: 1px;
    top: 0;
    bottom: 0;
    height: 20px;
    margin: auto;
  }
  .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:first-child
    > a:before {
    opacity: 0;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-menu-hover-gray .mkplus-menu-item > a:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
  }
  .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item
    > a:before {
    display: none;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-menu-hover-primary .mkplus-menu-item > a:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
  }
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item
    > a:before {
    display: none;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-submenu-line-separator
    .mkplus-menu-item
    .mkplus-menu-item:after {
    content: "";
    position: absolute;
    left: 20px;
    right: 20px;
    top: 0;
    height: 1px;
    margin: auto;
  }
}

.mkplus-menu-right-section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (min-width: 992px) {
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:before,
  .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
}

.mkplus-logo {
  margin: 0;
  height: 70px;
  overflow: hidden;
}
.mkplus-logo,
.mkplus-logo h1,
.mkplus-logo a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.flex-row-1 {
  flex-direction: row;
  flex: 1;
}
.mkplus-logo-text {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1rem;
}
.mkplus-logo h1 {
  margin: 0;
  font-size: 24px;
}
.mkplus-logo h1 a {
  color: currentColor;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;
  text-align: left;
  font-size: inherit;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0;
}
.mkplus-logo h1 a span {
  font-size: 1.6rem;
}
.mkplus-logo h1 a img + span {
  text-indent: -9999em;
}
.mkplus-menu-item .mkplus-logo {
  margin: 0 40px;
}

.mkplus-logo-light {
  display: none;
  width: 50px;
  height: 50px;
}

.mkplus-menu-search input[type="checkbox"]:checked ~ .mkplus-menu-search-field {
  opacity: 1;
  pointer-events: auto;
  z-index: 1024;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.mkplus-menu-search
  input[type="checkbox"]:checked
  ~ .mkplus-transparent-overlay {
  pointer-events: auto;
}

.mkplus-menu-search svg,
.mkplus-search-icon {
  fill: currentColor;
}

.mkplus-search-icon {
  margin-left: 16px;
}
@media (min-width: 992px) {
  .mkplus-menu-item > label > .mkplus-search-icon {
    margin-left: 20px;
    margin-right: 20px;
  }
}

.mkplus-menu-search-field {
  opacity: 0;
  pointer-events: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-transform: translateY(-75px);
  transform: translateY(-75px);
  will-change: transform, opacity;
}
.mkplus-menu-search-field input {
  font-size: inherit;
  outline: none;
  margin-left: 20px;
  border: none;
  border-radius: 3px;
  height: 38px;
  width: 100%;
  padding: 0;
}

.mkplus-menu-search-field-inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 70px;
  margin: 0 auto;
  padding: 0;
  max-width: 1280px;
}

.mkplus-header {
  /* color: #151918; */
  color: var(--color-header-text, #151918);
}
.mkplus-header:before {
  /* background-color: #ffffff; */
  background-color: var(--color-header, #ffffff);
}
@media (max-width: 991px) {
  .mkplus-header .mkplus-menu,
  .mkplus-header .mkplus-menu-arrow {
    color: #151918 !important;
    color: var(--color-header-text, #151918) !important;
  }
  .mkplus-header .mkplus-menu-title .mkplus-logo-light {
    display: none !important;
  }
  .mkplus-header .mkplus-menu-title .mkplus-logo-dark {
    display: block !important;
  }
  .mkplus-header
    .mkplus-menu-item
    .mkplus-menu-item
    a
    > span:not(.mkplus-menu-arrow),
  .mkplus-header .mkplus-menu-item .mkplus-menu-item a > i {
    opacity: 0.8;
  }
}

.mkplus-header.mkplus-header-dark {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
}
.mkplus-header.mkplus-header-dark:before,
.mkplus-header.mkplus-header-dark .mkplus-menu-search-field {
  background-color: #151918;
  background-color: var(--color-header, #151918);
}
.mkplus-header.mkplus-header-dark .mkplus-menu-search-field input {
  color: currentColor;
}
.mkplus-header.mkplus-header-dark
  .mkplus-menu-search-field
  input::-webkit-input-placeholder {
  color: #818181;
}
.mkplus-header.mkplus-header-dark
  .mkplus-menu-search-field
  input::-moz-placeholder {
  color: #818181;
}
.mkplus-header.mkplus-header-dark
  .mkplus-menu-search-field
  input:-ms-input-placeholder {
  color: #818181;
}
.mkplus-header.mkplus-header-dark
  .mkplus-menu-search-field
  input:-moz-placeholder {
  color: #818181;
}
.mkplus-header.mkplus-header-dark .mkplus-logo-light {
  display: block;
}
.mkplus-header.mkplus-header-dark .mkplus-logo-dark {
  display: none;
}
@media (max-width: 991px) {
  .mkplus-header.mkplus-header-dark .mkplus-menu {
    background-color: #151918;
    background-color: var(--color-header, #151918);
  }
  .mkplus-header.mkplus-header-dark .mkplus-menu,
  .mkplus-header.mkplus-header-dark .mkplus-menu-arrow {
    color: #ffffff !important;
    color: var(--color-header-text, #ffffff) !important;
  }
  .mkplus-header.mkplus-header-dark .mkplus-menu-title {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  .mkplus-header.mkplus-header-dark .mkplus-menu-title .mkplus-logo-light {
    display: block !important;
  }
  .mkplus-header.mkplus-header-dark .mkplus-menu-title .mkplus-logo-dark {
    display: none !important;
  }
  .mkplus-header.mkplus-header-dark .mkplus-menu-body .mkplus-menu-item > a,
  .mkplus-header.mkplus-header-dark
    .mkplus-menu-body
    .mkplus-menu-item
    > a:hover {
    color: currentColor;
  }
}
@media (min-width: 992px) {
  .mkplus-header.mkplus-header-dark .mkplus-menu-item > ul {
    background-color: #151918;
    background-color: var(--color-header, #151918);
  }
  .mkplus-header.mkplus-header-dark .mkplus-menu-arrow {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg {
  color: #151918;
  color: var(--color-header-text, #151918);
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg:before {
  opacity: 0.7;
  background-color: #ffffff;
  background-color: var(--color-header, #ffffff);
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg
  .mkplus-menu-search-field,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg
  .mkplus-menu-arrow,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg
  .mkplus-menu-item
  .mkplus-menu-item,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg
  .mkplus-menu-item
  .mkplus-menu-item
  .mkplus-menu-arrow {
  color: #151918;
  color: var(--color-black, #151918);
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg
  .mkplus-logo-light {
  display: none;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg
  .mkplus-logo-dark {
  display: block;
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg.mkplus-header-dark
  .mkplus-menu-search-field,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg.mkplus-header-dark
  .mkplus-menu-item
  .mkplus-menu-item,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-light-bg.mkplus-header-dark
  .mkplus-menu-item
  .mkplus-menu-item
  .mkplus-menu-arrow {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
}

@media (min-width: 992px) {
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-active
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:hover
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:focus
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item.mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:focus
    > a {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:focus
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active:hover
    > a
    > .mkplus-menu-arrow {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active
    > a
    > .mkplus-menu-arrow {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-light-bg
    .mkplus-menu:hover
    .mkplus-menu-active
    > a {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg:before {
  opacity: 0.7;
  background-color: #151918;
  background-color: var(--color-header, #151918);
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg
  .mkplus-menu-arrow {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg
  .mkplus-menu-search-field,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg
  .mkplus-menu-item
  .mkplus-menu-item,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg
  .mkplus-menu-item
  .mkplus-menu-item
  .mkplus-menu-arrow {
  color: #151918;
  color: var(--color-header-text, #151918);
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg
  .mkplus-logo-light {
  display: block;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg
  .mkplus-logo-dark {
  display: none;
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg.mkplus-header-dark
  .mkplus-menu-search-field,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg.mkplus-header-dark
  .mkplus-menu-item
  .mkplus-menu-item,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-overlay-dark-bg.mkplus-header-dark
  .mkplus-menu-item
  .mkplus-menu-item
  .mkplus-menu-arrow {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
}

@media (min-width: 992px) {
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-active
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:hover
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:focus
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:focus
    > a {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:focus
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active
    > a
    > .mkplus-menu-arrow {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-overlay-dark-bg
    .mkplus-menu:hover
    .mkplus-menu-active
    > a {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light:before {
  background-color: transparent;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light
  .mkplus-menu-arrow {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light
  .mkplus-menu-search-field,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light
  .mkplus-menu-item
  .mkplus-menu-item,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light
  .mkplus-menu-item
  .mkplus-menu-item
  .mkplus-menu-arrow {
  color: #151918;
  color: var(--color-header-text, #151918);
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light
  .mkplus-header-shadow {
  opacity: 0;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light
  .mkplus-logo-light {
  display: block;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light
  .mkplus-logo-dark {
  display: none;
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light.mkplus-header-dark
  .mkplus-menu-search-field,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light.mkplus-header-dark
  .mkplus-menu-item
  .mkplus-menu-item,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-light.mkplus-header-dark
  .mkplus-menu-item
  .mkplus-menu-item
  .mkplus-menu-arrow {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
}

@media (min-width: 992px) {
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-active
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:hover
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:focus
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:focus
    > a {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:focus
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active
    > a
    > .mkplus-menu-arrow {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-light
    .mkplus-menu:hover
    .mkplus-menu-active
    > a {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark {
  color: #151918;
  color: var(--color-header-text, #151918);
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark:before {
  background-color: transparent;
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark
  .mkplus-menu-search-field,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark
  .mkplus-menu-arrow,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark
  .mkplus-menu-item
  .mkplus-menu-item,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark
  .mkplus-menu-item
  .mkplus-menu-item
  .mkplus-menu-arrow {
  color: #151918;
  color: var(--color-header-text, #151918);
}
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark
  .mkplus-header-shadow {
  opacity: 0;
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark.mkplus-header-dark
  .mkplus-menu-search-field,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark.mkplus-header-dark
  .mkplus-menu-item
  .mkplus-menu-item,
body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark.mkplus-header-dark
  .mkplus-menu-item
  .mkplus-menu-item
  .mkplus-menu-arrow {
  color: #ffffff;
  color: var(--color-header-text, #ffffff);
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark.mkplus-header-dark
  .mkplus-logo-light {
  display: none;
}

body:not(.mkplus-header-not-on-top)
  .mkplus-header.mkplus-header-transparent-dark.mkplus-header-dark
  .mkplus-logo-dark {
  display: block;
}

@media (min-width: 992px) {
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-active
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:hover
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:focus
    > a:before,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:focus
    > a {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:focus
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active:hover
    > a
    > .mkplus-menu-arrow {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active
    > a
    > .mkplus-menu-arrow {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-active
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.mkplus-header-not-on-top)
    .mkplus-header.mkplus-header-transparent-dark
    .mkplus-menu:hover
    .mkplus-menu-active
    > a {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
}

@media (max-width: 991px) {
  .mkplus-menu {
    background-color: #ffffff;
    background-color: var(--color-header, #ffffff);
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item > a:after {
    background-color: #2786de;
    background-color: var(--color-primary, #2786de);
    opacity: 0;
  }
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item.mkplus-item-mega-menu
    > ul {
    border-top-color: transparent;
  }
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item.mkplus-menu-active > a,
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item.mkplus-menu-active:hover
    > a,
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item:hover > a,
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item:focus > a {
    color: currentColor;
  }
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item.mkplus-menu-active
    > a:after,
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item.mkplus-menu-active:hover
    > a:after,
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item:hover > a:after,
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item:focus > a:after {
    opacity: 1;
  }
  .mkplus-menu.mkplus-menu-underline:hover .mkplus-menu-active > a:after {
    opacity: 0;
  }
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item
    .mkplus-menu-item.mkplus-menu-active
    > a,
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item
    .mkplus-menu-item.mkplus-menu-active
    > a:after,
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a:after,
  .mkplus-menu.mkplus-menu-underline
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a:after {
    opacity: 0 !important;
  }
  .mkplus-menu.mkplus-menu-underline .mkplus-menu-item .mkplus-menu-item > ul {
    border-top-color: #2786de;
    border-top-color: var(--color-primary, #2786de);
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-menu-line-separator .mkplus-menu-item > a:before {
    opacity: 0.1;
    background-color: currentColor;
  }
  .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item.mkplus-menu-active
    > a:before,
  .mkplus-menu.mkplus-menu-line-separator .mkplus-menu-item:hover > a:before,
  .mkplus-menu.mkplus-menu-line-separator .mkplus-menu-item:focus > a:before {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item
    .mkplus-menu-item
    > a:before {
    opacity: 0 !important;
  }
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item.mkplus-menu-active
    > a:before,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:hover
    > a:before,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:focus
    > a:before,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item.mkplus-menu-active
    > a:before,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:hover
    > a:before,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-line-separator
    .mkplus-menu-item:focus
    > a:before {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-menu-hover-gray .mkplus-menu-item.mkplus-menu-active > a,
  .mkplus-menu.mkplus-menu-hover-gray .mkplus-menu-item:hover > a,
  .mkplus-menu.mkplus-menu-hover-gray .mkplus-menu-item:focus > a {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item.mkplus-menu-active
    > a,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:hover
    > a,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item:focus
    > a {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item.mkplus-menu-active
    > a,
  .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .mkplus-menu.mkplus-menu-hover-gray
    .mkplus-menu-item.mkplus-menu-active
    > a:before,
  .mkplus-menu.mkplus-menu-hover-gray .mkplus-menu-item:hover > a:before,
  .mkplus-menu.mkplus-menu-hover-gray .mkplus-menu-item:focus > a:before {
    opacity: 0.07;
    background-color: currentColor;
  }
  .mkplus-menu.mkplus-menu-hover-gray:hover .mkplus-menu-active > a:before {
    opacity: 0;
  }
  .mkplus-menu.mkplus-menu-hover-gray:hover .mkplus-menu-active:hover > a {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-gray:hover
    .mkplus-menu-active:hover
    > a {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  .mkplus-menu.mkplus-menu-hover-gray:hover
    .mkplus-menu-active:hover
    > a:before {
    opacity: 0.07;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item.mkplus-menu-active
    > a,
  .mkplus-menu.mkplus-menu-hover-primary .mkplus-menu-item:hover > a,
  .mkplus-menu.mkplus-menu-hover-primary .mkplus-menu-item:focus > a,
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item.mkplus-menu-active
    > a
    > .mkplus-menu-arrow,
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:hover
    > a
    > .mkplus-menu-arrow,
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:focus
    > a
    > .mkplus-menu-arrow,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item.mkplus-menu-active
    > a,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:hover
    > a,
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item:focus
    > a {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item
    > a
    > .mkplus-menu-arrow {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item
    > a
    > .mkplus-menu-arrow {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item.mkplus-menu-active
    > a,
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:hover
    > a,
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item
    .mkplus-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .mkplus-menu.mkplus-menu-hover-primary
    .mkplus-menu-item.mkplus-menu-active
    > a:before,
  .mkplus-menu.mkplus-menu-hover-primary .mkplus-menu-item:hover > a:before,
  .mkplus-menu.mkplus-menu-hover-primary .mkplus-menu-item:focus > a:before {
    opacity: 1;
    background-color: #2786de;
    background-color: var(--color-primary, #2786de);
  }
  .mkplus-menu.mkplus-menu-hover-primary:hover .mkplus-menu-active > a,
  .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active
    > a
    > .mkplus-menu-arrow {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  .mkplus-menu.mkplus-menu-hover-primary:hover .mkplus-menu-active > a:before {
    opacity: 0;
  }
  .mkplus-header-dark
    .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active
    > a
    > .mkplus-menu-arrow,
  .mkplus-menu.mkplus-menu-hover-primary:hover .mkplus-menu-active:hover > a,
  .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active:hover
    > a
    > .mkplus-menu-arrow {
    /* color: #ffffff;
    color: var(--color-header-text, #ffffff); */
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .mkplus-menu.mkplus-menu-hover-primary:hover
    .mkplus-menu-active:hover
    > a:before {
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-submenu-line-separator
    .mkplus-menu-item
    .mkplus-menu-item
    > a {
    padding: 12px 20px;
  }
  .mkplus-menu.mkplus-submenu-line-separator
    .mkplus-menu-item
    .mkplus-menu-item:after {
    opacity: 0.07;
    background-color: currentColor;
  }
  .mkplus-menu.mkplus-submenu-line-separator
    .mkplus-menu-item
    .mkplus-menu-item:first-child:after {
    opacity: 0;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:hover
    > a,
  .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:focus
    > a {
    opacity: 0.55;
    color: #151918 !important;
    color: var(--color-header-text, #151918) !important;
  }
  .mkplus-header-dark
    .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:hover
    > a,
  .mkplus-header-dark
    .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:focus
    > a {
    color: #ffffff !important;
    color: var(--color-header-text, #ffffff) !important;
  }
  .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:hover
    > a
    > .mkplus-menu-arrow,
  .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:focus
    > a
    > .mkplus-menu-arrow {
    opacity: 0.7;
  }
  .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:hover:before,
  .mkplus-menu.mkplus-submenu-hover-gray
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:focus:before {
    opacity: 0.06;
    background-color: currentColor;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:hover
    > a,
  .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:focus
    > a {
    opacity: 0.55;
    color: #151918 !important;
    color: var(--color-header-text, #151918) !important;
  }
  .mkplus-header-dark
    .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:hover
    > a,
  .mkplus-header-dark
    .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:focus
    > a {
    color: #ffffff !important;
    color: var(--color-header-text, #ffffff) !important;
  }
  .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:hover
    > a
    > .mkplus-menu-arrow,
  .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:focus
    > a
    > .mkplus-menu-arrow {
    opacity: 0.7;
  }
  .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:hover:before,
  .mkplus-menu.mkplus-submenu-hover-primary
    .mkplus-menu-item:not(.mkplus-item-mega-menu)
    .mkplus-menu-item:focus:before {
    opacity: 0.1;
    background-color: #2786de;
    background-color: var(--color-primary, #2786de);
  }
}

@media (min-width: 992px) {
  .mkplus-menu-item > ul {
    background-color: #ffffff;
    background-color: var(--color-header, #ffffff);
    border-top-color: #2786de;
    border-top-color: var(--color-primary, #2786de);
  }
  .mkplus-menu-item > a > i {
    opacity: 0.5;
  }
  .mkplus-menu-item .mkplus-menu-item > a > .mkplus-menu-arrow {
    opacity: 0.4;
  }
}

.mkplus-media.mkplus-media-links ul a {
  opacity: 0.55;
}
.mkplus-media.mkplus-media-links ul a:hover {
  background-color: transparent !important;
  color: #2786de !important;
  color: var(--color-primary, #2786de) !important;
  opacity: 1;
}

.mkplus-media-thumbnail a:before {
  background-color: black;
  opacity: 0;
}

.mkplus-media-thumbnail a:hover:before {
  opacity: 0.25;
}

a.mkplus-media-title:hover {
  color: #2786de !important;
  color: var(--color-primary, #2786de) !important;
  background-color: transparent !important;
}

.mkplus-menu-active > a > span:not(.mkplus-menu-arrow),
.mkplus-menu-item:hover > a > span:not(.mkplus-menu-arrow),
.mkplus-menu-item:focus > a > span:not(.mkplus-menu-arrow) {
  opacity: 1;
}

@media (min-width: 992px) {
  .mkplus-menu-active > a,
  .mkplus-menu-active > a:visited,
  .mkplus-menu-item:hover > a,
  .mkplus-menu-item:focus > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .mkplus-menu-active > a > i,
  .mkplus-menu-item:hover > a > i,
  .mkplus-menu-item:focus > a > i {
    opacity: 1;
  }
  .mkplus-menu-item .mkplus-menu-active > a,
  .mkplus-menu-item .mkplus-menu-item:hover > a,
  .mkplus-menu-item .mkplus-menu-item:focus > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
}

@media (min-width: 992px) {
  .mkplus-menu:hover .mkplus-menu-active > a {
    /* color: #151918;
    color: var(--color-header-text, #151918); */
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .mkplus-menu:hover .mkplus-menu-active > a > i {
    opacity: 0.5;
  }
  .mkplus-menu:hover .mkplus-menu-active:hover > a > i {
    opacity: 1;
  }
  .mkplus-menu:not(.mkplus-menu-hover-gray):not(.mkplus-menu-hover-primary):not(
      .mkplus-menu-underline
    ):hover
    .mkplus-menu-active:hover
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .mkplus-header-dark .mkplus-menu:hover .mkplus-menu-active > a {
    color: #ffffff;
    color: var(--color-header-text, #ffffff);
  }
}

.mkplus-menu-arrow {
  opacity: 0.4;
  color: #151918;
  color: var(--color-header-text, #151918);
}
@media (max-width: 991px) {
  .mkplus-menu-arrow {
    opacity: 0.5;
    color: #151918;
    color: var(--color-header-text, #151918);
  }
}

@media (max-width: 991px) {
  .mkplus-menu-overlay {
    background: rgba(0, 0, 0, 0.6);
  }
}

.mkplus-menu-title {
  color: #151918;
  color: var(--color-header-text, #151918);
}
@media (max-width: 991px) {
  .mkplus-menu-title {
    position: relative;
  }
  .mkplus-menu-title:before {
    content: "";
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: currentColor;
    opacity: 0.08;
  }
}

@media (max-width: 991px) {
  .mkplus-menu-title a,
  .mkplus-menu-body:hover .mkplus-menu-active:hover > a,
  .mkplus-menu-body:hover .mkplus-menu-item:hover > a,
  .mkplus-menu-body .mkplus-menu-item > a {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  .mkplus-menu-body .mkplus-menu-item > a:before {
    background-color: currentColor;
    opacity: 0;
  }
  .mkplus-menu-body .mkplus-menu-item > a:hover {
    color: #151918;
    color: var(--color-header-text, #151918);
  }
  .mkplus-menu-body:hover .mkplus-menu-active > a:before {
    opacity: 0.1;
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .mkplus-menu-body .mkplus-menu-item > a:hover:before,
  .mkplus-menu-body .mkplus-menu-active > a:before,
  .mkplus-menu-body:hover .mkplus-menu-active:hover > a:before {
    opacity: 0.09;
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
}

.mkplus-menu-search-field {
  background-color: #ffffff;
  background-color: var(--color-header, #ffffff);
}
.mkplus-menu-search-field input {
  color: #151918;
  color: var(--color-header-text, #151918);
  background-color: transparent;
}
.mkplus-menu-search-field input::-webkit-input-placeholder {
  color: #cbcbcb;
}
.mkplus-menu-search-field input::-moz-placeholder {
  color: #cbcbcb;
}
.mkplus-menu-search-field input:-ms-input-placeholder {
  color: #cbcbcb;
}
.mkplus-menu-search-field input:-moz-placeholder {
  color: #cbcbcb;
}

@media (min-width: 992px) {
  .mkplus-header {
    -webkit-perspective: 5400px;
    perspective: 5400px;
    -webkit-perspective-origin: center;
    perspective-origin: center;
  }
}

@media (min-width: 992px) {
  .mkplus-menu.mkplus-submenu-fade-up .mkplus-menu-item > ul > li {
    opacity: 0;
    -webkit-transform: translateY(18px);
    transform: translateY(18px);
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    will-change: opacity, transform;
  }
  .mkplus-menu.mkplus-submenu-fade-up .mkplus-menu-item:hover > ul > li {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .mkplus-menu.mkplus-submenu-fade-down .mkplus-menu-item > ul > li {
    opacity: 0;
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    will-change: opacity, transform;
  }
  .mkplus-menu.mkplus-submenu-fade-down .mkplus-menu-item:hover > ul > li {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .mkplus-menu.mkplus-submenu-scale .mkplus-menu-item > ul {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: top left;
    transform-origin: top left;
  }
  .mkplus-menu.mkplus-submenu-scale
    .mkplus-menu-item.mkplus-item-mega-menu
    > ul {
    -webkit-transform-origin: top center;
    transform-origin: top center;
  }
  .mkplus-menu.mkplus-submenu-scale .mkplus-menu-item:hover > ul {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .mkplus-menu.mkplus-submenu-scale .mkplus-menu-item.mkplus-submenu-right > ul,
  .mkplus-menu.mkplus-submenu-scale
    .mkplus-menu-item.mkplus-submenu-right
    > ul
    ul {
    -webkit-transform-origin: top right;
    transform-origin: top right;
  }
  .mkplus-menu.mkplus-submenu-swing .mkplus-menu-item > ul {
    -webkit-transform: rotateX(-25deg);
    transform: rotateX(-25deg);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .mkplus-menu.mkplus-submenu-swing .mkplus-menu-item:hover > ul {
    -webkit-transform: rotateX(0deg) rotateY(0deg) !important;
    transform: rotateX(0deg) rotateY(0deg) !important;
  }
  .mkplus-menu.mkplus-submenu-swing .mkplus-menu-item > ul ul {
    left: calc(100% - 1px);
    -webkit-transform: rotateY(25deg);
    transform: rotateY(25deg);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .mkplus-menu.mkplus-submenu-swing
    .mkplus-menu-item.mkplus-submenu-right
    > ul
    ul {
    left: calc(-100% + 1px);
    -webkit-transform: rotateY(-25deg);
    transform: rotateY(-25deg);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
  }
  .mkplus-menu.mkplus-submenu-slide-up .mkplus-menu-item > ul {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  .mkplus-menu.mkplus-submenu-slide-up .mkplus-menu-item:hover > ul {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .mkplus-menu.mkplus-submenu-slide-down .mkplus-menu-item > ul {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  .mkplus-menu.mkplus-submenu-slide-down .mkplus-menu-item:hover > ul {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>