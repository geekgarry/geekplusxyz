<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <div class="my-blog-advertise">
      <div>
        <Adsense
          data-ad-format="auto"
          data-full-width-responsive="yes"
          data-ad-client="ca-pub-7291512442295477"
          data-ad-slot="3158275447">
        </Adsense>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  /* overflow-y: scroll; */
  -webkit-overflow-scroll:touch;
  /* background-color: #f4f3f3; */
  color: var(--color-text);
  background-color: var(--color-container,#f1f1f1);
  transition: color 0.5s, background-color 0.5s;
}
.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 160px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<!-- <style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style> -->