<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CategoryIcons from "./CategoryIcons/Index.vue";
export default {
  name: "HomeScrollWrapper",
  components: {
    CategoryIcons,
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  },
};
</script>

<style lang="scss" scoped></style>
