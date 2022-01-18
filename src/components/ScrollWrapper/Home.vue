<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
      <home-title :title="homeTitle.viewTitle"></home-title>
      <view-list :viewList="homeDatas.viewDatas"></view-list>
      <home-title :title="homeTitle.footTitle"></home-title>
      <home-title :title="homeTitle.hotelTitle"></home-title>
      <home-title :title="homeTitle.massageTitle"></home-title>
      <home-title :title="homeTitle.ktvTitle"></home-title>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CategoryIcons from "./CategoryIcons/Index.vue";
import HomeTitle from "./Sub/HomeTitle.vue";
import ViewList from "./ViewList/Index.vue";
import { mapState } from "vuex";
import { IndexModel } from "models/index.js";

export default {
  name: "HomeScrollWrapper",
  components: {
    CategoryIcons,
    HomeTitle,
    ViewList
  },
  data() {
    return {
      homeTitle: {
        footTitle: "推荐美食",
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
    };
  },
  computed: {
    ...mapState(["cityId"]),
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.getHomeDatas(this.cityId);
  },
  methods: {
    getHomeDatas(cityId) {
      const indexModel = new IndexModel();
      indexModel.getHomeDatas(cityId).then((res) => {
        if (res && res.status === 0) {
          const { data } = res;
          this.homeDatas.foodDatas = data.foodDatas;
          this.homeDatas.hotelDatas = data.hotelDatas;
          this.homeDatas.ktvDatas = data.ktvDatas;
          this.homeDatas.massageDatas = data.massageDatas;
          this.homeDatas.viewDatas = data.viewDatas;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
