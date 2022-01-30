<template>
  <div class="introduce-wrapper">
    <detail-title title="详细介绍" icon="icon-intro"></detail-title>
    <div class="introduce-content">{{ introduce }}</div>
  </div>
</template>

<script>
import DetailTitle from "./Title.vue";
export default {
  name: "DetailIntro",
  props: {
    introduce: {
      type: String,
      default() {
        return "加载中...";
      },
    },
  },
  components: {
    DetailTitle,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";

.introduce-wrapper {
  @include flex-column;
  margin-top: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .introduce-content {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    box-sizing: border-box;
    text-indent: 2em;
  }
}
</style>
