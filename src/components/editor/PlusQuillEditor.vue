<template>
  <div class="gp-quill-editor">
    <div id="toolbar" style="display: none;">
      <button type="button" class="ql-upload" title="文件">
        <svg t="1722720213002" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20309" width="200" height="200"><path d="M928.229 864.193c0 26.515-21.512 48.026-48.026 48.026L143.798 912.219c-26.515 0-48.026-21.512-48.026-48.026L95.772 704.105c0-26.515 21.512-48.026 48.026-48.026l213.617 0c13.507 37.021 49.027 64.035 90.55 64.035l128.07 0c41.522 0 77.042-27.015 90.55-64.035l213.617 0c26.515 0 48.026 21.512 48.026 48.026L928.228 864.193zM736.123 399.938l-128.07 0 0 224.123c0 17.51-14.508 32.018-32.018 32.018l-128.07 0c-17.51 0-32.018-14.508-32.018-32.018L415.947 399.938l-128.07 0c-13.007 0-24.514-8.004-29.516-20.011-5.003-11.506-2.501-25.514 7.004-34.519l224.124-224.123c6.002-6.504 14.508-9.505 22.512-9.505s16.51 3.001 22.512 9.505l224.124 224.123c9.505 9.005 12.006 23.013 7.004 34.519C760.637 391.934 749.13 399.938 736.123 399.938zM704.105 784.149c-17.51 0-32.018 14.508-32.018 32.018s14.508 32.018 32.018 32.018 32.018-14.508 32.018-32.018S721.615 784.149 704.105 784.149zM832.176 784.149c-17.51 0-32.018 14.508-32.018 32.018s14.508 32.018 32.018 32.018 32.018-14.508 32.018-32.018S849.686 784.149 832.176 784.149z" p-id="20310" fill="#444444"></path></svg>
      </button>
    </div>
    <!-- <div id="editor" class="quill-editor"></div> -->
    <input
      style="display: none;"
      type="file"
      allowexts="gif,jpeg,jpg,png,bmp,JPEG,JPG,PNG,GIF,BMP"
      accept="image/*"
      required
      multiple
      @change="uploadImageFileEvent($event)"
      id="uploadImageFile"
      ref="uploadImageFileRef"
    />
    <input
      style="display: none;"
      type="file"
      allowexts="pdf,PDF,doc,DOC,docx,DOCX"
      accept="*"
      required
      multiple
      @change="uploadFileEvent($event)"
      id="uploadFile"
      ref="uploadFileRef"
    />
    <quill-editor
      class="quill-editor"
      ref="gpTextEditor"
      v-model="editorContent"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>
  </div>
</template>

<script>
import Quill from "quill";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
let fontList = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong'].concat(Quill.import('formats/font').whitelist); //将字体加入到白名单

// 调整上传图片大小
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageResize", ImageResize);
let Link = Quill.import('formats/link')
class FileBlot extends Link {
  // 继承Link Blot
  static create(value) {
    let node = undefined
    if (value && !value.href) {
      // 适应原本的Link Blot
      node = super.create(value)
    } else {
      // 自定义Link Blot
      node = super.create(value.href)
      // node.setAttribute('download', value.innerText);  // 左键点击即下载
      node.innerText = value.innerText
      node.download = value.innerText
    }
    return node
  }
}
FileBlot.blotName = 'link'
FileBlot.tagName = 'A'
Quill.register(FileBlot)

