<template>
  <div class="container container-content">
    <section class="row">
      <div
        class="col-lg-9 col-md-9 col-sm-12 col-xs-12 animate__animated animate__slideInLeft"
      >
        <div id="pblish-comment">
          <div class="container-fluid">
            <div class="row">
              <div>
                <div class="contact-box">
                  <form id="ajax-contact-web" ref="userCommentForm" action="">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <div class="form-group">
                          <input
                            v-model="userMessage.name"
                            type="text"
                            class="form-control"
                            id="name-web"
                            name="name"
                            placeholder="姓名*"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <div class="form-group">
                          <input
                            v-model="userMessage.email"
                            type="email"
                            class="form-control"
                            id="email-web"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <input
                            v-model="userMessage.website"
                            type="text"
                            class="form-control"
                            id="myWebSite-web"
                            name="myWebSite"
                            placeholder="网址"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <!-- <div contenteditable="true" class="Input_text"></div> -->
                      <textarea
                        v-model="userMessage.content"
                        class="form-control"
                        id="message-mobile"
                        name="editordata-web"
                        rows="3"
                        placeholder="留言内容*"
                        style="resize: vertical"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <button
                        class="btn btn-info"
                        type="button"
                        @click="userLeaveMessage"
                      >
                        <span
                          class="glyphicon glyphicon-send"
                          aria-hidden="true"
                        ></span>
                        发送
                      </button>
                      <!-- <span id="callback-msg-web"></span> -->
                    </div>
                    <!-- <div id="form-messages"></div> -->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="well well-sm well-no-margin">
              <h5 id="lw-number">留言条数:{{ leaveMessageTotal }}</h5>
            </div>
          </div>
        </div>
        <div class="leavewords-container">
          <div class="articleComment">
            <div
              class="comment-lw"
              v-for="(item, index) in leaveMessage"
              :key="index"
            >
              <div class="comment-main">
                <a class="user-logo"><img v-lazy="UserLogo" /></a>
                <div class="comment-content">
                  <div class="comment-info">
                    <a>{{ item.name }}</a>
                    <span class="comment_info_time">{{ item.createTime }}</span>
                  </div>
                  <div
                    class="comment-text"
                    :style="'color:' + someColor() + ';'"
                    v-if="checkHtml(item.content)"
                    v-html="item.content"
                  ></div>
                  <div
                    class="comment-text"
                    :style="'color:' + someColor() + ';'"
                    v-else
                    v-text="item.content"
                  ></div>
                  <div class="comment-action">
                    <a href="javascript:void(0)" @click="openReplyBox(item.id)"
                      >回复</a
                    >
                    &nbsp;
                    <a
                      v-if="item.id === replyBoxIndex"
                      href="javascript:void(0)"
                      @click="closeReplyBox"
                      >关闭</a
                    >
                  </div>
                  <!-- <div v-if="isDisplayMsgBox"> -->
                  <reply-message-box
                    :messageReplyInfo="{
                      id: item.id,
                      repId: item.id,
                      name: item.name,
                    }"
                    v-if="item.id === replyBoxIndex"
                    v-on:getReplyMsg="getReplyMessage"
                    ref="replyMsgRef"
                  ></reply-message-box>
                  <!-- </div> -->
                </div>
              </div>
              <div v-if="item.children" class="sub-comment-lw">
                <!-- <sub-reply-message  v-on:sendUserCommentStatus="getUserCommentStatus" :replyMessage="item.children"></sub-reply-message> -->
                <div
                  class="comment-main"
                  v-for="(subitem, index) in item.children"
                  :key="index"
                >
                  <a class="user-logo"
                    ><img
                      v-lazy="
                        subitem.userId == 'sysUser:1' ? GPLogo : UserLogo
                      "
                  /></a>
                  <div class="comment-content">
                    <div class="comment-info">
                      <a>{{ subitem.name }}</a>
                      <span
                        >&nbsp;回复：<a
                          ><strong class="">{{ subitem.replyName }}</strong></a
                        ></span
                      >
                      <span class="comment_info_time"
                        >&nbsp;{{ subitem.createTime }}</span
                      >
                    </div>
                    <div
                      class="comment-text"
                      :style="'color:' + someColor() + ';'"
                      v-if="checkHtml(subitem.content)"
                      v-html="subitem.content"
                    ></div>
                    <div
                      class="comment-text"
                      :style="'color:' + someColor() + ';'"
                      v-else
                      v-text="subitem.content"
                    ></div>
                    <div class="comment-action">
                      <a
                        href="javascript:void(0)"
                        @click="openReplyBox(subitem.id)"
                        >回复</a
                      >
                      &nbsp;
                      <a
                        v-if="subitem.id === replyBoxIndex"
                        href="javascript:void(0)"
                        @click="closeReplyBox"
                        >关闭</a
                      >
                    </div>
                    <!-- <div v-if="isDisplayMsgBox"> -->
                    <reply-message-box
                      :messageReplyInfo="{
                        id: item.id,
                        repId: subitem.id,
                        name: subitem.name,
                      }"
                      v-if="subitem.id === replyBoxIndex"
                      v-on:getReplyMsg="getReplyMessage"
                      ref="replyMsgRef"
                    ></reply-message-box>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div class="pagenumber">
          <div class="container-fluid">
            <div class="row">
              <nav class="pagenum" id="pagenum1">
                <span class="pagenum-btns">
                  <a
                    class="pagenum-prev"
                    @click="goToLeaveMessagePage(leaveMessagePageNum - 1)"
                    >&laquo;</a
                  >
                  <!-- <a class="pagenum-num">1</a>
                  <span class="pagenum-break">...</span>
                  <a class="pagenum-num">7</a>
                  <a class="pagenum-num">8</a>
                  <a class="pagenum-active">9</a>
                  <a class="pagenum-num">10</a>
                  <a class="pagenum-num">11</a>
                  <span class="pagenum-break">...</span>
                  <a class="pagenum-num">98</a> -->
                  <span
                    class="pagenum-break"
                    v-if="leaveMessageTotal / queryParams.pageSize > 5"
                    >...</span
                  >
                  <a
                    class="pagenum-num"
                    v-else-if="leaveMessageTotal / queryParams.pageSize <= 5"
                    v-for="index in Math.ceil(
                      leaveMessageTotal / queryParams.pageSize
                    )"
                    :key="index"
                    @click="goToLeaveMessagePage(index)"
                  >
                    {{ index }}
                  </a>
                  <a
                    class="pagenum-next"
                    @click="goToLeaveMessagePage(leaveMessagePageNum + 1)"
                    >&raquo;</a
                  >
                </span>
                <span class="pagenum-skip">
                  共<b class="pagenum-total">{{
                    leaveMessageTotal / queryParams.pageSize <= 1
                      ? 1
                      : Math.ceil(leaveMessageTotal / queryParams.pageSize)
                  }}</b
                  >页&nbsp;&nbsp;第<input
                    class="pagenum-input"
                    value="1"
                    v-model="leaveMessagePageNum"
                    type="text"
                  />页<a
                    class="pagenum-ok"
                    @click="goToLeaveMessagePage(leaveMessagePageNum)"
                    >确定</a
                  >
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <aside
        class="col-lg-3 col-md-3 col-sm-12 col-xs-12 right animated slideInRight"
      >
        <div class="right-fun">
          <!-- <div class="alert alert-info alert-dismissible fade in">
            <a href="#" class="close" data-dismiss="alert">&times;</a>
            博主自建并正在使用的书单已经放到
            <a
              title=""
              href="https://mubu.com/doc/dlGWUevFA"
              target="_blank"
              data-original-title="个人书单"
              class="alert-link"
            >
              幕布</a
            >了，感兴趣的书友可以参考一下。另外，顺便安利一下
            <a
              title=""
              href="https://mubu.com/inv/44164"
              target="_blank"
              data-original-title="注册地址"
              class="alert-link"
              >幕布 </a
            >这个工具，它可以用来整理思维大纲，自动生成好看的思维导图，你值得拥有！
          </div> -->
          <div class="model hidden-xs">
            <div class="title">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span
              >&nbsp;内容搜索
            </div>
            <div class="content">
              <!-- <div class="search_bar_side">
                <form>
                  <span class="glyphicon glyphicon-search pull-left"></span>
                  <input
                    type="text"
                    placeholder="请输入关键词"
                    name="keywords"
                  />
                  <button type="submit">
                    搜索
                  </button>
                </form>
              </div> -->
              <div class="search_aside_bar">
                <form class="form-horizontal" @submit.prevent="searchResult()">
                  <div class="input-group search-input-group">
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
          <div id="my-social" class="panel panel-info hidden-xs">
            <div class="panel-heading">
              <span class="glyphicon glyphicon-hand-right"></span>&nbsp;我的社交
            </div>
            <div class="">
              <div class="my-social-list">
                <a
                  id="S_ins"
                  title="Instagram"
                  target="_blank"
                  href="https://www.instagram.com/geekcjj/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="Instagram"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  id="s_douban"
                  title="新浪微博"
                  target="_blank"
                  href="https://www.weibo.com/u/5373856458"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="新浪微博"
                >
                  <i class="fa fa-weibo"></i>
                </a>
                <a
                  id="s_douban"
                  title="豆瓣"
                  target="_blank"
                  href="https://www.douban.com/people/geekcjj/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="豆瓣"
                >
                  <i class="fa fa-dashcube"></i>
                </a>
                <a
                  id="s_qq_music"
                  title="qq音乐"
                  target="_blank"
                  href="https://y.qq.com/portal/profile.html?uin=oKSFNKC57KvA7c**"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="qq音乐"
                >
                  <i class="fa fa-music"></i>
                </a>
                <a
                  id="s_email"
                  title="邮箱"
                  target="_blank"
                  href="mailto:geekcjj@gmail.com"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="EMAIL"
                >
                  <i class="fa fa-envelope-o"></i>
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
                  id="s_gitee"
                  title="Gitee码云"
                  target="_blank"
                  href="https://gitee.com/geekcjj"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="码云"
                >
                  <i class="fa fa-git"></i>
                </a>
                <a
                  id="s_rss"
                  title="RSS订阅"
                  target="_blank"
                  href="http://www.zifangsky.cn/feed/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="RSS"
                >
                  <i class="fa fa-rss-square"></i>
                </a>
              </div>
            </div>
          </div>
          <!-- <div
            id="geekcjj-tool"
            class="panel panel-info hidden-xs"
            style="margin-top: 20px"
          >
            <div class="panel-heading">
              <span class="glyphicon glyphicon-hand-right"></span
              >&nbsp;我是GEEKCJJ
            </div>
            <div class="">
              <div class="my-blog-tool">
                <a
                  id="S_ins"
                  title="Instagram"
                  target="_blank"
                  href="https://www.instagram.com/geekcjj/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="Instagram"
                >
                  <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
                </a>
                <a
                  id="s_douban"
                  title="新浪微博"
                  target="_blank"
                  href="https://www.weibo.com/u/5373856458"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="新浪微博"
                >
                  <i class="fa fa-weibo fa-lg"></i>
                </a>
                <a
                  id="s_douban"
                  title="豆瓣"
                  target="_blank"
                  href="https://www.douban.com/people/geekcjj/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="豆瓣"
                >
                  <i class="fa fa-dashcube fa-lg"></i>
                </a>
                <a
                  id="s_qq_music"
                  title="qq音乐"
                  target="_blank"
                  href="https://y.qq.com/portal/profile.html?uin=oKSFNKC57KvA7c**"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="qq音乐"
                >
                  <i class="fa fa-music fa-lg"></i>
                </a>
                <a
                  id="s_email"
                  title="邮箱"
                  target="_blank"
                  href="mailto:geekcjj@gmail.com"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="EMAIL"
                >
                  <i class="fa fa-envelope-o fa-lg"></i>
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
                  <i class="fa fa-github fa-lg"></i>
                </a>
                <a
                  id="s_gitee"
                  title="Gitee码云"
                  target="_blank"
                  href="https://gitee.com/geekcjj"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="码云"
                >
                  <i class="fa fa-git fa-lg"></i>
                </a>
                <a
                  id="s_rss"
                  title="RSS订阅"
                  target="_blank"
                  href="http://www.zifangsky.cn/feed/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-original-title="RSS"
                >
                  <i class="fa fa-rss-square fa-lg"></i>
                </a>
              </div>
            </div>
          </div> -->
          <div class="panel panel-default">
            <div
              class="panel-heading"
              style="background: rgba(0, 0, 0, 0.0001)"
            >
              <span class="glyphicon glyphicon-comment"></span>&nbsp;热门留言
            </div>
            <div class="panel-body recommendlist">
              <!-- <div class="model recommend">
              <div class="title">热门推荐</div>
              <div class="content"> -->

              <div
                class="hotUserComment"
                v-for="(item, index) in hotUserLeaveWord"
                :key="index"
              >
                <div class="userCommentInfo">
                  <span style="color: #050404">{{ item.name }}</span
                  >&nbsp;热度:
                  <strong style="color: #f10202"
                    >{{ item.replyCount * 999 }}
                    <span class="glyphicon glyphicon-fire"></span>
                  </strong>
                  <div>{{ item.createTime }}</div>
                </div>
                <div class="userCommentContent">
                  <p
                    v-html="item.content"
                    v-if="checkHtml(item.content)"
                    :style="'color:' + someColor() + ';'"
                  ></p>
                  <p
                    v-text="item.content"
                    v-else
                    :style="'color:' + someColor() + ';'"
                  ></p>
                </div>
              </div>
              <!-- <p>
                <a href="http://www.youtiy.com/detail_382.html">HTML个人简历源代码</a>
              </p>
              <p>
                <a href="http://www.youtiy.com/detail_381.html">自我介绍个人网页设计模板</a>
              </p>
              <p>
                <a href="http://www.youtiy.com/detail_379.html">DIV+CSS静态HTML网页设计模板</a>
              </p>
              <p>
                <a href="http://www.youtiy.com/detail_377.html">一个完整的html网页设计代码免费下载</a>
              </p> -->
            </div>
          </div>
          <div class="panel panel-default">
            <div
              class="panel-heading"
              style="background: rgba(0, 0, 0, 0.0001)"
            >
              <span class="glyphicon glyphicon-th"></span>&nbsp;标签云图
            </div>
            <div class="panel-body" id="cat-list">
              <span style="display:inline-block;margin:2px;" v-for="(item, index) in allTagArticleCount"
                      :key="index">
                    <router-link :to="{path:'/articleListForTag',query:{tagName:item.tagName}}" class="label label-info" > 
                      {{ item.tagName ? item.tagName : "Java" }}
                      <span class="badge">{{ item.articleCount != -1 ? item.articleCount : 1 }}</span>
                    </router-link>
              </span>
              <!-- <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                >Linux系统编程<span class="badge badge-info"></span>
              </a>
              <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                >Python<span class="badge badge-info"></span>
              </a>
              <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                >Django<span class="badge badge-info"></span>
              </a>
              <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                >深度学习<span class="badge badge-info"></span>
              </a>
              <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                >MySql<span class="badge badge-info"></span>
              </a>
              <a style="margin-bottom: 3px" class="btn btn-default btn-sm"
                >生活<span class="badge badge-info"></span>
              </a> -->
            </div>
          </div>
        </div>
      </aside>
    </section>
    <!-- 按钮触发模态框 -->
    <!-- <button
      class="btn btn-primary visible-xs"
      style="
        position: fixed;
        right: 9px;
        bottom: 100px;
        background-color: #ccc;
        z-index: 99;"
      data-toggle="modal"
      data-target="#leaveMessageModal"
    >
      <span class="glyphicon glyphicon-edit"></span>&nbsp;留言评论
    </button> -->
    <!-- Bootstrap模态框（Modal） -->
    <div
      class="modal fade"
      id="leaveMessageModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">留言评论</h4>
          </div>
          <div class="modal-body">
            <section id="contact-area">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-10 offset-lg-1">
                    <div class="contact-box text-center">
                      <form id="ajax-contact-mobile" action="" method="post">
                        <div class="form-group row">
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <input type="hidden" value="0" name="parentId" />
                            <input
                              v-model="userMessage.name"
                              type="text"
                              class="form-control"
                              id="name-web"
                              name="name"
                              placeholder="姓名*"
                              required=""
                            />
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <input
                              v-model="userMessage.email"
                              type="email"
                              class="form-control"
                              id="email-web"
                              name="email"
                              placeholder="Email*"
                              required=""
                            />
                          </div>
                          <div class="col-lg-4 col-md-4 col-sm-4">
                            <input
                              v-model="userMessage.website"
                              type="text"
                              class="form-control"
                              id="myWebSite-web"
                              name="myWebSite"
                              placeholder="网址"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <textarea
                            v-model="userMessage.content"
                            class="form-control"
                            id="message-mobile"
                            name="editordata-web"
                            rows="5"
                            placeholder="留言内容*"
                          ></textarea>
                        </div>
                        <div class="form-group">
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="userLeaveMessage"
                          >
                            发送
                          </button>
                          <span id="callback-msg-web"></span>
                        </div>
                        <!-- <div id="form-messages"></div> -->
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="modal-footer">
            <span id="callback-msg-mobile"></span>
            <button type="button" class="btn btn-default" data-dismiss="modal">
              关闭
            </button>
            <button
              class="btn btn-info"
              type="button"
              @click="userLeaveMessage"
            >
              发送
            </button>
            <!-- <button
              type="button"
              class="btn btn-primary">提交
            </button> -->
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal -->
    </div>
  </div>
