<template>
  <div class="error-wrapper">
    <span class="iconfont icon-error"></span>
    <p class="error-text">无法连接到网络</p>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";

.error-wrapper {
  @include vh-center;
  height: 3rem;
  flex-direction: column;
  color: #999;

  .iconfont {
    font-size: 0.5rem;
  }

  .error-text {
    font-size: 0.14rem;
    margin-top: 0.1rem;
  }
}
</style>
