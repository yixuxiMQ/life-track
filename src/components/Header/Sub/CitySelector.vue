<template>
  <div class="container">
    <router-link to="City">
      <span class="city-name">{{ city }}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CitySelector",
  data() {
    return {
      city: "全部",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.container {
  width: 0.6rem;
  height: $headerHeight;
  a {
    @include flex-row;
    @include vh-center;
    width: 100%;
    height: 100%;
    .city-name{
        font-size: .16rem;
        font-weight: bold;
    }
    .iconfont{
        font-size: .08rem;
        margin-left: .03rem;
    }
  }
}
</style>
