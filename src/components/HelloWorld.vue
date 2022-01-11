<template>
  <div class="wrapper">
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "生活轨迹",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.wrapper {
  .header {
    @include vh-center;
    height: $headerHeight;
    background-color: $defaultBgColor;
    h1 {
      font-size: 0.2rem;
    }
  }
}
</style>
