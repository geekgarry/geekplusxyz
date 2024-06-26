<template>
    <div id="app_container">
        <div class="container">
            <div class="row" v-if="chatdisplay">
                <!-- <div class="col-sm-1 col-md-1 col-lg-2">
                </div> -->
                <!-- <div class="col-xs-12 col-sm-10 col-md-10 col-lg-8">
                </div> -->
                <div class="chat-main-content">
                    <div class="chatBoxHeader">
                        <!-- <div><el-tooltip class="item" effect="dark" content="输入你的openAiKey" placement="bottom-start"><i class="el-icon-key" @click="setOpenAiKey"></i></el-tooltip></div> $router.push({path:'/'})-->
                        <div><span class="glyphicon glyphicon-home" aria-hidden="true" ></span></div>
                        AI智能助手
                        <div><span class="glyphicon glyphicon-info-sign" aria-hidden="true" @click="openMsg"></span></div>
                    </div>
                    <div class="bigChatBox" id="bigChatBox" :style="{height: chatBoxHeight+ 'px'}">
                        <div v-for="(item, index) in msgList" v-bind:key="index" class="listChatMsg" >
                            <div v-show="item.time" class="chat_date_time">{{getChatDateTime(item.time)}}</div>
                            <span class="listChatItemL" v-if="item && item.align == 'left'">
                                      <span><img
                                        class="chatUserIcon"
                                        src="https://www.geekplus.xyz/imgs/logo.png"
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
                                      <span v-highlight class="listChatItemContent">{{item.text}}</span>
                            <span><img
                                        class="chatUserIcon"
                                        src="https://www.geekplus.xyz/imgs/mai.png"
                                        alt="麦壳" />
                                      </span>
                            </span>
                        </div>
                    </div>
                    <div class="chatBoxFooter">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <!-- <div class="input-group search-input-group">
                                        <input
                                          id="inputContentText"
                                          name="inputChat"
                                          autocomplete="off"
                                          :autofocus="true" 
                                          type="text"
                                          v-model="inputChat"
                                          class="form-control"
                                          placeholder="请输入聊天内容"
                                        />
                                        <span class="input-group-addon">
                                            <button type="button" @click="startAndStopRecording" >
                                                {{recordingTxt}}
                                                <span class="glyphicon glyphicon-record"></span>
                                            </button>
                                            <button type="button" @keydown.enter.native="handleMsg" @click="handleMsg">
                                                <span class="glyphicon glyphicon-send"></span>
                                            </button>
                                        </span>
                                    </div> -->
                                <div class="chatBoxFooterBtn">
                                    <span class="chat_btn_left"><a class="btn btn-default" href="#" role="button"
                                          @click="startAndStopRecording" >{{recordingTxt}}
                                        </a>
                                        </span>
                                    <textarea placeholder="请输入聊天内容" v-model="inputChat" id="inputContentText" class="form-control multiline" :autofocus="true" type="text" rows="1" />
                                    <span class="chat_btn_right"><a class="btn btn-default" href="#" role="button"
                                          @keydown.enter.native="handleMsg"
                                          @click="handleMsg"
                                          >发送</a
                                        ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <button type="button" class="btn btn-info" @click="visible11" v-show="chatBtnPcDisplay">打开ChatGpt聊天框</button> -->
            <div class="row" v-else>
                <div class="col-sm-2 col-md-2 col-lg-3"></div>
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-6 chat-main-content">
                    <div style="
                        text-align: center;
                        line-height: 40px;
                        height: 40px;
                        font-size: initial;
                        color: var(--color-article-container-text-1, #696969);
                        border-bottom: var(--color-border-4, #c5c5c5) 1px solid;
                    ">AI聊天助手</div>
                    <div class="bigChatBox" id="bigChatBox-desktop" :style="{height: chatBoxHeight+ 'px'}">
                        <!-- :style="{textAlign: item.align}" -->
                        <div v-for="(item, index) in msgList" :key="index" class="listChatMsg" >
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
                                <span v-highlight class="pcChatTextSpan">{{item.text}}</span>
                                <img class="chatUserIcon" src="https://www.geekplus.xyz/imgs/mai.png" alt="麦壳" />
                            </span>
                        </div>
                    </div>
                    <div class="chatBoxFooter">
                        <!-- <div class="form-inline">
                            <div class="form-group">
                                <label for="exampleInputName2">Name</label>
                                <input type="text" class="form-control" id="inputContentText" v-model="inputChat" :autofocus="true" placeholder="请输入聊天内容">
                            </div>
                            <button type="submit" class="btn btn-primary" @keydown.enter.native="handleMsg" @click="handleMsg">发送</button>
                        </div> -->
                        <div class="input-group search-input-group">
                            <!-- <input type="hidden" name="scope" value="1" /> -->
                            <textarea id="inputContentText" name="inputChat" autocomplete="off" :autofocus="true" type="text" v-model="inputChat" class="form-control multiline" placeholder="请输入聊天内容" rows="1" ></textarea>
                            <span class="input-group-addon">
                              <button type="button" @keydown.enter.native="handleMsg" @click="handleMsg">
                                <span class="glyphicon glyphicon-send"></span>
                            </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 col-md-2 col-lg-3"></div>
            </div>
        </div>
        <!-- <el-dialog :visible.sync="visible" title="对话框"> -->
        <!-- </el-dialog> -->
    </div>
</template>

<script>
import axios from 'axios'
import Recorder from 'js-audio-recorder'
// import { marked } from "marked"//9.1.6
const marked = require('marked');//9.1.6
import { getchatgpt, chatgpttest, geminiAI, geminiAIChat, getHistoryMessage, getTTSChinese } from "@/api/chatbot/chatbot"

export default {
    name: "ChatBot",
    data() {
        return {
            visible: false,
            inputChat: "",
            preChatData: "",//历史聊天数据
            msgList: [], //聊天消息的list
            historyMsgStr: "", //历史聊天记录
            loading: false,
            chatBtnPcDisplay: true,
            chatdisplay: false,
            chatBoxHeight: 440,
            fullWidth: 0,
            fullHeight: 0,
            audioData: [], // 存储录音数据块
            recorder: new Recorder({
                sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
                sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
                numChannels: 1, // 声道，支持 1 或 2， 默认是1
                // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
            }),
            recorderData: [], //音频的二进制数据
            recording: 0,
            recordingTxt: "语音",
            textAudio: null,
            isTextVoice: false, //是否语音朗读
            isHistory: true, //是否采用有历史记忆的聊天
            openAiKey: '',
        };
    },
    //data:{},
    created: function() {
        this.getHistoryMag("guest");
        //this.startTTS("你好！请问现在是什么时间！");
        document.addEventListener("keydown", (e) => {
            let keyC = window.event.keyCode;//这里是键盘的ASCLL码值，13为回车值
            //let key = window.event.key || event.key;//新的key时表示为键盘的具体值
            if(keyC == 13 && !e.shiftKey) {
                //只有enter没有shift，或进行你的其他逻辑
                e.preventDefault();// 阻止默认行为，即不换行
                // 13是enter键的键盘码 如果等于13 就调用click的登录方法
                this.handleMsg();
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
        });
        this.fullWidth = document.documentElement.clientWidth;
        this.fullHeight = document.documentElement.clientHeight;
        // 页面宽度小于750px时，显示移动端
        if (this.fullWidth < 750) {
            //this.chatBtnPcDisplay = false;
            this.chatdisplay = true;
        } else {
            //this.chatBtnPcDisplay = true;
            this.chatdisplay = false;
        }
        //document.getElementById("bigChatBox").offsetHeight = (this.fullHeight - 100) + "px";
        this.chatBoxHeight = this.fullHeight - 85;
    },
    mounted() {
        //window.addEventListener('resize', function() {});
        const that = this
        //that.setOpenAiKey();
        // <!--把window.onresize事件挂在到mounted函数上-->
        window.onresize = () => {
            return (() => {
                window.fullHeight = document.documentElement.clientHeight;
                window.fullWidth = document.documentElement.clientWidth;
                that.windowHeight = window.fullHeight; // 高
                that.windowWidth = window.fullWidth; // 宽
                // 页面宽度小于750px时，不显示地图
                if (that.windowWidth < 750) {
                    //that.chatBtnPcDisplay = false;
                    that.chatdisplay = true;
                } else {
                    //that.chatBtnPcDisplay = true;
                    that.chatdisplay = false;
                }
                //console.log("页面高度：" + that.windowHeight)
                //document.getElementById("bigChatBox").offsetHeight = (that.windowHeight - 100) + "px";
                that.chatBoxHeight = that.windowHeight - 85;
                that.scrollTop11();
                if (document.activeElement.tagName === 'INPUT'  || document.activeElement.tagName === 'TEXTAREA') {
                window.setTimeout(function() {
                if('scrollIntoView' in document.activeElement) {
                document.activeElement.scrollIntoView();
                } else {
                document.activeElement.scrollIntoViewIfNeeded();
                }
                }, 0);
                }
            })()
        };
        const textarea = document.getElementById("inputContentText");
        const maxLines = 8;
        const inputHeight = textarea.offsetHeight;
        textarea.addEventListener("input", () => {
        // 将高度重置为自动，以便根据内容计算高度
        textarea.style.height = "auto";
        //console.log(textarea.style.height)
        // 获取行数
        const currentLines = textarea.value.split("\n").length;
        //console.log(currentLines)
        textarea.style.height = inputHeight + (currentLines-1) * 22+`px`;
        // 如果行数超过最大行数，则设置最大高度
        if (currentLines > maxLines) {
            textarea.style.height = inputHeight + maxLines * 22+`px`;
            //textarea.style.height = `${textarea.scrollHeight}px`;
        }else if(currentLines == 1){
            textarea.style.height = "auto";
        }
        });
    },
    watch: {
        windowHeight(val) {
            let that = this;
            console.log("实时屏幕高度：", val, that.windowHeight);
            //chatBoxHeight=that.windowHeight
        },
        windowWidth(val) {
            let that = this;
            if (val < 768) {
                //that.dialogWidth='100%'
                that.chatBtnPcDisplay = false;
            } else {
                //that.dialogWidth='75%'
            }
            console.log("实时屏幕宽度：", val, that.windowHeight);
        }
    },
    methods: {
        visible11() {
            this.visible = true;
            this.$nextTick(() => {
                this.$refs.serachBox.focus();
            });
        },
        async handleMsg() {
            if (this.inputChat === "关闭语音") {
                this.isTextVoice = false;
                this.inputChat = "";
                this.$toasted.show("关闭语音回复功能", {position: "top-center",duration: 3000,theme: "bubble",});
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
                //     await this.scrollTop11();
                //     //this.loading = false;
                // }, 1000);
            } else if (this.inputChat === "开启语音") {
                this.isTextVoice = true;
                this.inputChat = "";
                this.$toasted.success("开启语音回复功能", {position: "top-center",duration: 3000,theme: "bubble",});
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
                //     await this.scrollTop11();
                //     //this.loading = false;
                // }, 1000);
            } else if (this.inputChat === "停止语音" || this.inputChat === "停止播放" || this.inputChat === "暂停播放" || this.inputChat === "暂停回复语音" || this.inputChat === "pause") {
                this.pauseTextAudio();
                //this.loading = false;
                this.inputChat = "";
                this.$toasted.info("停止回复语音", {position: "top-center",duration: 3000,theme: "bubble",});
            } else if (this.inputChat === "继续语音" || this.inputChat === "继续播放" || this.inputChat === "继续回复语音" || this.inputChat === "play") {
                this.playTextAudio();
                //this.loading = false;
                this.inputChat = "";
                this.$toasted.info("播放回复语音", {position: "top-center",duration: 3000,theme: "bubble",});
            } else if(this.inputChat === "聊天模式"|| this.inputChat === "开启聊天模式"|| this.inputChat === "开启对话模式" || this.inputChat === "开启记忆对话" || this.inputChat === "对话模式"){
                this.isHistory=true;
                this.inputChat = "";
                this.$toasted.success("开启聊天对话模式", {position: "top-center",duration: 3000,theme: "bubble",});
            } else if(this.inputChat === "取消历史记忆"|| this.inputChat === "关闭对话模式" || this.inputChat === "关闭聊天模式" || this.inputChat === "关闭记忆对话"){
                this.isHistory=false;
                this.inputChat = "";
                this.$toasted.show("取消聊天对话模式", {position: "top-center",duration: 3000,theme: "bubble",});
            } else if ((this.inputChat !== "" || this.inputChat.length >0) && !this.isOnlyNewlines(this.inputChat)) {
                //this.loading = true;
                this.chatHistoryToJson(this.msgList);
                await this.msgList.push({ align: "right", text: this.inputChat, time: Date.now() });
                await this.scrollTop11();
                this.getMsg();
                this.inputChat = "";
            }
        },
        getMsg() {
            let that=this;
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
                    await this.scrollTop11();
                  }
                  this.loading = false;
                  })
                  .catch(function (error) {
                  console.log(error);
                  this.loading = false;
                  });
                } */
                if(that.isHistory === false){
                    geminiAI({ username: "guest", chatData: that.inputChat })
                    .then(async (response) => {
                        //console.log(response);
                        //if (response.code == 200) {
                        //console.log("返回响应信息")
                        //console.log(response.data)
                        let msg = "消息";
                        let msgtype = "0"
                        if (response.status && response.status == 500) {
                            msg = "返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
                            msgtype = "0";
                        }
                        if (response.code == 500) {
                            msg = "返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
                            msgtype = "0";
                        } else if (response.code == 200) {
                            // 自行处理需要的数据
                            msg = response.data.msg_data.trim();
                            msgtype = response.data.msg_type;
                        }
                        let listMsg = {
                            align: "left",
                            text: msg,
                            link: "",
                            type: msgtype,
                            time: response.data.msg_date_time
                        };
                        /**if (msg.flag == 1) {
                        const splitMsg = msg.answer.split("：");
                        listMsg.text = splitMsg[0];
                        listMsg.link = splitMsg[1];
                        }*/
                        if (this.isTextVoice === true) {
                            this.startTTS(msg);
                        }
                        await this.msgList.push(listMsg);
                        await this.scrollTop11();
                        //}
                        //this.loading = false;
                    })
                    .catch(function(error) {
                        //console.log(error);
                        that.$toasted.error(error.msg, {
                            position: "top-center",
                            duration: 3000,
                            theme: "outline",
                        });
                        //this.loading = false;
                    });
                } else {
                    geminiAIChat({ username: "guest", chatData: this.inputChat, preChatData: that.preChatData })
                    .then(async (response) => {
                        //console.log(response);
                        //if (response.code == 200) {
                        //console.log("返回响应信息")
                        //console.log(response.data)
                        let msg = "消息";
                        let msgtype = "0"
                        if (response.status && response.status == 500) {
                            msg = "返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
                            msgtype = "0";
                        }
                        if (response.code == 500) {
                            msg = "返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
                            msgtype = "0";
                        } else if (response.code == 200) {
                            // 自行处理需要的数据
                            msg = response.data.msg_data.trim();
                            msgtype = response.data.msg_type;
                        }
                        let listMsg = {
                            align: "left",
                            text: msg,
                            link: "",
                            type: msgtype,
                            time: response.data.msg_date_time
                        };
                        if (this.isTextVoice === true) {
                            this.startTTS(msg);
                        }
                        await this.msgList.push(listMsg);
                        await this.scrollTop11();
                        //}
                        //this.loading = false;
                    })
                    .catch(function(error) {
                        //console.log(error);
                        that.$toasted.error(error.msg, {
                            position: "top-center",
                            duration: 3000,
                            theme: "outline",
                        });
                        //this.loading = false;
                    });
                }
            //}
        },
        //获取用户的历史聊天记录
        getHistoryMag(username) {
            let that=this;
            getHistoryMessage({ username: username })
                .then(async (response) => {
                    //console.log(response.data)
                    let msglist = response.data;
                    await this.jsonStrToObj(msglist);
                    await this.scrollTop11();
                }).catch(function(error) {
                    // console.log(error);
                    that.$toasted.error(error.msg, {
                        position: "top-center",
                        duration: 3000,
                        theme: "outline",
                    });
                });
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
            console.log(pcmBlob);
        },
        //获取WAV录音数据
        getWAVRecordAudioData() {
            var wavBlob = this.recorder.getWAVBlob();
            console.log(wavBlob);
        },
        //下载PCM录音文件
        downloadPCBRecordAudioData() {
            this.recorder.downloadPCM("maike");
        },
        //下载WAV录音文件
        downloadWAVRecordAudioData() {
            this.recorder.downloadWAV("maike");
        },
        // 处理滚动条一直保持最上方
        scrollTop11() {
            let div = document.getElementById("bigChatBox") || document.getElementById("bigChatBox-desktop");
            div.scrollTop = div.scrollHeight;
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
            console.log((typeof val) != 'undefined')
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
                data:{ ttsText:text },
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
                console.log(downloadUrl)
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
            console.log(pcmBlob);
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
            console.log(formData);
            //上传wav录音数据

            uploadVoiceBlob(formData)
                .then(async (response) => {
                    console.log(response.data.data)
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
                console.log('请先点击合成')
            } else {
                that.textAudio.pause();
            }
        },
        // 暂停播放文字转语音按钮
        stopTextAudio() {
            var that = this;
            if (that.textAudio === null) {
                console.log('没有语音，请先合成')
            } else {
                that.textAudio.stop();
            }
        },
        startAudio(txt) {
            var msg = new SpeechSynthesisUtterance();
            var voicePack = speechSynthesis.getVoices();
            speechSynthesis.cancel();
            console.log('开始播放')
            console.log(voicePack)
            msg.text = txt
            msg.volume = 1 //音量
            msg.rate = 1 //语速
            //msg.voice = 
            msg.lang = 'zh-cn'
            speechSynthesis.speak(msg);
        },
        openMsg() {
            const h = this.$createElement;
            // this.$notify({
            //     title: '通知内容',
            //     duration: 5500,
            //     position: 'top-right',
            //     offset: 30,
            //     message: h('i', { style: 'color: teal' }, '聊天功能升级，增加语音回复与语音输入（默认关闭语音回复）。启用请发送”开启语音“，关闭发送“关闭语音”，发送“暂停播放”、“暂停”、“stop”实现停止播放语音，发送“继续播放”、“继续”、“play”可继续播放语音。左下角语音输入功能已更新！点击语音，然后结束！就可以发送语音文字！')
            // });
            this.$toasted.show("聊天功能升级，增加语音回复与语音输入（默认关闭语音回复）。启用请发送”开启语音“，关闭发送“关闭语音”，发送“暂停播放”、“暂停”、“stop”实现停止播放语音，发送“继续播放”、“继续”、“play”可继续播放语音。左下角语音输入功能已更新！点击语音，然后结束！就可以发送语音文字！", {
                position: "top-center",
                duration: 3000,
                theme: "bubble",
            });
        },
        setOpenAiKey() {
            this.$prompt('请输入openAiKey', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^sk-[\w]+$/,
                inputErrorMessage: 'openAiKey格式不正确'
            }).then(({ value }) => {
                // this.$message({
                //     type: 'success',
                //     message: '你的openAiKey是: ' + value,
                //     duration: 2500
                // });
                this.$toasted.success('你的openAiKey是: ' + value, {
                    position: "top-center",
                    duration: 3000,
                    theme: "toasted-primary",
                });
                this.openAiKey = value;
            }).catch(() => {
                // this.$message({
                //     type: 'info',
                //     message: '取消输入',
                //     duration: 2000
                // });
                this.$toasted.info("取消输入", {
                    position: "top-center",
                    duration: 3000,
                    theme: "bubble",
                });
            });
        },
        //遍历数组，把里面的每一条json字符串转为json对象
        jsonStrToObj(msgArr) {
            var len = msgArr.length;
            for (var i = 0; i < len; i++) {
                var temp = JSON.parse(msgArr[i]);
                this.msgList.push(temp);
            }
            //return msgArr;
        },
        //遍历聊天记录数组，把里面的每一条json字符串转为json对象
        chatHistoryToJson(msgArr) {
            let tempMessage = "";//[];
            var len = msgArr.length;
            if(len > 0) {
                for (var i = 0; i < len; i++) {
                    // var temp = JSON.parse(msgArr[i]);
                    // this.msgList.push(temp);
                    if(msgArr[i].align=="right"){
                        // tempMessage.push({role: "user", parts: [{text: msgArr[i].text}]});
                        //tempMessage += "{\"role\": \"user\",\"parts\": [{\"text\": \"" + msgArr[i].text + "\"}]},";
                        tempMessage += JSON.stringify({role: "user", parts: [{text: msgArr[i].text}]})+",";
                    } else if(msgArr[i].align=="left"){
                        // tempMessage.push({role: "model", parts: [{text: msgArr[i].text}]});
                        //tempMessage += "{\"role\": \"model\",\"parts\": [{\"text\": \"" + msgArr[i].text + "\"}]},";
                        tempMessage += JSON.stringify({role: "model", parts: [{text: msgArr[i].text}]})+",";
                    }
                }
            }
            this.preChatData = tempMessage;
            // this.preChatData = JSON.stringify(tempMessage);
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
            let dateTimeNow=new Date(timeNum);
            if(timeNum == 0 || timeNum == null){
                dateTimeNow=new Date();
            }
            let now = dateTimeNow,
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();
            let dateTimeStr = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substring(0, 8);
            return this.dateTimeAgo(dateTimeStr);
        },
        isSymbol(str) {//是否仅包含各类符号
            return /^[\u2000-\u27ff]+$/.test(str); // 检查Unicode范围内的符号
        },
        isOnlyNewlines(str) {//是否仅包含换行符
            return /^\n*$/.test(str);
        }
    }
}
</script>