</template>

<script>
import GCLogo from "@/assets/logo.png";
import MKLogo from "@/assets/icon/mai.png";
//递归显示留言的组件
// import SubReplyMessage from "@/components/comment/SubReplyMessage.vue"
//调用回复消息的组件
import ReplyMessageBox from "@/components/comment/ReplyMessageBox.vue";
import {
  sendUserComment,
  getAllUserComment,
  getUserCommentCount,
  getWebHotUserComment,
  getArticleLatestUserComment,
  getTagArticleCount,
} from "@/api/geekplus/geekplus";
//import { toasted } from 'vue/types/umd';

export default {
  components: {
    //SubReplyMessage,
    ReplyMessageBox,
  },
  data() {
    return {
      keywords: "",
      GPLogo: GCLogo,
      UserLogo: MKLogo,
      isDisplayMsgBox: false,
      replyBoxIndex: -1,
      //网站直接留言
      userMessage: {},
      leaveMessageTotal: 2,
      leaveMessagePageNum: 1,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        replyId: null,
        name: null,
        email: null,
        website: null,
        content: null,
        topicId: null,
        topicType: null,
        userId: null,
        parentId: 0,
      },
      leaveMessage: [
        {
          id: "1",
          name: "普通用户",
          email: "",
          website: "",
          content: "你好",
          createTime: "2023-03-03",
          children: [
            {
              id: "11",
              name: "geekplus",
              email: "",
              website: "",
              content: "嗯！你好！",
              createTime: "2023-03-11",
            },
            {
              id: "12",
              name: "geekplus",
              email: "",
              website: "",
              content: "what？你在说什么？我不知道！",
              createTime: "2023-03-09",
            },
          ],
        },
        {
          id: "111",
          name: "普通用户",
          email: "",
          website: "",
          content: "你是做什么的，你为什么要建这个网站？",
          createTime: "2023-03-13",
          children: [
            {
              id: "121",
              name: "普通用户",
              email: "",
              website: "",
              content: "我是一个孤独的人，一个没有朋友的人？",
              createTime: "2023-03-17",
            },
          ],
        },
      ],
      //热门用户网站留言评论
      hotUserLeaveWord: [],
      allTagArticleCount: [], //查询每个标签的文章数量
    };
  },
  created() {
    this.getAllUserCommentMsg();
    this.getHotWebUserComment();
    this.getTagAndArticleCount();
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
    // ref绑定自定义事件
    //this.$refs.replyMsgRef.$on('getReplyMsg',this.getReplyMessage);
  },
  methods: {
    // 表单重置
    reset() {
      this.userMessage = {
        id: null,
        replyId: null,
        name: null,
        email: null,
        website: null,
        content: null,
        topicId: null,
        topicType: null,
        createTime: null,
        userId: null,
        parent: 0,
      };
      //this.resetForm("userCommentForm");
    },
    goToLeaveMessagePage(number) {
      //let data = { parentId: 0, topicId: null };
      //this.queryParams.parentId=0;
      if (number == 0) {
        this.queryParams.pageNum = 1;
      } else {
        this.queryParams.pageNum = number;
      }
      getAllUserComment(this.queryParams)
        .then((response) => {
          //console.log(response);
          this.leaveMessage = response.rows;
          this.leaveMessageTotal = response.total;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          
        });
      this.leaveMessagePageNum = this.queryParams.pageNum;
      //document.getElementsByClassName("leavewords-container")[0].scrollIntoView();
      this.afterBackToTop();
    },
    getAllUserCommentMsg() {
      //let data = { parentId: 0, topicId: null };
      //this.queryParams.parentId=0;
      getAllUserComment(this.queryParams)
        .then((response) => {
          //console.log(response);
          this.leaveMessage = response.rows;
          this.leaveMessageTotal = response.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //用户留言
    userLeaveMessage() {
      //this.userMessage.dateTime=this.getNowDate()
      //this.leaveMessage.push(this.userMessage);
      //this.userMessage.parentId=0;
      let data = this.userMessage;
      if (
        data.name == null ||
        data.content == null ||
        data.content == "" ||
        data.name == ""
      ) {
        //console.log("不为空！")
        this.$toasted.error("*必填项不能为空！", {
          position: "top-center",
          duration: 3000,
        });
      } else {
        sendUserComment(this.userMessage)
          .then((response) => {
            console.log(response);
            this.closeReplyBox();
            this.getAllUserCommentMsg();
            this.$toasted.success("留言成功！", {
              position: "top-center",
              duration: 2000,
            });
          })
          .catch((error) => {
            console.log(error);
          });
        this.reset();
      }
    },
    getReplyMessage(data) {
      let replyMsg = {
        name: data.name,
        email: data.email,
        website: data.website,
        content: data.content,
        //dateTime: this.getNowDate(),
        //children:[]
      };
      //this.isDisplayMsgBox=false;
      //this.leaveMessage.filter(item => item.id===this.replyBoxIndex)[0].children.push(replyMsg);
      //console.log(this.leaveMessage.filter(item => item.id===this.replyBoxIndex))
      //console.log(data)
      if (
        data.name == null ||
        data.content == null ||
        data.content == "" ||
        data.name == ""
      ) {
        //console.log("不为空！")
        this.$toasted.error("*必填项不能为空！", {
          position: "top-center",
          duration: 3000,
        });
      } else {
        sendUserComment(data)
          .then((response) => {
            console.log(response);
            this.closeReplyBox();
            this.getAllUserCommentMsg();
            this.$toasted.success("回复留言成功", {
              position: "top-center",
              duration: 2000,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    getUserCommentStatus(data) {
      if (data === "1") {
        this.closeReplyBox();
        this.getAllUserCommentMsg();
      }
    },
    openReplyBox(index) {
      //this.isDisplayMsgBox=true;
      this.replyBoxIndex = index;
      //console.log(this.replyBoxIndex)
    },
    closeReplyBox() {
      //this.isDisplayMsgBox=false;
      this.replyBoxIndex = -1;
    },
    getHotWebUserComment() {
      getWebHotUserComment()
        .then((response) => {
          //console.log(response)
          this.hotUserLeaveWord = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
    //动态滚动到顶部
    afterBackToTop() {
      //document.documentElement.scrollTop = 0;
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            33;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>

<style>
</style>