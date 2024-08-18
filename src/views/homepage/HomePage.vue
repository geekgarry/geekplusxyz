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
      <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div class="banner_slider">
        <div class="container">
          <div class="animate__animated animate__bounceInLeft">
            <!-- <section class="banner">
                    <div class="maike_slider">
                        <div class="bd">
                            <ul id="slider_ul_img">
                                <li>
                                    <a target="_blank" href="/">
                                        <img src="sourceFile/indexSliderPicture/11.jpg" />
                                        <span>12</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/">
                                        <img src="sourceFile/indexSliderPicture/33.jpg" />
                                        <span>23</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/">
                                        <img src="sourceFile/indexSliderPicture/44.jpg" />
                                        <span>34</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="hd">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div class="pnBtn prev"><span class="blackBg"></span>
                            <a class="arrow" href="javascript:void(0)"></a>
                        </div>
                        <div class="pnBtn next"><span class="blackBg"></span>
                            <a class="arrow" href="javascript:void(0)"></a>
                        </div>
                    </div>
                </section> -->
            <section class="banner">
              <div class="eslideShow" id="slideBox">
                <div class="bd">
                  <ul class="mySlideshow" id="myESlideShow">
                    <li class="item">
                      <a href="#" target="_blank" class="animate__animated animate__fadeInLeft">
                        <img
                          src="/imgs/superSlide/images/11.jpg"
                          alt="Harley-Davidson"
                        />
                      </a>
                      <div class="slideTitle animated fadeInRight">
                        It's time to ride!
                      </div>
                    </li>
                    <li class="item">
                      <a href="#" target="_blank" class="animated fadeInRight">
                        <img src="/imgs/superSlide/images/22.jpg" />
                      </a>
                      <div class="slideTitle animated fadeInRight">
                        It's time to ride!
                      </div>
                    </li>
                    <li class="item">
                      <a href="#" target="_blank" class="animated fadeInLeft">
                        <img src="/imgs/superSlide/images/33.jpg" />
                      </a>
                      <div class="slideTitle animated fadeInRight">
                        It's time to ride!
                      </div>
                    </li>
                    <li class="item">
                      <a href="#" target="_blank" class="animated fadeInRight">
                        <img src="/imgs/superSlide/images/44.jpg" />
                      </a>
                      <div class="slideTitle animated fadeInRight">
                        It's time to ride!
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="my-blog-advertise">
        <div></div>
      </div>
      <div class="container-article">
        <div class="container">
          <section class="row">
            <div class="col-lg-9 col-md-9 animated slideInLeft">
              <div class="my-blog-inform">
                <div class="inform-span-head">
                  <span class="glyphicon glyphicon-bullhorn"></span>
                </div>
                <div class="text-inform">
                  <span class="text-info"
                    >欢迎来到梦极客园!这里有知识,有梦想,有兴趣,有心情,有生活!坚持自我,不是为了彰显自己,而是为了不被这个世界改变!!!!!!</span
                  >
                </div>
              </div>
              <div class="my-blog-utilities">
                <div class="some-useful-tools"></div>
              </div>
              <article class="special-recommend-list">
                <div class="">
                  <ul class="row no-gutter">
                    <li class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <div class="special-recommend-first">
                        <a href="#">
                          <img
                            alt=""
                            src="/imgs/ChMlWl0u8wCIHuEaAAdIaEpOtlQAAL4fwFRPPMAB0iA385.jpg"
                          />
                          <span class="entry-wrapper">
                            <p class="entry-title">我是谁?我该如何去认识自己?</p>
                            <div class="entry-meta"><img :src="MKLogo"/></div>
                          </span>
                        </a>
                        <div class="overlay-layer hidden-sm hidden-xs">
                          <h2>title</h2>
                          <p></p>
                          <a class="info" href="#">更多</a>
                        </div>
                      </div>
                    </li>
                    <li class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                      <div class="row no-gutter square-art-list">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <div class="square-art-item">
                            <a href="#">
                              <img
                                alt=""
                                class="img-responsive"
                                src="/imgs/ChMlWl0u8xCIJbgPAAFwuwZ4mHUAAL4gABSWUYAAXDT092.jpg"
                              />
                              <span class="entry-wrapper">
                                <p class="entry-title">电话电话电话地方地方很多很多废话电话电话电话哈地方好地方很多</p>
                                <div class="entry-meta"><img :src="MKLogo"/></div>
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
                                src="/imgs/ChMlWV0u8wWIXbUhAAjp_v5W6CMAAL4fwI7SMwACOoW001.jpg"
                              />
                              <span class="entry-wrapper">
                                <p class="entry-title">地方好地方很多废话电话电话发的地方很多很多废话的疯疯癫癫</p>
                                <div class="entry-meta"><img :src="MKLogo"/></div>
                              </span>
                            </a>
                          </div>
                        </div>
                        <!-- </div>
                                        <div class="row no-gutter square-art-list"> -->
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <div class="square-art-item">
                            <a href="#">
                              <img
                                alt=""
                                class="img-responsive"
                                src="/imgs/ChMlWV0u8wuIA3UeAAke7KVaxvkAAL4fwM7lJkACR8E283.jpg"
                              />
                              <span class="entry-wrapper">
                                <p class="entry-title">地方好地方很多呵呵人根深蒂固个地方电话都不很多废话不吃饭</p>
                                <div class="entry-meta"><img :src="MKLogo"/></div>
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
                                <p class="entry-title">话的疯疯长白新村咕咚咕咚发的多个电饭锅大股东股份构成 v
                                从不曾 v 不吃饭的观点多个电饭锅付出</p>
                                <div class="entry-meta"><img :src="MKLogo"/></div>
                              </span>
                            </a>
                          </div>
                        </div>
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
              <article class="latest-new-article">
                <div class="row no-gutter">
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
                  </section>
                </div>
              </article>
              <div class="article-list">
                <article class="item">
                  <div class="art-item">
                    <div class="left-art-img">
                      <div class="art-img">
                        <a href="#">
                          <img src="/imgs/ChMkJlXVQXKIKzCsAAaeJs-t2BQAAAUwwO6VAIABp4-885.jpg" />
                        </a>
                        <!-- class="animated hover_" data-in="swing" data-out="pulse" -->
                        <div class="overlay hidden-sm hidden-xs">
                          <h2>title</h2>
                          <a class="info" href="#">更多</a>
                        </div>
                      </div>
                    </div>
                    <div class="right-art-abstract">
                      <div class="art-abstract-flex">
                        <div class="title">
                          <a href="/">《maike市集》</a>
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img :src="MKLogo" class="article_user_pic" />
                            </li>
                            <li class="hidden-xs">
                              <a href="/">geekplus</a>
                            </li>
                            <li>2015-04-04</li>
                          </ul>
                        </div>
                        <div class="desc">
                          市集里最熟悉的陌生人，多年以后，我们又在繁华的市集相遇，伫立对视片刻，便擦肩而过，消失在了人潮中。
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
  
                <article class="item">
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
                          <a href="//detail_379.html"
                            >DIV+CSS静态HTML网页设计模板</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img :src="MKLogo" class="article_user_pic" />
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
                          <a href="//detail_366.html"
                            >将网站LOGO放到浏览器地址栏</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img :src="MKLogo" class="article_user_pic" />
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
                          <a href="//detail_364.html"
                            >专属学生的简单html静态网页模板</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img :src="MKLogo" class="article_user_pic" />
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
                          <a href="//detail_361.html"
                            >html个人网页制作源代码</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img :src="MKLogo" class="article_user_pic" />
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
                          <a href="//detail_355.html"
                            >html5优秀个人博客模板下载</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img :src="MKLogo" class="article_user_pic" />
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
                          <a href="//detail_346.html"
                            >迷你灰MINIGRAY</a
                          >
                        </div>
                        <div class="base-info">
                          <ul>
                            <li class="hidden-xs">
                              <img :src="MKLogo" class="article_user_pic" />
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
                </article>
              </div>
            </div>
            <aside class="col-lg-3 col-md-3 right animated slideInRight">
              <div class="right-fun">
                <div class="alert alert-info alert-dismissible fade in">
                  <a href="#" class="close" data-dismiss="alert">&times;</a>
                  这是我的个人博客，主要是对所学知识的梳理和总结，同时也希望能够帮到其他同学。
                  另外，本博客分享过的图书，绝大部分我这里都有适合<b>Kindle</b>阅读的电子版，
                  因为版权原因现在不再公开分享，有需要的同学可以给我发邮件私下交流，无偿分享。
                </div>
                <div class="alert alert-info alert-dismissible fade in">
                  <a href="#" class="close" data-dismiss="alert">&times;</a>
                  <a
                    title=""
                    href="https://mubu.com/inv/44164"
                    target="_blank"
                    data-original-title="注册地址"
                    class="alert-link"
                    >幕布 </a
                  >这个工具，它可以用来整理思维大纲，自动生成好看的思维导图，你值得拥有！
                </div>
                <div class="model hidden-xs">
                  <div class="title">站内搜索</div>
                  <div class="content">
                    <div class="searche_bar7">
                      <form>
                        <!-- <span class="glyphicon glyphicon-search pull-left"></span> -->
                        <input
                          type="text"
                          placeholder="请输入关键词"
                          name="keywords"
                        />
                        <button type="submit"></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  id="my-social"
                  class="panel panel-info hidden-xs"
                  style="margin-top: 12px"
                >
                  <div class="panel-heading">
                    <span class="glyphicon glyphicon-hand-right"></span
                    >&nbsp;我在这儿
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
                        <i class="fa fa-envelope"></i>
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
                        <i class="fa fa-github"></i>
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
                        <i class="fa fa-rss-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div id="geekplus-tool" class="panel panel-info hidden-xs">
                  <div class="panel-heading">
                    <span class="glyphicon glyphicon-bell"></span>&nbsp;小贴士
                  </div>
                  <div class="text-center">
                    <div class="my-blog-tool">
                      <iframe
                        scrolling="no"
                        src="https://tianqiapi.com/api.php?style=tf&skin=pitaya"
                        style="text-align: center; width: 96%; margin: 0 auto"
                        frameborder="0"
                        height="24"
                        allowtransparency="true"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default" style="margin-top: 10px">
                  <div
                    class="panel-heading"
                    style="background: rgba(0, 0, 0, 0.0001)"
                  >
                    <span class="glyphicon glyphicon-list"></span>&nbsp;最新文章
                  </div>
                  <div class="panel-body">
                    <!-- <div class="model recommend">                                    						                            <div class="title">热门推荐</div>						                            <div class="content"> -->
                    <div class="latest-hot-article">
                      <section class="articlelist-first-life">
                        <a>
                          <img alt="" src="imgs/IMG_0541.JPG" />
                          <span>我是谁</span>
                        </a>
                      </section>
                      <div class="articlelist">
                        <a href="#">
                          <i><img alt="" src="imgs/IMG_0541.JPG" /></i>
                          <p>收到给你说的那个老师那个看来是看到那个上课了</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default" style="margin-top: 10px">
                  <div
                    class="panel-heading"
                    style="background: rgba(0, 0, 0, 0.0001)"
                  >
                    <span class="glyphicon glyphicon-th"></span>&nbsp;文章分类
                  </div>
                  <div class="panel-body" id="cat-list">
                    <a style="margin: 1px" class="btn btn-default btn-sm"
                      >Linux系统编程<span class="badge badge-info"></span>
                    </a>
                    <a style="margin: 1px" class="btn btn-default btn-sm"
                      >Python<span class="badge badge-info"></span>
                    </a>
                    <a style="margin: 1px" class="btn btn-default btn-sm"
                      >Django<span class="badge badge-info"></span>
                    </a>
                    <a style="margin: 1px" class="btn btn-default btn-sm"
                      >深度学习<span class="badge badge-info"></span>
                    </a>
                    <a style="margin: 1px" class="btn btn-default btn-sm"
                      >MySql<span class="badge badge-info"></span>
                    </a>
                    <a style="margin: 1px" class="btn btn-default btn-sm"
                      >生活<span class="badge badge-info"></span>
                      <!-- type="button" -->
                    </a>
                  </div>
                </div>
                <div class="panel panel-default" style="margin-top: 10px">
                  <div
                    class="panel-heading"
                    style="background: rgba(0, 0, 0, 0.0001)"
                  >
                    <span class="glyphicon glyphicon-th"></span>&nbsp;拾物志
                  </div>
                  <div class="panel-body" id="sliderBox">
                    <div class="container_slide_edge_box">
                      <div align="center">
                        <div id="slide_edge_img" align="center">
                          <ul>
                            <li class="default">
                              <a href="/" target="_blank"
                                ><img
                                  src="/imgs/ChMkJlXVQXiIWUn4AAXkidbCz-wAAAUxAMx56AABeSh261 (1).jpg"
                                  alt="MEISINISI 2011新品发布"
                                  width="281"
                                  height="393"
                              /></a>
                            </li>
                            <li>
                              <a href="/" target="_blank"
                                ><img
                                  src="/imgs/ChMkJlXVQXiIWUn4AAXkidbCz-wAAAUxAMx56AABeSh261 (1).jpg"
                                  alt="竹韵轻风"
                              /></a>
                            </li>
                            <li>
                              <a href="/" target="_blank"
                                ><img
                                  src="/imgs/ChMkJlXVQXiIWUn4AAXkidbCz-wAAAUxAMx56AABeSh261 (1).jpg"
                                  alt="静影生香"
                              /></a>
                            </li>
                            <li>
                              <a href="/" target="_blank"
                                ><img
                                  src="/imgs/ChMkJlXVQXiIWUn4AAXkidbCz-wAAAUxAMx56AABeSh261 (1).jpg"
                                  alt="上海滩唯美时装影像"
                              /></a>
                            </li>
                            <li>
                              <a href="/" target="_blank"
                                ><img
                                  src="/imgs/ChMkJlXVQXiIWUn4AAXkidbCz-wAAAUxAMx56AABeSh261 (1).jpg"
                                  alt="写给青春的诗"
                              /></a>
                            </li>
                            <li>
                              <a href="/" target="_blank"
                                ><img
                                  src="/imgs/ChMkJlXVQXiIWUn4AAXkidbCz-wAAAUxAMx56AABeSh261 (1).jpg"
                                  alt="旗袍摄影欣赏"
                              /></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default recommendlist">
                  <div
                    class="panel-heading"
                    style="background: rgba(0, 0, 0, 0.0001)"
                  >
                    <span class="glyphicon glyphicon-list"></span>&nbsp;快捷菜单
                  </div>
                  <div class="panel-body">
                    <!-- <div class="model recommend">
                                                                                                        <div class="title">热门推荐</div>						                            <div class="content"> -->
                    <div class="fastmenu">
                      <span><a href="/">文章博客</a></span>
                      <span><a href="/">新闻资讯</a></span>
                      <span><a href="/">资源文件</a></span>
                      <span><a href="/">格物生活</a></span>
                      <span><a href="/">给我留言</a></span>
                    </div>
                  </div>
                </div>
                <!-- <div class="model">
                                                        <div class="title">快捷菜单</div>
                                                        <div class="menu">
                                                            <span><a
                                                                        href="/">文章博客</a></span>
                                                            <span><a
                                                                        href="/">新闻资讯</a></span>
                                                            <span><a
                                                                        href="/">资源文件</a></span>
                                                            <span><a 
                                                                        href="/">格物生活</a></span>
                                                            <span><a
                                                                        href="/">给我留言</a></span>
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
                    <p>
                      <a href="/"
                        >个人网页模板源代码</a
                      >
                    </p>
                    <p>
                      <a href="/"
                        >HTML个人简历源代码</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  //import SlideSwiper from '@/components/SlideSwiper.vue'
  
  export default {
    name: "HomeView",
    components: {
      //HelloWorld,
      //SlideSwiper,
    },
    data() {
      return {
        MKLogo: require("@/assets/icon/mai.png"),
      };
    },
    created() {},
    mounted() {
      //setInterval(this.marquee(), 1000);
      setTimeout(this.marquee(), 1000);
      document.getElementById('myESlideShow')[0].carousel({ interval: 2000})
    },
    watch: {},
    methods: {
      /***********************------首页（跑马灯）滚动字幕实现-------************************* */
      marquee() {
        let main1 = document.getElementsByClassName("text-inform")[0];
        let scrollWidth = main1.offsetWidth;
        console.log(scrollWidth);
        let main2 = document.getElementsByClassName("text-info")[0];
        let textWidth = main2.offsetWidth;
        console.log(textWidth);
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
          document
            .getElementsByClassName("text-info")[0]
            .animate({ left: i / 2 + "px" }, 20);
        }, 25);
      },
    },
  };
  </script>
  