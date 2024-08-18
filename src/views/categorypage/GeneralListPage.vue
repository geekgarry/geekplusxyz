<template>
  <div>
    <div class="container-article">
      <div class="container">
        <section class="row">
          <div class="">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 animate_animated animate_slideInLeft">
              <div class="articleList-bread-crumb">
                <div class="plus-bread-crumb">
                  <bread-crumb>
                    <bread-crumb-item
                      v-for="(item, index) in breadCrumbList"
                      :key="index"
                      :to="index + 1 == breadCrumbList.length ? '' : item.path"
                      >{{ item.meta.title }}</bread-crumb-item
                    >
                    <!-- <bread-crumb-item>文章</bread-crumb-item> -->
                  </bread-crumb>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="fastmenu">
                    <span
                      v-for="(item, index) in allCategoryList"
                      :key="index"
                    >
                      <router-link :to="item.path">{{
                        item.categoryName
                          ? item.categoryName
                          : "编程技术&nbsp;(13)"
                      }}</router-link>
                    </span>
                    <!-- <span><a href="/">文章博客</a></span>
                    <span><a href="/">新闻资讯</a></span>
                    <span><a href="/">资源文件</a></span>
                    <span><a href="/">格物生活</a></span>
                    <span><a href="/">给我留言</a></span> -->
                  </div>
                </div>
              </div>
              <div class="row" id="waterfall-container">
                <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
                  <div class="articleList-item">
                    <div class="thumbnail" v-for="(item, index) in articleList"
                    :key="index" ref="thumbnailBox">
                    <router-link :to="'/article/' + item.id">
                      <img class="img-responsive img-rounded"
                        v-lazy="item.indexPicture ? item.indexPicture
                        : require('@/assets/img/cover' + someNumberCount(4) + '.jpeg')"
                        :alt="item.articleTitle"
                      />
                      <div class="caption">
                        <p>
                          {{ item.articleTitle ? item.articleTitle : "title" }}
                        </p>
                      </div>
                    </router-link>
                    </div>
                  </div>
                </div> -->
                <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <honey-comb :imageList="articleList"></honey-comb>
                </div> -->
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="row-list mt-5">
                    <div class="col" v-for="(item, index) in articleList"
                      :key="index">
                        <div class="card">
                          <div class="card-header">
                            <router-link :to="'/article/' + item.id">
                              <img v-lazy="item.indexPicture ? item.indexPicture : require('@/assets/img/cover'+someNumberCount(4)+'.jpeg')"
                                :alt="item.articleTitle">
                            </router-link>
                          </div>
                          <div class="card-body">
                            <h6 class="card-title">
                              <router-link :to="'/article/' + item.id">{{ item.articleTitle ? item.articleTitle : "title" }}</router-link>
                            </h6>
                            <p class="date-author">
                              <span class="glyphicon glyphicon-time" aria-hidden="true"></span>&nbsp;{{ item.createTime ? dateTimeAgo(item.createTime) : "2015-04-04" }} 
                              <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>&nbsp;{{ item.viewCount? numFormatKWM(item.viewCount) : 0 }}
                              <!-- <span class="author">{{item.authorName}}</span> -->
                            </p>
                            <p class="card-text">
                              <!-- 一个长期存在的事实是，当一个读者看到一个页面的布局时，它就会成为它的读者。 -->
                              <span v-for="tags,index in item.tags" :key="index">
                                <router-link
                                  :to="{ path: '/articleListForTag', query: { tagName: tags.tagName } }">
                                  #{{ tags.tagName }}
                                </router-link>
                              </span>
                            </p>
                          </div>
                        </div>
                        <!-- <div class="card" v-else-if="item.articleTitle=='ads'">
                          <div class="card-body">
                            <InFeedAdsense
                              ins-style="display:block"
                              data-ad-format="fluid"
                              data-ad-layout-key="+1m+rx+1+2-3"
                              data-ad-client="ca-pub-7291512442295477"
                              data-ad-slot="1214638382">
                            </InFeedAdsense>
                          </div>
                        </div> -->
                    </div>
                  </div>
                  <!-- <article
                  class="item" >
                  <div class="art-item">
                    <div class="left-art-img">
                      <div class="art-img">
                        <router-link :to="'/article/' + item.id">
                          <img
                            v-lazy="item.indexPicture ? item.indexPicture : require('@/assets/img/cover'+someNumberCount(4)+'.jpeg')"
                            :alt="item.articleTitle"/>
                        </router-link>
                        <div class="overlay hidden-sm hidden-xs">
                          <h2>
                            {{
                              item.articleTitle ? item.articleTitle : "title"
                            }}
                          </h2>
                          <router-link class="info" :to="'/article/' + item.id"
                            >详细</router-link
                          >
                        </div>
                      </div>
                    </div> -->
                    <!-- <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <router-link :to="'/article/' + item.id">{{
                            item.articleTitle
                              ? item.articleTitle
                              : "《maike市集》"
                          }}</router-link>
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                v-lazy="require('@/assets/icon/mai.png')"
                                class="article_user_pic"
                              />
                            </li>
                            <li class="hidden-xs">
                              <a href="javascript:void(0);">{{
                                item.authorName ? item.authorName : "geekplus"
                              }}</a>
                            </li>
                            <li>
                              <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>&nbsp;{{ item.viewCount? numFormatKWM(item.viewCount) : 999 }}
                            </li>
                            <li>
                              <span class="glyphicon glyphicon-time" aria-hidden="true"></span>&nbsp;{{ item.createTime ? getOnlyYearMonthDay(item.createTime) : "2015-04-04" }}
                            </li>
                          </ul>
                        </div>
                        <div
                          v-if="item.articleContent !== ''"
                          v-text="item.abstractText"
                          class="desc"
                        ></div>
                        <div v-else class="desc">
                          这是一篇文章，虽然他没有文字，市集里最熟悉的陌生人，多年以后，我们又在繁华的市集相遇，伫立对视片刻，便擦肩而过，消失在了人潮中。
                        </div>
                      </div>
                    </div> -->
                  <!-- </div>
                </article> -->
                </div>
                <!-- <article class="item">
                  <div class="art-item">
                    <div class="left-art-img">
                      <div class="art-img">
                        <img
                          src="/imgs/ChMkJ1bKziaIU3lvAAgAJKmcCvEAALJIAFrDQAACAA8015.jpg"
                        />
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="/"
                            >DIV+CSS静态HTML网页设计模板</a>
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img
                                src="/imgs/mai.png"
                                class="article_user_pic"
                              />
                            </li>
                            <li class="hidden-xs">
                              <a href="/">周末</a>
                            </li>
                            <li>2015-04-04</li>
                          </ul>
                        </div>
                        <p class="desc">
                          这个网页设计是否似曾相识，不错就是在《篮球明星网页设计》版本上修改而成的，这款更适合女孩子
                        </p>
                      </div>
                    </div>
                  </div>
                </article>-->
              </div>
              <div v-if="articleTotal>queryParams.pageSize" class="load-more-data visible-xs">
                <a href="javascript:void(0);" @click="loadMoreData">{{ loadMoreBtn }}</a>
              </div>
              <!-- <nav aria-label="Page navigation" v-if="articleTotal!=0">
                <ul class="pagination">
                  <li v-if="queryParams.pageNum != 1" :class="queryParams.pageNum == 1 ? 'disabled' : ''">
                    <a
                      href="javascript:void(0);"
                      @click="getArticleList(queryParams.pageNum - 1)"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li
                    :class="queryParams.pageNum == pageNumber ? 'active' : ''"
                    v-for="(pageNumber, index) in Math.ceil(
                      articleTotal / queryParams.pageSize
                    )"
                    :key="index"
                  >
                    <a
                      v-if="queryParams.pageNum <= 4 && pageNumber <= 9"
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 4
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 3
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 2
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum - 1
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 1
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 2
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 3
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                    <a
                      v-if="
                        queryParams.pageNum > 4 &&
                        pageNumber == queryParams.pageNum + 4
                      "
                      href="javascript:void(0);"
                      @click="getArticleList(pageNumber)"
                      >{{ pageNumber }}
                    </a>
                  </li>
                  <li v-if="queryParams.pageNum != Math.ceil(articleTotal / queryParams.pageSize)" :class="queryParams.pageNum == Math.ceil(articleTotal / queryParams.pageSize) ? 'disabled' : ''">
                    <a
                      href="javascript:void(0);"
                      @click="getArticleList(queryParams.pageNum + 1)"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav> -->
              <plus-pager class="hidden-xs"
                :total="articleTotal"
                :pageNum="queryParams.pageNum"
                :pageSize="queryParams.pageSize"
                :pluspagerMethod="getArticleList"
              >
              </plus-pager>
              <div class="row mx-4">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <Adsense
                    data-ad-client="ca-pub-7291512442295477"
                    data-ad-slot="6482220433">
                  </Adsense>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import MKLogo from "@/assets/icon/mai.png";
