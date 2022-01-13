<template>
  <header class="header">
    <back-ward></back-ward>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
import BackWard from "./Sub/BackWard.vue";
export default {
  name: "CommonHeader",
  props: {
    title: {
      type: String,
      default() {
        return "生活轨迹";
      },
    },
  },
  components: {
    BackWard,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.header {
  position: relative;
  height: $headerHeight;
  background-color: $defaultBgColor;
  @include flex-row;
  @include vh-center;
  font-size: 0.18rem;
}
</style>
