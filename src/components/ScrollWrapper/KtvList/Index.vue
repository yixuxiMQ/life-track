<template>
  <div class="ktv-wrapper">
    <ktv-list-sub
      v-for="item in ktvList"
      :key="item.id"
      :data="item"
    ></ktv-list-sub>
  </div>
</template>

<script>
import KtvListSub from "./Sub.vue";
export default {
  name: "KtvList",
  props: {
    ktvList: Array,
  },
  components: {
    KtvListSub,
  },
};
</script>

<style></style>
