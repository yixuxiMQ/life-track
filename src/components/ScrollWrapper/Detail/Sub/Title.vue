<template>
  <div class="title-wrapper">
    <h1>
      <span :class="['iconfont', icon]"></span>
      <span class="title">{{ title }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "DetailTitle",
  props: {
    icon: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";
.title-wrapper {
  display: flex;
  height: 0.44rem;
  align-items: center;
  line-height: 0.44rem;
  padding: 0 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  color: $defaultGreen;

  .iconfont {
    font-size: 0.18rem;
    margin-right: 0.1rem;
  }

  .title {
    font-size: 0.14rem;
  }
}
</style>
