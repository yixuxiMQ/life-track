<template>
  <div class="comment-wrapper">
    <detail-title icon="icon-smile" title="评论关键词"></detail-title>
    <div class="keyword">
      <span
        class="keyword-item"
        v-for="(item, index) in commentKeyword"
        :key="index"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title.vue";

export default {
  name: "DetailCommentKeyword",
  props: {
    commentKeyword: {
      type: Array,
      default() {
        return ["还没有评论哦~"];
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
@import "styles/variables.scss";

.comment-wrapper {
  @include flex-column;
  margin-top: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .keyword {
    @include flex-row;
    flex-wrap: wrap;
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    box-sizing: border-box;

    .keyword-item {
      @include vh-center;
      color: $defaultGreen;
      height: 0.25rem;
      padding: 0 0.05rem;
      margin: 0 0.05rem 0.05rem 0;
      border: 1px solid $defaultGreen;
      border-radius: 0.03rem;
    }
  }
}
</style>
