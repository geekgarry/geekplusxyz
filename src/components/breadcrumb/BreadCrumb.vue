<template>
  <div class="bread">
    <slot />
  </div>
</template>
  
<script>
export default {
  name: "BreadCrumb",
};
</script>
  
<style scoped lang='scss'>
.bread {
  display: flex;
  padding: 5px 5px;
  :deep(&-item) {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: #27ba9b;
      }
    }
  }
  :deep(i) {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>