import {uploadAllFile, deleteFile} from "@/api/geekplus/geekplus";
export default {
  name: "PlusQuillEditor",
  components: {
    Quill,
  },
  props: {
    value: {
      type: String, //[Number, Object, Array, String],
      default: "",
    },
  },
  data() {
    return {
      editorContent: "",
      editorOption: {
        modules: {
          // ImageExtend: {
          //     loading: true,
          //     name: 'img',
          //     action: "#",
          //     response: (res) => {
          //       return res.info
          //     }
          // },
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
              ["blockquote", "code-block"], // 引用  代码块
              [{ header: 1 }, { header: 2 }], // 1、2 级标题
              [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
              [{ script: "sub" }, { script: "super" }], // 上标/下标
              [{ indent: "-1" }, { indent: "+1" }], // 缩进
              // [{'direction': 'rtl'}],// 文本方向
              [{ size: ["small", false, "large", "huge"] }], // 字体大小
              [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
              [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
              [{ font: [] }], // 字体种类
              [{ align: [] }], // 对齐方式
              ["clean"], // 清除文本格式
              ["link", "image", "video", "upload"], // 链接、图片、视频
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  // value === true
                  document.querySelector("#uploadImageFile").click();
                } else {
                  this.quill.format("image", false);
                }
              },
              upload: function (value) {
                if (value) {
                  // value === true
                  document.querySelector("#uploadFile").click();
                }
              }
            },
          },
          clipboard: {
              matchVisual: false
          },
          // 调整图片大小
          imageResize: {
            displayStyles: {
              backgroundColor: "black",
              border: "none",
              color: "white",
            },
            modules: ["Resize", "DisplaySize", "Toolbar"],
          },
          syntax: {
            highlight: text => {
              return this.hljs.highlightAuto(text).value; // 这里就是代码高亮需要配置的地方
            }
          },
        },
        placeholder: "请在这里书写...", //提示
        readyOnly: false, //是否只读
        theme: "snow", //主题 snow/bubble
        syntax: true, //语法检测
      }, //编辑器配置项
      baseHost: window.location.host,//网站地址
      baseApi: process.env.VUE_APP_BASE_API,//请求后端的跨域api前缀
      allImageList: [],
      uploadImageList: [],
    };
  },
  created(){
  },
  computed: {
    editor() {
      return this.$refs.gpTextEditor.quillEditor;
    },
  },
  watch:{
    value(val){
      this.editorContent = val;
    },
    editorContent(val){
      this.$emit("input", val);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setTitleConfig();
    });
    // var uploadBtn = document.getElementsByClassName(".ql-snow.ql-toolbar button.ql-upload")[0];
    // console.log(uploadBtn);
    // // var svgNode = document.createElement("svg");
    // // svgNode.innerHTML = ""
    // uploadBtn.innerHTML = '<svg t="1722716668966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4409" id="mx_n_1722716668967" width="200" height="200"><path d="M731.428571 341.333333h73.142858a73.142857 73.142857 0 0 1 73.142857 73.142857v414.476191a73.142857 73.142857 0 0 1-73.142857 73.142857H219.428571a73.142857 73.142857 0 0 1-73.142857-73.142857V414.47619a73.142857 73.142857 0 0 1 73.142857-73.142857h73.142858v73.142857H219.428571v414.476191h585.142858V414.47619h-73.142858v-73.142857zM518.460952 93.671619l172.373334 172.373333-51.687619 51.736381-84.601905-84.577523v348.306285h-73.142857V234.22781l-83.626667 83.577904-51.712-51.712 172.373333-172.397714z" p-id="4410" fill="currentColor"></path></svg>';

    // window.addEventListener(
    //   "paste",
    //   function (e) {
    //     let cbd = e.clipboardData;
    //     let ua = window.navigator.userAgent; // 如果是 Safari 直接 return
    //     if (!(e.clipboardData && e.clipboardData.items)) {
    //       return;
    //     } // Mac平台下Chrome49版本以下 复制Finder中的文件的Bug Hack掉
    //     if (
    //       cbd.items &&
    //       cbd.items.length === 2 &&
    //       cbd.items[0].kind === "string" &&
    //       cbd.items[1].kind === "file" &&
    //       cbd.types &&
    //       cbd.types.length === 2 &&
    //       cbd.types[0] === "text/plain" &&
    //       cbd.types[1] === "Files" &&
    //       ua.match(/Macintosh/i) &&
    //       Number(ua.match(/Chrome\/(\d{2})/i)[1]) < 49
    //     ) {
    //       return;
    //     }
    //     if (cbd.items.length == 0) {
    //       _this.$toasted.error("本地图片请使用图片上传功能！",{position:'top-center',duration:3000,theme:'bubble'});
    //     }
    //     for (let i = 0; i < cbd.items.length; i++) {
    //       let item = cbd.items[i];
    //       if (item.kind == "file") {
    //         //循环获得kind为file的，并用getASFile转化赋值给blob
    //         let blob = item.getAsFile();
    //         if (blob.size === 0) {
    //           return;
    //         }
    //         console.log(blob)// blob 就是从剪切板获得的文件 可以进行上传或其他操作
    //         _this.pasteData = blob;
    //       }
    //     }
    //     e.preventDefault(); //阻止默认动作
    //   },
    //   false
    // );

    window.addEventListener(
      "paste",
      (evt) => {
        if (
          evt.clipboardData &&
          evt.clipboardData.files &&
          evt.clipboardData.files.length
        ) {
          //console.log(evt.clipboardData);
          evt.preventDefault();
          [].forEach.call(evt.clipboardData.files, (file) => {
            if (!file.type.match(/^image\/(gif|jpe?g|a?png|bmp|webp)/i)) {
              return;
            }
            const formData = new FormData();
            formData.append("file", file);
            //console.log(file);
            this.uploadImageFileToFile(formData);
            // this.$axios
            //   .post(`${process.env.VUE_APP_BASE_API}/file/upload`, formData)
            //   .then((res) => {
            //     console.log(res);
            //     if (res.data.code == 200) {
            //       console.log(res.data.data.src);
            //       let length = this.Quill.getSelection().index; //光标位置
            //       // 插入图片地址
            //       this.Quill.insertEmbed(length, "image", res.data.data.url);
            //       // 光标后移一位
            //       this.Quill.setSelection(length + 1);
            //     } else {
            //       this.$message({
            //         message: res.data.message,
            //         type: "warning",
            //       });
            //     }
            //   });
          });
        }
      },
      false
    );
    // const quill = Quill('#editor', {
    //   modules: {
    //     toolbar: '#toolbar'
    //   },
    //   theme: 'snow'
    // });
    // console.log('this is my editor',this.editor);
  },
  methods: {
    removeFileList(imgs) {
      //let filePath={filePaths:JSON.stringify(imgs)};
      deleteFile(JSON.stringify(imgs))
        .then((response) => {
          this.$toasted.success(response.msg, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        })
        .catch((error) => {
          this.$toasted.error(error, {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
          });
        });
    },
    getServerFilePath(filePath) {
      return filePath.replace(process.env.VUE_APP_BASE_API,
        ""
      );
    },
    // 失去焦点触发事件
    onEditorBlur(editor) {
      this.deleteRemovedFile();
      // console.log("失去焦点")
    },
    // 获得焦点触发事件
    onEditorFocus(editor) {
      // console.log(editor)
      // console.log(this.editorContent)
      // if(this.editorContent !== this.value){
      //   console.log("内容变化");
      // }
      // console.log("获得焦点")
    },
    // 开始
    onEditorReady(editor) {},
    // 内容改变触发事件
    onEditorChange(editor) {
      this.editorContent = editor.html;
      // console.log(editor);
    },
    //设置工具栏中文提示
    setTitleConfig() {
      // toolbar标题
      const titleConfig = [
        { Choice: ".ql-insertMetric", title: "跳转配置" },
        { Choice: ".ql-bold", title: "加粗" },
        { Choice: ".ql-italic", title: "斜体" },
        { Choice: ".ql-underline", title: "下划线" },
        { Choice: ".ql-header", title: "段落格式" },
        { Choice: ".ql-strike", title: "删除线" },
        { Choice: ".ql-blockquote", title: "块引用" },
        { Choice: ".ql-code", title: "插入代码" },
        { Choice: ".ql-code-block", title: "插入代码段" },
        { Choice: ".ql-font", title: "字体" },
        { Choice: ".ql-size", title: "字体大小" },
        { Choice: '.ql-list[value="ordered"]', title: "编号列表" },
        { Choice: '.ql-list[value="bullet"]', title: "项目列表" },
        { Choice: ".ql-direction", title: "文本方向" },
        { Choice: '.ql-header[value="1"]', title: "h1" },
        { Choice: '.ql-header[value="2"]', title: "h2" },
        { Choice: ".ql-align", title: "对齐方式" },
        { Choice: ".ql-color", title: "字体颜色" },
        { Choice: ".ql-background", title: "背景颜色" },
        { Choice: ".ql-upload", title: "上传文件" },
        { Choice: ".ql-image", title: "图像" },
        { Choice: ".ql-video", title: "视频" },
        { Choice: ".ql-link", title: "添加链接" },
        { Choice: ".ql-formula", title: "插入公式" },
        { Choice: ".ql-clean", title: "清除字体格式" },
        { Choice: '.ql-script[value="sub"]', title: "下标" },
        { Choice: '.ql-script[value="super"]', title: "上标" },
        { Choice: '.ql-indent[value="-1"]', title: "向左缩进" },
        { Choice: '.ql-indent[value="+1"]', title: "向右缩进" },
        { Choice: ".ql-header .ql-picker-label", title: "标题大小" },
        {
          Choice: '.ql-header .ql-picker-item[data-value="1"]',
          title: "标题一",
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="2"]',
          title: "标题二",
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="3"]',
          title: "标题三",
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="4"]',
          title: "标题四",
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="5"]',
          title: "标题五",
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="6"]',
          title: "标题六",
        },
        { Choice: ".ql-header .ql-picker-item:last-child", title: "标准" },
        {
          Choice: '.ql-size .ql-picker-item[data-value="small"]',
          title: "小号",
        },
        {
          Choice: '.ql-size .ql-picker-item[data-value="large"]',
          title: "大号",
        },
        {
          Choice: '.ql-size .ql-picker-item[data-value="huge"]',
          title: "超大号",
        },
        { Choice: ".ql-size .ql-picker-item:nth-child(2)", title: "标准" },
        { Choice: ".ql-align .ql-picker-item:first-child", title: "居左对齐" },
        {
          Choice: '.ql-align .ql-picker-item[data-value="center"]',
          title: "居中对齐",
        },
        {
          Choice: '.ql-align .ql-picker-item[data-value="right"]',
          title: "居右对齐",
        },
        {
          Choice: '.ql-align .ql-picker-item[data-value="justify"]',
          title: "两端对齐",
        },
      ];
      for (const item of titleConfig) {
        const tip = document.querySelector(".quill-editor " + item.Choice);
        if (!tip) continue;
        tip.setAttribute("title", item.title);
      }
    },
    deleteRemovedFile(){
      let tempImageList = [];
      //this.allImageList = [];
      let deleteImages = [];
      let length = document.querySelectorAll(".ql-editor img").length;
      if (length) {
        let images = document.querySelectorAll(".ql-editor img");
        images.forEach((item) => {
          tempImageList.push({ filePath: this.getServerFilePath(item.src) });
        });
      }
      deleteImages = this.allImageList.filter((item) => {
        return tempImageList.every((e) => e.filePath != item.filePath);
        //return tempImageList.indexOf(item) === -1
      });
      //console.log(tempImageList);
      //console.log(this.allImageList);
      //console.log(deleteImages);
      if (deleteImages.length > 0) {
        this.removeFileList(deleteImages);
      }
      let allTempImg = this.allImageList.filter((item) => {
        return deleteImages.every((e) => e.filePath != item.filePath);
      });
      //console.log(deleteImages)
      //console.log(allTempImg)
      this.allImageList = allTempImg;
    },
    //多文件上传测试按钮
    uploadFileEventTest(e) {
      // console.log("多个文件");
      console.log(e.target.files);
    },
    uploadImageFileEvent(e) {
      //this.formData.append("file", file.file);
      // console.log(file.file, "sb2");
      //const imageUrl = 上传七牛云后返回来的一串在线链接
      if (e.target.files.length == 1) {
        let file = e.target.files[0];
        //var file=document.querySelector("#uploadFile")[0].value;
        //console.log(file);
        let formData = new FormData();
        formData.append("file", file);
        //formData.append("file", new Blob(file)); //this.fileList[0].raw);//拿到存在fileList的文件存放到formData中
        //下面数据是我自己设置的数据,可自行添加数据到formData(使用键值对方式存储)
        // 解析上传的文件
        //let file = this.fileList[0]
        //console.log(file)
        this.uploadImageFileToFile(formData);
      } else {
        let fileList=e.target.files;
        for (var i=0;i< fileList.length; i++) {
          let formData = new FormData();
          var elFile=fileList[i];
          formData.append("file", elFile);
          //console.log(elFile);
          //formData.append("file", new Blob(file)); //this.fileList[0].raw);//拿到存在fileList的文件存放到formData中
          //下面数据是我自己设置的数据,可自行添加数据到formData(使用键值对方式存储)
          // 解析上传的文件
          //let file = this.fileList[0]
          //console.log(file)
          this.uploadImageFileToFile(formData);
        }
      }
    },
    uploadFileEvent(e) {
      //this.formData.append("file", file.file);
      // console.log(file.file, "sb2");
      //const imageUrl = 上传七牛云后返回来的一串在线链接
      if (e.target.files.length == 1) {
        let file = e.target.files[0];
        //var file=document.querySelector("#uploadFile")[0].value;
        //console.log(file);
        let formData = new FormData();
        formData.append("file", file);
        //formData.append("file", new Blob(file)); //this.fileList[0].raw);//拿到存在fileList的文件存放到formData中
        //下面数据是我自己设置的数据,可自行添加数据到formData(使用键值对方式存储)
        // 解析上传的文件
        //let file = this.fileList[0]
        //console.log(file)
        this.uploadFileToFile(formData);
      } else {
        let fileList=e.target.files;
        for (var i=0;i< fileList.length; i++) {
          let formData = new FormData();
          var elFile=fileList[i];
          formData.append("file", elFile);
          //console.log(elFile);
          //formData.append("file", new Blob(file)); //this.fileList[0].raw);//拿到存在fileList的文件存放到formData中
          //下面数据是我自己设置的数据,可自行添加数据到formData(使用键值对方式存储)
          // 解析上传的文件
          //let file = this.fileList[0]
          //console.log(file)
          this.uploadFileToFile(formData);
        }
      }
    },
    uploadImageFileToFile(formData) {
      uploadAllFile(formData)
        .then((response) => {
          //console.log(response);
          var serverUrl = response.url;
          let uploadSuccess = {};
          const imageUrl =
            this.baseApi + serverUrl;
          // this.$message({
          //   message: "上传" + response.msg,
          //   type: "success",
          // });
          // 获取光标所在位置
          let quill = this.$refs.gpTextEditor.quill;
          let length = quill.getSelection().index;
          // 插入图片
          quill.insertEmbed(length, "image", imageUrl);
          //const num = file.filestoredname && file.filestoredname.length || 0
          quill.insertText(length+1, "\r\n",true);
          // 调整光标到最后
          quill.setSelection(length + this.articleContent.length, 0);
          // this.editorContent += url
          //this.$refs.uploadFileRef.clearFiles();
          uploadSuccess = { filePath: serverUrl };
          this.allImageList.push(uploadSuccess);
          this.$refs.uploadImageFileRef.value = "";
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            duration: 3000,
            theme: "bubble",
            position: "top-center",
          });
          this.$refs.uploadImageFileRef.value = "";
        });
    },
    uploadFileToFile(formData) {
      uploadAllFile(formData)
        .then((response) => {
          //console.log(response);
          var serverUrl = response.url;
          //let uploadSuccess = {};
          const fileUrl =
            this.baseApi + serverUrl;
          const originalFileName = response.originalFileName;
          // this.$message({
          //   message: "上传" + response.msg,
          //   type: "success",
          // });
          // 获取光标所在位置
          let quill = this.$refs.gpTextEditor.quill;
          let length = quill.getSelection().index;
          // 插入a标签
          //quill.insertEmbed(length, "image", imageUrl);
          quill.insertEmbed(length, 'link', {href: fileUrl, innerText: originalFileName})
        // quill.setSelection(length + fileNameLength)
          //const num = file.filestoredname && file.filestoredname.length || 0
          // quill.insertText(length, "\r\n",true);
          // 调整光标到最后
          quill.setSelection(length + this.articleContent.length, 0);
          // this.editorContent += url
          //this.$refs.uploadFileRef.clearFiles();
          //uploadSuccess = { filePath: serverUrl };
          //this.allImageList.push(uploadSuccess);
          this.$refs.uploadImageFileRef.value = "";
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            duration: 3000,
            theme: "bubble",
            position: "top-center",
          });
          this.$refs.uploadImageFileRef.value = "";
        });
        //let fileNameLength = file.name.length
        // // 插入链接
        // let length = quill.getSelection().index;
        // // quill.insertEmbed(length, 'link', {href:res.data, innerText:file.name}, "api")
        // quill.insertEmbed(length, 'link', {href: res.data, innerText: file.name})
        // quill.setSelection(length + fileNameLength)
    }
  },
};
</script>

