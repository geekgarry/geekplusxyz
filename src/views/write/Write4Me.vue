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
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-12">
                    <plus-quill-editor
                      v-model="articleContent"
                    ></plus-quill-editor>
                    <!-- <quill-editor
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
                    </quill-editor> -->
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
          <div id="geekplus-tool" class="panel hidden-xs">
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

          <div id="geekplus-tool" class="panel hidden-xs">
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
import {
  listSubParentCategory,
  listSubCategory,
  userWriteGpArticles,
  uploadAllFile,
  deleteFile,
} from "@/api/geekplus/geekplus";
export default {
  components: {
    PlusQuillEditor,
    //quillEditor,
  },
  data() {
    return {
      keywords: "",
      articleContent: "",//双向绑定数据内容富文本编辑器的内容
      articleData: {
        articleTitle: "",
        authorName: "",
        articleCategory: "",
        articleContent: "",
      }, //用户提交的文章信息
      listCategory: [],
    };
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
  mounted() {},
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
        //this.onEditorBlur();
        userWriteGpArticles(this.articleData)
          .then((response) => {
            //console.log(response);
            this.$toasted.success("投稿成功！", {
              position: "top-center",
              theme: "bubble",
              duration: "2000",
            });
            this.resetForm();
            // this.allImageList=[];
          })
          .catch((error) => {
            //console.log(error);
            this.$toasted.error(error.msg).goAway(2000);
          });
      }
    },
    //重置所有输入框数据
    resetForm() {
      this.articleData = {};
      this.articleContent = "";
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
  },
};
</script>

<style lang="scss">
/** ::v-deep  */
/*.ql-snow.ql-toolbar button.ql-upload{
  background-image: url("./../../assets/icon/svg/upload.svg") !important;
  background-size: 18px 18px !important;
  background-position: center center !important;
  background-repeat:no-repeat !important;
}*/
/*.quill-editor {
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
  /*.ql-snow .ql-tooltip[data-mode="link"]::before {
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
}*/
</style>