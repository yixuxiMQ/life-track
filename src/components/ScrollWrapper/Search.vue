<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <Error v-if="data.status === -1"></Error>
      <div v-else>
        <no-data-tip
          v-if="
            (!data.viewDatas || data.viewDatas.length <= 0) &&
            (!data.foodDatas || data.foodDatas.length <= 0) &&
            (!data.hotelDatas || data.hotelDatas.length <= 0) &&
            (!data.massageDatas || data.massageDatas.length <= 0) &&
            (!data.ktvDatas || data.ktvDatas.length <= 0)
          "
        ></no-data-tip>
        <div v-if="data.viewDatas && data.viewDatas.length > 0">
          <home-title title="景点结果:"></home-title>
          <view-list :viewList="data.viewDatas"></view-list>
        </div>
        <div v-if="data.foodDatas && data.foodDatas.length > 0">
          <home-title title="美食结果:"></home-title>
          <food-list :foodList="data.foodDatas"></food-list>
        </div>
        <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
          <home-title title="酒店结果:"></home-title>
          <hotel-list :hotelList="data.hotelDatas"></hotel-list>
        </div>
        <div v-if="data.massageDatas && data.massageDatas.length > 0">
          <home-title title="按摩结果:"></home-title>
          <massage-list :massageList="data.massageDatas"></massage-list>
        </div>
        <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
          <home-title title="KTV结果:"></home-title>
          <ktv-list :ktvList="data.ktvDatas"></ktv-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

import ViewList from "./ViewList/Index.vue";
import FoodList from "./FoodList/Index.vue";
import HotelList from "./HotelList/Index.vue";
import MassageList from "./MassageList/Index.vue";
import KtvList from "./KtvList/Index.vue";
import HomeTitle from "./Sub/HomeTitle.vue";
import Error from "./Sub/Error.vue";
import NoDataTip from "./Sub/NoDataTip.vue";

export default {
  name: "SearchScrollWrapper",
  props: {
    data: Object,
  },
  components: {
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    HomeTitle,
    Error,
    NoDataTip,
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  },
};
</script>

<style lang="scss" scoped></style>
