<template>
  <!--
    ////////////////////////////////////////////////////////////////////
    // _ooOoo_ //
    // o8888888o //
    // 88" . "88 //
    // (| ^_^ |) //
    // O\ = /O //
    // ____/`---'\____ //
    // .' \\| |// `. //
    // / \\||| : |||// \ //
    // / _||||| -:- |||||- \ //
    // | | \\\ - /// | | //
    // | \_| ''\---/'' | | //
    // \ .-\__ `-` ___/-. / //
    // ___`. .' /--.--\ `. . ___ //
    // ."" '< `.___\_<|>_/___.' >'"". //
    // | | : `- \`.;`\ _ /`;.`/ - ` : | | //
    // \ \ `-. \_ __\ /__ _/ .-` / / //
    // ========`-.____`-.___\_____/___.-`____.-'======== //
    // `=---=' //
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //
    // 佛祖保佑 永不宕机 永无BUG //
    ////////////////////////////////////////////////////////////////////
                            -->
  <div class="container">
    <section class="container-content">
      <div class="row">
        <aside
          class="col-lg-3 col-md-3 hidden-sm hidden-xs animated slideInLeft"
        >
          <div class="right-fun">
            <div class="model">
              <div class="title">站内搜索</div>
              <div class="content">
                <!-- <div class="search_bar_side">
                                    <form>
                                        <input type="text" placeholder="请输入关键词" name="crid" />
                                        <button type="submit">
                                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                                        </button>
                                    </form>
                                </div> -->
                <div class="search_aside_bar">
                  <form class="form-horizontal" @submit.prevent="searchResult()">
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
            <div class="panel panel-default recommendlist">
              <div
                class="panel-heading"
                style="background: rgba(0, 0, 0, 0.0001)"
              >
                快捷菜单
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
                                                <span><a href="/">文章博客</a></span>
                                                <span><a href="/">新闻资讯</a></span>
                                                <span><a href="/">资源文件</a></span>
                                                <span><a href="/">格物生活</a></span>
                                                <span><a href="/">给我留言</a></span>
                                            </div>
                                            </div> -->
            <div class="panel panel-default">
              <div
                class="panel-heading"
                style="background: rgba(0, 0, 0, 0.0001)"
              >
                分类
              </div>
              <div class="panel-body">
                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  Linux系统编程<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  Python<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  Django<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  深度学习<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  MySql<span class="badge"></span>
                </a>

                <a
                  style="margin-bottom: 3px"
                  type="button"
                  class="btn btn-primary btn-sm"
                >
                  生活<span class="badge"></span>
                </a>
              </div>
            </div>
            <div class="panel panel-default recommendlist">
              <div
                class="panel-heading"
                style="background: rgba(0, 0, 0, 0.0001)"
              >
                热门推荐
              </div>
              <div class="panel-body">
                <!-- <div class="model recommend">
                                            <div class="title">热门推荐</div>
                                            <div class="content"> -->
                <p>
                  <a href="#"
                    >个人网页模板源代码</a
                  >
                </p>
                <p>
                  <a href="#"
                    >HTML个人简历源代码</a
                  >
                </p>
              </div>
            </div>
          </div>
        </aside>
        <div class="col-lg-9 col-md-9 animated slideInRight">
          <div class="article-container">
            <h3 class="article-title">
              {{
                articleInfo.articleTitle
                  ? articleInfo.articleTitle
                  : "git上传本地文件步骤"
              }}
            </h3>
            <!-- <h3>query传值{{ $route.query.articleId }}</h3> -->
            <div class="article-meta">
              <label
                >作者：{{
                  articleInfo.authorName ? articleInfo.authorName : "承诺"
                }}</label
              >
              |
              <label
                >发布：{{
                  articleInfo.createTime
                    ? articleInfo.createTime
                    : "2019.05.31"
                }}</label
              >
              |
              <label
                >浏览：{{
                  articleInfo.viewCount ? articleInfo.viewCount : 38909
                }}</label
              >
            </div>
            <!-- <div class="rEsl9f">
            <div class="s-dsoj">
              <span class="_3tCVn5"
                ><span
                  aria-label="ic-diamond"
                  class="anticon"
                  style="text-align: center"
                  ><svg
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    class=""
                  >
                    <use xlink:href="#ic-diamond">
                      <svg id="ic-diamond" viewBox="0 0 1026 1024">
                        <path
                          d="M751.144277 307.2l-123.016533-238.933333h159.778133a81.92 81.92 0 0 1 59.1872 25.258666l160.256 167.492267A27.306667 27.306667 0 0 1 987.620011 307.2h-236.475734z m270.506667 111.547733L640.927744 946.039467a27.306667 27.306667 0 0 1-48.128-24.234667L766.504277 375.466667h-56.388266l-170.5984 590.165333a27.306667 27.306667 0 0 1-52.462934 0.034133L315.500544 375.466667H259.112277l174.523734 545.5872a27.306667 27.306667 0 0 1-48.128 24.302933L5.160277 418.747733A27.306667 27.306667 0 0 1 27.346944 375.466667H999.464277a27.306667 27.306667 0 0 1 22.152534 43.281066zM18.301611 261.0176L178.557611 93.525333A81.92 81.92 0 0 1 237.744811 68.266667h159.744L274.506411 307.2H38.030677a27.306667 27.306667 0 0 1-19.729066-46.1824zM453.877077 68.266667h117.896534l122.9824 238.933333H330.894677l122.9824-238.933333z"
                        ></path>
                      </svg>
                    </use></svg></span
                ><span>0.164</span></span
              ><time datetime="2018-09-25T12:10:46.000Z"
                >2018.09.25 20:10:46</time
              ><span>字数 236</span><span>阅读 209</span>
            </div>
          </div> -->
            <article
              class="article-content"
              v-if="articleInfo.articleContent"
              v-html="articleInfo.articleContent"
            ></article>
            <article class="article-content" v-else>
              <p>
                1、（先进入项目文件夹）通过命令 git init
                把这个目录变成git可以管理的仓库
              </p>
              <pre
                class="line-numbers language-undefined"
              ><code class="  language-undefined">git init
                      <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
              <p>
                2、把文件添加到版本库中，使用命令 git add
                .添加到暂存区里面去，不要忘记后面的小数点“.”，意为添加文件夹下的所有文件
              </p>
              <pre
                class="line-numbers language-csharp"
              ><code class="  language-csharp">git <span class="token keyword">add</span> <span class="token punctuation">.</span>
                      <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
              <p>
                3、用命令 git
                commit告诉Git，把文件提交到仓库。引号内为提交说明
              </p>
              <pre
                class="line-numbers language-bash"
              ><code class="  language-bash">git commit -m '提交文件'
                      <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
              <p>4、关联到远程库</p>
              <pre
                class="line-numbers language-csharp"
              ><code class="  language-csharp">git remote <span class="token keyword">add</span> origin 你的远程库地址
                      例如<span class="token punctuation">:</span>git remote <span class="token keyword">add</span> origin https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>qiyiou25<span class="token operator">/</span>qiu<span class="token punctuation">.</span>git
                      <span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code></pre>
              <p>
                5、获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）
              </p>
              <pre
                class="line-numbers language-undefined"
              ><code class="  language-undefined">git pull --rebase origin master
                      <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
              <p>
                6、把本地库的内容推送到远程，使用 git
                push命令，实际上是把当前分支master推送到远程。执行此命令后会要求输入用户名、密码，验证通过后即开始上传。
              </p>
              <pre
                class="line-numbers language-undefined"
              ><code class="  language-undefined">git push -u origin master
                      <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
              <p>7、状态查询命令</p>
              <pre
                class="line-numbers language-undefined"
              ><code class="  language-undefined">git status
                      <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
              <div class="image-package" style="text-align: center">
                <div class="image-container">
                  <div class="image-container-fill"></div>
                  <div
                    class="image-view"
                    data-width="1947"
                    data-height="1276"
                  >
                    <img
                      referrer="no-referrer|origin|unsafe-url"
                      data-original-src="https://images.weserv.nl/?url=//upload-images.jianshu.io/upload_images/13183799-5104e1cd3d16e7b0.png/mic?width=100"
                      data-original-width="1947"
                      data-original-height="1276"
                      data-original-format="image/png"
                      data-original-filesize="1946551"
                      data-image-index="0"
                      class=""
                      src="https://images.weserv.nl/?url=https://images.weserv.nl/?url=https://upload-images.jianshu.io/upload_images/13183799-5104e1cd3d16e7b0.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
                    />
                  </div>
                </div>
                <div class="image-caption">git常用命令</div>
              </div>
            </article>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h6>评论:</h6>
              <div class="comments_input_area">
                <div class="row">
                  <div class="col-lg-4 col--md-4 col-sm-4">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="inputnickname"
                        name="nickname"
                        required=""
                        placeholder="昵称*"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col--md-4 col-sm-4">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="inputemail"
                        name="email"
                        required=""
                        placeholder="邮箱"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col--md-6 col-sm-4">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="inputwebsite"
                        name="websiteurl"
                        placeholder="网址"
                      />
                    </div>
                  </div>
                </div>
                <div class="Input_Box">
                  <div contenteditable="true" class="Input_text"></div>
                  <div class="Input_Foot">
                    <a class="imgBtn" href="javascript:void(0);">'◡'</a
                    ><a class="imgBtn" href="javascript:void(0);">&lt;/&gt;</a
                    ><a class="postBtn">确定</a>
                  </div>
                </div>
                <div class="faceDiv">
                  <section class="emoji_container"></section>
                  <section class="emoji_tab"></section>
                </div>
              </div>
            </div>
            <!-- <iframe src="squireeditor/source/document.html" onload="top.editor=this.contentWindow.editor" width="100%" height="200"></iframe> -->
            <!-- <div class="col-centered">
                <textarea id="foo"></textarea>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getArticleDetail,getArticleDetailIsDisplay } from "@/api/geekplus/geekplus";
export default {
  data() {
    return {
      keywords: "",
      articleInfo: {
        articleCategory: "4",
        articleContent: null,
        articleTitle: "springboot整合AOP,实现log操作日志",
        authorId: null,
        authorName: "一个程序员",
        createBy: null,
        createTime: "2023-03-21 08:36:14",
        id: 1,
        isDisplay: "0",
        likeCount: null,
        params: {},
        remark: null,
        searchValue: null,
        updateBy: null,
        updateTime: "2023-03-21 17:32:28",
        viewCount: null,
      },
    };
  },
  created() {
    this.getArticle();
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
  mounted(){
  },
  methods: {
    getArticle() {
      var id = JSON.parse(this.$route.query.articleId);
      let param={id:id,isDisplay:1}
      getArticleDetail(param)
        .then((response) => {
          this.articleInfo = response.data;
          window.document.title=response.data.articleTitle+" | 极客普拉斯&梦极客园"||"极客普拉斯&梦极客园-geekplus";
        })
        .catch((error) => {
          this.$toasted.error(error, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
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
  },
};
</script>

<style>
</style>