<template>
    <div class="m-tooltip" @mouseenter="onShow" @mouseleave="onHide">
      <div
        ref="titleRef"
        class="m-title"
        :class="{'show-tip': visible}"
        @mouseenter="onShow"
        @mouseleave="onHide"
        :style="`max-width: ${maxWidth}px; top: ${top}px; left: ${left}px;`">
        <div v-show="isArrowUp" class="m-arrow-up">
          <span class="u-arrow-up"></span>
        </div>
        <div class="u-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-show="isArrowDown" class="m-arrow">
          <span class="u-arrow"></span>
        </div>
      </div>
      <div ref="contentRef" class="u-content">
        <slot>{{ content }}</slot>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'PlusTooltip',
    props: {
      maxWidth: { // 提示框内容最大宽度
        type: Number,
        default: 120
      },
      content: { // 展示的文本
        type: String,
        default: '暂无内容' // string | slot
      },
      title: { // 提示的文本
        type: String,
        default: '暂无提示' // string | slot
      }
    },
    data () {
      return {
        hideTimer: null,
        top: 0, // 提示框top定位
        left: 0, // 提示框left定位
        visible: false,
        isArrowDown: false,
        isArrowUp: false
      }
    },
    mounted () {
      this.getPosition()
    },
    methods: {
      getPosition () {
        const rect = this.$refs.contentRef.getBoundingClientRect()
        const targetTop = rect.top
        const targetLeft = rect.left
        const targetWidth = rect.width
        const titleWidth = this.$refs.titleRef.offsetWidth // 提示文本宽度
        const titleHeight = this.$refs.titleRef.offsetHeight // 提示文本高度
        if(targetTop>=110){
            this.isArrowDown=true
            this.isArrowUp=false
            this.top = targetTop - titleHeight
        }else{
            this.isArrowDown=false
            this.isArrowUp=true
            this.top = targetTop + 51
        }
        this.left = targetLeft - (titleWidth - targetWidth) / 2
      },
      onShow () {
        this.getPosition()
        clearTimeout(this.hideTimer)
        this.visible = true
      },
      onHide () {
        this.hideTimer = setTimeout(() => {
          this.visible = false
        }, 100)
      }
    }
  }
  </script>
  <style lang="scss" scoped>
  .m-tooltip {
    display: inline-block;
  }
  .m-title {
    position: fixed;
    z-index: 999;
    padding-bottom: 12px;
    pointer-events: none;
    opacity: 0;
    transform-origin: 50% 75%;
    transform: scale(0.8); // 缩放变换
    -ms-transform: scale(0.8); /* IE 9 */
    -webkit-transform: scale(0.8); /* Safari and Chrome */
    transition: transform .25s, opacity .25s;
    .u-title {
      padding: 10px;
      margin: 0 auto;
      word-break: break-all;
      word-wrap: break-word;
      background: var(--color-container,#FFFFFF);
      box-shadow: 0px 0px 7px 1px fade(var(--color-main-container-shadow,#ccc), 36%);
      border-radius: 5px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: var(--color-main-container-text,#333);
    }
    .m-arrow {
      position: absolute;
      z-index: 9;
      bottom: 12px;
      left: 50%;
      transform: translate(-50%, 100%);
      width: 15.55px;
      height: 10px;
      border-radius: 0 0 5px 5px;
      overflow: hidden;
      .u-arrow {
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translate(-50%, -50%) rotate(45deg);
        margin: 0 auto;
        width: 11px;
        height: 11px;
        background: var(--color-container,#FFF);
        border-radius: 0 0 3px 0;
        z-index: 8;
        box-shadow: 1px 1px 3px 1px fade(var(--color-main-container-shadow,#ccc), 10%);
      }
    }
    .m-arrow-up {
        position: absolute;
        z-index: 9;
        top: -18px;
        left: 50%;
        transform: translate(-50%, 100%);
        width: 15.55px;
        height: 10px;
        border-radius: 0 0 5px 5px;
        overflow: hidden;
        .u-arrow-up {
            position: absolute;
            left: 50%;
            top: 10px;
            transform: translate(-50%, -50%) rotate(45deg);
            margin: 0 auto;
            width: 11px;
            height: 11px;
            background: var(--color-container,#FFF);
            border-radius: 0 0 3px 0;
            z-index: 8;
            box-shadow: 1px 1px 3px 1px fade(var(--color-main-container-shadow,#ccc), 10%);
          }
    }
  }
  .show-tip {
    pointer-events: auto;
    opacity: 1;
    transform: scale(1); // 缩放变换
    -ms-transform: scale(1); /* IE 9 */
    -webkit-transform: scale(1); /* Safari and Chrome */
  }
  .u-content {
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-header-text,#000000);
  }
  </style>