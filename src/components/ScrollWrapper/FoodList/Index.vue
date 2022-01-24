<template>
  <div class="food-wrapper">
    <food-list-sub
      v-for="item of foodList"
      :key="item.id"
      :data="item"
    ></food-list-sub>
  </div>
</template>

<script>
import FoodListSub from "./Sub.vue";
export default {
  name: "FoodList",
  components: {
    FoodListSub,
  },
  props: {
    foodList: Array,
  },
};
</script>

<style></style>