<style lang="scss">
.ql-toolbar button.ql-upload{
  background-image: url("@/assets/icon/svg/upload.svg") !important;
  background-size: 18px 18px !important;
  background-position: center center !important;
  background-repeat:no-repeat !important;
}
.gp-quill-editor {
  .quill-editor {
    line-height: normal;
    .ql-container.ql-snow {
      line-height: normal !important;
      font-size: 14px;
      height: 400px !important;
      .ql-editor{
        min-height: 350px !important;
      }
    }
    .ql-snow {
      .ql-tooltip[data-mode="link"]::before {
        content: "请输入链接地址:";
      }
      .ql-tooltip.ql-editing a.ql-action::after {
        border-right: 0px;
        content: "保存";
        padding-right: 0px;
      }
      .ql-tooltip[data-mode="video"]::before {
        content: "请输入视频地址:";
      }
      .ql-picker.ql-size {
        .ql-picker-label::before,
        .ql-picker-item::before {
          content: "字体";
        }
        .ql-picker-label[data-value="12px"]::before,
        .ql-picker-item[data-value="12px"]::before {
          content: "12px";
        }
        .ql-picker-label[data-value="14px"]::before,
        .ql-picker-item[data-value="14px"]::before {
          content: "14px";
        }
        .ql-picker-label[data-value="16px"]::before,
        .ql-picker-item[data-value="16px"]::before {
          content: "16px";
        }
        .ql-picker-label[data-value="18px"]::before,
        .ql-picker-item[data-value="18px"]::before {
          content: "18px";
        }
        .ql-picker-label[data-value="20px"]::before,
        .ql-picker-item[data-value="20px"]::before {
          content: "20px";
        }
        .ql-picker-label[data-value="24px"]::before,
        .ql-picker-item[data-value="24px"]::before {
          content: "24px";
        }
        .ql-picker-label[data-value="28px"]::before,
        .ql-picker-item[data-value="28px"]::before {
          content: "28px";
        }
        .ql-picker-label[data-value="32px"]::before,
        .ql-picker-item[data-value="32px"]::before {
          content: "32px";
        }
        .ql-picker-label[data-value="36px"]::before,
        .ql-picker-item[data-value="36px"]::before {
          content: "36px";
        }
      }
      .ql-picker.ql-header {
        .ql-picker-label::before,
        .ql-picker-item::before {
          content: "文本";
        }
        .ql-picker-label[data-value="1"]::before,
        .ql-picker-item[data-value="1"]::before {
          content: "标题1";
        }
        .ql-picker-label[data-value="2"]::before,
        .ql-picker-item[data-value="2"]::before {
          content: "标题2";
        }
        .ql-picker-label[data-value="3"]::before,
        .ql-picker-item[data-value="3"]::before {
          content: "标题3";
        }
        .ql-picker-label[data-value="4"]::before,
        .ql-picker-item[data-value="4"]::before {
          content: "标题4";
        }
        .ql-picker-label[data-value="5"]::before,
        .ql-picker-item[data-value="5"]::before {
          content: "标题5";
        }
        .ql-picker-label[data-value="6"]::before,
        .ql-picker-item[data-value="6"]::before {
          content: "标题6";
        }
      }
      .ql-picker.ql-font {
        .ql-picker-label[data-value="SimSun"]::before,
        .ql-picker-item[data-value="SimSun"]::before {
          content: "宋体";
          font-family: "SimSun" !important;
        }
        .ql-picker-label[data-value="SimHei"]::before,
        .ql-picker-item[data-value="SimHei"]::before {
          content: "黑体";
          font-family: "SimHei";
        }
        .ql-picker-label[data-value="Microsoft-YaHei"]::before,
        .ql-picker-item[data-value="Microsoft-YaHei"]::before {
          content: "微软雅黑";
          font-family: "Microsoft YaHei";
        }
        .ql-picker-label[data-value="KaiTi"]::before,
        .ql-picker-item[data-value="KaiTi"]::before {
          content: "楷体";
          font-family: "KaiTi" !important;
        }
        .ql-picker-label[data-value="FangSong"]::before,
        .ql-picker-item[data-value="FangSong"]::before {
          content: "仿宋";
          font-family: "FangSong";
        }
      }
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
      content: "标准字体";
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
      content: "衬线字体";
    }
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-label[data-value="monospace"]::before,
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-item[data-value="monospace"]::before {
      content: "等宽字体";
    }
    .ql-align-center {
      text-align: center;
    }
    .ql-align-right {
      text-align: right;
    }
    .ql-align-left {
      text-align: left;
    }
  }
}
</style>