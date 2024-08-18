<template>
  <div class="bread-item">
    <RouterLink v-if="to!=''" :to="to"><slot /></RouterLink>
    <span v-else><slot /></span>
    <!-- <i class="fa fa-angle-right"></i> -->
    <!-- <font-awesome-icon :icon="['fas', 'chevron-right']" /> -->
    <font-awesome-icon v-if="to!=''" :icon="['fas', 'angle-right']" style="margin:0 1px;" />
  </div>
</template>
<!-- 使用时 -->
<!-- <bread-item to="/xxx/id"></bread-item> -->
<!-- <bread-item :to='{path:"/xxx/id"}'></bread-item> -->
<script>
export default {
  name: "BreadCrumbItem",
  props: {
    to: {
      type: [String, Object], //to的值即可以是字符串，也可以是对象
    },
  },
};
</script>
<style scoped>
.bread-item a{
  color: #139F95;
}
.bread-item span{
  color: #6d7d86;
}
</style>
