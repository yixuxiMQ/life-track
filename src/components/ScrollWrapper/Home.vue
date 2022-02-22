<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
      <Error v-if="errorShow"></Error>
      <div v-else>
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewList="homeDatas.viewDatas"></view-list>
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodList="homeDatas.foodDatas"></food-list>
        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotelList="homeDatas.hotelDatas"></hotel-list>
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageList="homeDatas.massageDatas"></massage-list>
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktvList="homeDatas.ktvDatas"></ktv-list>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CategoryIcons from "./CategoryIcons/Index.vue";
import HomeTitle from "./Sub/HomeTitle.vue";
import ViewList from "./ViewList/Index.vue";
import FoodList from "./FoodList/Index.vue";
import HotelList from "./HotelList/Index.vue";
import MassageList from "./MassageList/Index.vue";
import KtvList from "./KtvList/Index.vue";
import Error from "./Sub/Error.vue";

import { mapState } from "vuex";
import { IndexModel } from "models/index.js";
import tools from "utils/tools";

export default {
  name: "HomeScrollWrapper",
  components: {
    CategoryIcons,
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error,
  },
  data() {
    return {
      homeTitle: {
        foodTitle: "推荐美食",
        hotelTitle: "推荐酒店",
        ktvTitle: "推荐KTV",
        massageTitle: "推荐按摩",
        viewTitle: "推荐景点",
      },
      homeDatas: {
        foodDatas: [],
        hotelDatas: [],
        ktvDatas: [],
        massageDatas: [],
        viewDatas: [],
      },
      errorShow: false,
      currentCityId: 0,
    };
  },
  computed: {
    ...mapState(["cityId"]),
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      tap: true,
    });
    this.currentCityId = this.cityId;
    this.getHomeDatas(this.cityId);
  },
  activated() {
    if (this.currentCityId !== this.cityId) {
      this.currentCityId = this.cityId;
      this.getHomeDatas(this.currentCityId);
    }
  },
  methods: {
    getHomeDatas(cityId) {
      const indexModel = new IndexModel();
      indexModel.getHomeDatas(cityId).then((res) => {
        if (res && res.status === 0) {
          this.errorShow = false;
          const { data } = res;
          this.homeDatas.foodDatas = tools.formatJSON(
            data.foodDatas,
            "keyword"
          );
          this.homeDatas.hotelDatas = data.hotelDatas;
          this.homeDatas.ktvDatas = data.ktvDatas;
          this.homeDatas.massageDatas = data.massageDatas;
          this.homeDatas.viewDatas = data.viewDatas;
        } else {
          this.errorShow = true;
          console.log({
            statusCode: res.status,
            errorMsg: res.err,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
