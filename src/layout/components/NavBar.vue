<template>
    <!-- MONAKA HEADER -->
    <header class="monaka-header monaka-header-aligned-left" role="banner">
        <div class="monaka-container monaka-flex monaka-align-middle monaka-align-justify">

            <!-- MOBILE MENU TOGGLE -->
            <div class="monaka-menu-toggler monaka-mobile-only">
                <label for="MONAKA-NAV">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                        <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path>
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                    </svg>
                </label>
            </div>
            <!-- MOBILE MENU TOGGLE END -->

            <!-- MOBILE/DESKTOP LOGO -->
            <div class="monaka-logo hidden-lg hidden-md">
                <h1>
                    <router-link to="/" title="极客普拉斯">
                        <img v-lazy="require('@/assets/logo.png')" alt="极客普拉斯" class="monaka-logo-light">
                        <img v-lazy="require('@/assets/logo.png')" alt="极客普拉斯" class="monaka-logo-dark">
                        <span>极客普拉斯</span>
                    </router-link>
                </h1>
            </div>
            <!-- MOBILE/DESKTOP LOGO END -->

            <div class="monaka-flex monaka-align-middle lg:monaka-flex-auto">
                <input type="checkbox" id="MONAKA-NAV" class="monaka-menu-monitor monaka-hidden">
                <label for="MONAKA-NAV" class="monaka-menu-overlay"></label>

                <!-- MONAKA MENU -->
                <nav class="monaka-menu" role="navigation">
                    <ul class="monaka-menu-title">
                        <li>

                            <!-- MOBILE MENU TOGGLE -->
                            <div class="monaka-menu-toggler">
                                <label for="MONAKA-NAV">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
                                        <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path>
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    </svg>
                                </label>
                            </div>
                            <!-- MOBILE MENU TOGGLE END -->

                            <!-- MOBILE LOGO -->
                            <div class="monaka-logo">
                            <h1>
                                <a href="" title="极客普拉斯">
                                <img v-lazy="require('@/assets/logo.png')" alt="极客普拉斯" class="monaka-logo-light">
                                <img v-lazy="require('@/assets/logo.png')" alt="极客普拉斯" class="monaka-logo-dark">
                                <span>极客普拉斯</span>
                                </a>
                                
                            </h1>
                            </div>
                            <!-- MOBILE LOGO END -->

                        </li>
                    </ul>
                    <ul class="monaka-menu-body">
                        <!-- <li class="monaka-menu-item monaka-menu-active">
                            <router-link to="/">
                                <span>测试</span>
                            </router-link>
                        </li> -->
                        <li :class="keyPath == '/' ? 'monaka-menu-item monaka-menu-active' : 'monaka-menu-item '">
                            <router-link to="/">
                                <!-- <i class="fa fa-home"></i> -->
                                <span>首页</span>
                            </router-link>
                        </li>
                        <li :class="keyPath == item.path ? 'monaka-menu-item monaka-menu-active' : 'monaka-menu-item '" 
                            v-for="(item, index) in menuList"
                            :key="index">
                            <router-link v-if="item.children.length == 0" :to="item.path">
                                <!-- <i class="fas fa-shipping-fast"></i> -->
                                <span>{{ item.meta.title }}</span>
                            </router-link>
                            <router-link v-if="item.children.length != 0" to="">
                                <span>{{ item.meta.title }}</span>
                                <span class="monaka-menu-arrow"></span>
                            </router-link>
                            <ul v-if="item.children.length != 0"><!-- DROPDOWN MENU -->
                                <li :class="keyPath == item.path + '/' + subitem.path ?
                                    'monaka-menu-item monaka-menu-active' : 'monaka-menu-item '"
                                    v-for="(subitem, index) in item.children"
                                    :key="index">
                                    <router-link v-if="subitem.children.length == 0" :to="item.path + '/' + subitem.path">
                                        <!-- <i class="fas fa-fingerprint"></i> -->
                                        <span>{{ subitem.meta.title }}</span>
                                        <span v-if="subitem.children.length != 0" class="monaka-menu-arrow"></span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- <li class="monaka-menu-item">
                            <a href="#">
                                <i class="fas fa-shipping-fast"></i>
                                <span>Veritatis Tatum</span>
                                <span class="monaka-menu-arrow"></span>
                            </a>
                            <ul>DROPDOWN MENU
                                <li class="monaka-menu-item"><a href="#"><i class="fas fa-fingerprint"></i> <span>Lorem
                                            ipsum</span></a></li>
                                <li class="monaka-menu-item"><a href="#"><i class="fas fa-basketball-ball"></i>
                                        <span>Nobis perspiciatis</span></a></li>
                                <li class="monaka-menu-item">
                                    <a href="#"><i class="fas fa-baby-carriage"></i> <span>Fugit totam</span> <span
                                            class="monaka-menu-arrow"></span></a>
                                </li>
                                <li class="monaka-menu-item">
                                    <a href="#"><i class="fas fa-calendar-check"></i> <span>Consectetur illum</span>
                                        <span class="monaka-menu-arrow"></span></a>
                                </li>
                            </ul>
                        </li> -->
                        <li :class="keyPath == '/leaveMessage' ? 'monaka-menu-item monaka-menu-active' : 'monaka-menu-item '">
                            <router-link to="/leaveMessage">
                              <span href="javascript:void(0)">给我留言</span>
                            </router-link>
                        </li>
                        <li :class="keyPath == '/about' ? 'monaka-menu-item monaka-menu-active' : 'monaka-menu-item '">
                            <router-link to="/about">
                              <span href="javascript:void(0)">关于</span>
                            </router-link>
                        </li>
                    </ul>

                </nav>
                <!-- MONAKA MENU END -->
                <div class="monaka-menu-right-section" @submit.prevent="searchResult()">
                    <!-- MONAKA MENU SEARCH -->
                    <form class="monaka-menu-search" >
                        <input class="monaka-hidden" id="MONAKA-SEARCH" type="checkbox">
                        <label class="monaka-transparent-overlay" for="MONAKA-SEARCH"></label>
                        <label class="monaka-pointer monaka-flex js-monaka-menu-search-icon" for="MONAKA-SEARCH">
                            <svg class="monaka-search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewbox="0 0 24 24">
                                <path
                                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                </path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                        </label>
                        <div class="monaka-menu-search-field">
                            <div class="monaka-container">
                                <div class="monaka-menu-search-field-inner">
                                    <label class="monaka-flex monaka-pointer" for="MONAKA-SEARCH">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewbox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path>
                                        </svg>
                                    </label>
                                    <input class="js-monaka-menu-search-field" type="search" placeholder="搜索..." v-model="keywords"
                                        name="keywords" autocapitalize="off" autocomplete="off" @keyup.enter="searchResult()">
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- MONAKA MENU SEARCH END -->

                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:'NavBar',
    props:{
        
        menuList:{
            type:Array,
        }
    },
    data(){
        return{
            keywords:'',
        }
    },
    computed: {
        keyPath() {
            // console.log(this.$route.path);
            return this.$route.path;
        },
    },
    created(){
        
    },
    mounted(){
        window.KnoxMenu = (function () {
            /*
            * MOBILE MENU TOGGLE
            * */
            var menu_monitor = document.querySelector(".monaka-menu-monitor");

            if (menu_monitor) {
                menu_monitor.onchange = function (event) {
                    if (event.target.checked) {
                        document.documentElement.classList.add("monaka-no-scroll");
                    } else {
                        document.documentElement.classList.remove("monaka-no-scroll");
                    }
                };
            }

            /*
            * MOBILE SUBMENU TOGGLE
            * */
            Array.prototype.slice.call(document.querySelectorAll(".monaka-menu-arrow")).forEach(function (item) {
                item.onclick = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var item = event.target.parentNode.parentNode;

                    if (item.classList.contains("monaka-submenu-open")) {
                        item.classList.remove("monaka-submenu-open");
                    } else {
                        item.classList.add("monaka-submenu-open");
                    }
                };
            });

            /*
            * STICKY HEADER
            * */
            // var window_last_position = -1;
            // var body = document.body;
            // var node_monitor = document.querySelector(".monaka-header");
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
            //             if (!body.classList.contains("monaka-header-not-on-top")) {
            //                 body.classList.add("monaka-header-not-on-top");
            //             }
            //         } else {
            //             // release the header
            //             if (body.classList.contains("monaka-header-not-on-top")) {
            //                 body.classList.remove("monaka-header-not-on-top");
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
            var searchIcons = document.querySelectorAll(".js-monaka-menu-search-icon");
            var searchField = document.querySelector(".js-monaka-menu-search-field");

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
    methods:{
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
    destroyed(){

    }
};
</script>

<style scoped>
body {
  color: #151918;
  color: var(--color-black, #151918);
  background-color: #FFFFFF;
  background-color: var(--color-white, #FFFFFF);
  font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  font-weight: normal;
  font-style: normal;
  line-height: 1.45; 
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
    content: '';
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
    content: '';
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

.monaka-shadow-sm {
  -webkit-box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.095) !important;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.095) !important;
}

.monaka-shadow {
  -webkit-box-shadow: 0 0.42rem 1.22rem rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 0.42rem 1.22rem rgba(0, 0, 0, 0.12) !important;
}

.monaka-shadow-md {
  -webkit-box-shadow: 0 0.67rem 2.15rem rgba(0, 0, 0, 0.14) !important;
  box-shadow: 0 0.67rem 2.15rem rgba(0, 0, 0, 0.14) !important;
}

.monaka-shadow-lg {
  -webkit-box-shadow: 0 1rem 3.2rem rgba(0, 0, 0, 0.165) !important;
  box-shadow: 0 1rem 3.2rem rgba(0, 0, 0, 0.165) !important;
}

@media (max-width: 1023px) {
  .monaka-menu-overlay {
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
  .monaka-menu-monitor:checked ~ .monaka-menu-overlay {
    opacity: 1;
    pointer-events: auto;
  }
}

.monaka-transparent-overlay {
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

.monaka-row {
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
@media (max-width: 1023px) {
  .monaka-row {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

.monaka-col,
.monaka-column {
  padding: 20px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
@media (max-width: 1023px) {
  .monaka-col,
  .monaka-column {
    padding: 10px 20px;
  }
}
@media (min-width: 1024px) {
  .monaka-col:first-child,
  .monaka-column:first-child {
    padding-left: 40px;
  }
  .monaka-col:last-child,
  .monaka-column:last-child {
    padding-right: 40px;
  }
}

.monaka-pointer {
  cursor: pointer;
}

@media (max-width: 1023px) {
  .monaka-no-scroll {
    overflow: hidden;
  }
}

.monaka-hidden {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  width: 0;
  height: 0;
}

@media (min-width: 1024px) {
  .monaka-mobile-only {
    display: none !important;
    visibility: hidden !important;
  }
}

@media (max-width: 1023px) {
  .monaka-menu-item .monaka-menu-active{
    color: #89B4CA;
  }
  .monaka-desktop-only {
    display: none !important;
    visibility: hidden !important;
  }
}

.monaka-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -o-flexbox;
  display: -moz-flexbox;
  display: flex;
}

.monaka-align-left {
  -webkit-box-pack: start !important;
  -ms-flex-pack: start !important;
  justify-content: flex-start !important;
}

.monaka-align-right {
  -webkit-box-pack: end !important;
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}

.monaka-align-center {
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.monaka-align-justify {
  -webkit-box-pack: justify !important;
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}

.monaka-align-spaced {
  -ms-flex-pack: distribute !important;
  justify-content: space-around !important;
}

.monaka-align-top {
  -webkit-box-align: start !important;
  -ms-flex-align: start !important;
  align-items: flex-start !important;
}

.monaka-align-middle {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}

.monaka-align-bottom {
  -webkit-box-align: end !important;
  -ms-flex-align: end !important;
  align-items: flex-end !important;
}

.monaka-align-stretch {
  -webkit-box-align: stretch !important;
  -ms-flex-align: stretch !important;
  align-items: stretch !important;
}

.monaka-flex-row {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

.monaka-flex-row-reverse {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: reverse !important;
  -ms-flex-direction: row-reverse !important;
  flex-direction: row-reverse !important;
}

.monaka-flex-column {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

.monaka-flex-column-reverse {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: reverse !important;
  -ms-flex-direction: column-reverse !important;
  flex-direction: column-reverse !important;
}

.monaka-flex-auto {
  -webkit-box-flex: 1 !important;
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}

@media (min-width: 1024px) {
  .lg\:monaka-align-left {
    -webkit-box-pack: start !important;
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
  .lg\:monaka-align-right {
    -webkit-box-pack: end !important;
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
  .lg\:monaka-align-center {
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
  .lg\:monaka-align-justify {
    -webkit-box-pack: justify !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
  .lg\:monaka-align-spaced {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
  .lg\:monaka-align-top {
    -webkit-box-align: start !important;
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
  .lg\:monaka-align-middle {
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
  }
  .lg\:monaka-align-bottom {
    -webkit-box-align: end !important;
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
  .lg\:monaka-align-stretch {
    -webkit-box-align: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }
  .lg\:monaka-flex-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
  .lg\:monaka-flex-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
  .lg\:monaka-flex-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
  .lg\:monaka-flex-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
  .lg\:monaka-flex-auto {
    -webkit-box-flex: 1 !important;
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
}

.monaka-static {
  position: static;
}

.monaka-relative {
  position: relative;
}

.monaka-absolute {
  position: absolute;
}

.monaka-fixed {
  position: fixed;
}

@media (min-width: 1024px) {
  .lg\:monaka-static {
    position: static;
  }
  .lg\:monaka-relative {
    position: relative;
  }
  .lg\:monaka-absolute {
    position: absolute;
  }
  .lg\:monaka-fixed {
    position: fixed;
  }
}

.monaka-container {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1280px;
  position: relative;
}
@media (min-width: 640px) {
  .monaka-container {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .monaka-container {
    max-width: 100%;
  }
}
@media (min-width: 1024px) {
  .monaka-container {
    /**min-width: 1024px;**/
    margin: 0 20px;
  }
}
@media (min-width: 1280px) {
  .monaka-container {
    /**max-width: 1280px;**/
    min-width: 1280;
    margin: 0 50px;
  }
}

.monaka-header {
  position: relative;
  will-change: top, transform;
  z-index: 1024;
  font-size: 14px;
  font-family: Arial, sans-serif;
  line-height: 1.45;
}
.monaka-header:before {
  content: "";
  top: 0;
  bottom: 0;
  right: 0;
}

.monaka-header:before,
.monaka-header-shadow {
  position: absolute;
  left: 0;
  z-index: -1;
}

.monaka-header-shadow {
  top: 100%;
  width: 100%;
  height: 30px;
  overflow: hidden;
}
.monaka-header-shadow:after {
  display: block;
  position: relative;
  content: "";
  width: 100%;
  height: 60px;
  top: -60px;
  border-radius: 50%;
}

.monaka-header {
  -webkit-box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.095);
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.095);
}
@media (min-width: 1024px) {
  .monaka-header .monaka-menu-item > ul {
    -webkit-box-shadow: 0 0.13rem 0.5rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.13rem 0.5rem rgba(0, 0, 0, 0.15);
  }
}

.monaka-header.monaka-shadow-medium {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.monaka-header.monaka-shadow-medium .monaka-header-shadow:after {
  -webkit-box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
}
@media (min-width: 1024px) {
  .monaka-header.monaka-shadow-medium .monaka-menu-item > ul {
    -webkit-box-shadow: 0 0.45rem 1.22rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.45rem 1.22rem rgba(0, 0, 0, 0.15);
  }
}

.monaka-header.monaka-shadow-large {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.monaka-header.monaka-shadow-large .monaka-header-shadow:after {
  -webkit-box-shadow: 0 10px 30px -1px rgba(0, 0, 0, 0.12);
  box-shadow: 0 10px 30px -1px rgba(0, 0, 0, 0.12);
}
@media (min-width: 1024px) {
  .monaka-header.monaka-shadow-large .monaka-menu-item > ul {
    -webkit-box-shadow: 0 0.67rem 2.15rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.67rem 2.15rem rgba(0, 0, 0, 0.15);
  }
}

.monaka-header-not-on-top .monaka-header {
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

.monaka-header-not-on-top .monaka-header-spacer {
  padding-top: 85px;
}

.monaka-header-not-on-top .monaka-logo {
  height: 70px;
}
.monaka-logo img.monaka-logo-light {
    width: 50px;
    height: 50px;
}
.monaka-logo img.monaka-logo-dark {
    width: 50px;
    height: 50px;
}
.monaka-header-not-on-top .monaka-logo.monaka-logo-top {
  display: none;
}

.monaka-header-not-on-top .monaka-menu-search-field-inner {
  height: 70px;
}

@media (max-width: 1023px) {
  .monaka-header-not-on-top .monaka-menu-title {
    height: 70px;
    min-height: 70px;
  }
}

@media (min-width: 1024px) {
  .monaka-header-not-on-top .monaka-menu-item {
    height: 70px;
  }
  .monaka-header-not-on-top .monaka-header-center-3 ~ .monaka-header-spacer {
    padding-top: 170px;
  }
}

.monaka-header.monaka-header-overlay-light-bg,
.monaka-header.monaka-header-overlay-dark-bg,
.monaka-header.monaka-header-transparent-light,
.monaka-header.monaka-header-transparent-dark {
  position: absolute;
  left: 0;
  right: 0;
}
.monaka-header.monaka-header-overlay-light-bg + .monaka-header-spacer,
.monaka-header.monaka-header-overlay-dark-bg + .monaka-header-spacer,
.monaka-header.monaka-header-transparent-light + .monaka-header-spacer,
.monaka-header.monaka-header-transparent-dark + .monaka-header-spacer {
  padding: 0;
}
.monaka-header-not-on-top .monaka-header.monaka-header-overlay-light-bg,
.monaka-header-not-on-top .monaka-header.monaka-header-overlay-dark-bg,
.monaka-header-not-on-top .monaka-header.monaka-header-transparent-light,
.monaka-header-not-on-top .monaka-header.monaka-header-transparent-dark {
  position: fixed;
}

.monaka-header.monaka-header-aligned-left .monaka-menu-search {
  margin-left: auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .monaka-header.monaka-header-aligned-left .monaka-logo {
    margin-right: 0;
  }
  .monaka-header.monaka-header-aligned-left .monaka-menu {
    /*margin: 0 auto;*/
  }
  .monaka-header.monaka-header-aligned-left .monaka-menu-right-section {
    margin-left: auto;
  }
}

@media (max-width: 1023px) {
  .monaka-header.monaka-header-aligned-center .monaka-logo {
    margin: 0 auto;
  }
}

@media (max-width: 1023px) {
  .monaka-header.monaka-header-center-1 .monaka-logo {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1024px) {
  .monaka-header.monaka-header-center-1 .monaka-menu-search {
    position: absolute;
    right: 20px;
  }
  .monaka-header.monaka-header-center-1 .monaka-menu-body-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .monaka-header.monaka-header-center-1 .monaka-menu-body-center,
  .monaka-header.monaka-header-center-1 .monaka-menu-body-center > li > ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .monaka-header.monaka-header-center-1
    .monaka-menu-body-center
    > li:nth-child(1) {
    margin-left: auto;
  }
  .monaka-header.monaka-header-center-1
    .monaka-menu-body-center
    > li:nth-child(1)
    > ul {
    width: 412px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .monaka-header.monaka-header-center-1
    .monaka-menu-body-center
    > li:nth-child(3) {
    margin-right: auto;
  }
  .monaka-header.monaka-header-center-1
    .monaka-menu-body-center
    > li:nth-child(3)
    > ul {
    width: 412px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
}

@media (min-width: 1024px) {
  .monaka-header.monaka-header-center-2 .monaka-menu {
    width: 100%;
  }
  .monaka-header.monaka-header-center-2 .monaka-menu-body-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .monaka-header.monaka-header-center-2 .monaka-menu-body-center,
  .monaka-header.monaka-header-center-2 .monaka-menu-body-center > li > ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .monaka-header.monaka-header-center-2
    .monaka-menu-body-center
    > li:nth-child(1) {
    margin-right: auto;
  }
  .monaka-header.monaka-header-center-2
    .monaka-menu-body-center
    > li:nth-child(1)
    > ul {
    width: 412px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .monaka-header.monaka-header-center-2
    .monaka-menu-body-center
    > li:nth-child(3) {
    margin-left: auto;
  }
  .monaka-header.monaka-header-center-2
    .monaka-menu-body-center
    > li:nth-child(3)
    > ul {
    width: 412px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}

@media (max-width: 1023px) {
  .monaka-header.monaka-header-center-3 .monaka-logo {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1024px) {
  .monaka-header.monaka-header-center-3 .monaka-menu:before {
    content: "";
    height: 1px;
    width: 100%;
    display: block;
    margin-top: -1px;
    background-color: currentColor;
    opacity: 0.1;
  }
  .monaka-header.monaka-header-center-3 .monaka-logo.monaka-logo-top {
    margin: 0 auto;
  }
  .monaka-header.monaka-header-center-3 .monaka-menu-search {
    position: absolute;
    right: 20px;
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-center-3
    .monaka-menu-search-field-inner {
    height: 170px;
  }
}

.monaka-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

@media (max-width: 1023px) {
  .monaka-menu {
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
  .monaka-menu-monitor:checked ~ .monaka-menu {
    pointer-events: auto;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .monaka-menu ul {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
}

@media (min-width: 1024px) {
  .monaka-menu > ul:not(.monaka-menu-title) {
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

@media (max-width: 1023px) {
  .monaka-menu-title {
    -webkit-box-flex: 0 !important;
    -ms-flex: 0 !important;
    flex: 0 !important;
    padding: 0 20px !important;
    height: 85px;
    min-height: 85px;
  }
  .monaka-menu-title,
  .monaka-menu-title > li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .monaka-menu-title > li {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .monaka-menu-title a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
  }
  .monaka-menu-title .monaka-logo {
    margin-left: auto;
    margin-right: auto;
  }
  .monaka-menu-title .monaka-menu-toggler {
    position: absolute;
    width: 40px;
    height: 56px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media (min-width: 1024px) {
  .monaka-menu-title {
    display: none;
  }
}

@media (max-width: 1023px) {
  .monaka-menu-body {
    padding: 12px 0 !important;
    overflow: hidden;
  }
  .monaka-menu-body::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }
  .monaka-menu-body::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: #c9c9c9;
  }
  .monaka-header-dark .monaka-menu-body::-webkit-scrollbar-thumb {
    background-color: #494949;
  }
  .monaka-menu-body:hover {
    overflow-y: auto;
    overflow-y: overlay;
  }
  .monaka-menu-body a {
    padding: 8.5px 40px 8.5px 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
  }
  .monaka-menu-body a > i {
    -ms-flex-item-align: start;
    align-self: flex-start;
    margin-top: 3px;
  }
  .monaka-menu-body input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .monaka-menu-body input[type="checkbox"] ~ ul {
    display: none;
  }
  .monaka-menu-body input[type="checkbox"]:checked ~ ul {
    display: block;
  }
  .monaka-menu-body input[type="checkbox"]:checked ~ a label {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .monaka-menu-body .monaka-row {
    display: block;
  }
  .monaka-menu-body .monaka-menu-arrow {
    overflow: hidden;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: auto;
    position: absolute;
    right: 8px;
    top: 0;
  }
  .monaka-menu-body .monaka-menu-arrow:before {
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
  .monaka-menu-body .monaka-menu-item {
    position: relative;
    width: 300px;
  }
  .monaka-menu-body .monaka-menu-item > a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .monaka-menu-body .monaka-menu-item .monaka-menu-item {
    width: 100%;
  }
  .monaka-menu-body .monaka-menu-item .monaka-menu-item a {
    padding-left: 40px;
  }
  .monaka-menu-body .monaka-menu-item .monaka-menu-item .monaka-menu-item a {
    padding-left: 60px;
  }
  .monaka-menu-body
    .monaka-menu-item
    .monaka-menu-item
    .monaka-menu-item
    .monaka-menu-item
    a {
    padding-left: 80px;
  }
  .monaka-menu-body
    .monaka-menu-item
    .monaka-menu-item
    .monaka-menu-item
    .monaka-menu-item
    .monaka-menu-item
    a {
    padding-left: 100px;
  }
}

.monaka-menu-item a {
  outline: 0;
  color: currentColor;
  text-decoration: none;
}

.monaka-menu-item > a,
.monaka-menu-item > a:before {
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

@media (max-width: 1023px) {
  .monaka-menu-item > a {
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
    font-family: "Roboto", Arial, sans-serif;
  }
  .monaka-menu-item > a > i {
    opacity: 0.75;
    margin-right: 10px;
  }
  .monaka-menu-item > ul {
    display: none;
  }
  .monaka-menu-item .monaka-menu-item > a {
    font-size: 14px;
    font-weight: normal;
    text-transform: none;
  }
  .monaka-menu-item.monaka-submenu-open > ul {
    display: block;
  }
  .monaka-menu-item.monaka-submenu-open > a .monaka-menu-arrow:before {
    bottom: 15px;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
}

@media (min-width: 1024px) {
  .monaka-menu-item {
    list-style: none;
    height: 50px;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
  .monaka-menu-item,
  .monaka-menu-item a {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .monaka-menu-item a {
    padding: 0 20px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
    color: currentColor;
  }
  .monaka-menu-item > a {
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
    font-family: "Roboto", Arial, sans-serif;
  }
  .monaka-menu-item > a > i {
    margin-right: 7px;
  }
  .monaka-menu-item .monaka-menu-item > a,
  .monaka-menu-item .monaka-menu-item > a:before,
  .monaka-menu-item .monaka-menu-item > a:after,
  .monaka-menu-item .monaka-menu-item > a > i {
    -webkit-transition: none;
    transition: none;
  }
  .monaka-menu-item:hover {
    /* include &:focus-within if needed */
  }
  .monaka-menu-item:hover > ul {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
  .monaka-menu-item .monaka-menu-item {
    color: currentColor;
    height: auto;
  }
  .monaka-menu-item .monaka-menu-item a {
    padding: 10px 40px 10px 20px;
  }
  .monaka-menu-item .monaka-menu-item > a {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    font-weight: normal;
    text-transform: none;
    font-family: Arial, sans-serif;
  }
  .monaka-menu-item .monaka-menu-item > a > span:not(.monaka-menu-arrow) {
    opacity: 0.55;
  }
  .monaka-menu-item .monaka-menu-item > a > i {
    -ms-flex-item-align: start;
    align-self: flex-start;
    margin-top: 3px;
    margin-right: 10px;
  }
  .monaka-menu-item > ul {
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
  .monaka-menu-item > ul ul {
    left: 100%;
    top: -18px;
  }
}

@media (min-width: 1024px) {
  .monaka-submenu-right.monaka-menu-item > ul {
    left: auto;
    right: 0;
  }
  .monaka-submenu-right.monaka-menu-item > ul ul {
    left: -100%;
  }
}

@media (min-width: 1024px) {
  .monaka-menu-item.monaka-item-mega-menu {
    position: static;
  }
  .monaka-menu-item.monaka-item-mega-menu .monaka-menu-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .monaka-menu-item.monaka-item-mega-menu > ul {
    width: 100%;
  }
}

.monaka-media {
  margin-bottom: 35px;
}
.monaka-media a {
  height: auto !important;
  padding: 0 !important;
}
@media (max-width: 1023px) {
  .monaka-media {
    margin: 20px 0;
  }
}
@media (min-width: 1024px) {
  .monaka-media:last-child {
    margin-bottom: 0;
  }
}

.monaka-media.monaka-media-small {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.monaka-media.monaka-media-small .monaka-media-thumbnail {
  margin: 0;
}
.monaka-media.monaka-media-small .monaka-media-thumbnail a {
  width: 110px;
}
.monaka-media.monaka-media-small .monaka-media-info {
  padding-left: 20px;
}
@media (max-width: 1023px) {
  .monaka-media.monaka-media-small .monaka-media-thumbnail a {
    width: 80px;
  }
}

.monaka-media.monaka-media-links ul {
  -webkit-transform: none !important;
  transform: none !important;
}
.monaka-media.monaka-media-links ul a {
  line-height: 2.25;
  font-size: 14px;
  font-weight: normal;
  text-transform: none;
  font-family: Arial, sans-serif;
}

.monaka-media-thumbnail {
  display: block;
  overflow: hidden;
  margin-bottom: 20px;
}
.monaka-media-thumbnail a:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
.monaka-media-thumbnail img {
  max-width: 100%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

a.monaka-media-title {
  display: block;
  font-size: 14px;
  text-transform: uppercase !important;
  margin-bottom: 10px;
}
@media (max-width: 1023px) {
  a.monaka-media-title {
    font-size: 12px;
  }
}
@media (min-width: 1024px) {
  a.monaka-media-title {
    font-weight: bold;
  }
}

.monaka-media-description {
  margin: 0;
  opacity: 0.55;
  line-height: 1.8;
  font-size: 14px;
  font-weight: normal;
  text-transform: none;
  font-family: Arial, sans-serif;
}
@media (max-width: 1023px) {
  .monaka-media-description {
    font-size: 14px;
  }
}

.monaka-menu-arrow {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
@media (max-width: 1023px) {
  .monaka-menu-arrow:before {
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }
}
@media (min-width: 1024px) {
  .monaka-menu-arrow {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    width: 14px;
    height: 14px;
    margin-left: 5px;
    margin-right: 0;
  }
  .monaka-menu-arrow:before {
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
  .monaka-menu-item .monaka-menu-item .monaka-menu-arrow {
    margin-left: 0;
    margin-right: 0;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    position: absolute;
    right: 20px;
    top: 12px;
  }
}

.monaka-menu-toggler {
  padding: 8px 0;
  margin-left: -8px;
  margin-right: 8px;
}
.monaka-menu-toggler > label {
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
.monaka-menu-toggler svg {
  fill: currentColor;
}
.monaka-logo + .monaka-menu-toggler {
  margin: 0;
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-menu-underline .monaka-menu-item > a:after {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 0;
    height: 3px;
    -webkit-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }
  .monaka-menu.monaka-menu-underline .monaka-menu-item > ul {
    top: calc(100% - 3px);
  }
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item.monaka-item-mega-menu
    > ul {
    top: 100%;
  }
  .monaka-menu.monaka-menu-underline .monaka-menu-item .monaka-menu-item > ul {
    top: -18px;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-menu-line-separator .monaka-menu-item > a:before {
    content: "";
    position: absolute;
    left: 0;
    width: 1px;
    top: 0;
    bottom: 0;
    height: 20px;
    margin: auto;
  }
  .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:first-child
    > a:before {
    opacity: 0;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-menu-hover-gray .monaka-menu-item > a:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
  }
  .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item
    > a:before {
    display: none;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-menu-hover-primary .monaka-menu-item > a:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
  }
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item
    > a:before {
    display: none;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-submenu-line-separator
    .monaka-menu-item
    .monaka-menu-item:after {
    content: "";
    position: absolute;
    left: 20px;
    right: 20px;
    top: 0;
    height: 1px;
    margin: auto;
  }
}

.monaka-menu-right-section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (min-width: 1024px) {
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:before,
  .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
}

.monaka-logo {
  margin: 0;
  height: 70px;
  overflow: hidden;
}
.monaka-logo,
.monaka-logo h1,
.monaka-logo a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.monaka-logo h1 {
  margin: 0;
  font-size: 24px;
}
.monaka-logo h1 a {
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
.monaka-logo h1 a img + span {
  text-indent: -9999em;
}
.monaka-menu-item .monaka-logo {
  margin: 0 40px;
}

.monaka-logo-light {
  display: none;
  width: 50px;
  height: 50px;
}

.monaka-menu-search input[type="checkbox"]:checked ~ .monaka-menu-search-field {
  opacity: 1;
  pointer-events: auto;
  z-index: 1024;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.monaka-menu-search
  input[type="checkbox"]:checked
  ~ .monaka-transparent-overlay {
  pointer-events: auto;
}

.monaka-menu-search svg,
.monaka-search-icon {
  fill: currentColor;
}

.monaka-search-icon {
  margin-left: 16px;
}
@media (min-width: 1024px) {
  .monaka-menu-item > label > .monaka-search-icon {
    margin-left: 20px;
    margin-right: 20px;
  }
}

.monaka-menu-search-field {
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
.monaka-menu-search-field input {
  font-size: inherit;
  outline: none;
  margin-left: 20px;
  border: none;
  border-radius: 3px;
  height: 38px;
  width: 100%;
  padding: 0;
}

.monaka-menu-search-field-inner {
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

.monaka-header {
  color: #151918;
  color: var(--color-black, #151918);
}
.monaka-header:before {
  background-color: #ffffff;
  background-color: var(--color-white, #ffffff);
}
@media (max-width: 1023px) {
  .monaka-header .monaka-menu,
  .monaka-header .monaka-menu-arrow {
    color: #151918 !important;
    color: var(--color-black, #151918) !important;
  }
  .monaka-header .monaka-menu-title .monaka-logo-light {
    display: none !important;
  }
  .monaka-header .monaka-menu-title .monaka-logo-dark {
    display: block !important;
  }
  .monaka-header
    .monaka-menu-item
    .monaka-menu-item
    a
    > span:not(.monaka-menu-arrow),
  .monaka-header .monaka-menu-item .monaka-menu-item a > i {
    opacity: 0.55;
  }
}

.monaka-header.monaka-header-dark {
  color: #ffffff;
  color: var(--color-white, #ffffff);
}
.monaka-header.monaka-header-dark:before,
.monaka-header.monaka-header-dark .monaka-menu-search-field {
  background-color: #151918;
  background-color: var(--color-black, #151918);
}
.monaka-header.monaka-header-dark .monaka-menu-search-field input {
  color: currentColor;
}
.monaka-header.monaka-header-dark
  .monaka-menu-search-field
  input::-webkit-input-placeholder {
  color: #818181;
}
.monaka-header.monaka-header-dark
  .monaka-menu-search-field
  input::-moz-placeholder {
  color: #818181;
}
.monaka-header.monaka-header-dark
  .monaka-menu-search-field
  input:-ms-input-placeholder {
  color: #818181;
}
.monaka-header.monaka-header-dark
  .monaka-menu-search-field
  input:-moz-placeholder {
  color: #818181;
}
.monaka-header.monaka-header-dark .monaka-logo-light {
  display: block;
}
.monaka-header.monaka-header-dark .monaka-logo-dark {
  display: none;
}
@media (max-width: 1023px) {
  .monaka-header.monaka-header-dark .monaka-menu {
    background-color: #151918;
    background-color: var(--color-black, #151918);
  }
  .monaka-header.monaka-header-dark .monaka-menu,
  .monaka-header.monaka-header-dark .monaka-menu-arrow {
    color: #ffffff !important;
    color: var(--color-white, #ffffff) !important;
  }
  .monaka-header.monaka-header-dark .monaka-menu-title {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  .monaka-header.monaka-header-dark .monaka-menu-title .monaka-logo-light {
    display: block !important;
  }
  .monaka-header.monaka-header-dark .monaka-menu-title .monaka-logo-dark {
    display: none !important;
  }
  .monaka-header.monaka-header-dark .monaka-menu-body .monaka-menu-item > a,
  .monaka-header.monaka-header-dark
    .monaka-menu-body
    .monaka-menu-item
    > a:hover {
    color: currentColor;
  }
}
@media (min-width: 1024px) {
  .monaka-header.monaka-header-dark .monaka-menu-item > ul {
    background-color: #151918;
    background-color: var(--color-black, #151918);
  }
  .monaka-header.monaka-header-dark .monaka-menu-arrow {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg {
  color: #151918;
  color: var(--color-black, #151918);
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg:before {
  opacity: 0.7;
  background-color: #ffffff;
  background-color: var(--color-white, #ffffff);
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg
  .monaka-menu-search-field,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg
  .monaka-menu-arrow,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg
  .monaka-menu-item
  .monaka-menu-item,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg
  .monaka-menu-item
  .monaka-menu-item
  .monaka-menu-arrow {
  color: #151918;
  color: var(--color-black, #151918);
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg
  .monaka-logo-light {
  display: none;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg
  .monaka-logo-dark {
  display: block;
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg.monaka-header-dark
  .monaka-menu-search-field,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg.monaka-header-dark
  .monaka-menu-item
  .monaka-menu-item,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-light-bg.monaka-header-dark
  .monaka-menu-item
  .monaka-menu-item
  .monaka-menu-arrow {
  color: #ffffff;
  color: var(--color-white, #ffffff);
}

@media (min-width: 1024px) {
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-active
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:hover
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:focus
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item.monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:focus
    > a {
    color: #151918;
    color: var(--color-black, #151918);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:focus
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active:hover
    > a
    > .monaka-menu-arrow {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active
    > a
    > .monaka-menu-arrow {
    color: #151918;
    color: var(--color-black, #151918);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-light-bg
    .monaka-menu:hover
    .monaka-menu-active
    > a {
    color: #151918;
    color: var(--color-black, #151918);
  }
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg {
  color: #ffffff;
  color: var(--color-white, #ffffff);
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg:before {
  opacity: 0.7;
  background-color: #151918;
  background-color: var(--color-black, #151918);
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg
  .monaka-menu-arrow {
  color: #ffffff;
  color: var(--color-white, #ffffff);
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg
  .monaka-menu-search-field,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg
  .monaka-menu-item
  .monaka-menu-item,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg
  .monaka-menu-item
  .monaka-menu-item
  .monaka-menu-arrow {
  color: #151918;
  color: var(--color-black, #151918);
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg
  .monaka-logo-light {
  display: block;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg
  .monaka-logo-dark {
  display: none;
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg.monaka-header-dark
  .monaka-menu-search-field,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg.monaka-header-dark
  .monaka-menu-item
  .monaka-menu-item,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-overlay-dark-bg.monaka-header-dark
  .monaka-menu-item
  .monaka-menu-item
  .monaka-menu-arrow {
  color: #ffffff;
  color: var(--color-white, #ffffff);
}

@media (min-width: 1024px) {
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-active
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:hover
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:focus
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:focus
    > a {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:focus
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active
    > a
    > .monaka-menu-arrow {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-overlay-dark-bg
    .monaka-menu:hover
    .monaka-menu-active
    > a {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light {
  color: #ffffff;
  color: var(--color-white, #ffffff);
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light:before {
  background-color: transparent;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light
  .monaka-menu-arrow {
  color: #ffffff;
  color: var(--color-white, #ffffff);
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light
  .monaka-menu-search-field,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light
  .monaka-menu-item
  .monaka-menu-item,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light
  .monaka-menu-item
  .monaka-menu-item
  .monaka-menu-arrow {
  color: #151918;
  color: var(--color-black, #151918);
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light
  .monaka-header-shadow {
  opacity: 0;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light
  .monaka-logo-light {
  display: block;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light
  .monaka-logo-dark {
  display: none;
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light.monaka-header-dark
  .monaka-menu-search-field,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light.monaka-header-dark
  .monaka-menu-item
  .monaka-menu-item,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-light.monaka-header-dark
  .monaka-menu-item
  .monaka-menu-item
  .monaka-menu-arrow {
  color: #ffffff;
  color: var(--color-white, #ffffff);
}

@media (min-width: 1024px) {
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-active
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:hover
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:focus
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:focus
    > a {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:focus
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active
    > a
    > .monaka-menu-arrow {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-light
    .monaka-menu:hover
    .monaka-menu-active
    > a {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark {
  color: #151918;
  color: var(--color-black, #151918);
  -webkit-box-shadow: none;
  box-shadow: none;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark:before {
  background-color: transparent;
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark
  .monaka-menu-search-field,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark
  .monaka-menu-arrow,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark
  .monaka-menu-item
  .monaka-menu-item,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark
  .monaka-menu-item
  .monaka-menu-item
  .monaka-menu-arrow {
  color: #151918;
  color: var(--color-black, #151918);
}
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark
  .monaka-header-shadow {
  opacity: 0;
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark.monaka-header-dark
  .monaka-menu-search-field,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark.monaka-header-dark
  .monaka-menu-item
  .monaka-menu-item,
body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark.monaka-header-dark
  .monaka-menu-item
  .monaka-menu-item
  .monaka-menu-arrow {
  color: #ffffff;
  color: var(--color-white, #ffffff);
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark.monaka-header-dark
  .monaka-logo-light {
  display: none;
}

body:not(.monaka-header-not-on-top)
  .monaka-header.monaka-header-transparent-dark.monaka-header-dark
  .monaka-logo-dark {
  display: block;
}

@media (min-width: 1024px) {
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-active
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:hover
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:focus
    > a:before,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:focus
    > a {
    color: #151918;
    color: var(--color-black, #151918);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:focus
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active:hover
    > a
    > .monaka-menu-arrow {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active
    > a
    > .monaka-menu-arrow {
    color: #151918;
    color: var(--color-black, #151918);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-active
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  body:not(.monaka-header-not-on-top)
    .monaka-header.monaka-header-transparent-dark
    .monaka-menu:hover
    .monaka-menu-active
    > a {
    color: #151918;
    color: var(--color-black, #151918);
  }
}

@media (max-width: 1023px) {
  .monaka-menu {
    background-color: #ffffff;
    background-color: var(--color-white, #ffffff);
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-menu-underline .monaka-menu-item > a:after {
    background-color: #2786de;
    background-color: var(--color-primary, #2786de);
    opacity: 0;
  }
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item.monaka-item-mega-menu
    > ul {
    border-top-color: transparent;
  }
  .monaka-menu.monaka-menu-underline .monaka-menu-item.monaka-menu-active > a,
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item.monaka-menu-active:hover
    > a,
  .monaka-menu.monaka-menu-underline .monaka-menu-item:hover > a,
  .monaka-menu.monaka-menu-underline .monaka-menu-item:focus > a {
    color: currentColor;
  }
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item.monaka-menu-active
    > a:after,
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item.monaka-menu-active:hover
    > a:after,
  .monaka-menu.monaka-menu-underline .monaka-menu-item:hover > a:after,
  .monaka-menu.monaka-menu-underline .monaka-menu-item:focus > a:after {
    opacity: 1;
  }
  .monaka-menu.monaka-menu-underline:hover .monaka-menu-active > a:after {
    opacity: 0;
  }
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item
    .monaka-menu-item.monaka-menu-active
    > a,
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item
    .monaka-menu-item.monaka-menu-active
    > a:after,
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item
    .monaka-menu-item:hover
    > a:after,
  .monaka-menu.monaka-menu-underline
    .monaka-menu-item
    .monaka-menu-item:focus
    > a:after {
    opacity: 0 !important;
  }
  .monaka-menu.monaka-menu-underline .monaka-menu-item .monaka-menu-item > ul {
    border-top-color: #2786de;
    border-top-color: var(--color-primary, #2786de);
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-menu-line-separator .monaka-menu-item > a:before {
    opacity: 0.1;
    background-color: currentColor;
  }
  .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item.monaka-menu-active
    > a:before,
  .monaka-menu.monaka-menu-line-separator .monaka-menu-item:hover > a:before,
  .monaka-menu.monaka-menu-line-separator .monaka-menu-item:focus > a:before {
    color: #151918;
    color: var(--color-black, #151918);
  }
  .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item
    .monaka-menu-item
    > a:before {
    opacity: 0 !important;
  }
  .monaka-header-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item.monaka-menu-active
    > a:before,
  .monaka-header-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:hover
    > a:before,
  .monaka-header-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:focus
    > a:before,
  .monaka-header-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item.monaka-menu-active
    > a:before,
  .monaka-header-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:hover
    > a:before,
  .monaka-header-dark
    .monaka-menu.monaka-menu-line-separator
    .monaka-menu-item:focus
    > a:before {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-menu-hover-gray .monaka-menu-item.monaka-menu-active > a,
  .monaka-menu.monaka-menu-hover-gray .monaka-menu-item:hover > a,
  .monaka-menu.monaka-menu-hover-gray .monaka-menu-item:focus > a {
    color: #151918;
    color: var(--color-black, #151918);
  }
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item.monaka-menu-active
    > a,
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:hover
    > a,
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item:focus
    > a {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item.monaka-menu-active
    > a,
  .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .monaka-menu.monaka-menu-hover-gray
    .monaka-menu-item.monaka-menu-active
    > a:before,
  .monaka-menu.monaka-menu-hover-gray .monaka-menu-item:hover > a:before,
  .monaka-menu.monaka-menu-hover-gray .monaka-menu-item:focus > a:before {
    opacity: 0.07;
    background-color: currentColor;
  }
  .monaka-menu.monaka-menu-hover-gray:hover .monaka-menu-active > a:before {
    opacity: 0;
  }
  .monaka-menu.monaka-menu-hover-gray:hover .monaka-menu-active:hover > a {
    color: #151918;
    color: var(--color-black, #151918);
  }
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-gray:hover
    .monaka-menu-active:hover
    > a {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  .monaka-menu.monaka-menu-hover-gray:hover
    .monaka-menu-active:hover
    > a:before {
    opacity: 0.07;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item.monaka-menu-active
    > a,
  .monaka-menu.monaka-menu-hover-primary .monaka-menu-item:hover > a,
  .monaka-menu.monaka-menu-hover-primary .monaka-menu-item:focus > a,
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item.monaka-menu-active
    > a
    > .monaka-menu-arrow,
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:hover
    > a
    > .monaka-menu-arrow,
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:focus
    > a
    > .monaka-menu-arrow,
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item.monaka-menu-active
    > a,
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:hover
    > a,
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item:focus
    > a {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item
    > a
    > .monaka-menu-arrow {
    color: #151918;
    color: var(--color-black, #151918);
  }
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item
    > a
    > .monaka-menu-arrow {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item.monaka-menu-active
    > a,
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:hover
    > a,
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item
    .monaka-menu-item:focus
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .monaka-menu.monaka-menu-hover-primary
    .monaka-menu-item.monaka-menu-active
    > a:before,
  .monaka-menu.monaka-menu-hover-primary .monaka-menu-item:hover > a:before,
  .monaka-menu.monaka-menu-hover-primary .monaka-menu-item:focus > a:before {
    opacity: 1;
    background-color: #2786de;
    background-color: var(--color-primary, #2786de);
  }
  .monaka-menu.monaka-menu-hover-primary:hover .monaka-menu-active > a,
  .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active
    > a
    > .monaka-menu-arrow {
    color: #151918;
    color: var(--color-black, #151918);
  }
  .monaka-menu.monaka-menu-hover-primary:hover .monaka-menu-active > a:before {
    opacity: 0;
  }
  .monaka-header-dark
    .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active
    > a
    > .monaka-menu-arrow,
  .monaka-menu.monaka-menu-hover-primary:hover .monaka-menu-active:hover > a,
  .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active:hover
    > a
    > .monaka-menu-arrow {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
  .monaka-menu.monaka-menu-hover-primary:hover
    .monaka-menu-active:hover
    > a:before {
    opacity: 1;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-submenu-line-separator
    .monaka-menu-item
    .monaka-menu-item
    > a {
    padding: 12px 20px;
  }
  .monaka-menu.monaka-submenu-line-separator
    .monaka-menu-item
    .monaka-menu-item:after {
    opacity: 0.07;
    background-color: currentColor;
  }
  .monaka-menu.monaka-submenu-line-separator
    .monaka-menu-item
    .monaka-menu-item:first-child:after {
    opacity: 0;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:hover
    > a,
  .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:focus
    > a {
    opacity: 0.55;
    color: #151918 !important;
    color: var(--color-black, #151918) !important;
  }
  .monaka-header-dark
    .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:hover
    > a,
  .monaka-header-dark
    .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:focus
    > a {
    color: #ffffff !important;
    color: var(--color-white, #ffffff) !important;
  }
  .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:hover
    > a
    > .monaka-menu-arrow,
  .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:focus
    > a
    > .monaka-menu-arrow {
    opacity: 0.7;
  }
  .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:hover:before,
  .monaka-menu.monaka-submenu-hover-gray
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:focus:before {
    opacity: 0.06;
    background-color: currentColor;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:hover
    > a,
  .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:focus
    > a {
    opacity: 0.55;
    color: #151918 !important;
    color: var(--color-black, #151918) !important;
  }
  .monaka-header-dark
    .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:hover
    > a,
  .monaka-header-dark
    .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:focus
    > a {
    color: #ffffff !important;
    color: var(--color-white, #ffffff) !important;
  }
  .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:hover
    > a
    > .monaka-menu-arrow,
  .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:focus
    > a
    > .monaka-menu-arrow {
    opacity: 0.7;
  }
  .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:hover:before,
  .monaka-menu.monaka-submenu-hover-primary
    .monaka-menu-item:not(.monaka-item-mega-menu)
    .monaka-menu-item:focus:before {
    opacity: 0.1;
    background-color: #2786de;
    background-color: var(--color-primary, #2786de);
  }
}

@media (min-width: 1024px) {
  .monaka-menu-item > ul {
    background-color: #ffffff;
    background-color: var(--color-white, #ffffff);
    border-top-color: #2786de;
    border-top-color: var(--color-primary, #2786de);
  }
  .monaka-menu-item > a > i {
    opacity: 0.5;
  }
  .monaka-menu-item .monaka-menu-item > a > .monaka-menu-arrow {
    opacity: 0.4;
  }
}

.monaka-media.monaka-media-links ul a {
  opacity: 0.55;
}
.monaka-media.monaka-media-links ul a:hover {
  background-color: transparent !important;
  color: #2786de !important;
  color: var(--color-primary, #2786de) !important;
  opacity: 1;
}

.monaka-media-thumbnail a:before {
  background-color: black;
  opacity: 0;
}

.monaka-media-thumbnail a:hover:before {
  opacity: 0.25;
}

a.monaka-media-title:hover {
  color: #2786de !important;
  color: var(--color-primary, #2786de) !important;
  background-color: transparent !important;
}

.monaka-menu-active > a > span:not(.monaka-menu-arrow),
.monaka-menu-item:hover > a > span:not(.monaka-menu-arrow),
.monaka-menu-item:focus > a > span:not(.monaka-menu-arrow) {
  opacity: 1;
}

@media (min-width: 1024px) {
  .monaka-menu-active > a,
  .monaka-menu-item:hover > a,
  .monaka-menu-item:focus > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .monaka-menu-active > a > i,
  .monaka-menu-item:hover > a > i,
  .monaka-menu-item:focus > a > i {
    opacity: 1;
  }
  .monaka-menu-item .monaka-menu-active > a,
  .monaka-menu-item .monaka-menu-item:hover > a,
  .monaka-menu-item .monaka-menu-item:focus > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
}

@media (min-width: 1024px) {
  .monaka-menu:hover .monaka-menu-active > a {
    color: #151918;
    color: var(--color-black, #151918);
  }
  .monaka-menu:hover .monaka-menu-active > a > i {
    opacity: 0.5;
  }
  .monaka-menu:hover .monaka-menu-active:hover > a > i {
    opacity: 1;
  }
  .monaka-menu:not(.monaka-menu-hover-gray):not(.monaka-menu-hover-primary):not(
      .monaka-menu-underline
    ):hover
    .monaka-menu-active:hover
    > a {
    color: #2786de;
    color: var(--color-primary, #2786de);
  }
  .monaka-header-dark .monaka-menu:hover .monaka-menu-active > a {
    color: #ffffff;
    color: var(--color-white, #ffffff);
  }
}

.monaka-menu-arrow {
  opacity: 0.4;
  color: #151918;
  color: var(--color-black, #151918);
}
@media (max-width: 1023px) {
  .monaka-menu-arrow {
    opacity: 0.5;
    color: #151918;
    color: var(--color-black, #151918);
  }
}

@media (max-width: 1023px) {
  .monaka-menu-overlay {
    background: rgba(0, 0, 0, 0.6);
  }
}

.monaka-menu-title {
  color: #151918;
  color: var(--color-black, #151918);
}
@media (max-width: 1023px) {
  .monaka-menu-title {
    position: relative;
  }
  .monaka-menu-title:before {
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

@media (max-width: 1023px) {
  .monaka-menu-title a,
  .monaka-menu-body .monaka-menu-item > a {
    color: #151918;
    color: var(--color-black, #151918);
  }
  .monaka-menu-body .monaka-menu-item > a:before {
    background-color: currentColor;
    opacity: 0;
  }
  .monaka-menu-body .monaka-menu-item > a:hover {
    color: #151918;
    color: var(--color-black, #151918);
  }
  .monaka-menu-body:hover .monaka-menu-active > a:before {
    opacity: 0;
  }
  .monaka-menu-body .monaka-menu-item > a:hover:before,
  .monaka-menu-body .monaka-menu-active > a:before,
  .monaka-menu-body:hover .monaka-menu-active:hover > a:before {
    opacity: 0.08;
  }
}

.monaka-menu-search-field {
  background-color: #ffffff;
  background-color: var(--color-white, #ffffff);
}
.monaka-menu-search-field input {
  color: #151918;
  color: var(--color-black, #151918);
  background-color: transparent;
}
.monaka-menu-search-field input::-webkit-input-placeholder {
  color: #cbcbcb;
}
.monaka-menu-search-field input::-moz-placeholder {
  color: #cbcbcb;
}
.monaka-menu-search-field input:-ms-input-placeholder {
  color: #cbcbcb;
}
.monaka-menu-search-field input:-moz-placeholder {
  color: #cbcbcb;
}

@media (min-width: 1024px) {
  .monaka-header {
    -webkit-perspective: 5400px;
    perspective: 5400px;
    -webkit-perspective-origin: center;
    perspective-origin: center;
  }
}

@media (min-width: 1024px) {
  .monaka-menu.monaka-submenu-fade-up .monaka-menu-item > ul > li {
    opacity: 0;
    -webkit-transform: translateY(18px);
    transform: translateY(18px);
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    will-change: opacity, transform;
  }
  .monaka-menu.monaka-submenu-fade-up .monaka-menu-item:hover > ul > li {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .monaka-menu.monaka-submenu-fade-down .monaka-menu-item > ul > li {
    opacity: 0;
    -webkit-transform: translateY(-18px);
    transform: translateY(-18px);
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    will-change: opacity, transform;
  }
  .monaka-menu.monaka-submenu-fade-down .monaka-menu-item:hover > ul > li {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .monaka-menu.monaka-submenu-scale .monaka-menu-item > ul {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: top left;
    transform-origin: top left;
  }
  .monaka-menu.monaka-submenu-scale
    .monaka-menu-item.monaka-item-mega-menu
    > ul {
    -webkit-transform-origin: top center;
    transform-origin: top center;
  }
  .monaka-menu.monaka-submenu-scale .monaka-menu-item:hover > ul {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .monaka-menu.monaka-submenu-scale .monaka-menu-item.monaka-submenu-right > ul,
  .monaka-menu.monaka-submenu-scale
    .monaka-menu-item.monaka-submenu-right
    > ul
    ul {
    -webkit-transform-origin: top right;
    transform-origin: top right;
  }
  .monaka-menu.monaka-submenu-swing .monaka-menu-item > ul {
    -webkit-transform: rotateX(-25deg);
    transform: rotateX(-25deg);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .monaka-menu.monaka-submenu-swing .monaka-menu-item:hover > ul {
    -webkit-transform: rotateX(0deg) rotateY(0deg) !important;
    transform: rotateX(0deg) rotateY(0deg) !important;
  }
  .monaka-menu.monaka-submenu-swing .monaka-menu-item > ul ul {
    left: calc(100% - 1px);
    -webkit-transform: rotateY(25deg);
    transform: rotateY(25deg);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .monaka-menu.monaka-submenu-swing
    .monaka-menu-item.monaka-submenu-right
    > ul
    ul {
    left: calc(-100% + 1px);
    -webkit-transform: rotateY(-25deg);
    transform: rotateY(-25deg);
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
  }
  .monaka-menu.monaka-submenu-slide-up .monaka-menu-item > ul {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  .monaka-menu.monaka-submenu-slide-up .monaka-menu-item:hover > ul {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .monaka-menu.monaka-submenu-slide-down .monaka-menu-item > ul {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  .monaka-menu.monaka-submenu-slide-down .monaka-menu-item:hover > ul {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>