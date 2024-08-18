<template>
  <div v-show="loadingSt" class="loading-container">
    <div class="loading-gif">
      <img :src="require('@/assets/icon/loading.gif')" />
    </div>
  </div>
</template>

<script>
export default {
    name:'LoadingPage',
    props:{
      loadingSt:{
        type: Boolean,
        default:true,
      }
    },
    data(){
        return{
            isLoading:true,
        }
    },
    created(){
        var that = this;
        that.AppPage.$on("loading", function (data) {
        that.isLoading = !!data;
        });
    }
};
</script>

<style scoped>
.loading-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 56;
  z-index: 999;
  background-color: #ffffffd3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
}
.loading-gif {
  display: block;
  text-align: center;
}
</style>