<template>
  <!-- 封装的一个递归显示留言和子留言 -->
  <div>
    <div
      class="comment-lw"
      v-for="(subitem, index) in replyMessage"
      :key="index"
    >
      <div class="comment-main">
        <a class="user-logo"><img :src="UserLogo" /></a>
        <div class="comment-content">
          <div class="comment-info">
            <a>{{ subitem.name }}</a
            ><span>{{ subitem.createTime }}</span>
          </div>
          <div class="comment-text">
            {{ subitem.content }}
          </div>
          <div class="comment-action">
            <!-- <a href="javascript:void(0)" selfid="6">回复</a> -->
            <a href="javascript:void(0)" @click="openReplyBox(subitem.id)">回复</a>
            &nbsp;
            <a
              v-if="replyBoxIndex===subitem.id"
              href="javascript:void(0)"
              @click="closeReplyBox"
              >关闭</a
            >
          </div>
          <reply-message-box
            v-if="replyBoxIndex===subitem.id" 
            v-on:getReplyMsg="getReplyMessage"
            :messageId="subitem.id"
            ref="replyMsgRef"
          ></reply-message-box>
        </div>
      </div>
      <div v-if="subitem.replyMessage" class="sub-comment-lw">
        <sub-reply-message
          :replyMessage="subitem.replyMessage"
        ></sub-reply-message>
      </div>
    </div>
  </div>
</template>

<script>
import GCLogo from "@/assets/logo.png";
import MKLogo from "@/assets/icon/mai.png";
//调用回复消息的组件
import ReplyMessageBox from "@/components/comment/ReplyMessageBox.vue";
import {sendUserComment,getAllUserComment,getUserCommentCount,getLatestUserComment} from "@/api/geekplus/geekplus"

export default {
  name: "SubReplyMessage",
  //props: ['replyMessage'],
  components: {
    ReplyMessageBox,
  },
  props: {
    replyMessage: {
      type: [Array, Object],
    },
  },
  data: () => {
    return {
      GPLogo: GCLogo,
      UserLogo: MKLogo,
      isDisplayMsgBox:false,
      replyBoxIndex:-1,
    };
  },
  created() {
    //console.log(this.replyMessage);
  },
  methods: {
    getReplyMessage(data){
      //console.log(data)
      //replyMessage.push(data);
      sendUserComment(data).then(response => {
        console.log(response)
        //this.getAllUserCommentMsg();
        this.sendUserCommentRefresh("1")
      }).catch(error => {
        console.log(error)
      })
    },
    openReplyBox(index) {
      //this.isDisplayMsgBox = true;
      this.replyBoxIndex=index;
      console.log(this.replyBoxIndex)
    },
    closeReplyBox() {
      //this.isDisplayMsgBox = false;
      this.replyBoxIndex=-1;
    },
    sendUserCommentRefresh(para){
      //this.replMsg.replyId=messageId;
        // 调用自定义事件，传入参数
        this.$emit('sendUserCommentStatus',para)
    },
  },
};
</script>

<style>
</style>