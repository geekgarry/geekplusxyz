<template>
    <div class="chatgpt_container">
      <div class="row row-no-gutters">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div v-if="chatdisplay">
            <div class="chatBoxHeader">
                <div class="chatBoxHeader_container">
                    <div class="chatBoxHeader_side"><span class="glyphicon glyphicon-arrow-left" @click="$router.back()" aria-hidden="true"></span></div>
                    <div class="chatBoxHeader_title">ChatGPT智能助手</div>
                    <div class="chatBoxHeader_side"><span class="glyphicon glyphicon-bullhorn" aria-hidden="true" @click="openMsg"></span></div>
                </div>
            </div>
            <div class="bigChatBox" id="bigChatBox">
              <div v-for="(item, index) in list" class="listChatMsg" :key="index" :style="{ textAlign: item.align }" >
                <span class="listChatItemL" v-if="item && item.align == 'left'">
                  <span
                    ><img
                      class="chatUserIcon"
                      src="/imgs/logo.png"
                      alt=""
                    />
                  </span>
                  <span
                    class="listChatItemContent"
                    v-if="item && item.link == ''"
                  >
                    <span v-if="item.type == '1'" v-html="item.text"></span>
                    <span v-if="item.type == '0'" v-text="item.text"></span>
                  </span>
                  <span class="listChatItemContent" v-if="item && item.link"
                    >:
                    <a :href="item.link" target="_blank">{{
                      item.text
                    }}</a></span>
                </span>
                <span
                  class="listChatItemR"
                  v-if="item && item.align == 'right'"
                >
                  <span class="listChatItemContent">{{ item.text }}</span>
                  <span
                    ><img
                      class="chatUserIcon"
                      src="/imgs/mai.png"
                      alt=""
                    />
                  </span>
                </span>
              </div>
            </div>
            <div class="chatBoxFooter">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="chatBoxFooterBtn">
                            <div class="input-group input-group-lg">
                                <span class="input-group-btn" >
                                    <button type="button" class="btn btn-default"
                                     @click="startAndStopRecording" :disabled="loadingtxt==''?false:true">
                                        {{ recordingTxt }}
                                    </button>
                                </span>
                                <input type="text" v-model="inputChat" :autofocus="true"
                                    class="form-control"
                                    placeholder="请输入聊天内容" aria-describedby="请输入聊天内容">
                                <span class="input-group-btn" >
                                    <button type="button" class="btn btn-default" 
                                     @keydown.enter="handleMsg" @click="handleMsg"
                                    :disabled="loadingtxt==''?false:true">
                                        <span class="glyphicon glyphicon-send" aria-hidden="true"></span>{{ loadingtxt==''?'发送':loadingtxt }}
                                    </button>
                                </span>
                            </div>
                            
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        </div>
      <!-- <el-button @click="visible11" v-show="chatbtndisplay" type="primary">打开ChatGpt聊天框</el-button> -->
    </div>
    <!-- <el-dialog :visible.sync="visible" title="对话框">
      <div v-show="chatbtndisplay" class="bigChatBox" id="bigChatBox">
        <div
          v-for="(item, index) in list"
          class="listChatMsg"
          :style="{ textAlign: item.align }"
        >
          <span class="listChatItemL" v-if="item && item.align == 'left'">
            <img
              class="chatUserIcon"
              src="/imgs/profile.png"
              alt=""
            />
            <span v-if="item && item.link == ''">
              <span v-if="item.type == '1'" v-html="item.text"></span>
              <span v-if="item.type == '0'" v-text="item.text"></span>
            </span>
            <span v-if="item && item.link"
              >: <a :href="item.link" target="_blank">{{ item.text }}</a></span
            >
          </span>
          <span class="listChatItemR" v-if="item && item.align == 'right'">
            <span class="pcChatTextSpan">{{ item.text }}</span>
            <img
              class="chatUserIcon"
              src="/imgs/mai.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div style="margin-top: 15px">
        <el-input
          placeholder="请输入聊天内容"
          v-model="inputChat"
          class="input-with-select"
          clearable
          :autofocus="true"
          type="text"
        >
          <el-button
            :loading="loading"
            @keydown.enter.native="handleMsg"
            slot="append"
            type="primary"
            @click="handleMsg"
            >发送</el-button
          >
        </el-input>
      </div>
    </el-dialog> -->
</template>

