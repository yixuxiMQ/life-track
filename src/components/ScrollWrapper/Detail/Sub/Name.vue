<template>
  <div class="name-wrapper">
    <span class="iconfont icon-name"></span>
    <span class="name-text">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailName",
  props: {
    name: {
      type: String,
      default() {
        return "加载中...";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.name-wrapper {
  display: flex;
  height: 0.44rem;
  padding: 0.03rem 0.15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  line-height: 0.39rem;
  box-sizing: border-box;
  font-size: 0.14rem;

  .icon-name {
    color: #000;
  }

  .name-text {
    margin-left: 0.1rem;
  }
}
</style>
