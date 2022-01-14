<template>
  <div class="city-list-wrapper">
    <city-list-sub
      v-for="item in cityList"
      :key="item.id"
      :cityInfo="item"
    ></city-list-sub>
  </div>
</template>

<script>
import CityListSub from "./Sub.vue";
import cityData from "data/cities.js";
export default {
  name: "CityListIndex",
  components: {
    CityListSub,
  },
  data() {
    return {
      cityList: cityData,
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
