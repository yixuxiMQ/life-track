<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <detail-swiper :picDatas="detailData.pics"></detail-swiper>
      <detail-food
        v-if="field === 'food'"
        :name="detailData.name"
        :starNum="Number(detailData.star)"
        :score="detailData.score"
        :address="detailData.address"
        :price="detailData.default_price"
        :dateTime="detailData.open_datetime"
        :recom="detailData.recom"
      ></detail-food>
    </div>
  </div>
</template>

<script>
import DetailSwiper from "./Sub/Swiper.vue";
import DetailFood from "./Detail/Food.vue";

import BetterScroll from "better-scroll";
import { DetailModel } from "models/detail.js";
import tools from "utils/tools.js";
export default {
  name: "DetailScrollWrapper",
  components: {
    DetailSwiper,
    DetailFood,
  },
  data() {
    return {
      field: "",
      id: 0,
      detailData: {},
    };
  },

  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    this.getDetail(this.field, this.id);
  },
  methods: {
    getDetail(field, id) {
      const detailModel = new DetailModel();
      detailModel.getDetail(field, id).then((res) => {
        if (res && res.status === 0) {
          const { data } = res;
          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.comment_keyword &&
            (data.comment_keyword = tools.strToArr(data.comment_keyword));
          data.recom && (data.recom = tools.replaceToSpace(data.recom));
          data.service && (data.service = tools.jsonToArr(data.service));

          this.detailData = data;
        }
      });
    },
  },
};
</script>

<style></style>
