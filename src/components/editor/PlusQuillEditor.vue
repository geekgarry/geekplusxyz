<template>
  <div class="gp-quill-editor">
    <quill-editor
      class="quill-editor"
      ref="gpTextEditor"
      v-model="content"
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
export default {
  name: "PlusQuillEditor",
  // components: {
  //   quillEditor,
  // },
  props: {
    value: {
      type: [Number, Object, Array, String],
      default: "",
    },
  },
  data() {
    return {
      content: null,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
            ["blockquote", "code-block"], // 引用  代码块
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表
            [{ script: "sub" }, { script: "super" }], // 上标/下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            // [{'direction': 'rtl'}],                         // 文本方向
            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            [{ font: [] }], // 字体种类
            [{ align: [] }], // 对齐方式
            ["clean"], // 清除文本格式
            ["link", "image", "video"], // 链接、图片、视频
          ], //工具菜单栏配置
        },
        placeholder: "请在这里书写。。。", //提示
        readyOnly: false, //是否只读
        theme: "snow", //主题 snow/bubble
        syntax: true, //语法检测
      },
    };
  },
  methods: {
    // 失去焦点
    onEditorBlur(editor) {},
    // 获得焦点
    onEditorFocus(editor) {},
    // 开始
    onEditorReady(editor) {},
    // 值发生变化
    onEditorChange(editor) {
      this.content = editor.html;
      console.log(editor);
    },
  },
  computed: {
    editor() {
      return this.$refs.gpTextEditor.quillEditor;
    },
  },
  mounted() {
    // console.log('this is my editor',this.editor);
  },
};
</script>

<style lang="scss">
.gp-quill-editor {
  .quill-editor {
    line-height: normal;
    .ql-container.ql-snow {
      line-height: normal !important;
      font-size: 14px;
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