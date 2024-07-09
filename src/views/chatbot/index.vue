<template>
    <div id="chat_app_container">
        <div class="container-fluid">
            <div class="row" v-if="chatdisplay">
                <!-- <div class="col-sm-1 col-md-1 col-lg-2">
                                        </div> -->
                <!-- <div class="col-xs-12 col-sm-10 col-md-10 col-lg-8">
                                        </div> -->
                <div class="chat-main-content">
                    <div class="chatBoxHeader" :style="{top: chatBoxHeaderTop+ `px`}">
                        <!-- <div><el-tooltip class="item" effect="dark" content="输入你的openAiKey" placement="bottom-start"><i class="el-icon-key" @click="setOpenAiKey"></i></el-tooltip></div> $router.push({path:'/'})-->
                        <div><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></div>
                        <span>AI智能助手</span>
                        <div @click="openMsg"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span></div>
                    </div>
                    <div class="bigChatBox" id="bigChatBox" :style="{height: chatBoxHeight + `px`}">
                        <div v-for="(item, index) in msgList" v-bind:key="index" class="listChatMsg">
                            <div v-show="item.time" class="chat_date_time">{{getChatDateTime(item.time)}}</div>
                            <span class="listChatItemL" v-if="item && item.align == 'left'">
                                                              <span><img
                                                                class="chatUserIcon"
                                                                v-lazy="'https://www.geekplus.xyz/imgs/logo.png'"
                                                                alt="极客普拉斯" />
                                                              </span>
                            <span class="listChatItemContent" v-if="item && item.link == ''">
                                                                <span v-highlight v-html="markdownToHtmlWithoutExtraLines(item.text)"></span>
                            <!-- v-if="item.type=='1'" <span v-if="item.type=='0'" v-text="item.text">{{item.text}}</span> -->
                            </span>
                            <span class="listChatItemContent" v-if="item && item.link">: <a :href="item.link" target="_blank" >{{item.text}}</a></span
                                                              >
                                                            </span>
                            <span class="listChatItemR" v-if="item && item.align == 'right'">
                                                        <span v-highlight class="listChatItemContent">
                                                            <div class="chat_extra_data" v-if="checkObjectExistsJson(item,'extraData')">
                                                                <object :data="item.extraData" style="width: 95%;" height="100%">
                                                                    <!-- <embed :src="item.extraData" style="width: 100%;" >
                                                                    <audio controls height="50" width="100%" :data="item.extraData">
                                                                    </audio> -->
                                                                    <video controls height="50" width="100%" :data="item.extraData">
                                                                        <source :src="item.extraData" type="audio/mpeg">
                                                                        <source :src="item.extraData" type="audio/ogg">
                                                                        <source :src="item.extraData" type="video/mp4">
                                                                        <source :src="item.extraData" type="video/ogg">
                                                                    </video>
                                                                    <a :href="item.extraData" target="_blank">查看</a>
                                                                </object>
                                                            </div>
                                                            {{item.text}}
                                                        </span>
                            <span>
                                <img class="chatUserIcon" v-lazy="'https://www.geekplus.xyz/imgs/mai.png'" alt="麦壳" />
                            </span>
                            </span>
                        </div>
                    </div>
                    <div class="chatBoxFooter">
                        <!-- <div class="chatBoxFooterBtn">
                                    <span class="chat_btn_left"><a class="btn btn-default" href="#" role="button"
                                                          @click="startAndStopRecording" >{{recordingTxt}}
                                                        </a>
                                                        </span>
                                    <textarea placeholder="请输入聊天内容" v-model="inputChat" id="inputContentText" class="form-control onlyoneline" :disabled="statusDisabled" :autofocus="false" rows="1" 
                                    @keydown="keyDownEvent" @input="textInputEvent" @paste.capture.passive="pastingData"></textarea>
                                    <span class="chat_btn_right">
                                                <a class="btn btn-default" href="#" role="button" 
                                                @click="handleMsg">发送</a>
                                            </span>
                                </div> -->
                        <div class="input-container">
                            <div class="button-container">
                                <button type="button" class="send-button" @click="startAndStopRecording">
                                            {{recordingTxt}}
                                        </button>
                            </div>
                            <div class="textarea-container">
                                <textarea placeholder="请输入消息..." class="onlyoneline" id="inputContentText" name="inputChat" autocomplete="off" rows="1" v-model="inputChat" :autofocus="false" @keydown="keyDownEvent" @input="textInputEvent" @paste.capture.passive="pastingData"></textarea>
                                <label for="file-upload" class="upload-button">
                                    <!-- <svg t="1720277146152" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5064" width="20" height="20">
                                        <path d="M899.437541 570.198493 568.89122 570.198493l0 330.508459c0 32.216749-26.103518 58.397015-58.341756 58.397015-32.216749 0-58.283428-26.180266-58.283428-58.397015L452.266036 570.198493 121.718691 570.198493c-32.217772 0-58.359152-26.121937-58.359152-58.340733s26.14138-58.284451 58.359152-58.284451l330.547345 0L452.266036 122.969683c0-32.17991 26.066679-58.340733 58.283428-58.340733 32.238238 0 58.341756 26.160823 58.341756 58.340733L568.89122 453.573309l330.547345 0c32.218796 0 58.359152 26.065655 58.359152 58.284451S931.656337 570.198493 899.437541 570.198493" p-id="5065" fill="#484747"></path>
                                    </svg> -->
                                    <svg t="1720279770597" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10853" id="mx_n_1720279770598" width="20" height="20">
                                        <path d="M0 0h1024v1024H0z" fill="#000000" opacity=".01" p-id="10854"></path>
                                        <path d="M533.312 128a21.312 21.312 0 0 1 21.376 21.312v320h320a21.312 21.312 0 0 1 21.312 21.376v42.624a21.312 21.312 0 0 1-21.312 21.376h-320v320a21.312 21.312 0 0 1-21.376 21.312h-42.624a21.312 21.312 0 0 1-21.376-21.312v-320h-320A21.312 21.312 0 0 1 128 533.312v-42.624a21.312 21.312 0 0 1 21.312-21.376h320v-320A21.312 21.312 0 0 1 490.688 128h42.624z" fill="#000000" fill-opacity=".65" p-id="10855"></path>
                                    </svg>
                                    <input type="file" id="file-upload" ref="file-upload-ref" accept="*" @change="uploadDataFileEvent($event)" style="display: none;">
                                </label>
                            </div>
                            <div class="button-container">
                                <button type="button" class="send-button" @click="handleMsg" :disabled="statusDisabled">
                                            发送
                                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--事件的native修饰符只能在UI组件或自定义组件上使用，原生的html标签是不能使用的,入div，input等-->
            <!-- <button type="button" class="btn btn-info" @click="visible11" v-show="chatBtnPcDisplay">打开ChatGpt聊天框</button> -->
            <div class="row" v-else>
                <div class="col-md-2 col-lg-3"></div>
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6 chat-main-content">
                    <div class="chatBoxHeader">
                        <div></div>
                        <span>AI聊天助手</span>
                        <div></div>
                    </div>
                    <div class="bigChatBox" id="bigChatBox-desktop" :style="{height: chatBoxHeight + `px`}">
                        <!-- :style="{textAlign: item.align}" -->
                        <div v-for="(item, index) in msgList" :key="index" class="listChatMsg">
                            <div v-show="item.time" class="chat_date_time">{{getChatDateTime(item.time)}}</div>
                            <span class="listChatItemL" v-if="item && item.align == 'left'">
                                <img
                                    class="chatUserIcon"
                                    src="https://www.geekplus.xyz/imgs/logo.png"
                                    alt="极客普拉斯"
                                />
                                <span class="pcChatTextSpan" v-if="item && item.link == ''" >
                                <span v-highlight v-html="markdownToHtmlWithoutExtraLines(item.text)"></span>
                            <!--v-if="item.type=='1'"  <span v-if="item.type=='0'" v-text="item.text">{{item.text}}</span> -->
                            </span>
                            <span class="pcChatTextSpan" v-if="item && item.link">: <a :href="item.link" target="_blank" >{{item.text}}</a></span>
                            </span>
                            <span class="listChatItemR" v-if="item && item.align == 'right'">
                                                        <span v-highlight class="pcChatTextSpan">
                                                            <div class="chat_extra_data" v-if="checkObjectExistsJson(item,'extraData')">
                                                                <object :data="item.extraData" style="width: 95%;" height="100%">
                                                                <!-- <embed :src="item.extraData" style="width: 100%;" >
                                                                <audio controls height="50" width="100%" :data="item.extraData">
                                                                </audio> -->
                                                                <video controls height="50" width="100%" :data="item.extraData">
                                                                    <source :src="item.extraData" type="audio/mpeg">
                                                                    <source :src="item.extraData" type="audio/ogg">
                                                                    <source :src="item.extraData" type="video/mp4">
                                                                    <source :src="item.extraData" type="video/ogg">
                                                                </video>
                                                                <a :href="item.extraData" target="_blank">查看</a>
                                                                </object>
                                                            </div>
                                                            {{item.text}}
                                                        </span>
                            <img class="chatUserIcon" src="https://www.geekplus.xyz/imgs/mai.png" alt="麦壳" />
                            </span>
                        </div>
                    </div>
                    <div class="chatBoxFooter">
                        <!-- <div class="input-group search-input-group">
                                    <textarea id="inputContentText" name="inputChat" autocomplete="off" :autofocus="false" v-model="inputChat" :disabled="statusDisabled" class="form-control onlyoneline" 
                                    placeholder="请输入聊天内容" rows="1" v-on:keydown="keyDownEvent" v-on:input="textInputEvent" v-on:paste.capture.passive="pastingData"></textarea>
                                    <span class="input-group-addon">
                                                <button type="button" @keydown.enter="handleMsg" @click="handleMsg" :disabled="statusDisabled">
                                                    <span class="glyphicon glyphicon-send"></span>
                                    </button>
                                    </span>
                                </div> -->
                        <div class="input-container">
                            <div class="textarea-container">
                                <textarea placeholder="请输入消息..." class="onlyoneline" id="inputContentText" name="inputChat" autocomplete="off" rows="1" :autofocus="false" v-model="inputChat" v-on:keydown="keyDownEvent" v-on:input="textInputEvent" v-on:paste.capture.passive="pastingData"></textarea>
                                <label for="file-upload" class="upload-button">
                                    <!-- <svg t="1720277146152" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5064" width="20" height="20">
                                        <path d="M899.437541 570.198493 568.89122 570.198493l0 330.508459c0 32.216749-26.103518 58.397015-58.341756 58.397015-32.216749 0-58.283428-26.180266-58.283428-58.397015L452.266036 570.198493 121.718691 570.198493c-32.217772 0-58.359152-26.121937-58.359152-58.340733s26.14138-58.284451 58.359152-58.284451l330.547345 0L452.266036 122.969683c0-32.17991 26.066679-58.340733 58.283428-58.340733 32.238238 0 58.341756 26.160823 58.341756 58.340733L568.89122 453.573309l330.547345 0c32.218796 0 58.359152 26.065655 58.359152 58.284451S931.656337 570.198493 899.437541 570.198493" p-id="5065" fill="#484747"></path>
                                    </svg> -->
                                    <svg t="1720279770597" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10853" id="mx_n_1720279770598" width="20" height="20">
                                        <path d="M0 0h1024v1024H0z" fill="#000000" opacity=".01" p-id="10854"></path>
                                        <path d="M533.312 128a21.312 21.312 0 0 1 21.376 21.312v320h320a21.312 21.312 0 0 1 21.312 21.376v42.624a21.312 21.312 0 0 1-21.312 21.376h-320v320a21.312 21.312 0 0 1-21.376 21.312h-42.624a21.312 21.312 0 0 1-21.376-21.312v-320h-320A21.312 21.312 0 0 1 128 533.312v-42.624a21.312 21.312 0 0 1 21.312-21.376h320v-320A21.312 21.312 0 0 1 490.688 128h42.624z" fill="#000000" fill-opacity=".65" p-id="10855"></path>
                                    </svg>
                                    <input type="file" id="file-upload" ref="file-upload-ref" accept="*" @change="uploadDataFileEvent($event)" style="display: none;">
                                </label>
                            </div>
                            <div class="button-container">
                                <button type="button" class="send-button" @keydown.enter="handleMsg" @click="handleMsg" :disabled="statusDisabled">
                                    <span class="glyphicon glyphicon-send"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 col-lg-3"></div>
            </div>
        </div>
        <!-- <el-dialog :visible.sync="visible" title="对话框"> -->
        <!-- </el-dialog> -->
        <!-- <div class="plus-dialog-overlay">
        </div> -->
        <div class="modal fade" id="chatDataModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div role="document" class="plus-dialog">
                <div class="plus-dialog-main">
                    <div class="plus-dialog-container">
                        <div class="chat_extra_data" id="fileData">
                        </div>
                    </div>
                    <textarea name="inputChatDialog" v-model="chatMsgData.chatData" v-focus="dialogInputIsFocus" class="plus-form-textarea" placeholder="请输入消息..." rows="1"></textarea>
                    <div class="plus-dialog-footer">
                        <div class="pdf-left-btn">
                            <span class="cancel_btn" data-dismiss="modal" aria-label="Close">
                                取消
                            </span>
                        </div>
                        <span class="split-line"></span>
                        <div class="pdf-right-btn">
                            <span class="confirm_btn" v-on:click="sendWithFile">发送</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Recorder from 'js-audio-recorder'
