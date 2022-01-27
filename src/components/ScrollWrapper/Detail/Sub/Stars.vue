<template>
  <div class="stars-wrapper">
    <span class="iconfont icon-smile"></span>
    <Stars :starNum="starNum"></Stars>
    <span class="score">{{ score }}分</span>
  </div>
</template>

<script>
import Stars from "components/ScrollWrapper/Sub/Stars.vue";
export default {
  name: "DetailStars",
  props: {
    starNum: {
      type: Number,
      default() {
        return 0;
      },
    },
    score: {
      type: String,
      default() {
        return "0.0";
      },
    },
  },
  components: {
    Stars,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";

.stars-wrapper {
  display: flex;
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .icon-smile {
    font-size: 0.18rem;
    margin-right: 0.05rem;
    color: #999;
  }

  .score {
    font-size: 0.16rem;
    color: $defaultOrange;
  }
}
</style>
