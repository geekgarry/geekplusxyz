<template>
  <div class="container-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div class="panel">
            <div class="panel-heading">
              <h4 class="text-center">用户投稿</h4>
            </div>
            <div class="panel-body">
              <form ref="aeticleData" class="form-horizontal">
                <div class="form-group">
                  <!-- <label for="articleTitle" class="col-sm-2 control-label"
                    >标题</label
                  > -->
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control"
                      id="articleTitle"
                      name="articleTitle"
                      v-model="articleData.articleTitle"
                      placeholder="输入标题"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="articleAuthor" class="col-sm-2 control-label"
                    >作者</label
                  > -->
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control"
                      id="articleAuthor"
                      name="articleAuthor"
                      v-model="articleData.authorName"
                      placeholder="作者"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="articleCategory" class="col-sm-2 control-label"
                    >文类</label
                  > -->
                  <div class="col-sm-12">
                    <select
                      class="selectpicker form-control"
                      title="请选择投稿文类"
                      id="articleCategory"
                      name="articleCategory"
                      v-model="articleData.articleCategory"
                      placeholder="请选择投稿文类"
                      @change="getSelect(articleData.articleCategory)"
                    >
                      <optgroup label="投稿文类">
                        <option value="">
                          请选择投稿文类
                        </option>
                      </optgroup>
                      <optgroup
                        :label="item.categoryName"
                        v-for="(item, index) in listCategory"
                        :key="index"
                        :selected="index == 0 ? 'selected' : ''"
                      >
                        <option
                          :value="subitem.id"
                          v-for="(subitem, subindex) in item.children"
                          :key="subindex"
                        >
                          {{ subitem.categoryName }}
                        </option>
                      </optgroup>
                      <!-- <optgroup label="广东省">
                                              <option value="1">广州市</option>
                                              <option value="2">深圳市</option>
                                              <option value="3">珠海市</option>
                                          </optgroup> -->
                      <!-- <option value="0">蕾丝</option>
                                          <option value="1">黑丝</option>
                                          <option value="2">肉丝</option>
                                          <option value="3">杜蕾斯</option>
                                          <option value="4">青椒肉丝</option> -->
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-12">
                    <!-- <plus-quill-editor></plus-quill-editor> -->
                    <input
                      v-show="false"
                      type="file"
                      allowexts="gif,jpeg,jpg,png,bmp,JPEG,JPG,PNG,GIF,BMP"
                      accept="image/*"
                      required
                      multiple
                      @change="uploadFileEvent($event)"
                      id="uploadFile"
                      ref="uploadRef"
                    />
                    <quill-editor
                      class="gpeditor"
                      ref="gpTextEditor"
                      name="gpTextEditor"
                      v-model="articleContent"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)"
                      @change="onEditorChange($event)"
                    >
                    </quill-editor>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-12 text-center">
                    <button
                      type="button"
                      class="btn btn-default"
                      @click="userWriteArticles()"
                    >
                      投稿
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div id="geekcjj-tool" class="panel hidden-xs">
            <div class="panel-heading">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span
              >&nbsp;站内搜索
            </div>
            <div class="text-center">
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

          <div id="geekcjj-tool" class="panel hidden-xs">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlusQuillEditor from "@/components/editor/PlusQuillEditor";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Quill from "quill";
let fontList = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong'].concat(Quill.import('formats/font').whitelist); //将字体加入到白名单