<style scoped>
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

#app_container {
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
}

.chatBoxHeader {
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    text-align: center;
    background-color: rgb(118, 164, 219);
    color: #ffffff;
    font-weight: bolder;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.chatBoxHeader div {
    flex-grow: 0;
    flex-shrink: 0;
    align-self: center;
    padding-left: 6px;
    padding-right: 6px;
}

.chat-main-content{
    display: flex;
    flex-direction: column;
}

.bigChatBox {
    overflow-y: scroll;
    padding: 0 2px;
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
    padding: 5px;
    /* word-break: normal;
    display: block;
    white-space: pre-wrap;
    word-wrap: break-word; */
    overflow-x: scroll;
    display: inline-flex;
    align-items: center;
    margin-right:49px;
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
    display: inline-flex;
    align-items: center;
    margin-left:49px;
}

.listChatItemL .pcChatTextSpan {
    /*color:#252020;
    border-color: mediumaquamarine;
    background-color: #66CEAA;*/
    background-color: var(--color-article-container, #353434);
    color: var(--color-article-container-content-text, #d3d1d1);
    border-radius: 5px;
    padding: 5px;
    overflow-x: scroll;
    display: inline-flex;
    align-items: center;
}

.listChatItemL .pcChatTextSpan::-webkit-scrollbar {
    display: none;
}

.listChatItemR .pcChatTextSpan {
    background-color: #8ab3ca;
    border-radius: 5px;
    color:#252020;
    padding: 5px;
    display: inline-flex;
    align-items: center;
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

.multiline {
    line-height: 20px;
    resize: none;
    white-space: pre-wrap; /* 允许自动换行 */
    overflow-wrap: break-word; /* 单词超出边界时自动换行 */
}

.chatBoxFooter {
    position: relative;
    bottom: 0px;
    left: 0px;
    width: 100%;
    margin: 5px 0 5px 0;
}

.chatBoxFooterBtn {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    /* background-color: #83a097; */
    background: var(--color-background, #ffffff00);
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

.chatBoxFooterBtn > input,.chatBoxFooterBtn > textarea {
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

.chatBoxFooterBtn > input:focus,.chatBoxFooterBtn > textarea:focus
,textarea:focus,input:focus {
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