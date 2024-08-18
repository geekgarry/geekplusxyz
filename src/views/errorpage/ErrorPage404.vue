<template>
  <div class="errorContent">
    <div class="other_error_page">
      <section class="container">
        <div>
          <div class="error404Page">
            <img src="../../assets/img/error/404.jpg" />
          </div>
          <div class="errorWords">
            <div class="errorWords_display">
              <p>由于天气原因，这个页面已经去南极避暑了</p>
              <p>
                如果没有跳转，请点击<a href="/"><u>首页</u></a>
              </p>
              <div class=""><b id="num">4</b>秒后跳转到首页</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null, //定时器
    };
  },
  mounted() {},
  computed: {
    // ...mapGetters(['pageIndex']),
    // userInfo(){
    // return getStore({name: 'userInfo'})
    // }
  },
  created() {
    this.initTimer();
    //this.countDown(5)
  },
  methods: {
    //5秒刷新数据
    initTimer: () => {
      setInterval(() => {
        //this.initData()
        window.location.href = "/";
      }, 4000);
    },
    // countDown(secs) {
    //     if(--secs>0) {
    //         document.getElementById("num").innerText=secs;
    //         setTimeout(() => {countDown(secs)},1000);
    //     }
    //     else{
    //         window.location.href='/';
    //     }
    // },
  },
};
</script>

<style>
</style>