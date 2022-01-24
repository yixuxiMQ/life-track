<template>
  <div class="hotel-wrapper">
    <hotel-list-sub
      v-for="item of hotelList"
      :key="item.id"
      :data="item"
    ></hotel-list-sub>
  </div>
</template>

<script>
import HotelListSub from "./Sub.vue";
export default {
  name: "HotelList",
  components: {
    HotelListSub,
  },
  props: {
    hotelList: Array,
  },
};
</script>

<style lang="scss" scoped></style>
