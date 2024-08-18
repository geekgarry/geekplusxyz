<template>
  <!--    轮播图开始-->
  <div
    id="SlideSwiper"
    class="carousel slide"
    data-ride="carousel"
    :data-pause="carouselParams.dataPause"
    :data-touch="carouselParams.dataTouch"
    :data-interval="carouselParams.dataInterval"
  >
    <!-- 轮播(Carousel)指标 -->
    <!-- <ol class="carousel-indicators"  v-for="(item,index) in swiperList" :key="index">
      <li data-target="#SlideSwiper" :data-slide-to="index" :class="index===0?'active':''"></li>
      <li data-target="#SlideSwiper" data-slide-to="1"></li>
      <li data-target="#SlideSwiper" data-slide-to="2"></li>
    </ol> -->
    <!-- 轮播(Carousel)指标 -->
    <ol class="carousel-indicators">
      <li 
        v-for="(item, index) in swiperList"
        :key="index"
        :data-slide-to="index"
        :class="index == 0 ?'active':''"
        data-target="#SlideSwiper"
      ></li>
      <!-- <li data-target="#SlideSwiper" data-slide-to="1"></li>
        <li data-target="#SlideSwiper" data-slide-to="2"></li> -->
    </ol>
    <!-- 轮播(Carousel)项目 -->
    <div class="carousel-inner">
      <div
        v-for="(item, index) in swiperList"
        :key="index"
        :class="
          index == 0
            ? 'item active animate__animated animate__fadeInLeft animate__fadeInRight'
            : 'item animate__animated animate__fadeInLeft animate__fadeInRight'
        "
        :style="{ backgroundImage: 'url('+ item.carouselImg + ')' }"
      >
        <!-- :style="{backgroundImage:'url('+item.carouselImg+')'}" v-lazy:background-image="item.carouselImg"-->
        <!-- 以背景展示轮播图 -->
        <!-- :style="{backgroundImage:'url('+item.imgSrc+')'}" -->
        <!-- <a target="_blank" href="#">
                <img src="/imgs/superSlide/images/11.jpg" />
                <span>11</span>
            </a> -->
        <a target="_blank" :href="item.carouselLink">
          <!-- <img
              :src="item.carouselImg"
              :alt="item.carouselTitle"
            /> -->
          <div class="carousel-caption">
            <h5 class="hidden-sm hidden-xs">
              {{ item.carouselInfo ? item.carouselInfo : "设计轮播图效果" }}
            </h5>
            <p>{{ item.carouselTitle }}</p>
          </div>
        </a>
      </div>
      <!-- <div class="item bg2 animate__animated animate__fadeInLeft">
          <a target="_blank" href="#">
            <img
              src="/imgs/superSlide/images/22.jpg"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption">
              <h5>设计轮播图效果</h5>
              <p>说明文字</p>
            </div>
          </a>
        </div> -->
      <!-- <div class="item bg3 animate__animated animate__fadeInLeft">
            <a target="_blank" href="#">
                <img src="/imgs/superSlide/images/33.jpg" />
                <span>33</span>
            </a>
        </div> -->
      <!-- <div class="carousel-item active">
            <img src="/imgs/superSlide/images/11.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption">
                <h5>设计轮播图效果</h5>
                <p>说明文字</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="/imgs/superSlide/images/22.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption">
                <h5>设计轮播图效果</h5>
                <p>说明文字</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="/imgs/superSlide/images/33.jpg" class="d-block w-100" alt="">
            <div class="carousel-caption">
                <h5>设计轮播图效果</h5>
                <p>说明文字</p>
            </div>
        </div> -->
    </div>
    <!-- 轮播(Carousel)导航 -->
    <a
      class="left carousel-control"
      href="#SlideSwiper"
      role="button"
      data-slide="prev"
    >
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">上一条</span>
    </a>
    <a
      class="right carousel-control"
      href="#SlideSwiper"
      role="button"
      data-slide="next"
    >
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">下一条</span>
    </a>
    <!--    轮播图结束-->
  </div>
</template>

<script>
// 引入插件
import $ from 'jquery';
export default {
  name: "SlideSwiper",
  props: {
    carouselParams: {
      type: Object,
      default: function () {
        return {
          dataRide: "carousel",
          dataPause: false,
          dataTouch: true,
          dataInterval: 3000,
        };
      },
    },
    //首页轮播图数据
    swiperList: {
      type: [Array, Object],
      default: function () {
        return this.imgList;
      },
    },
  },
  data() {
    return {
      imgList: [
        {
          carouselImg: "/imgs/superSlide/images/11.jpg",
          carouselInfo: "",
          carouselLink: "#",
          carouselTitle: "111",
        },
        {
          carouselImg: "/imgs/superSlide/images/22.jpg",
          carouselInfo: "",
          carouselLink: "#",
          carouselTitle: "222",
        },
        {
          carouselImg: "/imgs/superSlide/images/33.jpg",
          carouselInfo: "",
          carouselLink: "#",
          carouselTitle: "333",
        },
      ],
      baseHost:window.location.host,
      baseApi:process.env.VUE_APP_BASE_API
    };
  },
  created() {
    // console.log("创造！")
  },
  mounted() {
    // console.log("挂载！")
    // document.getElementsByClassName('carousel')[0].carousel({
    //     interval: 2000
    // })
    $('#SlideSwiper').carousel({
      interval: 3000
    })
  },
  methods: {},
};
</script>

<style>
/** @media screen and (max-width: 440px) {
    #SlideSwiper {
        height: 150px;
        margin: 10px auto;
        position: relative;
        overflow: hidden;
      }
      #SlideSwiper .item {
        width: 100%;
        height: 150px;
        background-size: cover;
        /* 定义动画延迟时间，无限重复，步进为3，根据需求自行调整*/
/*animation: mybox 5s infinite steps(3);*/
/*}
      #SlideSwiper .item img {
        margin: 0 auto;
        object-position: center;
        object-fit: cover;
      }
}
@media screen and (max-width: 767px) {
    #SlideSwiper {
        height: 250px;
        margin: 10px auto;
        position: relative;
        overflow: hidden;
      }
      #SlideSwiper .item {
        width: 100%;
        height: 250px;
        background-size: cover;*/
/* 定义动画延迟时间，无限重复，步进为3，根据需求自行调整*/
/*animation: mybox 5s infinite steps(3);*/
/**}
      #SlideSwiper .item img {
        margin: 0 auto;
        object-position: center;
        object-fit: cover;
      }
} */
/** #SlideSwiper .bg1{
    background: url("/imgs/superSlide/images/11.jpg") no-repeat center fixed;
    background-size: cover;
}
#SlideSwiper .bg2{
    background: url("/imgs/superSlide/images/22.jpg") no-repeat center fixed;
    background-size: cover;
}
#SlideSwiper .bg3{
    background: url("/imgs/superSlide/images/33.jpg") no-repeat center fixed;
    background-size: cover;
} **/
/* 定义关键帧，从第一个div移动到最后一个div，
	高度为500px，宽度被占满，所以最后一个就需要从Y轴移动-1500px，
	根据需求自行调整*/
/**@keyframes mybox {
  form {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-1500px);
  }
}**/
</style>