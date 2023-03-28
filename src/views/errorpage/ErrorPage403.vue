<template>
  <div class="error403Content">
    <div class="other_error403_page">
      <section class="row">
        <div class="container">
          <div class="error403Page">
            <img src="../../assets/img/error/error403.jpeg" />
          </div>
          <div class="errorWords">
            <div class="errorWords_display" style="margin-top: 30px">
              <p>不好意思，您的权限不够，无法访问</p>
              <!--                            <p><a href="/"><u>返回首页</u></a>-->
              <!--                                <a href="#" style="margin-left: 30px"></a>-->
              <!--                            </p>-->
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
      timerOut: null,
    };
  },
  created(){
    //this.intiTimer();
    // this.timerOut = window.setInterval(() => {
    //   setTimeout(this.getTableUp(), 0);
    // }, 3000);
    //setTimeout(this.goToIndex(), 2000);
  },
  mounted() {
    // this.getTableUp();
    // this.timerOut = window.setInterval(() => {
    //   setTimeout(this.getTableUp(), 0);
    // }, 3000);
    setTimeout(function(){
      window.location.href="/";
    }, 4000);
  },
  methods:{
    intiTimer:()=>{
      setInterval(() => {
        window.location.href="/";
      }, 5000);
    },
    goToIndex(){
      window.location.href="/";
    }
  },
  beforeDestroy() {
    clearInterval(this.intiTimer);
    //this.timerOut = null;
  },
};
</script>

<style>
</style>