<script>
//import axios from 'axios'
import {getchatgpt,getchatgpthistory,uploadVoiceBlobFile} from "@/api/chatgpt/chatgpt"
import Recorder from 'js-audio-recorder'
//let recorder = new Recorder();
export default {
    data: function(){
        return{
          visible: false,
          inputChat: "",
          list: [],//聊天消息的list
          loading: false,
          loadingtxt:'',
          chatbtndisplay: true,
          chatdisplay:false,
          chatHeight:"440px",
          fullWidth: 0,
          fullHeight:0,
          contentScrollTop: 0,//屏幕滚动
          audioData: [], // 存储录音数据块
            recorder: new Recorder({
                sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
                sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
                numChannels: 1, // 声道，支持 1 或 2， 默认是1
                // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
            }),
          recorderData:[],//音频的二进制数据
          recording:0,
          recordingTxt:"语音",
          textAudio:null,
          isTextVoice:false,//是否语音朗读
        };
    },
    watch:{
        windowHeight (val) {
          let that = this;
          //console.log("实时屏幕高度：",val, that.windowHeight );
        },
        windowWidth (val) {
          let that = this;
          if(val<768){
            //that.dialogWidth='100%'
            that.chatbtndisplay=false;
          }else{
            //that.dialogWidth='75%'
          }
          //console.log("实时屏幕宽度：",val, that.windowHeight );
        },
        contentScrollTop(val) {
            let that = this;
            //console.log("实时屏幕滚动高度：", val, that.contentScrollTop);
        }
    },
    computed:{

    },
    created(){
        this.getHistoryMag("You");
        //this.startTTS("你好！请问现在是什么时间！");
        document.addEventListener("keydown", (e) => {
          let key = window.event.keyCode;
          if (key == 13 && this.loadingtxt=='') {
            // 13是enter键的键盘码 如果等于13 就调用click的登录方法
            this.handleMsg();
          }
        });
        this.fullWidth = document.documentElement.clientWidth;
        this.fullHeight = document.documentElement.clientHeight;
        // 页面宽度小于750px时，不显示地图
        if (this.fullWidth < 750) {
          this.chatbtndisplay = false;
          this.chatdisplay=true;
        } else {
          this.chatbtndisplay = true;
          this.chatdisplay=false;
        }
        //console.log(this.$route.path)
        //document.getElementById("bigChatBox").style.height=(this.fullHeight-100)+"px";
    },
    mounted(){
        let that = this
        that.openMsg();
        // <!--把window.onresize事件挂在到mounted函数上-->
        window.onresize = () => {
          return (() => {
            window.fullHeight = document.documentElement.clientHeight;
            window.fullWidth = document.documentElement.clientWidth;
            that.windowHeight = window.fullHeight;  // 高
            that.windowWidth = window.fullWidth; // 宽
            // 页面宽度小于750px时，不显示地图
            if (that.windowWidth < 1000) {
              that.chatbtndisplay = false;
              that.chatdisplay=true;
            } else {
              that.chatbtndisplay = true;
              that.chatdisplay=false;
            }
            console.log("页面高度："+that.windowHeight)
            document.getElementById("bigChatBox").style.height=(that.windowHeight-100)+"px";
            //that.scrollTop11();
          })()
        };
        window.onscroll=()=>{
            return (()=>{
                var st = document.documentElement.scrollTop || document.body.scrollTop;
                that.contentScrollTop = st;
            })()
        };
    },
    methods:{
        visible11() {
          this.visible = true;
          this.$nextTick(() => {
            this.$refs.serachBox.focus();
          });
        },
        async handleMsg() {
          console.log(this.inputChat, "发送信息");
          if (this.inputChat !== "") {
            this.loadingtxt = '...';
            await this.list.push({ align: "right", text: this.inputChat });
            await this.scrollTop11();
            this.getMsg();
            this.inputChat = "";
          }
        },
        getMsg() {
          let that=this;
          if(that.inputChat==="关闭语音"){
            that.isTextVoice=false
            /*
            * 模拟信息返回
            */
            setTimeout(async () => {
              let listMsg = {
                align: "left",
                text: "已关闭语音功能",
                link: "",
                type: '0'
              };
              await that.list.push(listMsg);
              await that.scrollTop11();
              this.loadingtxt = '';
            }, 1000);
          }else if(that.inputChat==="开启语音"){
            that.isTextVoice=true
            /*
            * 模拟信息返回
            */
            setTimeout(async () => {
              let listMsg = {
                align: "left",
                text: "已开启语音功能",
                link: "",
                type: '0'
              };
              await that.list.push(listMsg);
              await that.scrollTop11();
              this.loadingtxt = '';
            }, 1000);
          }else if(that.inputChat==="停止语音"||that.inputChat==="停止播放"||that.inputChat==="暂停播放"||that.inputChat==="暂停"||that.inputChat==="pause"){
            that.pauseTextAudio();
            that.loadingtxt = '';
          }else if(that.inputChat==="继续语音"||that.inputChat==="继续播放"||that.inputChat==="继续"||that.inputChat==="play"){
            that.playTextAudio();
            that.loadingtxt = '';
          }else{
            let sendMessage={ username:"You", data: that.inputChat };
            // 处理自己的接口请求 返回需要的数据
            //this.axios
            //.post("/openai/getchatgpt", { username:"You", data: this.inputChat })
            getchatgpt(sendMessage).then((response) => {
            //console.log(response);
            //if (response.status == 200) {
                console.log("返回响应信息")
                console.log(response)
                let msg="消息";
                let msgtype="0"
                if(response.code==500){
                  msg="返回信息错误可能由于以下原因:\n1.你发送的信息中包含不安全和不合法的内容！（如色情，暴力，恐怖，或是违反互联网一般行为规范和道德法律等）。\n2.你的服务因为一些原因无法完成请求过程，也许是网络问题，也许是服务器出现服务过载或超时延迟。\n3.由于服务器出现未知原因导致数据无法安全传递";
                  msgtype="0";
                }else if(response.code==200){
                  // 自行处理需要的数据
                  msg = response.data.msg_data;
                  msgtype = response.data.msg_type;
                }
                let listMsg = {
                align: "left",
                text: msg,
                link: "",
                type: msgtype
                };
                /**if (msg.flag == 1) {
                const splitMsg = msg.answer.split("：");
                listMsg.text = splitMsg[0];
                listMsg.link = splitMsg[1];
                }*/
                if(that.isTextVoice===true){
                  that.startTTS(msg);
                }
                that.list.push(listMsg);
                that.scrollTop11();
            //}
              that.loadingtxt = '';
            }).catch(function (error) {
                console.log(error);
                that.$toasted.error(error).goAway(3000);
                that.loadingtxt = '';
            }).finally(()=>{
                that.loadingtxt = '';
            });
          }
        },
        //获取用户的历史聊天记录
        getHistoryMag(username){
        //   this.axios
        //   .get("/openai/getHistoryMessage?username=You")
        //   .then(async (response) => {
        //     console.log(response.data)
        //     let msglist=response.data.data;
        //     this.jsonStrToObj(msglist);
        //   }).catch(function (error) {
        //     console.log(error);
        //   });
        let params={username:username}
            getchatgpthistory(params).then((response) => {
                //console.log(response);
                let msglist=response.data;
                this.jsonStrToObj(msglist);
            }).catch((error) => {
                console.log(error);
                this.$toasted.info(error).goAway(3000);
            }).finally(async (response) => {
                this.$toasted.info(response).goAway(3000);
            })
        },

        startAndStopRecording(){
          let that=this;
          //recording为0表示开始录音
          if(that.recording==0){
            that.startRecordAudio();
            that.recording=1;
            that.recordingTxt="结束"
          }
          //recording为1表示结束录音
          else if(that.recording==1){
            that.stopRecordAudio();
            that.recording=0;
            that.recordingTxt="语音"
          }
        },
        /**
          * 获取麦克风权限
        * */
        getPermission(){
          Recorder.getPermission().then(() => {
            this.$toasted.success('获取权限成功',{position:'top-center',duration:3000})
          }, (error) => {
            console.log(`${error.name} : ${error.message}`);
          });
        },
        //开始录音 startRecordAudio
        startRecordAudio(){
          Recorder.getPermission().then(
            () => {
              //console.log("开始录音");
              this.recorder.start(); // 开始录音
            },
            (error) => {
              this.$toasted.show("请先允许该网页使用麦克风",
              {
                position:'top-center',
                duration:3000,
                type: "info",
                theme:'bubble'
              });
              //console.log(`${error.name} : ${error.message}`);
            }
          );
        },
        //停止录音
        stopRecordAudio() {
          //console.log("停止录音");
          this.recorder.stop();
          /**setTimeout(async () => {
            await this.playRecordAudio();
          }, 2000);*/
          //this.getPCMRecordAudioData();
          this.getRecorderToText()
          //this.playRecordAudio()
        },
        // 继续录音
        resumeRecordAudio () {
          this.recorder.resume()  
        },
        // 暂停录音
        pauseRecordAudio () {
            this.recorder.pause();
        },
        //播放录音
        playRecordAudio() {
          console.log("播放录音");
          this.recorder.play();
        },
        // 暂停录音播放
        pausePlayRecordAudio () {
            this.recorder.pausePlay()
        },
        // 恢复录音播放
        resumePlayRecordAudio () {
            this.recorder.resumePlay()
        },
        // 停止录音播放
        stopPlayRecordAudio () {
            this.recorder.stopPlay();
        },
        // 销毁录音Recorder
        destroyRecordAudio () {
            this.recorder.destroy().then(function() {
                this.recorder = null;
          });
        },
        //获取PCM录音数据
        getPCMRecordAudioData() {
          let that =this;
          let toltime = this.recorder.duration;//录音总时长
          let fileSize = this.recorder.fileSize;//录音总大小
          var pcmBlob = this.recorder.getPCMBlob();
          let channel = this.recorder.getChannelData();//获取左声道和右声道音频数据
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
        // 处理滚动条一直保持最上方
        scrollTop11() {
          let div = document.getElementById("bigChatBox");
          //console.log(div.scrollHeight)
          //console.log(div.scrollTop)
          document.documentElement.scrollTop=div.scrollHeight
        },
        clearBlank(value){
          if(value){
            value = value.replace(/\s/g,"")
          }
          return value
        },
        timeout(ms) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('error')
            }, ms);  //reject模拟出错，返回error
          });
        },
        //消除字符串中的空格换行等特殊字符
        tansf (e){
          let a = (e+'').replace(/['']/g,"") // 去空格
          a = (a+'').replace(/[\r\n]/g,"") //去回车
          return a
        },
        //去除换行符
        keepTextStyle(val){
          //console.log(val)
          console.log(typeof val)
          console.log((typeof val)!='undefined')
          return  (val + '').replace(/\n/g,"<br/>")
        },
        //开始文字转语音
        startTTS(text){
          // 调用语音合成接口
          // 参数含义请参考 https://ai.baidu.com/docs#/TTS-API
          /*axios
          .post("https://tsn.baidu.com/text2audio?tex="+text+"&lan=zh&cuid=maike&ctp=1&tok=4354346")
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
          var that=this;
          var url="https://tsn.baidu.com/text2audio?tex="+text+"&lan=zh&cuid=maike&ctp=1&tok=3453534";
          //var textAudio;
          that.textAudio = new Audio();
          that.textAudio.onloadeddata = function () {
            that.textAudio.play();
          };
          that.textAudio.src = url; // put your url here
          that.textAudio.play();
        },
        getRecorderToText(){
          let that=this;
          // 创建一个formData对象
          let formData = new FormData()
          //let voiceData=null;
          let pcmBlob = this.recorder.getPCMBlob();
        //   var reader = new FileReader() //生成FileReader实例
        //   reader.readAsArrayBuffer(pcmBlob) //取出blob或者File文件的二进制原始数据
        //   reader.onload = function (da) { //有一个异步回调
        //     let yy = new Uint8Array(da.target.result) //后端需要的二进制格式
        //     let endd = [...yy] //后端需要的格式，我们改造成数组
        //     console.log(da);
        //     voiceData = endd; //保存到变量中，保存的就是我们需要的二进制数据
        //   }
          //console.log(voiceData);
          // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
          let newbolb = new Blob([pcmBlob], { type: 'audio/pcm' })
          //获取当时时间戳作为文件名
          let fileOfBlob = new File([newbolb], new Date().getTime() + '.pcm')
          formData.append('file', fileOfBlob);
          //console.log(formData)
          //上传wav录音数据
        //   this.axios
        //   .post("/api/uploadVoiceBlob",
        //   formData)
          uploadVoiceBlobFile(formData)
          .then(async (response) => {
            //console.log(response.data)
            //let text=response.data.data.result[0]
            that.inputChat=response.data.result[0];
            that.handleMsg()
          }).catch(function (error) {
            console.log(error);
          });
        },
        // 播放文字转语音的按钮
        playTextAudio() {
          var that=this;
          if (that.textAudio === null) {
            this.$toasted.show('请先点击合成').goAway(3000);
          } else {
            that.textAudio.play();
          }
        },
        // 暂停播放文字转语音按钮
        pauseTextAudio() {
          var that=this;
          if (that.textAudio === null) {
            console.log('请先点击合成')
          } else {
            that.textAudio.pause();
          }
        },
        // 暂停播放文字转语音按钮
        stopTextAudio() {
          var that=this;
          if (that.textAudio === null) {
            console.log('没有语音，请先合成')
          } else {
            that.textAudio.stop();
          }
        },
        startAudio(txt) {
          var msg = new SpeechSynthesisUtterance();
          var voicePack=speechSynthesis.getVoices();
          speechSynthesis.cancel();
          console.log('开始播放')
          console.log(voicePack)
          msg.text=txt
          msg.volume = 1   //音量
          msg.rate = 1  //语速
          //msg.voice = 
          msg.lang='zh-cn'
          speechSynthesis.speak(msg);
        },
        openMsg() {
          const h = this.$createElement;
          this.$toasted.success('我是一个模态框', {position:"top-center",theme:'outline',duration:3000}).goAway(3000);
        //   this.$toasted.register(
        //     "通知内容",
        //     "聊天功能升级，增加语音回复与语音输入（默认关闭语音回复）。启用请发送”开启语音“，关闭发送“关闭语音”，发送“暂停播放”、“暂停”、“stop”实现停止播放语音，发送“继续播放”、“继续”、“play”可继续播放语音。左下角语音输入功能已更新！点击语音，然后结束！就可以发送语音文字！",
        //     {
        //     type : 'show',
        //     icon : 'material-icons iconshibai',
        //     position: "top-center",
        //     duration: 2000,
        //   });
        },
        //遍历数组，把里面的每一条json字符串转为json对象
        jsonStrToObj(msgArr){
          var len=msgArr.length;
          for(var i=0;i<len;i++){
            var temp=JSON.parse(msgArr[i]);
            this.list.push(temp);
          }
          //return msgArr;
          this.scrollTop11();
        },
    }
};
</script>

<style scoped>
.chatgpt_container{
    width: 100%;
    margin: 0 auto;
}
.chatBoxHeader {
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  text-align: center;
  color: #ffffff;
  font-weight: bolder;
  position: fixed;
  top:0;
  left:0;
  width: 100%;
}
.chatBoxHeader_container{
    background-color: rgb(118, 164, 219);
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 1px;
}
.chatBoxHeader .chatBoxHeader_title{
    flex-grow:1;
    flex-shrink:1;
}
.chatBoxHeader .chatBoxHeader_side {
  flex-grow: 0;
  flex-shrink: 0;
  align-self: center;
  padding-left: 6px;
  padding-right: 6px;
}
.bigChatBox {
  min-height: calc(100vh - 100px);
  height: auto;
  overflow-y: auto;
  margin-top: 45px;
  margin-bottom: 55px;
  margin-left: 2px;
  margin-right: 2px;
}
.listChatMsg {
  font-size: 16px;
  font-weight: 500;
}
/** .listChatMsg span{

}*/
.chatUserIcon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
}
.listChatItemL,
.listChatItemR {
  display: inline-flex;
  margin-top: 2px;
  margin-bottom: 2px;
}
.listChatItemL .listChatItemContent {
  border-radius: 5px;
  border-width: 1px;
  border-color: mediumaquamarine;
  background-color: #66ceaa;
  padding: 3px;
  word-break: normal;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.listChatItemR .listChatItemContent {
  border-radius: 5px;
  border-width: 1px;
  border-color: #355cbf;
  background-color: #4c65b8;
  padding: 3px;
  color: #f0efef;
  text-align: left;
}
.listChatItemR .pcChatTextSpan {
  text-align: left;
}
.chatBoxFooter {
  position: fixed;
  bottom: 10px;
  left: 0px;
  width: 100%;
  margin-top: 10px;
  /**display: inline-flex; */
  justify-content: center;
  align-items: center;
}
.chatBoxFooterBtn {
  display:block;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #83a09700;
}
.chatBoxFooterBtn span {
  flex-grow: 0;
  flex-shrink: 0;
  /**margin:auto;
    align-items:center;*/
  align-self: flex-end;
}
.input-with-chatgpt {
  vertical-align: middle;
  line-height: inherit;
  margin: auto;
  align-self: center;
}
</style>