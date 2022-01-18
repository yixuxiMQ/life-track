<template>
  <div class="view-wrapper">
    <view-list-sub
      v-for="viewItem of viewList"
      :key="viewItem.id"
      :data="viewItem"
    ></view-list-sub>
  </div>
</template>

<script>
import ViewListSub from "./Sub.vue";
export default {
  name: "ViewList",
  components: {
    ViewListSub,
  },
  props: {
    viewList: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.view-wrapper {
  @include flex-row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
