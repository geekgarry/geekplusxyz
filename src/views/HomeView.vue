<template>
  <div class="home">
    <!-- 设置图片轮播的顺序 -->
    <!-- <div id="slidershow" class="carousel">
       <ol class="carousel-indicators">
       <li class="active">1</li>
       <li>2</li>
       <li>3</li>
       <li>4</li>
       <li>5</li></ol>
    </div> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="banner_slider">
      <!-- <div class="animate__animated animate__bounceInLeft">
        <slide-swiper
          :carouselParams="carouselSlideParams"
          :slideList="swiperImgList"
        ></slide-swiper>
      </div> -->
      <div id="SlideSwiper" class="animate__animated animate__bounceInDown">
        <slide-banner
          :slideList="swiperImgList">
        </slide-banner>
      </div>
    </div>
    <div class="my-blog-advertise">
      <div>
        <Adsense
          data-ad-client="ca-pub-7291512442295477"
          data-ad-slot="3158275447"
        >
        </Adsense>
      </div>
    </div>
    <div class="container-article">
      <div class="container">
        <section class="row">
          <div class="col-lg-9 col-md-9 animated slideInLeft">
            <!-- <div class="my-blog-inform">
              <div class="inform-span-head">
                <span class="glyphicon glyphicon-bullhorn"></span>
              </div>
              <div class="text-inform">
                <span class="text-info" ref="indexTextInfo"
                  >欢迎来到梦极客园!这里有知识,有梦想,有兴趣,有心情,有生活!坚持自我,不是为了彰显自己,而是为了不被这个世界改变!!!!!!</span
                >
              </div>
            </div> -->
            <div class="my-blog-utilities">
              <div class="some-useful-tools"></div>
            </div>
            <article class="special-recommend-list">
              <div class="">
                <ul class="row no-gutter">
                  <li class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div class="special-recommend-first">
                      <router-link :to="'/article/' + oneIndexArticle.id">
                        <img
                          :alt="oneIndexArticle.articleTitle"
                          v-lazy="
                            oneIndexArticle.indexPicture != ''
                              ? oneIndexArticle.indexPicture
                              : require('@/assets/img/cover' +
                                  someNumberCount(4) +
                                  '.jpeg')
                          "
                        />
                        <span class="entry-wrapper">
                          <p class="entry-title">
                            {{
                              oneIndexArticle.articleTitle
                                ? oneIndexArticle.articleTitle
                                : "我是谁?我该如何去认识自己?"
                            }}
                          </p>
                          <div class="entry-meta">
                            <span
                              ><img
                                v-lazy="MKLogo"
                                alt="geekplus,极客普拉斯" /></span
                            >&nbsp;
                            <span
                              class="glyphicon glyphicon-eye-open"
                              aria-hidden="true"
                            ></span
                            >&nbsp;{{
                              oneIndexArticle.viewCount
                                ? numFormatKWM(oneIndexArticle.viewCount)
                                : 0
                            }}
                            <span
                              class="glyphicon glyphicon-time"
                              aria-hidden="true"
                            ></span
                            >&nbsp;{{
                              oneIndexArticle.createTime
                                ? dateTimeAgo(oneIndexArticle.createTime)
                                : "2015-04-04"
                            }}
                          </div>
                        </span>
                      </router-link>
                      <!-- <div class="overlay-layer hidden-sm hidden-xs">
                        <h2>title</h2>
                        <p></p>
                        <a class="info" href="#">更多</a>
                      </div> -->
                    </div>
                  </li>
                  <li class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div class="row no-gutter square-art-list">
                      <div
                        class="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                        v-for="(item, index) in fourIndexArticle"
                        :key="index"
                      >
                        <div class="square-art-item">
                          <router-link :to="'/article/' + item.id">
                            <!-- :to="{path:'/general',query:{articleId}}" -->
                            <img
                              :alt="item.articleTitle"
                              class="img-responsive"
                              v-lazy="
                                item.indexPicture
                                  ? item.indexPicture
                                  : require('@/assets/img/cover' +
                                      someNumberCount(4) +
                                      '.jpeg')
                              "
                            />
                            <span class="entry-wrapper">
                              <p class="entry-title">
                                {{
                                  item.articleTitle
                                    ? item.articleTitle
                                    : "这是一个文章标题！！！"
                                }}
                              </p>
                              <div class="entry-meta">
                                <span
                                  ><img
                                    v-lazy="MKLogo"
                                    alt="geekplus,极客普拉斯" /></span
                                >&nbsp;
                                <span
                                  class="glyphicon glyphicon-eye-open"
                                  aria-hidden="true"
                                ></span
                                >&nbsp;{{
                                  item.viewCount
                                    ? numFormatKWM(item.viewCount)
                                    : 0
                                }}
                                <span
                                  class="glyphicon glyphicon-time"
                                  aria-hidden="true"
                                ></span
                                >&nbsp;{{
                                  item.createTime
                                    ? dateTimeAgo(item.createTime)
                                    : "2015-04-04"
                                }}
                              </div>
                            </span>
                          </router-link>
                        </div>
                      </div>
                      <!-- <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div class="square-art-item">
                          <a href="#">
                            <img
                              alt=""
                              class="img-responsive"
                              src="/imgs/ChMlWV0u8wWIXbUhAAjp_v5W6CMAAL4fwI7SMwACOoW001.jpg"
                            />
                            <span class="entry-wrapper">
                              <p class="entry-title">
                                地方好地方很多废话电话电话发的地方很多很多废话的疯疯癫癫
                              </p>
                              <div class="entry-meta">
                                <img v-lazy="MKLogo" />
                              </div>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div class="square-art-item">
                          <a href="#">
                            <img
                              alt=""
                              class="img-responsive"
                              src="/imgs/ChMlWV0u8wuIA3UeAAke7KVaxvkAAL4fwM7lJkACR8E283.jpg"
                            />
                            <span class="entry-wrapper">
                              <p class="entry-title">
                                地方好地方很多呵呵人根深蒂固个地方电话都不很多废话不吃饭
                              </p>
                              <div class="entry-meta">
                                <img v-lazy="MKLogo" />
                              </div>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div class="square-art-item">
                          <a href="#">
                            <img
                              alt=""
                              class="img-responsive"
                              src="/imgs/ChMlWV0u8yKIOA41AAdkSqK5y-QAAL4gAKoHUoAB2Ri233.jpg"
                            />
                            <span class="entry-wrapper">
                              <p class="entry-title">
                                话的疯疯长白新村咕咚咕咚发的多个电饭锅大股东股份构成
                                v 从不曾 v 不吃饭的观点多个电饭锅付出
                              </p>
                              <div class="entry-meta">
                                <img v-lazy="MKLogo" />
                              </div>
                            </span>
                          </a>
                        </div>
                      </div> -->
                      <!-- <div class="special-recommend-square">
                                              <ul>
                                                  <li class="square-item"><img src="images/IMG_0541.JPG" /></li>
                                                  <li class="square-item"><img src="images/IMG_0541.JPG" /></li>
                                                  <li class="square-item"><img src="images/IMG_0541.JPG" /></li>
                                                  <li class="square-item"><img src="images/IMG_0541.JPG" /></li>
                                              </ul>
                                          </div> -->
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <article class="latest-new-article hidden-sm hidden-xs">
              <div class="row no-gutter">
                <section
                  class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  v-for="(item, index) in sixRecommendArticle"
                  :key="index"
                >
                  <div class="index-newtalk-list">
                    <router-link :to="'/article/' + item.id">
                      <i>
                        <img
                          :alt="item.articleTitle"
                          v-lazy="
                            item.indexPicture
                              ? item.indexPicture
                              : require('@/assets/img/cover' +
                                  someNumberCount(4) +
                                  '.jpeg')
                          "
                        />
                      </i>
                    </router-link>
                    <div>
                      <h3>
                        <router-link :to="'/article/' + item.id">
                          {{
                            item.articleTitle
                              ? item.articleTitle
                              : "这是我的个人博客，主要是对所学知识的梳理和总结"
                          }}
                        </router-link>
                      </h3>
                      <p class="publish-time">
                        <span
                          class="glyphicon glyphicon-eye-open"
                          aria-hidden="true"
                        ></span
                        >&nbsp;{{
                          item.viewCount ? numFormatKWM(item.viewCount) : 0
                        }}
                        <span
                          class="glyphicon glyphicon-time"
                          aria-hidden="true"
                        ></span
                        >&nbsp;{{
                          item.createTime
                            ? getOnlyYearMonthDay(item.createTime)
                            : "2019-10-24"
                        }}
                      </p>
                      <p
                        v-if="item.abstractText && item.abstractText != ''"
                        v-text="item.abstractText"
                      ></p>
                      <p v-else>
                        这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。
                        另外，本博客也分享一些资源文献，软件教程等。欢迎前来阅读观看
                      </p>
                    </div>
                  </div>
                </section>
                <!-- <section class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="index-newtalk-list">
                    <a>
                      <i>
                        <img
                          alt=""
                          src="/imgs/ChMlWl0u8yuIA4eeAANiIvCoMFEAAL4gQBsYywAA2I6970.jpg"
                        />
                      </i>
                    </a>
                    <div>
                      <h3>
                        <a href="#"
                          >这是我的个人博客，主要是对所学知识的梳理和总结，</a
                        >
                      </h3>
                      <p class="publish-time">2019-10-24</p>
                      <p>
                        这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。
                        另外，本博客分享过的图书，绝大部分我这里都有适合
                      </p>
                    </div>
                  </div>
                </section>
                <section class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="index-newtalk-list">
                    <a href="#">
                      <i>
                        <img
                          alt=""
                          src="/imgs/ChMlWl0u8yuIA4eeAANiIvCoMFEAAL4gQBsYywAA2I6970.jpg"
                        />
                      </i>
                    </a>
                    <div>
                      <h3>
                        <a href="#"
                          >这是我的个人博客，主要是对所学知识的梳理和总结，</a
                        >
                      </h3>
                      <p class="publish-time">2019-10-24</p>
                      <p>
                        这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。
                        另外，本博客分享过的图书，绝大部分我这里都有适合
                      </p>
                    </div>
                  </div>
                </section>
                <section class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="index-newtalk-list">
                    <a>
                      <i>
                        <img
                          alt=""
                          src="/imgs/ChMlWl0u8yuIA4eeAANiIvCoMFEAAL4gQBsYywAA2I6970.jpg"
                        />
                      </i>
                    </a>
                    <div>
                      <h3>
                        <a href="#"
                          >这是我的个人博客，主要是对所学知识的梳理和总结，</a
                        >
                      </h3>
                      <p class="publish-time">2019-10-24</p>
                      <p>
                        这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。
                        另外，本博客分享过的图书，绝大部分我这里都有适合
                      </p>
                    </div>
                  </div>
                </section>
                <section class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="index-newtalk-list">
                    <a href="#">
                      <i>
                        <img
                          alt=""
                          src="/imgs/ChMlWl0u8yuIA4eeAANiIvCoMFEAAL4gQBsYywAA2I6970.jpg"
                        />
                      </i>
                    </a>
                    <div>
                      <h3>
                        <a href="#"
                          >这是我的个人博客，主要是对所学知识的梳理和总结，</a
                        >
                      </h3>
                      <p class="publish-time">2019-10-24</p>
                      <p>
                        这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。
                        另外，本博客分享过的图书，绝大部分我这里都有适合
                      </p>
                    </div>
                  </div>
                </section>
                <section class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="index-newtalk-list">
                    <a>
                      <i>
                        <img
                          alt=""
                          src="/imgs/ChMlWl0u8yuIA4eeAANiIvCoMFEAAL4gQBsYywAA2I6970.jpg"
                        />
                      </i>
                    </a>
                    <div>
                      <h3>
                        <a href="#"
                          >这是我的个人博客，主要是对所学知识的梳理和总结，</a
                        >
                      </h3>
                      <p class="publish-time">2019-10-24</p>
                      <p>
                        这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。
                        另外，本博客分享过的图书，绝大部分我这里都有适合
                      </p>
                    </div>
                  </div>
                </section> -->
              </div>
            </article>
            <div class="row mx-4">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Adsense
                  data-ad-client="ca-pub-7291512442295477"
                  data-ad-slot="5487504434"
                >
                </Adsense>
              </div>
            </div>
            <div class="article-list">
              <article
                class="item"
                v-for="(item, index) in indexAllArticle"
                :key="index"
              >
                <div class="art-item">
                  <div class="left-art-img">
                    <div class="art-img">
                      <router-link :to="'/article/' + item.id">
                        <img
                          :alt="item.articleTitle"
                          v-lazy="
                            item.indexPicture
                              ? item.indexPicture
                              : require('@/assets/img/cover' +
                                  someNumberCount(4) +
                                  '.jpeg')
                          "
                        />
                      </router-link>
                      <!-- class="animated hover_" data-in="swing" data-out="pulse" -->
                      <div class="overlay hidden-sm hidden-xs">
                        <h2>
                          {{ item.articleTitle ? item.articleTitle : "title" }}
                        </h2>
                        <router-link class="info" :to="'/article/' + item.id"
                          >详细</router-link
                        >
                      </div>
                    </div>
                  </div>
                  <div class="right-art-abstract">
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
                              alt="geekplus,极客普拉斯"
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
                            <span
                              class="glyphicon glyphicon-eye-open"
                              aria-hidden="true"
                            ></span
                            >&nbsp;{{ item.viewCount ? item.viewCount : 0 }}
                          </li>
                          <li>
                            <span
                              class="glyphicon glyphicon-time"
                              aria-hidden="true"
                            ></span
                            >&nbsp;{{
                              item.createTime
                                ? dateTimeAgo(item.createTime)
                                : "2015-04-04"
                            }}
                          </li>
                          <!-- <li>
                            {{ item.createTime ? getOnlyYearMonthDay(item.createTime) : "2015-04-04" }}
                          </li> -->
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
                  </div>
                </div>
              </article>

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
                          >DIV+CSS静态HTML网页设计模板</a
                        >
                      </div>
                      <div class="base-info">
                        <ul>
                          <li class="hidden-xs">
                            <img v-lazy="MKLogo" class="article_user_pic" />
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
              </article>

              <article class="item">
                <div class="art-item">
                  <div class="left-art-img">
                    <div class="art-img">
                      <img
                        src="/imgs/ChMkJlbKzjiIH0M_AAJdB-7pn-MAALJIwFYdAsAAl0f724.jpg"
                      />
                    </div>
                  </div>
                  <div class="right-art-abstract">
                    <div class="art-abstract-flex">
                      <div class="title">
                        <a href="/"
                          >将网站LOGO放到浏览器地址栏</a
                        >
                      </div>
                      <div class="base-info">
                        <ul>
                          <li class="hidden-xs">
                            <img v-lazy="MKLogo" class="article_user_pic" />
                          </li>
                          <li class="hidden-xs">
                            <a href="/">周末</a>
                          </li>
                          <li>2015-04-04</li>
                        </ul>
                      </div>
                      <p class="desc">
                        首先您必须了解什么是icon，所谓的图标（Icon）是一种特殊的图形文件格式，它是以
                        .ico 作为扩展名。
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article class="item">
                <div class="art-item">
                  <div class="left-art-img">
                    <div class="art-img">
                      <img
                        src="/imgs/ChMkJlbKzjiIRT2jAAUGaYr8PEsAALJIwFpbtoABQaB552.jpg"
                      />
                    </div>
                  </div>
                  <div class="right-art-abstract">
                    <div class="art-abstract-flex">
                      <div class="title">
                        <a href="/"
                          >专属学生的简单html静态网页模板</a
                        >
                      </div>
                      <div class="base-info">
                        <ul>
                          <li class="hidden-xs">
                            <img v-lazy="MKLogo" class="article_user_pic" />
                          </li>
                          <li class="hidden-xs">
                            <a href="/">周末</a>
                          </li>
                          <li>2015-04-04</li>
                        </ul>
                      </div>
                      <p class="desc">
                        该模板为纯html5模板，主题为周末·黑色调，此模板采用黑色为主色，不包含任何服务器端code
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article class="item">
                <div class="art-item">
                  <div class="left-art-img">
                    <div class="art-img">
                      <img
                        src="/imgs/ChMly12Ng9KIdCjVAAiP30n-S5UAAX2nAKAALIACI_3995.jpg"
                      />
                    </div>
                  </div>
                  <div class="right-art-abstract">
                    <div class="art-abstract-flex">
                      <div class="title">
                        <a href="/"
                          >html个人网页制作源代码</a
                        >
                      </div>
                      <div class="base-info">
                        <ul>
                          <li class="hidden-xs">
                            <img v-lazy="MKLogo" class="article_user_pic" />
                          </li>
                          <li class="hidden-xs">
                            <a href="/">周末</a>
                          </li>
                          <li>2015-04-04</li>
                        </ul>
                      </div>
                      <p class="desc">
                        该模板为纯html5模板，主题为周末·黑色调，此模板采用黑色为主色，不包含任何服务器端code
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article class="item">
                <div class="art-item">
                  <div class="left-art-img">
                    <div class="art-img">
                      <img
                        src="/imgs/ChMlWl0u-KqIAHkyAAP26MoZWWcAAL4jAH0yZ4AA_cA353.jpg"
                      />
                    </div>
                  </div>
                  <div class="right-art-abstract">
                    <div class="art-abstract-flex">
                      <div class="title">
                        <a href="/"
                          >html5优秀个人博客模板下载</a
                        >
                      </div>
                      <div class="base-info">
                        <ul>
                          <li class="hidden-xs">
                            <img v-lazy="MKLogo" class="article_user_pic" />
                          </li>
                          <li class="hidden-xs">
                            <a href="/">周末</a>
                          </li>
                          <li>2015-04-04</li>
                        </ul>
                      </div>
                      <p class="desc">
                        该模板为纯html5模板，主题为周末·黑色调，此模板采用黑色为主色，不包含任何服务器端code
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article class="item">
                <div class="art-item">
                  <div class="left-art-img">
                    <div class="art-img">
                      <img
                        src="/imgs/ChMlWl0u8vqIF0m2AAlIzzrVVVQAAL4fwAz3oQACUjn017.jpg"
                      />
                    </div>
                  </div>
                  <div class="right-art-abstract">
                    <div class="art-abstract-flex">
                      <div class="title">
                        <a href="/"
                          >迷你灰MINIGRAY</a
                        >
                      </div>
                      <div class="base-info">
                        <ul>
                          <li class="hidden-xs">
                            <img v-lazy="MKLogo" class="article_user_pic" />
                          </li>
                          <li class="hidden-xs">
                            <a href="/">周末</a>
                          </li>
                          <li>2015-04-04</li>
                        </ul>
                      </div>
                      <p class="desc">
                        该模板为纯html5模板，本人很喜欢简洁明了的页面设计，不浮夸，也不冗余，此模板采用黑白为主色
                      </p>
                    </div>
                  </div>
                </div>
              </article> -->
            </div>
            <div
              v-if="articleTotal > queryParams.pageSize"
              class="load-more-data visible-xs"
            >
              <a href="javascript:void(0);" @click="loadMoreData">{{
                loadMoreBtn
              }}</a>
            </div>
            <!-- <nav aria-label="Page navigation" v-if="articleTotal!=0">
              <ul class="pagination">
                <li v-if="queryParams.pageNum != 1" :class="queryParams.pageNum == 1 ? 'disabled' : ''">
                  <a
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(queryParams.pageNum - 1)"
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
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum - 4
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum - 3
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum - 2
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum - 1
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum + 1
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum + 2
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum + 3
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                  <a
                    v-if="
                      queryParams.pageNum > 4 &&
                      pageNumber == queryParams.pageNum + 4
                    "
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(pageNumber)"
                    >{{ pageNumber }}
                  </a>
                </li>
                <li v-if="queryParams.pageNum != Math.ceil(articleTotal / queryParams.pageSize)"
                  :class="
                    queryParams.pageNum ==
                    Math.ceil(articleTotal / queryParams.pageSize)
                      ? 'disabled'
                      : ''
                  "
                >
                  <a
                    href="javascript:void(0);"
                    @click="getIndexAllArticleList(queryParams.pageNum + 1)"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav> -->
            <plus-pager
              class="hidden-xs"
              :total="articleTotal"
              :pageNum="queryParams.pageNum"
              :pageSize="queryParams.pageSize"
              :pluspagerMethod="getIndexAllArticleList"
            >
            </plus-pager>
          </div>
          <aside class="col-lg-3 col-md-3 right animated slideInRight">
            <div class="right-fun">
              <div class="alert alert-info alert-dismissible fade in">
                <a href="#" class="close" data-dismiss="alert">&times;</a>
                <span
                  v-if="oneNewNotice"
                  v-html="oneNewNotice.noticeContent"
                ></span>
                <span v-else
                  >这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。</span
                >
                <!-- 另外，本博客分享过的图书，绝大部分我这里都有适合<b>Kindle</b>阅读的电子版，
                因为版权原因现在不再公开分享，有需要的同学可以给我发邮件私下交流，无偿分享。 -->
              </div>
              <!-- <div class="alert alert-info alert-dismissible fade in">
                <a href="#" class="close" data-dismiss="alert">&times;</a>
                <a
                  title=""
                  href="https://mubu.com"
                  target="_blank"
                  data-original-title="注册地址"
                  class="alert-link"
                  >幕布 </a
                >这个工具，它可以用来整理思维大纲，自动生成好看的思维导图，你值得拥有！
              </div> -->
              <div class="model hidden-xs">
                <div class="title">
                  <span
                    class="glyphicon glyphicon-search"
                    aria-hidden="true"
                  ></span
                  >&nbsp;站内搜索
                </div>
                <div class="content">
                  <!-- <div class="search_bar_side">
                    <form>
                      <input
                        type="text"
                        placeholder="请输入关键词"
                        name="keywords"
                        v-model="keywords"
                      />
                      <button type="submit">
                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                      </button>
                    </form>
                  </div> -->
                  <div class="search_aside_bar">
                    <form
                      class="form-horizontal"
                      @submit.prevent="searchResult()"
                    >
                      <div class="input-group search-input-group">
                        <input type="hidden" name="scope" value="1" />
                        <input
                          name="keywords"
                          autocomplete="off"
                          type="text"
                          v-model="keywords"
                          class="form-control"
                          placeholder="输入搜索关键字"
                        />
                        <span class="input-group-addon">
                          <button type="button" @click="searchResult()">
                            <span class="glyphicon glyphicon-search"></span>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div id="my-social" class="panel hidden-xs">
                <div class="panel-heading">
                  <span class="glyphicon glyphicon-hand-right"></span
                  >&nbsp;在这里
                </div>
                <div class="">
                  <div class="my-social-list">
                    <a
                      id="s_email"
                      title="邮箱"
                      target="_blank"
                      href="mailto:geekgarry@hotmail.com"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="EMAIL"
                    >
                      <font-awesome-icon :icon="['fas', 'envelope']" />
                    </a>
                    <a
                      id="s_github"
                      title="GitHub"
                      target="_blank"
                      href="https://github.com/geekgarry"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="GITHUB"
                    >
                      <!-- <i class="fa fa-github"></i> -->
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                    <a
                      id="s_rss"
                      title="RSS订阅"
                      target="_blank"
                      href="/rss"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="RSS"
                    >
                      <!-- <i class="fa fa-rss-square"></i> -->
                      <font-awesome-icon :icon="['fas', 'rss-square']" />
                    </a>
                  </div>
                </div>
              </div>
              <div id="geekplus-tool" class="panel hidden-xs">
                <div class="panel-heading">
                  <span class="glyphicon glyphicon-bell"></span>&nbsp;小贴士
                </div>
                <div class="text-center">
                  <div class="my-blog-tool">
                    <iframe
                      scrolling="no"
                      src="https://tianqiapi.com/api.php?style=tf&skin=pitaya"
                      style="text-align: center; width: 98%; margin: 3px auto"
                      frameborder="0"
                      height="24"
                      allowtransparency="true"
                    ></iframe>
                    <!-- <iframe src="http://music.163.com/outchain/player?type=0&amp;id=167610955&amp;auto=1&amp;height=430" width="100%" height="450" frameborder="no" marginwidth="0" marginheight="0"></iframe> -->
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div
                  class="panel-heading"
                  style="background: rgba(0, 0, 0, 0.0001)"
                >
                  <span class="glyphicon glyphicon-list"></span>&nbsp;{{
                    allCategoryList[2].categoryName
                  }}-专题
                </div>
                <div class="panel-body">
                  <!-- <div class="model recommend">                                    						                            <div class="title">热门推荐</div>						                            <div class="content"> -->
                  <div class="latest-hot-article">
                    <div
                      :class="
                        index == 0 ? 'articlelist-first-life' : 'articlelist'
                      "
                      v-for="(item, index) in asideSixArticle0"
                      :key="index"
                    >
                      <router-link
                        v-if="index == 0"
                        :to="'/article/' + item.id"
                      >
                        <img
                          :alt="item.articleTitle"
                          v-lazy="
                            item.indexPicture
                              ? item.indexPicture
                              : require('@/assets/img/cover' +
                                  someNumberCount(4) +
                                  '.jpeg')
                          "
                        />
                        <span>{{
                          item.articleTitle ? item.articleTitle : "我是谁"
                        }}</span>
                      </router-link>
                      <router-link v-else :to="'/article/' + item.id">
                        <i>
                          <img
                            :alt="item.articleTitle"
                            v-lazy="
                              item.indexPicture
                                ? item.indexPicture
                                : require('@/assets/img/cover3.jpeg')
                            "
                          />
                        </i>
                        <p>
                          {{
                            item.articleTitle
                              ? item.articleTitle
                              : "那个老师那个看来是看到那个上课了"
                          }}
                        </p>
                      </router-link>
                    </div>
                    <!-- <div class="articlelist">
                      <a href="#">
                        <i><img alt="" src="imgs/IMG_0541.JPG" /></i>
                        <p>收到给你说的那个老师那个看来是看到那个上课了</p>
                      </a>
                    </div> -->
                  </div>
                  <div class="special-topic">
                    <router-link :to="allCategoryList[2].path"
                      >进入专题</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div
                  class="panel-heading"
                  style="background: rgba(0, 0, 0, 0.0001)"
                >
                  <span class="glyphicon glyphicon-list"></span>&nbsp;{{
                    allCategoryList[9].categoryName
                  }}-专题
                </div>
                <div class="panel-body">
                  <!-- <div class="model recommend">                                    						                            <div class="title">热门推荐</div>						                            <div class="content"> -->
                  <div class="latest-hot-article">
                    <div
                      :class="
                        index == 0 ? 'articlelist-first-life' : 'articlelist'
                      "
                      v-for="(item, index) in asideSixArticle6"
                      :key="index"
                    >
                      <router-link
                        v-if="index == 0"
                        :to="'/article/' + item.id"
                      >
                        <img
                          :alt="item.articleTitle"
                          v-lazy="
                            item.indexPicture
                              ? item.indexPicture
                              : require('@/assets/img/cover' +
                                  someNumberCount(4) +
                                  '.jpeg')
                          "
                        />
                        <span>{{
                          item.articleTitle ? item.articleTitle : "我是谁"
                        }}</span>
                      </router-link>
                      <router-link v-else :to="'/article/' + item.id">
                        <i
                          ><img
                            :alt="item.articleTitle"
                            v-lazy="
                              item.indexPicture
                                ? item.indexPicture
                                : require('@/assets/img/cover3.jpeg')
                            "
                          />
                        </i>
                        <p>
                          {{
                            item.articleTitle
                              ? item.articleTitle
                              : "那个老师那个看来是看到那个上课了"
                          }}
                        </p>
                      </router-link>
                    </div>
                    <!-- <div class="articlelist">
                      <a href="#">
                        <i><img alt="" src="imgs/IMG_0541.JPG" /></i>
                        <p>收到给你说的那个老师那个看来是看到那个上课了</p>
                      </a>
                    </div>-->
                  </div>
                  <div class="special-topic">
                    <router-link :to="allCategoryList[9].path"
                      >进入专题</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div
                  class="panel-heading"
                  style="background: rgba(0, 0, 0, 0.0001)"
                >
                  <span class="glyphicon glyphicon-th"></span>&nbsp;标签云图
                </div>
                <div class="panel-body tag-list">
                  <span
                    style="display: inline-block; margin: 2px"
                    v-for="(item, index) in allTagArticleCount"
                    :key="index"
                  >
                    <router-link
                      :to="{
                        path: '/articleListForTag',
                        query: { tagName: item.tagName },
                      }"
                      class=""
                    >
                      {{ item.tagName ? item.tagName : "Java" }}
                      <span>{{
                        item.articleCount != -1
                          ? numFormatKWM(item.articleCount)
                          : 1
                      }}</span>
                    </router-link>
                  </span>
                  <!-- <a class="btn btn-info"
                    >Python<span class="badge badge-info">2</span>
                  </a>
                  <a class="btn btn-info"
                    >Spring<span class="badge badge-info">3</span>
                  </a>
                  <a class="btn btn-info"
                    >深度学习<span class="badge badge-info">4</span>
                  </a>
                  <a class="btn btn-info"
                    >MySql<span class="badge badge-info">5</span>
                  </a>
                  <a class="btn btn-info"
                    >Linux系统编程<span class="badge badge-info">5</span>
                  </a>
                  <a class="btn btn-info"
                    >Django<span class="badge badge-info">5</span>
                  </a>
                  <a class="btn btn-info"
                    >NodeJS<span class="badge badge-info">8</span>
                  </a>
                  <a class="btn btn-info"
                    >Vue<span class="badge badge-info">5</span>
                  </a> -->

                  <!-- <a style="margin: 1px" class="btn btn-default btn-sm"
                    >生活<span class="badge badge-info">6</span>
                  </a> -->
                </div>
              </div>

              <div class="panel panel-default recommendlist">
                <div
                  class="panel-heading"
                  style="background: rgba(0, 0, 0, 0.0001)"
                >
                  <span class="glyphicon glyphicon-list"></span>&nbsp;图文类目
                </div>
                <div class="panel-body">
                  <!-- <div class="model recommend">                                                                       <div class="title">热门推荐</div>						                            <div class="content"> -->
                  <div class="fastmenu">
                    <span v-for="(item, index) in allCategoryList" :key="index">
                      <router-link :to="item.path">{{
                        item.categoryName
                          ? item.categoryName
                          : "编程技术&nbsp;(13)"
                      }}</router-link>
                    </span>
                    <!-- <span
                      ><a href="#"
                        >新闻资讯&nbsp;(3)</a
                      ></span
                    >
                    <span
                      ><a href="#"
                        >资源福利&nbsp;(6)</a
                      ></span
                    >
                    <span
                      ><a href="#"
                        >格物生活&nbsp;(8)</a
                      ></span
                    >
                    <span
                      ><a href="#"
                        >操作系统&nbsp;(23)</a
                      ></span
                    >
                    <span
                      ><a href="#"
                        >软件教程&nbsp;(34)</a
                      ></span
                    > -->
                  </div>
                </div>
              </div>
              <!-- <div class="model">
                                                      <div class="title">快捷菜单</div>
                                                      <div class="menu">
                                                          <span><a
                                                                      href="#">文章博客</a></span>
                                                          <span><a
                                                                      href="#">新闻资讯</a></span>
                                                          <span><a
                                                                      href="#">资源文件</a></span>
                                                          <span><a 
                                                                      href="#">格物生活</a></span>
                                                          <span><a
                                                                      href="#">给我留言</a></span>
                                                      </div>
                                                  </div> -->

              <div class="panel panel-default">
                <div
                  class="panel-heading"
                  style="background: rgba(0, 0, 0, 0.0001)"
                >
                  <span class="glyphicon glyphicon-th-list"></span
                  >&nbsp;热门文章
                </div>
                <div class="panel-body recommendlist">
                  <!-- <div class="model recommend">
                    <div class="title">热门推荐</div>
                  <div class="content"> -->
                  <p v-for="(item, index) in tenNewArticle" :key="index">
                    <a
                      href="javascript:void(0);"
                      @click="
                        $router.push({
                          name: 'article',
                          params: { articleId: item.id },
                        })
                      "
                      >{{
                        item.articleTitle
                          ? item.articleTitle
                          : "个人网页模板源代码"
                      }}</a
                    >
                  </p>
                  <!-- <p>
                    <a href="/"
                      >HTML个人简历源代码</a
                    >
                  </p>-->
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
      <!-- <div class="row mx-4">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideSwiper from "@/components/carousel/SlideSwiper";
