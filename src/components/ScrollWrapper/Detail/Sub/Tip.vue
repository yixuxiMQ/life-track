<template>
  <div class="tip-wrapper">
    <span class="iconfont icon-tip"></span>
    <span class="tip">{{ tip }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailTip",
  props: {
    tip: {
      type: String,
      default() {
        return "加载中...";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.tip-wrapper {
  display: flex;
  height: 0.44rem;
  padding: 0.03rem 0.15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  line-height: 0.39rem;
  box-sizing: border-box;
  font-size: 0.14rem;

  .icon-tip {
    color: #999;
  }

  .tip {
    margin-left: 0.1rem;
  }
}
</style>
