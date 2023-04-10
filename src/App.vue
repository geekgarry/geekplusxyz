<template>
  <div id="app">
    <router-view />
    <loading-page :loading-st="isLoading"></loading-page>
  </div>
</template>

<script>
import LoadingPage from './components/refresh/LoadingPage.vue';
export default  {
  components: { LoadingPage },
  name:  'App',
  // props:{
  //   isLoading:{
  //     type: Boolean,
  //     default:()=>{
  //       return false;
  //     }
  //   }
  // },
  data(){
    return{
      isLoading:true,
    }
  },
  created(){
    console.log("%c欢迎你！","background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:5em");
    console.log('当前时间：%O', new Date());
    console.log("%chttps://www.geekplus.xyz","background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #25e),color-stop(0.75, #4f2), color-stop(0.9, #f2f), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:1.5em;")
    // console.log("%c", "padding:50px 300px;line-height:120px;background:url('https://www.geekplus.xyz/imgs/logo.png') no-repeat;");
    var _this = this;
    this.isLoading=false;
    // this.AppPage.$on("isLoading", function (data) {
    //   that.isLoading = !!data;
    // });
  },
  mounted(){
    this.AppPage.$emit("loading",false);
    //this.isLoading=false;
    // let loading=document.getElementsByClassName("loading-container")[0];
    // document.body.removeChild(loading);
  }
}
</script>

<style lang="scss">
/* 定义全局的css变量 */
// 定义基础色值，方便 UI 后期替换
:root {
  --zt-c-white: #f4f3f3;
  --zt-c-black: #111111e2;
  --zt-c-primary: rgb(109, 170, 144);

  --zt-c-text-light-1: #333;
  --zt-c-text-light-2: #666;
  --zt-c-text-dark-1: var(--zt-c-white);
  --zt-c-text-dark-2: rgba(235, 235, 235, 0.64);
}
// Light 默认主题色
:root body[theme-mode="light"]{
  --color-background: var(--zt-c-white);
  --color-heading: var(--zt-c-primary);
  --color-text: var(--zt-c-text-light-1);
  --color-text-2: var(--zt-c-text-light-2);
}
// Dark主题颜色
:root body[theme-mode="dark"]{
  --color-background: var(--zt-c-black);
  --color-heading: var(--zt-c-primary);
  --color-text: var(--zt-c-text-dark-1);
  --color-text-2: var(--zt-c-text-dark-2);
}
.loading-container{
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  opacity: 56;
  z-index: 999;
  background-color: #ffffffd3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
}
.loading-gif{
  display: block;
  text-align: center;
}
/** #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
} */
</style>