// 调整上传图片大小
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageResize", ImageResize);
import {
  listSubParentCategory,
  listSubCategory,
  userWriteGpArticles,
  uploadImageFile,
  deleteFile,
} from "@/api/geekplus/geekplus";
export default {
  components: {
    // PlusQuillEditor,
    //quillEditor,
  },
  data() {
    return {
      keywords: "",
      editorContent: "", //双向数据绑定数据
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
              ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
              ["blockquote", "code-block"], //引用，代码块
              [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
              [{ list: "ordered" }, { list: "bullet" }], //列表
              [{ script: "sub" }, { script: "super" }], // 上下标
              [{ indent: "-1" }, { indent: "+1" }], // 缩进
              [{ direction: "rtl" }], // 文本方向
              [{ size: ["small", false, "large", "huge"] }], // 字体大小
              [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
              [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
              [{ font: fontList }], //字体
              [{ align: [] }], //对齐方式
              ["clean"], //清除字体样式
              ["link", "image", "video"], //上传图片、上传视频
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  // value === true
                  document.querySelector("#uploadFile").click();
                } else {
                  this.quill.format("image", false);
                }
              },
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
        placeholder: "输入内容...",
      }, //编辑器配置项
      articleContent: null,
      articleData: {
        articleTitle: "",
        authorName: "",
        articleCategory: "",
        articleContent: "",
      }, //用户提交的文章信息
      listCategory: [],
      baseHost: window.location.host,
      baseApi: process.env.VUE_APP_BASE_API,
      allImageList: [],
      uploadImageList: [],
    };
  },
  watch: {
    //获取数据反显编译器
    articleContent() {
      //console.log(this.articleContent, "this.articleContent");
      this.editorContent = this.articleContent;
    },
  },
  created() {
    // setTimeout(()=>{},1000);
    this.getCategory();
    //console.log(Object.assign({}, [...this.listCategory]));
    // document.addEventListener("keydown", (e) => {
    //   let key = window.event.keyCode;
    //   if (key == 13 && !this.keywords!='') {
    //     // 13是enter键的键盘码 如果等于13 就调用click的登录方法
    //     this.searchResult();
    //   }
    // });
  },
  beforeMount() {},
  mounted() {
    let _this=this;
    this.$nextTick(() => {
      this.setTitleConfig();
    });
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
  },
  methods: {
    getCategory() {
      let that = this;
      listSubParentCategory()
        .then((response) => {
          let tempData = response.data;
          //   console.log("开始");
          //   console.log([...tempData]); //拷贝一个数组,&nbsp;打印此刻的瞬时状态
          //   console.log(tempData[0].children);
          //   console.log("结束");
          that.listCategory = tempData;
          //console.log(that.listCategory);
        })
        .catch((error) => {
          //console.log(error);
          this.$toasted
          .error(error.msg, {
            position: "top-center",
            fitToScreen: true,
            theme: "bubble",
          })
          .goAway(2000);
        });
    },
    userWriteArticles() {
      this.articleData.articleContent = this.articleContent;
      if (
        this.articleData.articleTitle == "" ||
        this.articleData.authorName == "" ||
        this.articleData.articleCategory == "" ||
        this.articleContent == ""
      ) {
        this.$toasted
          .error("内容不能为空！请重新输入", {
            position: "top-center",
            fitToScreen: true,
            theme: "bubble",
          })
          .goAway(3000);
      } else {
        this.onEditorBlur();
        userWriteGpArticles(this.articleData)
          .then((response) => {
            //console.log(response);
            this.$toasted.success("投稿成功！", {
              position: "top-center",
              theme: "bubble",
              duration: "2000",
            });
            this.resetForm();
            this.allImageList=[];
          })
          .catch((error) => {
            //console.log(error);
            this.$toasted.error(error.msg).goAway(2000);
          });
      }
    },
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
    resetForm() {
      this.articleData = {};
      this.articleContent = "";
    },
    getServerFilePath(filePath) {
      return filePath.replace(
        "https://www.geekplus.xyz" + process.env.VUE_APP_BASE_API,
        ""
      );
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
    getSelect(th) {
      //console.log(th);
    },
    // 失去焦点触发事件
    onEditorBlur() {
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
    // 获得焦点触发事件
    onEditorFocus() {},
    // 开始
    onEditorReady(editor) {
      //console.log(editor);
    },
    // 内容改变触发事件
    onEditorChange(val) {
      //console.log(this.editorContent, "this.editorContent");
      //this.catchData(this.editorContent);
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
    //多文件上传测试按钮
    uploadFileEventTest(e) {
      console.log("多个文件");
      console.log(e.target.files);
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
    uploadImageFileToFile(formData) {
      uploadImageFile(formData)
        .then((response) => {
          //console.log(response);
          var serverUrl = response.url;
          let uploadSuccess = {};
          const imageUrl =
            "https://www.geekplus.xyz" + this.baseApi + serverUrl;
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
          // this.content += url
          //this.$refs.uploadRef.clearFiles();
          uploadSuccess = { filePath: serverUrl };
          this.allImageList.push(uploadSuccess);
          this.$refs.uploadRef.value = "";
        })
        .catch((error) => {
          this.$toasted.error(error.msg, {
            duration: 3000,
            theme: "bubble",
            position: "top-center",
          });
          this.$refs.uploadRef.value = "";
        });
    },
  },
};
</script>

<style lang="scss">
/** ::v-deep  */
.quill-editor {
  .ql-container.ql-snow {
    line-height: normal !important;
    font-size: 14px;
    height: 400px !important;
  }
  /*加上height和滚动属性就可以，滚动条样式是系统默认样式，可能不同*/
  /* .ql-snow .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
    height: 125px;
    overflow: auto;
  } */
  .ql-snow .ql-tooltip[data-mode="link"]::before {
    content: "请输入链接地址:";
  }
  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: "保存";
    padding-right: 0px;
  }

  .ql-snow .ql-tooltip[data-mode="video"]::before {
    content: "请输入视频地址:";
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: "14px";
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
    content: "10px";
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
    content: "18px";
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
    content: "32px";
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: "文本";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: "标题1";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: "标题2";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: "标题3";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: "标题4";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: "标题5";
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: "标题6";
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: "标准字体";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
    content: "衬线字体";
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
    content: "等宽字体";
  }
}
</style>