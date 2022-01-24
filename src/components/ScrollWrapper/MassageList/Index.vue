<template>
  <div class="massage-wrapper">
    <massage-list-sub
      v-for="item in massageList"
      :key="item.id"
      :data="item"
    ></massage-list-sub>
  </div>
</template>

<script>
import MassageListSub from "./Sub.vue";
export default {
  name: "MassageList",
  props: {
    massageList: Array,
  },
  components: {
    MassageListSub,
  },
};
</script>

<style></style>
