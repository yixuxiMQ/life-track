<template>
  <div class="no-data-tip">
    <span class="text">{{ noDataTip }}</span>
  </div>
</template>

<script>
export default {
  name: "NoDataTip",
  data() {
    return {
      noDataTip: "- 没有搜索到相关结果 -",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";

.no-data-tip {
  @include vh-center;
  height: 3rem;

  .text {
    font-size: 0.16rem;
    color: #999;
  }
}
</style>
