import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from "axios"
// register the plugin on vue
import Toasted from 'vue-toasted';
import VueViewer, { directive as viewerDirective } from 'v-viewer';
import 'viewerjs/dist/viewer.css'; // 图片预览器的样式
Vue.use(VueViewer, {
  defaultOptions: {
    /**
     *数字含义:
     *0 or false: hide the navbar
    1 or true: show the navbar
    2: show the navbar only when the screen width is greater than 768 pixels
    3: show the navbar only when the screen width is greater than 992 pixels
    4: show the navbar only when the screen width is greater than 1200 pixels
     */
    toolbar: {
      zoomIn: 0,
      zoomOut: 0,
      oneToOne: 1,
      reset: 1,
      prev: {
        show: 1,
        //size: 'large',
      },
      play: 1,
      next: {
        show: 1,
        //size: 'large',
      },
      rotateLeft: 0,
      rotateRight: 0,
      flipHorizontal: 0,
      flipVertical: 0,
    },
    zoomRatio: 0.3 // 缩放比率 默认是0.1
  }
}); 
//图片预览器
//用于图片预览的指令方式调用 在元素上加上会处理元素下所有的图片,为图片添加点击事件,点击即可预览
Vue.directive('viewer', viewerDirective({
  //debug: true
}));
// import PlusPager from './pager/PlusPager'
// Vue.component(PlusPager)
import PlusComponent from './components'
Vue.use(PlusComponent);
// or you can use it with require
//var Toasted = require('vue-toasted').default
Vue.use(Toasted, Option);
//Vue.prototype.Toasted=Toasted;
// you can also pass options, check options reference below
// import 'font-awesome/css/font-awesome.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard, faSun,faMoon,faEnvelope,faRssSquare,faAngleRight,faAngleDoubleLeft,faAngleDoubleRight,faUser,faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLightbulb} from '@fortawesome/free-regular-svg-icons';
library.add(faHatWizard,faSun,faMoon,faEnvelope,faRssSquare,faGithub,faLightbulb,faAngleRight,faAngleDoubleLeft,faAngleDoubleRight,faUser,faTimes);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('font-awesome-icon', FontAwesomeIcon)
import '@/assets/css/plushome.css';
import "@/assets/css/variable.css";
import 'highlight.js/styles/vs2015.css'
// import 'highlight.js/styles/monokai-sublime.css'
import hljs from 'highlight.js'
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  let blocks2 = el.querySelectorAll("pre");
  // blocks.forEach(block => {
  //   hljs.highlightBlock(block);
  //   // 从这开始是设置行号
  //   block.innerHTML = `<ol><li>${block.innerHTML.replace(
  //     /\n/g,
  //     `</li><li class="line">`
  //   )}</li></ol>`;
  // });
  blocks2.forEach(block => {
    hljs.highlightBlock(block);
    //从这开始是设置行号
    // block.innerHTML = `<ol><li>${block.innerHTML.replace(/\n/g,`</li><li class="line">`)}</li></ol>`;
  });
});
Vue.prototype.hljs = hljs;
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'animate.css'
import VueLazyload from 'vue-lazyload'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);
// import Aplayer from 'vue-aplayer';
// Vue.use(Aplayer, {
//   defaultCover: 'https://github.com/u3u.png',
//   productionTip: true,
// });
//import WaveItem from "@/components/effect/Wave";
//import '@/assets/js/flower.js'
import {
  getNowDate, checkHtml, getHtmlValue, randomRGB, color16, numFormatKWM, addLink, someColor, 
  getOnlyYearMonthDay, getHtmlPlainText, someNumberCount, backToTop, isLightDay,
  getDateTimeStamp, dateTimeAgo} from '@/utils/plushome'
import { dispatchSetLocalStore,_setLocalStore,_getLocalStore} from './utils/storage'
// Vue.use(getChildrenPath);
Vue.prototype.axios = axios;
Vue.use(VueLazyload, {
  error: require('@/assets/img/cover1.jpeg'),//这个是请求失败后显示的图片
  loading: require('@/assets/icon/loadingpoint.gif'),//这个是加载的loading过渡效果
  try: 1,// 这个是加载图片数量
  preLoad: 1.3,
  attempt: 1,
  listenEvents: [
    'scroll',
    'wheel',
    'mousewheel',
    'resize',
    'animationend',
    'transitionend',
    'touchmove',
  ],
})
Vue.config.productionTip = false;
//Vue.use(WaveItem);
Vue.prototype.getNowDate = getNowDate;
Vue.prototype.checkHtml = checkHtml;
Vue.prototype.color16 = color16;
Vue.prototype.numFormatKWM=numFormatKWM;
Vue.prototype.addLink=addLink;
Vue.prototype.randomRGB = randomRGB;
Vue.prototype.someColor = someColor;
Vue.prototype.getHtmlValue = getHtmlValue;
Vue.prototype.getOnlyYearMonthDay = getOnlyYearMonthDay;
Vue.prototype.getDateTimeStamp=getDateTimeStamp;
Vue.prototype.dateTimeAgo=dateTimeAgo;
Vue.prototype.someNumberCount = someNumberCount;//返回一个整数的随机数
Vue.prototype.backToTop = backToTop;
Vue.prototype.isLightDay=isLightDay;
Vue.prototype.dispatchSetLocalStore=dispatchSetLocalStore;
Vue.prototype.setLocalStore = _setLocalStore;
Vue.prototype.getLocalStore = _getLocalStore;
Vue.prototype.AppPage = new Vue();
//Vue.use($)
new Vue({
  router,
  store,
  render: h => h(App),
  // mounted () {
  //   document.dispatchEvent(new Event('render-event'))
  // }
}).$mount('#app')