import ImageCropper from "@/utils/ImageCropper.js"
import { getImageNaturalDimensions } from "@/utils/plushome.js"
import PlusDialog from '@/utils/PlusDialog.js'
import {showToast} from '@/utils/PlusToast.js'
// import marked from "marked"//9.1.6
const marked = require('marked'); //9.1.6
import { testProcess, getchatgpt, chatgpttest, geminiAI, geminiAIChat, getHistoryMessage, getTTSChinese } from "@/api/chatbot/chatbot"

export default {
    name: "ChatBot",
    data() {
        return {
            visible: false,
            dialogInputIsFocus: false,
            inputChat: "",
            preChatData: "", //历史聊天数据
            msgList: [], //聊天消息的list
            historyMsgStr: "", //历史聊天记录
            loading: false,
            chatBtnPcDisplay: true,
            chatdisplay: false,
            reduceH: 90,
            chatBoxHeight: 440,
            chatBoxHeaderTop: 0,
            windowWidth: 0,
            windowHeight: 0,
            audioData: [], // 存储录音数据块，recorderData//音频的二进制数据
            recorder: new Recorder({
                sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
                sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
                numChannels: 1, // 声道，支持 1 或 2， 默认是1
                // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
            }),
            recording: 0,
            recordingTxt: "语音",
            textAudio: null,
            isTextVoice: false, //是否语音朗读
            isHistory: true, //是否采用有历史记忆的聊天
            tempFileUrl: "", //临时二进制数据Blob文件地址
            openAiKey: '',
            chatMsgData: {}, //封装一个聊天消息，里面自己添加具体的内容，可以携带媒体数据mediaData
            baseHost: window.location.host,
            baseApi: process.env.VUE_APP_BASE_API,
            textAreaInput: null,
            textInputHeight: 0,
            statusDisabled: false,
            cropper: null
        };
    },
    created: function() {
        this.getHistoryMag("guest");
    },
    beforeMount() {
        this.beforeLoadDocument();
    },
    mounted() {
        const that = this;
        that.textAreaInput = document.querySelector("#inputContentText");
        that.textInputHeight = that.textAreaInput.offsetHeight;
        //window.addEventListener('resize', function() {});
        //that.setOpenAiKey()
        // <!--把window.onresize事件挂在到mounted函数上-->
        window.onresize = () => {
            return (() => {
                window.fullHeight = document.documentElement.clientHeight || document.body.clientHeight;
                window.fullWidth = document.documentElement.clientWidth || document.body.clientWidth;
                that.windowHeight = window.fullHeight; // 高
                that.windowWidth = window.fullWidth; // 宽
                // 页面宽度小于768px时，移动端显示，小屏幕平板 (≥768px) (<992px)
                if (that.windowWidth < 992) {
                    that.textAreaInput = document.querySelector("#inputContentText");
                    that.textInputHeight = that.textAreaInput.offsetHeight;
                    //that.chatBtnPcDisplay = false;
                    that.chatdisplay = true;
                    that.scrollAtTop();
                } else {
                    that.textAreaInput = document.querySelector("#inputContentText");
                    that.textInputHeight = that.textAreaInput.offsetHeight;
                    //that.chatBtnPcDisplay = true;
                    that.chatdisplay = false;
                    that.scrollAtTop();
                }
                //console.log("页面高度：" + that.windowHeight)
                //document.getElementById("bigChatBox").offsetHeight = (that.windowHeight - 100) + "px";
                that.chatBoxHeight = that.windowHeight - that.reduceH;
                if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
                    window.setTimeout(function() {
                        if ('scrollIntoView' in document.activeElement) {
                            document.activeElement.scrollIntoView();
                        } else {
                            document.activeElement.scrollIntoViewIfNeeded();
                        }
                    }, 0);
                }
            })()
        };
        window.onscroll = () => {
            //在IOS下document.body.scrollTop 一直为0，要用document.documentElement.scrollTop
            var scrollTopDis = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(document.body.scrollHeight)
            this.chatBoxHeaderTop = scrollTopDis;
        }
        // textarea.addEventListener("keydown", (e) => {});
        //shown是在显示之后，show是在显示的同时
        $('#chatDataModal').on('show.bs.modal', function(e) {
            that.dialogInputIsFocus = true;
        });
        //hidden是在隐藏之后，hide是在隐藏的同时
        $('#chatDataModal').on('hidden.bs.modal', function(e) {
            URL.revokeObjectURL(that.tempFileUrl); // 释放url
            that.dialogInputIsFocus = false;
            // document.getElementById('myInput').focus();
        });
    },
    watch: {
        windowHeight(val) {
            //console.log("实时屏幕高度：", val, this.windowHeight);
        },
        windowWidth(val) {
            // if (val < 992) {
            //     this.chatBtnPcDisplay = false;
            // } else {
            //     this.chatBtnPcDisplay = true;
            // }
            //console.log("实时屏幕宽度：", val, this.windowHeight);
        }
    },
    methods: {
        beforeLoadDocument() {
            //this.startTTS("你好！请问现在是什么时间！");
            this.windowWidth = document.documentElement.clientWidth || document.body.clientWidth;;
            this.windowHeight = document.documentElement.clientHeight || document.body.clientHeight;;
            // 页面宽度小于768px时，显示移动端,<992px,显示移动和平板
            if (this.windowWidth < 992) {
                //this.chatBtnPcDisplay = false;
                this.chatdisplay = true;
            } else {
                //this.chatBtnPcDisplay = true;
                this.chatdisplay = false;
            }
            //document.getElementById("bigChatBox").offsetHeight = (this.windowHeight - 100) + "px";
            this.chatBoxHeight = this.windowHeight - this.reduceH;
            // testProcess().then(res=>{console.log(res);})
        },
        // visible11() {
        //     this.visible = true;
        //     this.$nextTick(() => {
        //         this.$refs.serachBox.focus();
        //     });
        // },
        //处理发送消息
        async handleMsg() {
            if (this.inputChat === "关闭语音") {
                this.isTextVoice = false;
                this.inputChat = "";
                this.$toasted.show("关闭语音回复功能", { position: "top-center", duration: 3000, theme: "bubble", });
                /*
                 * 模拟信息返回
                 */
                // setTimeout(async () => {
                //     let listMsg = {
                //         align: "left",
                //         text: "已关闭语音功能",
                //         link: "",
                //         type: '0'
                //     };
                //     await this.msgList.push(listMsg);
                //     await this.scrollAtTop();
                //     //this.loading = false;
                // }, 1000);
            } else if (this.inputChat === "开启语音") {
                this.isTextVoice = true;
                this.inputChat = "";
                this.$toasted.success("开启语音回复功能", { position: "top-center", duration: 3000, theme: "bubble", });
                /*
                 * 模拟信息返回
                 */
                // setTimeout(async () => {
                //     let listMsg = {
                //         align: "left",
                //         text: "已开启语音功能",
                //         link: "",
                //         type: '0'
                //     };
                //     await this.msgList.push(listMsg);
                //     await this.scrollAtTop();
                //     //this.loading = false;
                // }, 1000);
            } else if (this.inputChat === "停止语音" || this.inputChat === "停止播放" || this.inputChat === "暂停播放" || this.inputChat === "暂停回复语音" || this.inputChat === "pause") {
                this.pauseTextAudio();
                //this.loading = false;
                this.inputChat = "";
                this.$toasted.info("停止回复语音", { position: "top-center", duration: 3000, theme: "bubble", });
            } else if (this.inputChat === "继续语音" || this.inputChat === "继续播放" || this.inputChat === "继续回复语音" || this.inputChat === "play") {
                this.playTextAudio();
                //this.loading = false;
                this.inputChat = "";
                this.$toasted.info("播放回复语音", { position: "top-center", duration: 3000, theme: "bubble", });
            } else if (this.inputChat === "聊天模式" || this.inputChat === "开启聊天模式" || this.inputChat === "开启对话模式" || this.inputChat === "开启记忆对话" || this.inputChat === "对话模式") {
                this.isHistory = true;
                this.inputChat = "";
                this.$toasted.success("开启聊天对话模式", { position: "top-center", duration: 3000, theme: "bubble", });
            } else if (this.inputChat === "取消历史记忆" || this.inputChat === "关闭对话模式" || this.inputChat === "关闭聊天模式" || this.inputChat === "关闭记忆对话") {
                this.isHistory = false;
                this.inputChat = "";
                this.$toasted.show("取消聊天对话模式", { position: "top-center", duration: 3000, theme: "bubble", });
            } else if ((this.inputChat && this.inputChat.trim().length > 0)) { //!this.isOnlyNewlines(this.inputChat)
                //this.loading = true;
                //chatHistoryToJson方法是在发送消息前把之前所有的消息构造一个json作为历史消息记录
                this.chatHistoryToJson(this.msgList);
                await this.showChatMsgList(this.msgList, { align: "right", text: this.inputChat, time: Date.now() });
                await this.scrollAtTop();
                this.getReplyMsg();
                this.inputChat = "";
                this.textAreaInput.style.height = "auto";
                this.chatBoxHeight = this.windowHeight - this.reduceH;
            }
        },
        getReplyMsg() {
            let that = this;
            // {
            /** if(this.openAiKey==''||this.openAiKey==null){
              this.$message({message:'请先输入你的openAiKey',type:'error',duration:2500})
            }else{
              // 处理自己的接口请求 返回需要的数据
            axios.post("/getchatgpt",//openai的api
              { username:"You", data: this.inputChat,openAiKey:this.openAiKey })
              .then(async (response) => {
              console.log(response);
              if (response.status == 200) {
                console.log("返回响应信息")
                console.log(response.data)
                let msg="消息";
                let msgtype="0"
                if(response.data.code==500){
                  msg="返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
                  msgtype="0";
                }else if(response.data.code==200){
                  // 自行处理需要的数据
                  msg = response.data.data.msg_data;
                  msgtype = response.data.data.msg_type;
                }
                let listMsg = {
                align: "left",
                text: msg,
                link: "",
                type: msgtype
                };
                if(this.isTextVoice===true){
                  this.startTTS(msg);
                }
                await this.msgList.push(listMsg);
                await this.scrollAtTop();
              }
              this.loading = false;
              })
              .catch(function (error) {
              console.log(error);
              this.loading = false;
              });
            } */
            that.beforeGetReplyRes();
            if (that.isHistory === false) {
                let dataParams = { username: "guest", chatData: this.inputChat };
                let result = null;
                this.sendMessage(dataParams)
                // .then(res => {
                //     result = res;
                //     this.handleResultTask(result);
                // }, error => {});
            } else {
                let dataParams = { username: "guest", chatData: this.inputChat, preChatData: this.preChatData };
                let result2 = null;
                this.sendMessageChat(dataParams)
            }
            //}
        },
        //获取用户的历史聊天记录
        getHistoryMag(username) {
            let that = this;
            getHistoryMessage({ username: username })
                .then(async (response) => {
                    //console.log(response.data)
                    let msglist = response.data;
                    await this.jsonStrToObj(msglist);
                    await this.scrollAtTop();
                }).catch(function(error) {
                    // console.log(error);
                    that.$toasted.error(error.msg, {
                        position: "top-center",
                        duration: 3000,
                        theme: "outline",
                    });
                });
        },
        sendWithFile() {
            //chatHistoryToJson方法是在发送消息前把之前所有的消息构造一个json作为历史消息记录
            //this.chatHistoryToJson(this.msgList);
            this.chatMsgData.username = "guest";
            this.chatMsgData.preChatData = this.preChatData;
            //let imgDiv=document.createElement("div").appendChild(this.convertBase64ToImage("base64Str")); this.chatMsgData.mediaData
            this.showChatMsgList(this.msgList, { align: "right", text: this.chatMsgData.chatData, extraData: this.tempFileUrl, time: Date.now() });
            this.scrollAtTop();
            this.beforeGetReplyRes();
            this.sendMessageChat(this.chatMsgData);
            $('#chatDataModal').modal('hide');
        },
        sendMessage(dataParams) {
            let that = this;
            that.statusDisabled = true;
            //链式编程
            // new Promise((resolve, reject) => {
            //     //第一次网络请求
            //     setTimeout(() => {
            //     //resolve将拿到的参数传递给then处理
            //     resolve('hello');
            //     //reject('err err err');
            //     },1000);
            // }).then((data) => {
            //     //第一次网络请求后的处理
            //     console.log(data);
            // }).catch(err => {
            //     console.log(err);
            // });
            geminiAI(dataParams)
                .then(async (response) => {
                    //console.log(response);
                    //if (response.code == 200) {
                    await that.handleResultTask(response);
                    //}
                    //this.loading = false;
                })
                .catch(function(error) {
                    //reject(error);
                    //console.log(error);
                    that.$toasted.error(error.msg, {
                        position: "top-center",
                        duration: 3000,
                        theme: "outline",
                    });
                    //this.loading = false;
                });
        },
        sendMessageChat(dataParams) {
            let that = this;
            that.statusDisabled = true;
            geminiAIChat(dataParams)
                .then(async (response) => {
                    //console.log(response);
                    //if (response.code == 200) {
                    await that.handleResultTask(response);
                    //}
                    //this.loading = false;
                })
                .catch(function(error) {
                    //reject(error);
                    //console.log(error);
                    that.$toasted.error(error.msg, {
                        position: "top-center",
                        duration: 3000,
                        theme: "outline",
                    });
                    //this.loading = false;
                });
            // return new Promise((resolve, reject) => {
            //     // 执行耗时操作
            //     // setTimeout(() => {
            //     // resolve('Task completed');
            //     // }, 5000); // 模拟耗时操作，延迟5秒
            // });
        },
        //在获取消息回复之前的临时等待或加载中，蕾丝进度条或加载转动圈
        beforeGetReplyRes(){
            //在获取请求响应前，设置一个临时加载显示的消息
            let listMsgTemp = { align: "left", text: "回复中，请稍后...", link: "", type: 9, time: Date.now() };
            //推送到消息列表中
            this.showChatMsgList(this.msgList, listMsgTemp);
            //延迟一秒等内容已经包含在div消息列表框中，然后在进行滑动到底部
            this.delayFunction(() => {
                this.scrollAtTop();
            }, 900);
        },
        //处理回复响应的异步任务函数
        async handleResultTask(response) {
            let msg = "消息";
            let msgtype = "0"
            // if (response.status && response.status == 500) {
            //     msg = "返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
            //     msgtype = "0";
            // }
            if (response.code == 500) {
                msg = "返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
                msgtype = "0";
            } else if (response.code == 200) {
                // 自行处理需要的数据
                msg = response.data.msg_data.trim();
                msgtype = response.data.msg_type;
                this.statusDisabled = false;
            }
            let listMsg = {
                align: "left",
                text: msg,
                link: "",
                type: msgtype,
                time: response.data.msg_date_time
            };
            //if (msg.flag == 1) {
            // const splitMsg = msg.answer.split("：");
            // listMsg.text = splitMsg[0];
            // listMsg.link = splitMsg[1];
            // }
            if (this.isTextVoice === true) {
                this.startTTS(msg);
            }
            await this.refreshChatReply(this.msgList, listMsg);
            await this.scrollAtTop();
        },
        textInputEvent(e) {
            let that = this;
            let textArea = e.target;
            var inputHeight = that.textInputHeight;
            let reduceH = that.reduceH;
            var textAreaAddHeight; //输入框增加的高度
            // 将高度重置为自动，以便根据内容计算高度
            // textArea.style.height = "auto";
            // 获取行数,表示是否有换行符，为1表示没有，换行符为0，后面就根据换行符来计算增加高度
            let currentLines = textArea.value.split("\n").length;
            textAreaAddHeight = (currentLines - 1) * 24;
            textArea.style.height = inputHeight + textAreaAddHeight + `px`;
            that.chatBoxHeight = that.windowHeight - (textAreaAddHeight + reduceH);
            // 如果行数超过最大行数，则设置最大高度
            if (currentLines > 8) {
                textAreaAddHeight = 8 * 24;
                textArea.style.height = inputHeight + textAreaAddHeight + `px`;
                that.chatBoxHeight = that.windowHeight - (textAreaAddHeight + reduceH);
                //textarea.style.height = `${textarea.scrollHeight}px`;
            }else if(currentLines==1){
                textArea.style.height = inputHeight + `px`;
                that.chatBoxHeight = that.windowHeight - reduceH;
            }
        },
        keyDownEvent(e) {
            let keyC = window.event.keyCode || e.keyCode; //这里是键盘的ASCLL码值，13为回车值
            //let key = window.event.key || event.key;//新的key时表示为键盘的具体值
            //只有在移动和平板设备上(<992px)才无法使用enter直接发送
            //而在桌面(>=992)，使用非shift键和enter键在能发送，否则就是换行
            if (this.windowWidth >= 992) {
                if (keyC == 13 && !e.shiftKey) {
                    //只有enter没有shift，或进行你的其他逻辑
                    e.preventDefault(); // 阻止默认行为，即不换行
                    // 13是enter键的键盘码 如果等于13 就调用click的登录方法
                    this.handleMsg();
                }
            }
            // else if(keyC == 13 && e.shiftKey){
            //     // 这里实现换行
            //     //document.getElementById("a").value += "\n";
            //     console.log(this.inputChat.length);
            //     if(this.inputChat!='' && this.inputChat.length > 0){
            //         this.inputChat+="\n";
            //     }
            //     console.log(this.inputChat);
            // }
        },
        //上传文件事件
        async uploadDataFileEvent(e) {
            let file = null;
            //this.formData.append("file", file.file);
            const items = e.target.files;
            if (items && items.length) {
                // for (let i = 0; i < items.length; i++) {}
                file = items[0];
                var URL = window.URL || window.webkitURL;
                // // 通过 file 生成目标 url。URL.createObjectURL(file);
                var tempURL = URL.createObjectURL(file);
                // 创建FileReader读取文件
                // const reader = new FileReader();
                // reader.onload = (e) => {
                //     const base64 = e.target.result;
                //     this.chatMsgData.mediaData = base64;
                //     console.log(base64)
                //     // 在这里处理base64数据
                //     //let baseArr=base64.split(",");
                //     // 拿到文件对象后，先上传或先展示都行，这里以图片进行举例
                //     // 如果是直接上传服务器，那可以拿到图片地址直接使用
                //     // 如果不进行上传，先展示，等点击确定在上传，那就自己创建一个链接进行使用
                //     // const windowURL = window.URL || window.webkitURL
                //     tempURL = URL.createObjectURL(file);
                // };
                // reader.readAsDataURL(file);
                // if ((file.type.indexOf('application/vnd') !== -1 || file.type.indexOf('application/ms') !== -1)) {
                //     this.tempFileUrl = tempURL;
                //     let domObject = '<embed src="' + tempURL + '" type="application/*" width="100%" height="100%">该浏览器不支持office.请点击查看:<a href="' + tempURL + '">Download Office File</a>.</p></embed>';
                //     //let domObject='<embed src="'+base64+'" width="100%" height="100%" type="application/pdf"></embed>'
                //     document.getElementById("fileData").innerHTML = domObject;
                //     $('#chatDataModal').modal();
                // }
                this.chatMsgData.mediaData = await this.fileToBase64(file);
                if (file.type.indexOf('image') !== -1 && file.type.indexOf('adobe') === -1) {
                    this.tempFileUrl = tempURL;
                    let tempImg = '';
                    const cropper = new ImageCropper({
                        imageSrc: tempURL, // 替换为你的图片地址
                        onCrop: (croppedImageDataURL) => {
                            //console.log('裁切后的图片数据：', croppedImageDataURL);
                            // 可以在这里将图片数据上传到服务器或进行其他操作
                            this.chatMsgData.mediaData = croppedImageDataURL;
                            URL.revokeObjectURL(tempURL);
                            this.tempFileUrl = URL.createObjectURL(this.base64ToBlob(croppedImageDataURL));;
                        },
                        onHide: () => {
                            tempImg = '<img src="' + this.tempFileUrl + '" />';
                            document.getElementById("fileData").innerHTML = tempImg;
                            $('#chatDataModal').modal();
                        },
                        onShow: () => {
                            //console.log("显示事件回调函数！")
                        }
                    });
                    cropper.show();
                } else if ((file.type.indexOf('json') !== -1 || file.type.indexOf('xml') !== -1)) {
                    this.tempFileUrl = tempURL;
                    let domObject = '<object data="' + tempURL + '" type="application/pdf" width="100%" height="100%">该浏览器不支持PDF.请点击查看:<a href="' + tempURL + '">Download PDF</a>.</p></object>';
                    //let domObject='<embed src="'+base64+'" width="100%" height="100%" type="application/pdf"></embed>'
                    document.getElementById("fileData").innerHTML = domObject;
                    $('#chatDataModal').modal();
                } else if ((file.type.indexOf('audio') !== -1 || file.type.indexOf('video') !== -1)) {
                    this.tempFileUrl = tempURL;
                    // 在这里处理base64数据
                    //let baseArr=base64.split(",");
                    var tempFile = '<video controls height="50" width="100%" data="' + tempURL + '">' +
                        '<source src="' + tempURL + '" type="audio/mpeg">' +
                        '<source src="' + tempURL + '" type="audio/ogg">' +
                        '<source src="' + tempURL + '" type="video/mpeg">' +
                        '<source src="' + tempURL + '" type="video/ogg">' +
                        '<embed height="50" width="100" src="' + tempURL + '">' +
                        //'<object height="50" width="100" data="'+tempURL+'"></object>'+
                        '</video>';
                    document.getElementById("fileData").innerHTML = tempFile;
                    $('#chatDataModal').modal();
                } else if (file.type.indexOf('text') !== -1) {
                    this.tempFileUrl = tempURL;
                    // 在这里处理base64数据
                    //let baseArr=base64.split(",");
                    var tempFile = '<object controls height="100%" width="100%" data="' + tempURL + '">' +
                        '<source src="' + tempURL + '" type="audio/mpeg">' +
                        '<source src="' + tempURL + '" type="audio/ogg">' +
                        '<embed height="50" width="100" src="' + tempURL + '">' +
                        //'<object height="50" width="100" data="'+tempURL+'"></object>'+
                        '</object>';
                    document.getElementById("fileData").innerHTML = tempFile;
                    // document.getElementById("fileData").append();
                    $('#chatDataModal').modal();
                } else{
                    this.$toasted.show("不支持的文件类型！仅支持支持图片，视频，音频，文本等", {
                        position: "top-center",
                        duration: 3000,
                        theme: "bubble",
                    });
                }
            }
            //const imageUrl = 上传七牛云后返回来的一串在线链接
            // if (e.target.files.length == 1) {
            //     let file = e.target.files[0];
            //     //var file=document.querySelector("#uploadFile")[0].value;
            //     let formData = new FormData();
            //     formData.append("file", file);
            // } else {
            //     let fileList = e.target.files;
            //     for (var i = 0; i < fileList.length; i++) {
            //         let formData = new FormData();
            //         var elFile = fileList[i];
            //         formData.append("file", elFile);
            //         //formData.append("file", new Blob(file)); //this.fileList[0].raw);//拿到存在fileList的文件存放到formData中
            //         //下面数据是我自己设置的数据,可自行添加数据到formData(使用键值对方式存储)
            //         // 解析上传的文件
            //         //let file = this.fileList[0]
            //     }
            // }
            e.target.value = '';
        },
        //输入框粘贴事件处理函数
        pastingData(event) {
            // 输入框粘贴
            //let excelArr = ['text/plain', "text/html", "text/rtf", "image/png"];//excel格式
            let file = null;
            // 获取剪切板图片、视频、文件、文件夹
            const items = (event.clipboardData || window.clipboardData).items;
            if (items && items.length) {
                // const item = items[0];
                // if (item.kind === 'file' && item.type.startsWith('image/'))
                for (let i = 0; i < items.length; i++) {
                    // console.log(items[i]);
                    if (items[i].kind === 'file' && (items[i].type.indexOf('image') !== -1 && items[i].type.indexOf('adobe') === -1)) {
                        file = items[i].getAsFile();
                        //console.log(file)
                        // 创建FileReader读取图片
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const base64 = e.target.result;
                            this.chatMsgData.mediaData = base64;
                            // const fileData = this.base64ToBlob(base64);
                            // 在这里处理base64数据
                            //let baseArr=base64.split(",");
                            // 拿到文件对象后，先上传或先展示都行，这里以图片进行举例
                            // 如果是直接上传服务器，那可以拿到图片地址直接使用
                            // 如果不进行上传，先展示，等点击确定在上传，那就自己创建一个链接进行使用
                            // const windowURL = window.URL || window.webkitURL
                            this.tempFileUrl = URL.createObjectURL(file);
                            // let clip = new CropImg({width: 300, height:220}) // 设置裁剪的比例
                            // clip.init(fileData, res => { // 需要将裁剪的图片文件传入，既可以触发裁剪
                            //     // 裁剪按钮 点击后会触发此函数，传入的res是裁剪后的文件,可以上传，也可以自己手动转成url显示
                            //     var tempUrl = URL.createObjectURL(res)
                            //     this.tempFileUrl = tempUrl
                            //     let tempImg = '<img src="' + tempUrl + '" style=""/>';
                            //     document.getElementById("fileData").innerHTML = tempImg;
                            // })
                            // 重新绘制图片，自定义长宽
                            // this.resizeImage(tempUrl, 300, 200, function(resizedImgSrc) {
                            //     // 在这里处理新尺寸的图片数据
                            //     const img = document.createElement('img');
                            //     img.src = resizedImgSrc;
                            //     document.getElementById("fileData").appendChild(img);
                            // });
                            // var croppedCanvas;
                            // var roundedCanvas;
                            // let imgObj = this.convertBase64ToImage(base64);
                            // // imgObj.src = tempUrl;
                            // this.cropper = new Cropper(imgObj,{
                            //     viewMode: 1,
                            //     dragMode: 'move',
                            //     // initialAspectRatio: 1,
                            //     preview: '.before',
                            //     background: false,
                            //     autoCropArea: 1,
                            //     zoomOnWheel: true,
                            // });
                            // croppedCanvas = this.cropper.getCroppedCanvas();
                            // // Round
                            // roundedCanvas = this.getRoundedCanvas(croppedCanvas);
                            //tempUrl = this.cropper.getCroppedCanvas().toDataURL();
                            const cropper = new ImageCropper({
                                imageSrc: this.tempFileUrl, // 替换为你的图片地址
                                onCrop: (croppedImageDataURL) => {
                                    //console.log('裁切后的图片数据：', croppedImageDataURL);
                                    // 可以在这里将图片数据上传到服务器或进行其他操作
                                    this.chatMsgData.mediaData = croppedImageDataURL;
                                    URL.revokeObjectURL(this.tempFileUrl);
                                    this.tempFileUrl=URL.createObjectURL(this.base64ToBlob(croppedImageDataURL));
                                },
                                onHide: () => {
                                    let tempImg = '<img src="' + this.tempFileUrl + '" />';
                                    document.getElementById("fileData").innerHTML = tempImg;
                                    $('#chatDataModal').modal();
                                }
                            });
                            cropper.show();
                        };
                        reader.readAsDataURL(file);
                        break;
                    } else if (items[i].kind === 'file' && (items[i].type.indexOf('json') !== -1 || items[i].type.indexOf('xml') !== -1)) {
                        file = items[i].getAsFile();
                        // 创建FileReader读取图片
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = (e) => {
                            const base64 = e.target.result;
                            this.chatMsgData.mediaData = base64;
                            //console.log(this.base64ToBlob(base64));
                            const tempUrl = URL.createObjectURL(file);
                            this.tempFileUrl = tempUrl;
                            // 在这里处理base64数据
                            //let baseArr=base64.split(",");
                            // var pdfIframe = document.createElement('iframe');
                            //pdfIframe.style.height="100%";
                            // pdfIframe.style.width="100%";
                            // pdfIframe.src = tempUrl;
                            let domObject = '<object data="' + tempUrl + '" type="application/pdf" width="100%" height="100%">该浏览器不支持PDF.请点击查看:<a href="' + tempUrl + '">Download PDF</a>.</p></object>';
                            //let domObject='<embed src="'+base64+'" width="100%" height="100%" type="application/pdf"></embed>'
                            document.getElementById("fileData").innerHTML = domObject;
                            //document.getElementById("fileData").remove();
                            //document.getElementById("fileData").appendChild(pdfIframe);
                            $('#chatDataModal').modal();
                        };
                        break;
                    } else if (items[i].kind === 'file' && (items[i].type.indexOf('audio') !== -1 || items[i].type.indexOf('video') !== -1)) {
                        file = items[i].getAsFile();
                        // 创建FileReader读取图片
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const base64 = e.target.result;
                            this.chatMsgData.mediaData = base64;
                            const tempUrl = URL.createObjectURL(file);
                            this.tempFileUrl = tempUrl;
                            // 在这里处理base64数据
                            //let baseArr=base64.split(",");
                            var tempFile = '<video controls height="50" width="100%" data="' + tempUrl + '">' +
                                '<source src="' + tempUrl + '" type="audio/mpeg">' +
                                '<source src="' + tempUrl + '" type="audio/ogg">' +
                                '<source src="' + tempUrl + '" type="video/mpeg">' +
                                '<source src="' + tempUrl + '" type="video/ogg">' +
                                '<embed height="50" width="100" src="' + tempUrl + '">' +
                                //'<object height="50" width="100" data="'+tempUrl+'"></object>'+
                                '</video>';
                            document.getElementById("fileData").innerHTML = tempFile;
                            // document.getElementById("fileData").append();
                            $('#chatDataModal').modal();
                        };
                        reader.readAsDataURL(file);
                        break;
                    } else if (items[i].kind === 'file' && items[i].type.indexOf('text') !== -1) {
                        file = items[i].getAsFile();
                        // 创建FileReader读取图片
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const base64 = e.target.result;
                            this.chatMsgData.mediaData = base64;
                            const tempUrl = URL.createObjectURL(file);
                            this.tempFileUrl = tempUrl;
                            // 在这里处理base64数据
                            //let baseArr=base64.split(",");
                            var tempFile = '<object controls height="100%" width="100%" data="' + tempUrl + '">' +
                                '<source src="' + tempUrl + '" type="audio/mpeg">' +
                                '<source src="' + tempUrl + '" type="audio/ogg">' +
                                '<embed height="50" width="100" src="' + tempUrl + '">' +
                                //'<object height="50" width="100" data="'+tempUrl+'"></object>'+
                                '</object>';
                            document.getElementById("fileData").innerHTML = tempFile;
                            // document.getElementById("fileData").append();
                            $('#chatDataModal').modal();
                        };
                        reader.readAsDataURL(file);
                        break;
                    }else {
                        let txt=event.clipboardData.getData('Text');
                        if(typeof(txt) === 'string') {
                            if (txt.length > 9048570) {
                                return false;
                            }
                        }
                        break;
                    }
                }
            }
        },
        initCropper(imgObj) {
            this.cropper = new Cropper(imgObj, {});
        },
        getRoundedCanvas(sourceCanvas) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var width = sourceCanvas.width;
            var height = sourceCanvas.height;

            canvas.width = width;
            canvas.height = height;

            context.imageSmoothingEnabled = true;
            context.drawImage(sourceCanvas, 0, 0, width, height);
            context.globalCompositeOperation = 'destination-in';
            context.beginPath();
            context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
            context.fill();

            return canvas;
        },
        /**
         * @param blob      BLOB对象
         * @param base64    base64字符串
         */
        cutChange({ blob, base64 }) {
            console.log(blob);
            this.tempFileUrl = window.URL.createObjectURL(blob);
            this.chatMsgData.mediaData = base64;
        },
        //blob 和 base64 类型转换
        base64ToBlob(base64) {
            let arr = base64.split(',')
            let type = arr[0].match(/:(.*?);/)[1]
            let bstr = atob(arr[1])
            let n = bstr.length
            const u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new Blob([u8arr], { type: type })
        },
        //blob 和 base64 类型转换
        blobToBase64(blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.readAsDataURL(blob)
                reader.onload = (e) => {
                    resolve(e.target.result)
                }
            })
        },
        //File 和 base64 类型转换
        base64ToFile(base64, filename) {
            const arr = base64.split(',')
            const type = arr[0].match(/:(.*?);/)[1]
            const bstr = atob(arr[1])
            let n = bstr.length
            const u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new File([u8arr], filename, { type: type })
        },
        //File 和 base64 类型转换
        fileToBase64(data) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader()
                fileReader.onload = (e) => {
                    resolve(e.target.result)
                }
                fileReader.readAsDataURL(data)
                fileReader.onerror = () => {
                    reject(new Error('文件流异常'))
                }
            })
        },
        //blob 和 File 类型转换
        blobToFile(blob, fileName) {
            const file = new File([blob], fileName, { type: blob.type });
            return file;
        },
        //File 转 blob
        fileToBlob(data) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader()
                fileReader.onload = (e) => {
                    const blob = new Blob([e.target.result], { type: data.type })
                    resolve(blob)
                }
                fileReader.readAsDataURL(data)
                fileReader.onerror = () => {
                    reject(new Error('文件流异常'))
                }
            })
        },
        startAndStopRecording() {
            let that = this;
            //recording为0表示开始录音
            if (that.recording == 0) {
                that.startRecordAudio();
                that.recording = 1;
                that.recordingTxt = "结束"
            }
            //recording为1表示结束录音
            else if (that.recording == 1) {
                that.stopRecordAudio();
                that.recording = 0;
                that.recordingTxt = "语音"
            }
        },
        /**
         * 获取麦克风权限
         * */
        getPermission() {
            Recorder.getPermission().then(() => {
                this.$Message.success('获取权限成功')
            }, (error) => {
                console.log(`${error.name} : ${error.message}`);
            });
        },
        //开始录音 startRecordAudio
        startRecordAudio() {
            Recorder.getPermission().then(
                () => {
                    console.log("开始录音");
                    this.recorder.start(); // 开始录音
                },
                (error) => {
                    // this.$message({
                    //     message: "请先允许该网页使用麦克风",
                    //     type: "info",
                    // });
                    console.log(`${error.name} : ${error.message}`);
                    this.$toasted.info("请先允许该网页使用麦克风", {
                        position: "top-center",
                        duration: 3000,
                        theme: "toasted-primary",
                    });
                }
            );
        },
        //停止录音
        stopRecordAudio() {
            console.log("停止录音");
            this.recorder.stop();
            /**setTimeout(async () => {
              await this.playRecordAudio();
            }, 2000);*/
            //this.getPCMRecordAudioData();
            this.getRecorderToText()
        },
        // 继续录音
        resumeRecordAudio() {
            this.recorder.resume()
        },
        // 暂停录音
        pauseRecordAudio() {
            this.recorder.pause();
        },
        //播放录音
        playRecordAudio() {
            console.log("播放录音");
            this.recorder.play();
        },
        // 暂停录音播放
        pausePlayRecordAudio() {
            this.recorder.pausePlay()
        },
        // 恢复录音播放
        resumePlayRecordAudio() {
            this.recorder.resumePlay()
        },
        // 停止录音播放
        stopPlayRecordAudio() {
            this.recorder.stopPlay();
        },
        // 销毁录音Recorder
        destroyRecordAudio() {
            this.recorder.destroy().then(function() {
                this.recorder = null;
            });
        },
        //获取PCM录音数据
        getPCMRecordAudioData() {
            let that = this;
            let toltime = this.recorder.duration; //录音总时长
            let fileSize = this.recorder.fileSize; //录音总大小
            var pcmBlob = this.recorder.getPCMBlob();
            let channel = this.recorder.getChannelData(); //获取左声道和右声道音频数据
            //console.log(pcmBlob);
        },
        //获取WAV录音数据
        getWAVRecordAudioData() {
            var wavBlob = this.recorder.getWAVBlob();
            //console.log(wavBlob);
        },
        //下载PCM录音文件
        downloadPCBRecordAudioData() {
            this.recorder.downloadPCM("maike");
        },
        //下载WAV录音文件
        downloadWAVRecordAudioData() {
            this.recorder.downloadWAV("maike");
        },
        //发送消息立刻推送到消息显示列表
        async showChatMsgList(msgList, chatMsg) {
            msgList.push(chatMsg);
        },
        //接受回复消息显示在消息列表
        async refreshChatReply(msgList, chatMsg) {
            if (chatMsg.text && chatMsg.text.trim().length > 0) {
                this.msgList.pop();
                this.msgList.push(chatMsg);
            }
        },
        // 延时函数
        delayFunction(fn, delay) {
            setTimeout(fn, delay);
        },
        // 处理滚动条一直保持最上方,也就让内容处于最底部contentAtBottom
        async scrollAtTop() {
            let div = document.getElementById("bigChatBox") || document.getElementById("bigChatBox-desktop");
            div.scrollTop = div.scrollHeight;
            // let distanceY = window.scrollY;
            // let i = 0
            // this.interval = setInterval(() => {
            //     let next = Math.floor(this.easeInOutQuad(2 * i, distanceY, -distanceY, 100))
            //     if (next <= 40) {
            //         //window.scrollTo(0, this.backPosition);
            //         div.scrollTop = div.scrollHeight;
            //         clearInterval(this.interval);
            //     } else {
            //         // window.scrollTo(0, next);
            //         div.scrollTop = div.scrollHeight;
            //     }
            //     i++
            // }, 5)
        },
        easeInOutQuad(t, b, c, d) {
            // 判断当前时间是否总在总时间的一半以内，是的话执行缓入函数，否则的话执行缓出函数
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t + b
            } else {
                // 将总长度设置为一半，并且时间从当前开始递减，对图像进行垂直向上平移
                return -c / 2 * (--t * (t - 2) - 1) + b
            }
        },
        clearBlank(value) {
            if (value) {
                value = value.replace(/\s/g, "")
            }
            return value
        },
        timeout(ms) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('error')
                }, ms); //reject模拟出错，返回error
            });
        },
        //消除字符串中的空格换行等特殊字符
        tansf(e) {
            let a = (e + '').replace(/[]/g, "") // 去空格
            a = (a + '').replace(/[\r\n]/g, "") //去回车
            return a
        },
        //去除换行符
        keepTextStyle(val) {
            //console.log(val)
            //console.log(typeof val)
            //console.log((typeof val) != 'undefined')
            return (val + '').replace(/\n/g, "<br/>")
        },
        //开始文字转语音
        startTTS(text) {
            var that = this;
            const baseUrl = process.env.VUE_APP_BASE_API
            // 调用语音合成接口
            // 参数含义请参考 https://ai.baidu.com/docs#/TTS-API/41ac79a6
            /*axios
            .post("https://tsn.baidu.com/text2audio?tex="+text+"&lan=zh&cuid=maike&ctp=1&tok=24.270948c59fcd0c70913aea41ecf533bd.2592000.1680199081.282335-30837213")
            .then(async (response) => {
              console.log(response)
              let audioBuffer=null;
              var audioContext=new (window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext)();
              var source = audioContext.createBufferSource();
              await audioContext.decodeAudioData(
                  new ArrayBuffer(response.data),
                  buffer => {
                    audioBuffer = buffer;
                  },
                  error => console.log("===ERROR===", error)
              )
              source.buffer = audioBuffer;
              source.loop = true; //循环播放
              source.connect(audioContext.destination);
              source.start(0); //立即播放
              //this.textAudio = new Audio(response.data);
              //mp3.play(); //播放 mp3这个音频对象
              //this.playTextAudio()
            }).catch(function (error) {
              console.log(error);
            });*/
            that.textAudio = new Audio();
            that.textAudio.onloadeddata = function() {
                that.textAudio.play();
            };
            // that.textAudio.src = res; // put your url here
            // that.textAudio.play();
            //var url = "https://tsn.baidu.com/text2audio?tex=" + text + "&lan=zh&cuid=c211ccc3407c45038492e623bb358524&ctp=1&tok=24.e3cd3b426636b471a2f288cebadca276.2592000.1719346650.282335-30837213";
            //var url = baseUrl + "/translate/ttsZH_CN?ttsText="+text;
            var url = baseUrl + "/translate/ttsZH_CN";
            axios({
                method: 'post',
                url: url,
                data: { ttsText: text },
                // params:queryParams,
                responseType: 'blob',
                //headers: { 'Plus-Token': getToken() }//'Bearer ' + 
            }).then(async (res) => {
                // console.log(res)
                // 从响应中获取文件数据
                const fileData = res.data;
                // 创建一个Blob对象
                //const blob = new Blob([fileData], { type: "audio/mpeg" });
                // 生成文件URL
                const downloadUrl = URL.createObjectURL(fileData);
                //console.log(downloadUrl)
                // var audioContext = new AudioContext();
                // audioContext.decodeAudioData(res.data, function(buffer) {
                // var source = audioContext.createBufferSource();
                // source.buffer = buffer;
                // source.connect(audioContext.destination);
                // source.start(0);
                // });
                that.textAudio.src = downloadUrl; // put your url here
            })
            that.textAudio.play();
        },
        getRecorderToText() {
            let that = this;
            // 创建一个formData对象
            var formData = new FormData()
            let voiceData;
            var pcmBlob = this.recorder.getPCMBlob();
            //console.log(pcmBlob);
            /** var reader = new FileReader() //生成FileReader实例
            reader.readAsArrayBuffer(pcmBlob) //取出blob或者File文件的二进制原始数据
            reader.onload = function (da) { //有一个异步回调
              let yy = new Uint8Array(da.target.result) //后端需要的二进制格式
              let endd = [...yy] //后端需要的格式，我们改造成数组
              console.log(endd);
              voiceData = yy; //保存到变量中，保存的就是我们需要的二进制数据
            } */
            // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
            const newbolb = new Blob([pcmBlob], { type: 'audio/pcm' })
            //获取当时时间戳作为文件名
            const fileOfBlob = new File([newbolb], new Date().getTime() + '.pcm')
            formData.append('file', fileOfBlob)
            //console.log(formData);
            //上传wav录音数据

            uploadVoiceBlob(formData)
                .then(async (response) => {
                    //console.log(response.data.data)
                    //let text=response.data.data.result[0]
                    that.inputChat = response.data.data.result[0];
                    that.handleMsg()
                }).catch(function(error) {
                    // console.log(error);
                    Vue.toasted.error(error.msg, {
                        position: "top-center",
                        duration: 3000,
                        theme: "outline",
                    });
                });
        },
        // 播放文字转语音的按钮
        playTextAudio() {
            var that = this;
            if (that.textAudio === null) {
                alert('请先点击合成')
            } else {
                that.textAudio.play();
            }
        },
        // 暂停播放文字转语音按钮
        pauseTextAudio() {
            var that = this;
            if (that.textAudio === null) {
                //console.log('请先合成音频')
            } else {
                that.textAudio.pause();
            }
        },
        // 暂停播放文字转语音按钮
        stopTextAudio() {
            var that = this;
            if (that.textAudio === null) {
                //console.log('没有语音，请先合成')
            } else {
                that.textAudio.stop();
            }
        },
        startAudio(txt) {
            var msg = new SpeechSynthesisUtterance();
            var voicePack = speechSynthesis.getVoices();
            speechSynthesis.cancel();
            console.log('开始播放')
            //console.log(voicePack)
            msg.text = txt
            msg.volume = 1 //音量
            msg.rate = 1 //语速
            //msg.voice = 
            msg.lang = 'zh-cn'
            speechSynthesis.speak(msg);
        },
        openMsg() {
            //const h = this.$createElement;
            //var message = h('i', { style: 'color: teal' }, '这里是提示消息');
            //三种主题:toasted-primary,bubble,outline
            let msgContent = "<div style='color: var(--color-primary-tips,#8DE78D);'>" +
                "<div style='text-align: center;'>AI助手小提示：</div>" +
                "<div>新增图片，视频，音频，文本等文件粘贴发送：复制一个图片或音视频等文件，粘贴到发送消息框中，即可对文件进行分析！</div>" +
                "<div>增加语音回复与语音输入：(默认关闭语音回复)启用请发送”开启语音“，关闭发送“关闭语音”，发送“暂停播放”、“暂停”、“stop”实现停止播放语音，发送“继续播放”、“继续”、“play”可继续播放语音。左下角语音输入功能已更新！点击语音，然后结束！就可以发送语音文字！</div></div>";
            showToast(msgContent,{duration: 4000});
            // this.$toasted.show(msgContent, {
            //     position: "top-center",
            //     duration: 5000,
            //     theme: "toasted-primary",
            // });
        },
        // setOpenAiKey() {
        //     this.$prompt('请输入openAiKey', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         inputPattern: /^sk-[\w]+$/,
        //         inputErrorMessage: 'openAiKey格式不正确'
        //     }).then(({ value }) => {
        //         this.$toasted.success('你的openAiKey是: ' + value, {
        //             position: "top-center",
        //             duration: 3000,
        //             theme: "toasted-primary",
        //         });
        //         this.openAiKey = value;
        //     }).catch(() => {
        //         this.$toasted.info("取消输入", {
        //             position: "top-center",
        //             duration: 3000,
        //             theme: "bubble",
        //         });
        //     });
        // },
        convertBase64ToImage: (data) => {
            // 创建一个新的图片元素
            //var img = document.createElement('img');
            const img = new Image();
            img.src = data;
            var imgWidth = img.width;
            var imgHeight = img.height;
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var scale = Math.min(windowWidth / imgWidth, windowHeight / imgHeight);
            // 设置图片的宽度和高度
            img.style.width = '95%'; // 或者使用CSS像素值
            img.id = "tempElement";
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = imgWidth * scale + "px";
                canvas.height = imgHeight * scale + "px";
                context.drawImage(img, 0, 0);
                const imageURL = canvas.toDataURL('image/png');
            };
            return img;
        },
        //重新调整图片尺寸
        resizeImage(src, newWidth, newHeight, callback) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = newWidth;
                canvas.height = newHeight;
                const ctx = canvas.getContext('2d');
                // 重绘图片
                ctx.drawImage(img, 0, 0, newWidth, newHeight);
                const resizedImgSrc = canvas.toDataURL('image/png'); // 或者其他格式
                callback(resizedImgSrc);
            };
            img.src = src;
        },
        resizeImg(img) {
            // 获取窗口宽度和高度
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;

            // 获取图片原始宽度和高度
            var imgWidth = img.naturalWidth;
            var imgHeight = img.naturalHeight;
            // 计算缩放比例
            var scale = Math.min(windowWidth / imgWidth, windowHeight / imgHeight);

            // 设置图片宽度和高度
            img.style.width = imgWidth * scale + "px";
            img.style.height = imgHeight * scale + "px";
        },
        convertImageToBase64(imgUrl) {
            const image = new Image()
            image.crossOrigin = 'anonymous'
            let dataUrl = ''
            return new Promise((resolve, reject) => {
                image.onload = () => {
                    const canvas = document.createElement('canvas')
                    const ctx = canvas.getContext('2d')
                    canvas.height = image.naturalHeight
                    canvas.width = image.naturalWidth
                    ctx.drawImage(image, 0, 0)
                    dataUrl = canvas.toDataURL()
                    //通过resolve将返回值返回
                    resolve(dataUrl)
                }
                image.src = imgUrl
            })
        },
        // 假设这个函数会在某个事件监听器中调用，比如点击按钮时
        checkStringAndAllowEvent(str, callbackY, callbackN) {
            // 使用trim去除字符串首尾空白，然后检查长度
            if (str && str.trim().length > 0) {
                // 字符串不为空，允许执行事件
                //console.log('字符串不为空，允许执行事件');
                // 调用第一个回调函数
                // if (typeof callbackY === 'function') {
                //     callbackY();
                // }
                callbackY();
                // 这里执行允许的事件代码
            } else {
                // 字符串为空，阻止执行事件
                //console.log('字符串为空，阻止执行事件');
                // if (typeof callbackN === 'function') {
                //     callbackN();
                // }
                callbackN();
                // 阻止事件的代码，比如event.preventDefault()或return false
            }
        },
        //遍历数组，把里面的每一条json字符串转为json对象
        jsonStrToObj(msgArr) {
            let _this = this;
            var len = msgArr.length;
            for (var i = 0; i < len; i++) {
                let oneMsg = JSON.parse(msgArr[i]);
                if (_this.checkObjectExistsJson(oneMsg, "extraData")) {
                    oneMsg.extraData = "https://" + _this.baseHost + _this.baseApi + oneMsg.extraData;
                }
                this.msgList.push(oneMsg);
            }
            //return msgArr;
        },
        //遍历聊天记录数组，把里面的每一条json字符串转为json对象
        //在发送消息前把之前所有的消息构造一个json作为历史消息记录
        chatHistoryToJson(msgArr) {
            let tempMessage = ""; //[];
            var len = msgArr.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    // var temp = JSON.parse(msgArr[i]);
                    // this.msgList.push(temp);
                    if (msgArr[i].align == "right") {
                        // tempMessage.push({role: "user", parts: [{text: msgArr[i].text}]});
                        //tempMessage += "{\"role\": \"user\",\"parts\": [{\"text\": \"" + msgArr[i].text + "\"}]},";
                        tempMessage += JSON.stringify({ role: "user", parts: [{ text: msgArr[i].text }] }) + ",";
                    } else if (msgArr[i].align == "left") {
                        // tempMessage.push({role: "model", parts: [{text: msgArr[i].text}]});
                        //tempMessage += "{\"role\": \"model\",\"parts\": [{\"text\": \"" + msgArr[i].text + "\"}]},";
                        tempMessage += JSON.stringify({ role: "model", parts: [{ text: msgArr[i].text }] }) + ",";
                    }
                }
            }
            this.preChatData = tempMessage;
            // this.preChatData = JSON.stringify(tempMessage);
        },
        getImageWH(imgSrc){
            getImageNaturalDimensions(imgSrc, (oImg, imgWH) => {
                return imgWH;
            });
        },
        // 定义一个函数，将Markdown转换为HTML，并去除多余的空行
        markdownToHtmlWithoutExtraLines(markdown) {
            //let html = converter.makeHtml(markdown); // 将Markdown转换为HTML
            let html = marked.parse(markdown); // 将Markdown转换为HTML
            // 使用正则表达式替换掉一个或多个换行符，后面跟着一个或多个空行，只保留单个换行符
            html = html.replace(/(?:\n[\s\uFEFF\xA0]*){3,}/g, '\n'); //{3,}表示超过3替换
            // if (/[a-zA-Z]/.test(html) && /[\u4e00-\u9fa5]/.test(html)) {
            //     html = html.replace(/[ | ]*\n/g, ''); //去除行尾空白
            // } else if (/[\u4e00-\u9fa5]/.test(html)) {
            //     html = html.replace(/[ | ]*\n/g, ''); //去除行尾空白
            // }
            //html = html.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
            //html = html.replace(/[ | ]*\n/g, ''); //去除行尾空白
            //html = html.replace(/\n[\s| | ]*\r/g,''); //去除多余空行
            //html = html.replace(/&nbsp;/ig, ''); //去掉&nbsp;
            //html = html.replace(/&nbsp/ig, '');
            return html;
        },
        getChatDateTime(timeNum) {
            let dateTimeNow = new Date(timeNum);
            if (timeNum == 0 || timeNum == null) {
                dateTimeNow = new Date();
            }
            let now = dateTimeNow,
                y = now.getFullYear(),
                m = now.getMonth() + 1,
                d = now.getDate();
            let dateTimeStr = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substring(0, 8);
            return this.dateTimeAgo(dateTimeStr);
        },
        isSymbol(str) { //是否仅包含各类符号
            return /^[\u2000-\u27ff]+$/.test(str); // 检查Unicode范围内的符号
        },
        isOnlyNewlines(str) { //是否仅包含换行符
            return /^\n*$/.test(str);
        }
    },
    // 在Vue组件中
    directives: {
        Focus: {
            // 当绑定元素插入到DOM中时
            // inserted: function (el) {
            //     el.focus(); // 聚焦元素
            // }
            // 当绑定更新时
            update: function(el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
/** @media screen and (max-width:600px){
      .con{
        background:red;
      }
    }
    @media screen and (min-width:600px) and (max-width:800px){
      .con{
        background:blue;
      }
    }
    @media screen and (min-width:800px){
      .con{
        background:green;
      }
    } */

body {
    background-color: rgba(239, 239, 239, 0.98);
    margin: 0 auto;
    padding: 0;
}

#chat_app_container {
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    background: var(--color-container-bg);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

/* fade-transform */

.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all .3s;
}

.fade-transform-enter {
    opacity: 0;
    transform: translateX(-90vw);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(90vw);
}

.chat-main-content {
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: column;
    flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    -moz-flex-wrap: nowrap;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    /*align-content: stretch;
    -webkit-align-content: stretch;
    height: -webkit-fill-available;
    min-height: 100%;*/
}

.chatBoxHeader {
    position: relative;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    text-align: center;
    background-color: var(--color-primary, rgb(118, 164, 219));
    color: #ffffff;
    font-weight: bolder;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    /*color: var(--color-article-container-text-1, #696969)
    border-bottom: var(--color-border-4, #c5c5c5) 1px solid;*/
}

.chatBoxHeader div {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    /* 上面上个组合起来等于 flex: 0 0 auto;*/
    align-self: center;
    padding-left: 8px;
    padding-right: 8px;
}

.bigChatBox {
    overflow-y: scroll;
    padding: 0 2px;
    /*flex: 1 1 auto;*/
}

.bigChatBox::-webkit-scrollbar {
    display: none;
}

.listChatMsg {
    font-size: 1.1em;
    margin: 10px auto;
}

.listChatMsg .chat_date_time {
    width: auto;
    text-align: center;
    font-size: 0.7em;
    margin: 2px auto;
    color: var(--color-link-text, #000);
}

.listChatItemL {
    display: flex;
    justify-content: flex-start;
    margin-top: 2px;
    margin-bottom: 2px;
}

.listChatItemR {
    display: flex;
    justify-content: flex-end;
    margin-top: 2px;
    margin-bottom: 2px;
}

.listChatItemL .listChatItemContent {
    border-radius: 5px;
    border-width: 1px;
    border-color: mediumaquamarine;
    background-color: #66CEAA;
    color: black;
    padding: 5px;
    /* word-break: normal;
    display: block;
    white-space: pre-wrap;
    word-wrap: break-word; */
    overflow-x: scroll;
    margin-right: 49px;
}

.listChatItemL .listChatItemContent::-webkit-scrollbar {
    display: none;
}

.listChatItemR .listChatItemContent {
    border-radius: 5px;
    border-width: 1px;
    border-color: #355CBF;
    background-color: #4c65b8;
    padding: 5px;
    color: #f0efef;
    margin-left: 49px;
}

.listChatItemL .pcChatTextSpan {
    /*color:#252020;
    border-color: mediumaquamarine;
    background-color: #66CEAA;*/
    background-color: var(--color-content-bg, #353434);
    color: var(--color-article-container-content-text, #d3d1d1);
    border-radius: 5px;
    padding: 5px;
    overflow-x: scroll;
}

.listChatItemL .pcChatTextSpan::-webkit-scrollbar {
    display: none;
}

.listChatItemR .pcChatTextSpan {
    background-color: #8ab3ca;
    border-radius: 5px;
    color: #252020;
    padding: 5px;
}

.chatUserIcon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    /* padding-right: 10px;
    padding-left: 10px; */
    margin-right: 7px;
    margin-left: 7px;
}

.chatBoxFooter {
    position: relative;
    bottom: 0px;
    left: 0px;
    width: 100%;
    margin: 0 auto;
}

.chatBoxFooterBtn {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    /* background-color: #83a097; */
    background: var(--color-background, #ffffff00);
    font-family: auto;
}

.chatBoxFooterBtn .chat_btn_left a {
    border: 1px solid var(--color-border-2, #c0c9cbb3);
    border-right: 0 !important;
    border-radius: 0;
    background: transparent;
    color: var(--color-main-container-text, #2f3030) !important;
    box-shadow: none !important;
}

.chatBoxFooterBtn .chat_btn_right a {
    border: 1px solid var(--color-border-2, #c0c9cbb3);
    border-left: 0 !important;
    border-radius: 0;
    /* border-radius: 0 5px 5px 0; */
    background: transparent;
    color: var(--color-main-container-text, #2f3030) !important;
    box-shadow: none !important;
}

.chatBoxFooterBtn span {
    flex-grow: 0;
    flex-shrink: 0;
    /**margin:auto;
        align-items:center;*/
    align-self: flex-end;
}

.chatBoxFooterBtn>input,
.chatBoxFooterBtn>textarea {
    -webkit-transition: width 0.2s ease-in-out;
    -moz-transition: width 0.2s ease-in-out;
    -o-transition: width 0.2s ease-in-out;
    transition: width 0.2s ease-in-out;
    border-radius: 0 !important;
    border: 1px solid var(--color-border-2, #c0c9cbb3) !important;
    /* -moz-border-radius: 4px;
    -o-border-radius: 4px;
    -ms-border-radius: 4px;
    -webkit-border-radius: 4px; */
}

.chatBoxFooterBtn>input:focus,
.chatBoxFooterBtn>textarea:focus,
textarea:focus,
input:focus {
    outline: 0;
    box-shadow: none !important;
}

.input-with-chatgpt {
    vertical-align: middle;
    line-height: inherit;
    margin: auto;
    align-self: center;
}
</style>