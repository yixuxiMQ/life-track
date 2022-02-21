<template>
  <nav class="tab">
    <tab-sub
      v-for="(item, index) in cityDatas"
      :key="index"
      :cityInfo="item"
    ></tab-sub>
  </nav>
</template>

<script>
import TabSub from "./Sub.vue";
import cityDatas from "data/cities.js";

export default {
  name: "Tab",
  components: {
    TabSub,
  },
  data() {
    return {
      cityDatas,
    };
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/mixins.scss';

.tab{
    @include flex-row;
    height: .44rem;
    flex-wrap: nowrap;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}
</style>
