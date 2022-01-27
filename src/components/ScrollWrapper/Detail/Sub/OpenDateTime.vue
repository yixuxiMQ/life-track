<template>
  <div class="datetime-wrapper">
    <span class="iconfont icon-datetime"></span>
    <span class="datetime-text">{{ dateTime }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailOpenDateTime",
  props: {
    dateTime: {
      type: String,
      default() {
        return "加载中...";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.datetime-wrapper {
  display: flex;
  height: 0.44rem;
  align-items: center;
  padding: 0.03rem 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .icon-datetime {
    font-size: 0.16rem;
    color: #999;
    margin-right: 0.15rem;
  }

  .datetime-text {
    font-size: 0.14rem;
  }
}
</style>
