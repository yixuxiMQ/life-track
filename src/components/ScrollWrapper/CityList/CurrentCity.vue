<template>
  <div class="current-city">
    <span>当前城市:</span>
    <router-link :to="{ name: path }">
      <span class="iconfont icon-positioning"></span>
      <span class="city">{{ this.cityName }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CurrentCity",
  data() {
    return {
      path: "Index",
    };
  },
  computed: {
    ...mapState(["cityName"]),
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.current-city {
  @include flex-row;
  align-items: center;
  font-size: 0.16rem;
  height: $headerHeight;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  padding-left: 0.15rem;

  .iconfont {
    vertical-align: 0.005rem;
    padding: 0 .05rem 0 .1rem;
    color: $defaultBgColor;
  }

  .city {
    line-height: 1rem;
  }
}
</style>
