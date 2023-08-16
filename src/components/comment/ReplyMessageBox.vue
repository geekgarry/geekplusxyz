<template>
  <div class="contact-box">
    <form id="ajax-contact-web" action="" method="post">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="form-group">
            <input
              v-model="replyMsg.name"
              type="text"
              class="form-control"
              id="name-web"
              name="name"
              placeholder="姓名*"
              required=""
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="form-group">
            <input
              v-model="replyMsg.email"
              type="email"
              class="form-control"
              id="email-web"
              name="email"
              placeholder="Email"
              required=""
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="form-group">
            <input
              v-model="replyMsg.website"
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
        <textarea
          v-model="replyMsg.content"
          class="form-control"
          id="message-mobile"
          name="editordata-web"
          rows="3"
          placeholder="留言内容*"
          style="resize:vertical;"
        ></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-info" type="button" @click="clickReplyMsg">
          <span class="glyphicon glyphicon-send" aria-hidden="true"></span>发送
        </button>
        <span id="callback-msg-web"></span>
      </div>
      <!-- <div id="form-messages"></div> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "ReplyMessageBox",
  props: {
    messageReplyInfo: {
      type: Object,
    },
  },
  data() {
    return {
      replyMsg: {
        userName: null,
        email: null,
        webUrl: null,
        content: null,
        parentId: this.messageReplyInfo.id,
        replyId: this.messageReplyInfo.repId,
        replyName: this.messageReplyInfo.name,
      },
      commentId: 0,
    };
  },
  methods: {
    clickReplyMsg() {
      //this.replMsg.replyId=messageId;
      // 调用自定义事件，传入参数
      this.$emit("getReplyMsg", this.replyMsg);
    },
  },
};
</script>

<style>
</style>