import SlideBanner from "@/components/carousel/SlideBanner";
import mofang from "@/assets/icon/loading.gif";
import {
  getHomeViewData,
  getCarousel,
  getcovid,
  get163coviddata,
  getTenNewestArticle,
  getFourPlusOneArticles,
  getIndexAllCategoryArticleList,
  getArticleCategoryListByPath,
  getArticlesByCategoryLimit,
  listSubCategory,
  listSubParentCategory,
  getTagArticleCount,
  getGpNoticeNewOne,
} from "@/api/geekplus/geekplus";

export default {
  name: "HomeView",
  components: {
    SlideSwiper,
    SlideBanner
  },
  data() {
    return {
      MKLogo: require("@/assets/icon/mai.png"),
      swiperImgList: [
        {
          carouselImg: require("@/assets/img/cover1.jpeg"),
          carouselInfo: "",
          carouselLink: "#",
          carouselTitle: "111",
        },
        {
          carouselImg: require("@/assets/img/cover2.jpeg"),
          carouselInfo: "",
          carouselLink: "#",
          carouselTitle: "222",
        },
        {
          carouselImg: require("@/assets/img/cover3.jpeg"),
          carouselInfo: "",
          carouselLink: "#",
          carouselTitle: "333",
        },
      ],
      keywords: "", //搜索关键词
      indexTextInfo: null,
      carouselSlideParams: {},
      articleId: 1,
      allCategoryList: [],//目录路径path数组
      allTagArticleCount: [], //查询每个标签的文章数量
      asideSixArticle0: [], //首页侧边六条文章面板
      asideSixArticle6: [], //首页侧边六条文章面板
      tenNewArticle: [], //侧边最热六条文章面板
      sixRecommendArticle: [], //首页六条大屏推荐文章
      oneIndexArticle: {}, //首页4+1文章
      fourIndexArticle: [], //首页4+1文章
      indexAllArticle: [],
      articleTotal: 0,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
      },
      oneNewNotice: {},
      loadMoreBtn: "加载更多",
    };
  },
  created() {
    this.getHomeCarousel();
    //this.getCovidData();
    //this.test();
    //console.log("创造！")
    this.carouselSlideParams = {
      dataRide: "carousel",
      dataPause: false,
      dataTouch: true,
      dataInterval: 3000,
    };
    // this.getTenNewArticle();
    // this.getSixRecommendArticle();
    // this.getFourPlusOneArticles();
    // this.getSixSameCategoryArticle0();
    // this.getSixSameCategoryArticle6();
    // this.getTagAndArticleCount();
    // this.getOneNewestNotice();
    this.getIndexHomeView();
    this.getIndexAllArticleList(this.queryParams.pageNum);
    this.getAllArticleCategory();
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
    //this.indexTextInfo = document.getElementsByClassName("text-info")[0];
    this.carouselSlideParams = {
      dataRide: "carousel",
      dataPause: true,
      dataTouch: true,
      dataInterval: 3000,
    };
    //console.log(this.$refs.indexTextInfo)
    //console.log(document.getElementsByClassName("text-info")[0])
    //setInterval(this.marquee(), 1000);
    //setTimeout(this.marquee(this.indexTextInfo), 1000);
    //document.getElementById('myESlideShow')[0].carousel({ interval: 2000})
  },
  watch: {
    $route(to, from) {
      window.document.title = this.$route.meta.title + " | 极客普拉斯&梦极客园" || "极客普拉斯&梦极客园-geekplus";
    }
  },
  methods: {
    /***********************------首页（跑马灯）滚动字幕实现-------************************* */
    marquee(indexTextInfo) {
      let main1 = document.getElementsByClassName("text-inform")[0];
      let scrollWidth = main1.offsetWidth;
      //console.log(scrollWidth);
      let main2 = document.getElementsByClassName("text-info")[0];
      let textWidth = main2.offsetWidth;
      //console.log(textWidth);
      var i = scrollWidth;
      setInterval(function () {
        i--;
        if (i < -textWidth) {
          i = scrollWidth;
        }
        //const txtInfoElement = document.querySelector('.text-info');
        // const txtInfoElement = document.getElementsByClassName('text-info')[0];
        // txtInfoElement.addEventListener('animationend', () => {
        //   // do something
        //   txtInfoElement.animate({'left': i+'px'}, 20);
        // });
        //document.getElementsByClassName("text-info")[0]
        indexTextInfo.animate({ left: i / 2 + "px" }, 20);
      }, 25);
    },
    getIndexHomeView() {
      var queryParams = {
        sixCategory: "java", sixArticleCount: 6, oneArticle: "backProgram",
        fourArticles: "frontWeb", firstTopic: "sql", secondTopic: "webSoftware", topicCount: 6
      };
      getHomeViewData(queryParams).then((response) => {
        //this.swiperImgList = response.indexCarousel;
        this.tenNewArticle = response.indexTenNewArticle;
        this.sixRecommendArticle = response.indexSixArticles;
        this.oneIndexArticle = response.indexOneArticle;
        this.fourIndexArticle = response.indexFourArticles;
        this.asideSixArticle0 = response.indexFirstTopic;
        this.asideSixArticle6 = response.indexSecondTopic;
        this.allTagArticleCount = response.indexArticleTag;
        this.oneNewNotice = response.indexNotice;
      }).catch((error) => {
          //console.log(error);
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getHomeCarousel() {
      getCarousel()
        .then((response) => {
          var res = response;
          //console.log(res.data);
          this.swiperImgList = response.data;
        })
        .catch((error) => {
          //console.log(error);
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getCovidData() {
      get163coviddata()
        .then((response) => {
          var res = response;
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticleListForTag(tagName) {
      //this.$router.push("/search?keayword="+this.keywords);
      this.$router.push({
        path: "/articleList/tag",
        query: { tagName: tagName },
      });
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
    getFourPlusOneArticles() {
      var queryParams = { firstPathName: "java", secondPathName: "" };
      getFourPlusOneArticles(queryParams)
        .then((response) => {
          //console.log(response);
          this.oneIndexArticle = response.one;
          this.fourIndexArticle = response.four;
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
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
    getSixSameCategoryArticle0() {
      var params = { pathName: this.allCategoryList[0].pathName, limitCount: 6 };
      getArticlesByCategoryLimit(params)
        .then((response) => {
          //console.log(response.data);
          this.asideSixArticle0 = response.data;
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getSixSameCategoryArticle6() {
      var params = { pathName: this.allCategoryList[9].pathName, limitCount: 6 };
      getArticlesByCategoryLimit(params)
        .then((response) => {
          //console.log(response.data);
          this.asideSixArticle6 = response.data;
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getSixRecommendArticle() {
      var params = { pathName: "java", limitCount: 6 };
      getArticlesByCategoryLimit(params)
        .then((response) => {
          //console.log(response);
          this.sixRecommendArticle = response.data;
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    //获取首页所有类型文章
    getIndexAllArticleList(pageNum) {
      this.queryParams.pageNum = pageNum;
      // if(pageNum==null ||pageNum==''){
      //   this.queryParams.pageNum=1;
      // }else if(this.articleTotal <= this.queryParams.pageSize){
      //   this.queryParams.pageNum=1;
      // }else if(pageNum <= 0){
      //   this.queryParams.pageNum=1;
      // }else if(pageNum>=Math.ceil(this.articleTotal/this.queryParams.pageSize)){
      //   this.queryParams.pageNum=Math.ceil(this.articleTotal/this.queryParams.pageSize);
      // }
      getIndexAllCategoryArticleList(this.queryParams)
        .then((response) => {
          //console.log(response);
          this.indexAllArticle = response.rows;
          this.articleTotal = response.total;
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
      setTimeout(() => this.backToTopIndex(),
        1000);
    },
    //懒加载方法
    loadMoreArticleList(pageNum) {
      this.queryParams.pageNum = pageNum;
      this.loadMoreBtn = "加载数据...";
      getIndexAllCategoryArticleList(this.queryParams)
        .then((response) => {
          //console.log(response);
          //this.indexAllArticle = response.rows;
          this.indexAllArticle = this.indexAllArticle.concat(response.rows);
          this.articleTotal = response.total;
          setTimeout(async () => { this.loadMoreBtn = "加载更多"; }, 1000);
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
          this.loadMoreBtn = "数据加载失败";
        }).finally(() => {
        });
      //this.backToTop()
    },
    getAllArticleCategory() {
      // let tempMenuList = this.$router.options.routes.filter(
      //   (item) => { return item.type == "servermenu"}
      // );
      this.allCategoryList = this.getListSubCategory(this.$store.getters.addRoutes.slice(0, 4));
      // console.log(this.categoryPathList)
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
    getListSubCategory(list) {
      let listCategory = new Array();
      list.forEach(parent => {
        parent.children.forEach(child => {
          let childCategory = {
            path: parent.path + '/' + child.path,
            pathName: child.path,
            categoryName: child.meta.title,
          }
          listCategory.push(childCategory)
        })
      });
      return listCategory;
    },
    getTagAndArticleCount() {
      getTagArticleCount()
        .then((response) => {
          //console.log(response.data);
          this.allTagArticleCount = response.data;
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getOneNewestNotice() {
      getGpNoticeNewOne().then((response) => {
        this.oneNewNotice = response.data;
      });
    },
    loadMoreData() {
      this.queryParams.pageNum += 1;
      if (this.queryParams.pageNum <= Math.ceil(this.articleTotal / this.queryParams.pageSize)) {
        this.loadMoreArticleList(this.queryParams.pageNum);
      } else {
        this.loadMoreBtn = "数据加载完了";
      }
    },
    // test() {
    //   this.axios
    //     .get("/api/getCarousel")
    //     .then((response) => {
    //       console.log(response);
    //       this.swiperImgList=response.data.data;
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    backToTopIndex() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 30
        if (top <= 650) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  },
  destroyed() {
    //console.log("销毁！")
  },
};
</script>
