<!-- <template>
  <div class="waterfall">
    <div
      class="waterfall-item"
      v-for="(item, index) in articleList"
      :key="index"
    >
      <img
        v-lazy="
          item.indexPicture
            ? item.indexPicture
            : require('@/assets/img/cover' + someNumberCount(4) + '.jpeg')
        "
        :alt="item.articleTitle"
      />
    </div>
  </div>
</template>
  
<script>
import {
  getGpArticlesByCategory,
  getTenNewestArticle,
  listSubCategory,
  getGpNoticeNewOne,
} from "@/api/geekplus/geekplus";
export default {
  data() {
    return {
      imageList: [
        { url: "http://example.com/image1.jpg", name: "Image 1", height: 300 },
        { url: "http://example.com/image2.jpg", name: "Image 2", height: 200 },
        { url: "http://example.com/image3.jpg", name: "Image 3", height: 400 },
        { url: "http://example.com/image4.jpg", name: "Image 4", height: 250 },
        { url: "http://example.com/image5.jpg", name: "Image 5", height: 350 },
        { url: "http://example.com/image6.jpg", name: "Image 6", height: 280 },
        { url: "http://example.com/image7.jpg", name: "Image 7", height: 220 },
        { url: "http://example.com/image8.jpg", name: "Image 8", height: 320 },
        { url: "http://example.com/image9.jpg", name: "Image 9", height: 260 },
        {
          url: "http://example.com/image10.jpg",
          name: "Image 10",
          height: 380,
        },
        {
          url: "http://example.com/image11.jpg",
          name: "Image 11",
          height: 270,
        },
        {
          url: "http://example.com/image12.jpg",
          name: "Image 12",
          height: 230,
        },
      ],
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        pathName: "",
        sort: "+id",
      },
      articleTotal: 0,
      articleList: [],
    };
  },
  created() {
    this.getList();
  },
  mounted() {
    setTimeout(()=>{
        this.arrange();
    },300);
  },
  updated() {
    this.arrange();
  },
  methods: {
    getList() {
      getGpArticlesByCategory(this.queryParams).then((response) => {
        this.articleList = response.rows;
        this.articleTotal = response.total;
      });
    },
    arrange() {
      const container = document.querySelector(".waterfall");
      const items = container.querySelectorAll(".waterfall-item");
      const gap = 20; // 子元素间距
      let colHeight = [0, 0, 0]; // 存储每一列的高度
      items.forEach((item) => {
        // 获取最小列的索引和高度
        let minHeight = Math.min(...colHeight);
        let minIndex = colHeight.indexOf(minHeight);
        // 设置子元素位置
        item.style.top = `${minHeight}px`;
        item.style.left = `${minIndex * (item.offsetWidth + gap)}px`;
        // 更新列高度
        colHeight[minIndex] += item.offsetHeight + gap;
      });
      // 设置容器高度
      const maxHeight = Math.max(...colHeight);
      container.style.height = `${maxHeight}px`;
    },
  },
};
</script>
<style>
.waterfall {
  display: flex;
  flex-wrap: wrap;
}
.waterfall-item {
  flex-grow: 1;
  margin: 5px;
}

.waterfall-item img {
  width: 100%;
}
</style> -->
<template>
  <div class="waterfall" ref="container">
    <div
      class="waterfall-item"
      v-for="(item, index) in articleList"
      :key="index"
    >
      <img
        v-lazy="
          item.indexPicture
            ? item.indexPicture
            : require('@/assets/img/cover' + someNumberCount(4) + '.jpeg')
        "
        :alt="item.articleTitle"
      />
    </div>
  </div>
</template>
<script>
import {
  getGpArticlesByCategory,
  getTenNewestArticle,
  listSubCategory,
  getGpNoticeNewOne,
} from "@/api/geekplus/geekplus";
export default {
  data() {
    return {
      imageList: [
        { url: "http://example.com/image1.jpg", name: "Image 1" },
        { url: "http://example.com/image2.jpg", name: "Image 2" },
        { url: "http://example.com/image3.jpg", name: "Image 3" },
        { url: "http://example.com/image4.jpg", name: "Image 4" },
        { url: "http://example.com/image5.jpg", name: "Image 5" },
        { url: "http://example.com/image6.jpg", name: "Image 6" },
        { url: "http://example.com/image7.jpg", name: "Image 7" },
        { url: "http://example.com/image8.jpg", name: "Image 8" },
        { url: "http://example.com/image9.jpg", name: "Image 9" },
        { url: "http://example.com/image10.jpg", name: "Image 10" },
        { url: "http://example.com/image11.jpg", name: "Image 11" },
        { url: "http://example.com/image12.jpg", name: "Image 12" },
      ],
      gap: 5,
      colCount: 4,
      colHeight: [],
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        pathName: "",
        sort: "+id",
      },
      articleTotal: 0,
      articleList: [],
      windowWidth:0,
      windowHeight:0,
    };
  },
  created(){
    this.getList();
  },
  mounted() {
    setTimeout(()=>{
        this.init();
        this.itemStyle(4)
    },300);
    //window.addEventListener("resize", this.init);
    window.onresize = () => {
      return (() => {
        //this.loadWaterFall("waterfall-container", "thumbnail");
        this.init();
        this.itemStyle(4)
      })();
    };
  },
  watch:{
    windowHeight(val) {
      let that = this;
      //console.log("实时屏幕高度：", val, that.windowHeight);
      //chatHeight=that.windowHeight
    },
    windowWidth(val) {
      let that = this;
      //console.log("实时屏幕宽度：", val, that.windowHeight);
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.init);
  },
  methods: {
    getList() {
      getGpArticlesByCategory(this.queryParams).then((response) => {
        this.articleList = response.rows;
        this.articleTotal = response.total;
      });
    },
    init() {
      //const container = this.$refs.container;
      const container = document.querySelector(".waterfall");
      const items = container.querySelectorAll(".waterfall-item");
      // 计算列宽
      const containerWidth = container.offsetWidth;
      const itemWidth =
        (containerWidth - this.gap * (this.colCount - 1)) / this.colCount;
      // 初始化列高
      this.colHeight = Array(this.colCount).fill(0);
      // 计算子元素位置
      items.forEach((item) => {
        const minIndex = this.colHeight.indexOf(Math.min(...this.colHeight));
        item.style.width = `${itemWidth}px`;
        item.style.top = `${this.colHeight[minIndex]}px`;
        item.style.left = `${minIndex * (itemWidth + this.gap)}px`;
        this.colHeight[minIndex] += item.offsetHeight + this.gap;
      });
      // 设置容器高度
      const maxHeight = Math.max(...this.colHeight);
      container.style.height = `${maxHeight}px`;
    },
    itemStyle(index) {
      const containerWidth = this.$refs.container.offsetWidth;
      const itemWidth =
        (containerWidth - this.gap * (this.colCount - 1)) / this.colCount;
      const minIndex = this.colHeight.indexOf(Math.min(...this.colHeight));
      const itemHeight =
        (itemWidth * this.imageList[index].height) /
        this.imageList[index].width;
      const style = {
        width: `${itemWidth}px`,
        top: `${this.colHeight[minIndex]}px`,
        left: `${minIndex * (itemWidth + this.gap)}px`,
        height: `${itemHeight}px`,
      };
      this.colHeight[minIndex] += itemHeight + this.gap;
      return style;
    },
  },
};
</script>
<style>
.waterfall {
  position: relative;
}

.waterfall-item {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.waterfall-item img {
  width: 100%;
}
</style>