import {
  getGpArticlesByCategory,
  getTenNewestArticle,
  listSubCategory,
  getGpNoticeNewOne,
} from "@/api/geekplus/geekplus";
// import HoneyComb from '@/components/HoneyComb'
// import WaterFall from '@/components/waterfall/WaterFall.vue';
export default {
  name: "ArticleListPage",
  components:{
    // WaterFall,
    //HoneyComb
  },
  data() {
    return {
      userName: "",
      keywords: "",
      queryParams: {
        pageNum: 1,
        pageSize: 12,
        pathName: "",
      },
      articleTotal: 0,
      articleList: [],
      pageNum: 9,
      tenNewArticle: [],
      allCategoryList: [],
      oneNewNotice:{},
      categoryName:'',
      breadCrumbList:[],
      array: [], //定义空数组存储元素高度
      loadMoreBtn:"加载更多",
    };
  },
  beforeCreate(){
  },
  created() {
    this.$router.onReady(() => {
      //console.log(this.$route.path.split('/'));
      var pathArr=this.$route.path.split('/');
      this.queryParams.pathName = this.$route.path.split('/')[2] || this.$route.params.categoryPath;
      window.document.title=(this.$route.meta.title||this.queryParams.pathName)+"文章列表 | 极客普拉斯&梦极客园" || "极客普拉斯&梦极客园-geekplus";
      this.getAllArticleCategory(this.$route.path.split('/')[1]);
    });
    //console.log(this.$route.path.split('/')[2]);
    //console.log(this.categoryName);
    //console.log(this.queryParams.pathName);
    this.getArticleList(1);
    //this.getTenNewArticle();
    //this.getOneNewestNotice();
    this.getBreadCrumb();
    // document.onkeydown = function (e) {
    //   // 回车提交表单
    //   // 兼容FF和IE和Opera
    //   var theEvent = window.event || e;
    //   var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    //   if (code == 13) {
    //     this.searchResult();
    //   }
    // };
  },
  mounted() {
    //当页面加载的时候调用
    // window.onload = function(){
    // }
    // 相当于window.onload;
    // 使用nextTick就能再组件加载完了以后才运行。
    setTimeout(() => { // 防止图片高度没有加载出来
      //this.loadWaterFall("waterfall-container", "thumbnail");
      //this.waterfall();
      // this.articleList.push({ id: -1,articleTitle: "ads"});
    },100);
    // this.waterFall("#tabContainer", ".tab-item"); //实现瀑布流
    // 窗口变化自适应布局
    window.onresize = () => {
      return (() => {
        //this.loadWaterFall("waterfall-container", "thumbnail");
        //this.waterfall();
      })();
    };
  },
  computed:{
	},
  watch:{
    $route(to, from) {
      var pathArr=this.$route.path.split('/');
      this.queryParams.pathName = this.$route.path.split('/')[2] || this.$route.params.categoryPath;
      window.document.title=(this.$route.meta.title||this.queryParams.pathName)+"文章列表 | 极客普拉斯&梦极客园" || "极客普拉斯&梦极客园-geekplus";
      this.getAllArticleCategory(this.$route.path.split('/')[1]);
    }
  },
  methods: {
    scroll(scrollData){
      console.log(scrollData)
    },
	  switchCol(col){
	    this.col = col
	    console.log(this.col)
	  },
	  loadmore(index){
	    this.data = this.data.concat(this.data)
	  },
    //分页测试
    getCurrentNumber(number) {
      this.pageNum = number;
    },
    //正常分页加载
    getArticleList(pageNum) {
      this.queryParams.pageNum=pageNum;
      // var total = this.articleTotal;
      // var pageSize = this.queryParams.pageSize;
      // var pageAllNum = total / pageSize;
      // if (pageNum <= 0) {
      //   //console.log("页数等于0")
      //   this.queryParams.pageNum = 1;
      // } else if (total<=pageSize) {
      //   //console.log("页数小于一")
      //   this.queryParams.pageNum = 1;
      // } else if(pageNum >= Math.ceil(pageAllNum)){
      //   //console.log("页数等于最大页数")
      //   this.queryParams.pageNum = Math.ceil(pageAllNum);
      // }
      //this.queryParams.pageSize=10;
      getGpArticlesByCategory(this.queryParams)
        .then((response) => {
          this.articleList = response.rows;
          this.articleTotal = response.total;
          // this.articleList.push({ id: -1,articleTitle: "ads"});
          // console.log(this.articleList);
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
          this.loadMoreBtn="数据加载失败";
        }).finally(() => {});
      setTimeout(async() => {this.backToTop();},1000);
    },
    //懒加载方法
    loadMoreArticleList(pageNum){
      this.queryParams.pageNum=pageNum;
      this.loadMoreBtn="加载数据...";
      getGpArticlesByCategory(this.queryParams)
        .then((response) => {
          //console.log(response);
          //this.articleList = response.rows;
          this.articleList = this.articleList.concat(response.rows);
          this.articleTotal = response.total;
          setTimeout(async() => {this.loadMoreBtn="加载更多";},1000);
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
          this.loadMoreBtn="数据加载失败";
        }).finally(() => {
        });
        //this.backToTop()
    },
    getTenNewArticle() {
      let data = {};
      getTenNewestArticle(data)
        .then((response) => {
          //console.log(response.data);
          this.tenNewArticle = response.data;
        })
        .catch((error) => {
          //console.log(error.msg)
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getAllArticleCategory(pathName) {
      // let tempMenuList = this.$router.options.routes.filter(
      //   (item) => { return item.type == "servermenu"}
      // );this.allCategoryList=[];
      let categoryPathList=this.$store.getters.addRoutes.slice(0,4);
      //this.getListSubCategory(this.$store.getters.addRoutes.slice(0,4));
      // var reg = RegExp('/'+pathName+'/');
      // this.allCategoryList=categoryPathList.filter((item) => {
      //   console.log(item.path.indexOf(pathName));//search
      //   return item.path.includes(pathName)==true;
      // })
      // console.log(pathName);
      // if(str.match(reg)){// 包含 }
      var tempCat=[];
      categoryPathList.forEach((item) => {
        item.children.forEach((childItem) => {
          if(item.path.indexOf(pathName) != -1||childItem.path.search(pathName) != -1){
            let childCategory={
              path:item.path+'/'+childItem.path,
              categoryName:childItem.meta.title,
            }
            tempCat.push(childCategory);
          }
        })
      })
      this.allCategoryList=tempCat;
      //console.log(this.allCategoryList)
      // listSubCategory()
      //   .then((response) => {
      //     //console.log(response)
      //     this.allCategoryList = response.data;
      //   })
      //   .catch((error) => {
      //     this.$toasted.error(error.msg, {
      //       position: "top-center",
      //       duration: 3000,
      //       theme: "bubble",
      //     });
      //   });
    },
    getListSubCategory(list){
      let listCategory=new Array();
      list.forEach(parent => {
        parent.children.forEach(child => {
          let childCategory={
            path:parent.path+'/'+child.path,
            categoryName:child.meta.title,
          }
          listCategory.push(childCategory)
        })
      });
      return listCategory;
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
    getOneNewestNotice(){
      getGpNoticeNewOne().then((response) =>{
        this.oneNewNotice=response.data;
      });
    },
    //获取路径的面包屑，首页/其他页/其他页
    getBreadCrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title && item.path !== ""
      );
      const first = matched[0];
      if (!this.isHome(first)) {
        matched = [{ path: "/", name: "home", meta: { title: "首页" } }].concat(
          matched
        );
      }
      this.breadCrumbList = matched.filter(
        (item) => item.meta && item.meta.title !== ''
      );
      //console.log(matched); //匹配路由地址，用来显示路径面包屑
      //console.log(this.breadCrumbList);//匹配路由地址，用来显示路径面包屑
    },
    //判断当前路由是否是首页，返回两者等于的结果true
    isHome(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === "home".toLocaleLowerCase(); //返回true
    },
    //加载更多组件按钮
    loadMoreData(){
      this.queryParams.pageNum+=1;
      if(this.queryParams.pageNum<=Math.ceil(this.articleTotal/this.queryParams.pageSize)){
        this.loadMoreArticleList(this.queryParams.pageNum);
      }else{
        this.loadMoreBtn="数据加载完了";
      }
    },
    //加载瀑布流函数//思路来自Amy
    loadWaterFall(boxID,thumbnailClass){
      //获取装缩略图外部的盒子
      var box = document.getElementById(boxID);
      //获取装缩略图的数组
      var thumbnail = box.getElementsByClassName(thumbnailClass);
      //获取每个缩略图的宽度
      var thumbnailWidth = thumbnail[0].offsetWidth;
      //计算盒子内每行可以排列几个缩略图
      var colCount = Math.floor((document.documentElement.clientWidth*(10/12))/thumbnailWidth);
      //创建放每次整理好的高度数组
      var thumbnailHeightArr = [];
      for(var i = 0; i < thumbnail.length; i++){
          //获取第一行高度数组
          if(i < colCount){
              thumbnailHeightArr.push(thumbnail[i].offsetHeight);
          }else{
              //获取之前最小高度
              var minHeight = Math.min.apply(null,thumbnailHeightArr);
              //第一行最小高度索引
              var minIndex = thumbnailHeightArr.indexOf(minHeight);
              //将此缩略图放在上面那行最小高度下面
              thumbnail[i].style.position = 'absolute';
              //距离顶部长度为这个缩略图上面那个缩略图的长度
              thumbnail[i].style.top = minHeight + 'px';
              //距离左边长度为这个缩略图上面那个缩略图距离左边的长度
              thumbnail[i].style.left = thumbnail[minIndex].offsetLeft + 'px';
              //更新最小高度
              thumbnailHeightArr[minIndex] += thumbnail[i].offsetHeight;
          }
      }
    },
    // waterfall，等到整个视图都渲染完毕再执行
    waterfall() {
      // 选择所有图片
      this.imgBoxEls = this.$refs["thumbnailBox"];
      // 若没图片，则返回
      if (!this.imgBoxEls)
          return;
      let top, left, height;
      // 开始排列的坐标，若为0则重头排列，colsHeightArr 数组保存的是当前每一列的高度
      if (this.beginIndex === 0)
          this.colsHeightArr = []
      for (let i = this.beginIndex; i < this.imgBoxEls.length; ++i) {
          if (!this.imgBoxEls[i])
              return;
          // 当前图片的高度
          height = this.imgBoxEls[i].offsetHeight;
          // 第一行，则直接按顺序排列
          if (i < this.colNum) {
              this.colsHeightArr.push(height);
              top = 0;
              // colWidth 为列宽，等于图片宽度加 div 左右的padding，colWidth = imgWdith + 2 * padding
              left = i * this.colWidth;
          } else {
              // 找到当前最低的高度和其索引
              let minHeight = Math.min.apply(null, this.colsHeightArr);
              let minIdx = this.colsHeightArr.indexOf(minHeight);
              // 当前图片的 top，即当前图片应所在的高度
              top = minHeight;
              // 当前图片的 left，即当前图片应该排到目前高度最低那一列下面
              left = minIdx * this.colWidth;
              // 更新第 minIdx 列的高度
              this.colsHeightArr[minIdx] += height;
          }
          // 设置 img-box 位置
          this.imgBoxEls[i].style.top = top + "px";
          this.imgBoxEls[i].style.left = left + "px";
          // 当前图片在窗口内，则加载，这是用于后面的图片懒加载。viewHeight 为窗口高度
          if (top < this.viewHeight) {
              let imgEl = this.imgBoxEls[i].children[0];
              imgEl.src = imgEl.getAttribute("data-src");
              imgEl.style.opacity = 1;
              imgEl.style.transform = "scale(1)";
          }
      }   
      // 排列完之后，之后新增图片从这个索引开始预加载图片和排列，之前排列的图片无需在处理
      this.beginIndex = this.imgBoxEls.length;
    },
    getWaterfall() {
      let columns = 2; //定义布局的列数为2
      let item = document.getElementsByClassName("thumbnail"); //获取每个子元素的DOM
      console.log("item",item)
      for (let i = 0; i < item.length; i++) {
        //遍历整个子元素的DOM集合
        if (i < columns) {
          //小于columns的子元素作为第一行
          item[i].style.top = 20 + 'px';
          item[i].style.left = item[0].clientWidth * i + "px";
          console.log("offsetWidth", item[0].clientHeight)
          this.array.push(item[i].clientHeight); //遍历结束时，数组this.array保存的是第一行子元素的元素高度
          console.log("this.array",this.array)
        } else {
          //大于等于columns的子元素将作其他行
          let minHeight = Math.min(...this.array); //  找到第一列的最小高度
          let index = this.array.findIndex(item => item === minHeight) // 找到最小高度的索引
          //设置当前子元素项的位置
          item[i].style.top = this.array[index] +25+ "px"; 
          item[i].style.left = item[index].offsetLeft + "px";
          //重新定义数组最小项的高度 进行累加
          this.array[index]+= item[i].clientHeight
          console.log("this.array[index]",this.array[index])
        }
      }
    },
  },
  destroyed(){

  },
};
</script>
 
<style lang="scss" scoped>
.mt-5{
  margin-top: 5px;
}

.our-blog{
  background-color: #f8f9fa;
  padding: 100px 0;
}
/* .container{
  max-width: 960px;
  margin: 0 auto;
}*/
.row-list{
  display: flex;
  justify-content:flex-start;
  flex-wrap: wrap;
}
.text-center{
  text-align: center;
  font-size: 18px;
}
.text-center h2{
  font-weight: 500;
  font-size: 1.6em;
}

.text-center h2 span{
  font-weight: 800;
}
.text-center p{
  max-width: auto;
  margin: 0 auto;
  color: #6c757d;
  line-height: 1.5;
  font-size: 1em;
}
.col{
  width: 25%;
  overflow: hidden;
  padding: 10px;
}
.col .card{
  width: 100%;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
}
.col .card-header{
  height: auto;
  width: 100%;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
  position: relative;
  cursor: default;
  background-size: cover;
  background-position: center center;
  -moz-border-radius: 5px 5px 0 0;
  -ms-border-radius: 5px 5px 0 0;
  -webkit-border-radius: 5px 5px 0 0;
  -o-border-radius: 5px 5px 0 0;
  border-radius: 5px 5px 0 0;
}
.col .card-header img{
  object-position: center;
  object-fit:cover;
  width: 100%;
  height:150px;
  border: 0;
  margin: 0 auto;
}
.col .card-body{
  padding: 0 5px 5px 5px;
  background-color: var(--color-article-list,#f5f6f7);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.card-body .card-title{
  line-height: 25px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-spaces;
  word-break: break-all;
  word-spacing: normal;
  word-wrap: inherit;
  margin: 3px auto;
}
.card-body h5{
  font-size: 24px;
  margin: 7px 0;
}
.card-body .card-text {
  font-size: 0.9rem;
  a{
    color: #239191;
  }
}
.card:hover{
  transform: translateY(-10px);
  transition: transform 0.3s ease;
}
.card p{
  color: #6c757d;
  margin: 3px auto;
}
.card-body .date-author{
  font-size: 0.9rem;
}
.card-body .date-author span{
  color: #71aa84;
}
.card-body h5 a{
  color: #222;
}
@media(min-width: 577px) and (max-width: 768px){
  .col{
      width: 50%;
      padding: 8px;
  }
  .col .card-header img{
    height:130px;
  }
  .card:hover{
    transform: translateY(-6px);
    transition: transform 0.3s ease;
  }
}
@media(max-width: 576px){
  .col{
      width: 50%;
      padding: 4px;
  }
  .col .card{
    width: 100%;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.2);
  }
  .col .card-header img{
    height:100px;
  }
  .card:hover{
    transform: translateY(-4px);
    transition: transform 0.3s ease;
  }
}
</style>