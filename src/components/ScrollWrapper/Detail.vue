<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <Error v-if="errorShow"></Error>
      <div v-else>
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
          :commentKeyword="detailData.comment_keyword"
        ></detail-food>
        <detail-view
          v-if="field === 'view'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="detailData.default_price"
          :dateTime="detailData.open_datetime"
          :tip="detailData.tip"
          :introduce="detailData.intro"
          :ticketInfo="detailData.ticket_info"
        ></detail-view>
        <detail-hotel
          v-if="field === 'hotel'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="detailData.default_price"
          :service="detailData.service"
        ></detail-hotel>
        <detail-massage
          v-if="field === 'massage'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="detailData.default_price"
          :dateTime="detailData.open_datetime"
          :commentKeyword="detailData.comment_keyword"
          :service="detailData.service"
        ></detail-massage>
        <detail-ktv
          v-if="field === 'ktv'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="detailData.default_price"
          :service="detailData.service"
        ></detail-ktv>
      </div>
    </div>
  </div>
</template>

<script>
import DetailSwiper from "./Sub/Swiper.vue";
import DetailFood from "./Detail/Food.vue";
import DetailView from "./Detail/View.vue";
import DetailHotel from "./Detail/Hotel.vue";
import DetailMassage from "./Detail/Massage.vue";
import DetailKtv from "./Detail/Ktv.vue";
import Error from "./Sub/Error.vue";

import BetterScroll from "better-scroll";
import { DetailModel } from "models/detail.js";
import tools from "utils/tools.js";
export default {
  name: "DetailScrollWrapper",
  components: {
    DetailSwiper,
    DetailFood,
    DetailView,
    DetailHotel,
    DetailMassage,
    DetailKtv,
    Error,
  },
  data() {
    return {
      field: "",
      id: 0,
      detailData: {},
      errorShow: false,
      currentField: "",
      currentId: "",
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    this.getDetail(this.field, this.id);
  },
  activated() {
    this.currentField = this.$route.query.field;
    this.currentId = this.$route.query.id;
    if (this.currentField !== this.field || this.currentId !== this.id) {
      this.field = this.currentField;
      this.id = this.currentId;
      this.getDetail(this.field, this.id);
    }
  },
  methods: {
    getDetail(field, id) {
      const detailModel = new DetailModel();
      detailModel.getDetail(field, id).then((res) => {
        if (res && res.status === 0) {
          this.errorShow = false;
          const { data } = res;
          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.comment_keyword &&
            (data.comment_keyword = tools.strToArr(data.comment_keyword));
          data.recom && (data.recom = tools.replaceToSpace(data.recom));
          data.service && (data.service = tools.jsonToArr(data.service));

          this.detailData = data;
        } else {
          this.errorShow = true;
        }
      });
    },
  },
};
</script>

<style></style>
