<template>
  <div class="category-wrapper">
    <category-icon-sub
      v-for="item in items"
      :key="item.id"
      :icon="item.icon"
      :iconText="item.iconText"
      :field="item.field"
      :bgColor="item.bgColor"
    ></category-icon-sub>
  </div>
</template>

<script>
import fieldData from "data/fields";
import CategoryIconSub from "./Sub.vue";

export default {
  name: "CategoryIcons",
  components: {
    CategoryIconSub,
  },
  data() {
    return {
      items: fieldData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.category-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
