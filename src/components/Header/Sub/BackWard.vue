<template>
  <div class="back-ward" @click="onRouteBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
export default {
  name: "BackWard",
  methods: {
    onRouteBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.back-ward{
    position: absolute;
    left: 0;
    top: 0;
    // @include flex-row;
    @include vh-center;
    height: $headerHeight;
    width: $headerHeight;
    .iconfont{
        font-size: .2rem;
    }
}
</style>
