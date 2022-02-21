<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <Error v-if="errorShow"></Error>
      <div v-else>
        <view-list v-if="field === 'view'" :viewList="listDatas[cityId]"></view-list>
        <food-list v-if="field === 'food'" :foodList="listDatas[cityId]"></food-list>
        <hotel-list
          v-if="field === 'hotel'"
          :hotelList="listDatas[cityId]"
        ></hotel-list>
        <massage-list
          v-if="field === 'massage'"
          :massageList="listDatas[cityId]"
        ></massage-list>
        <ktv-list v-if="field === 'ktv'" :ktvList="listDatas[cityId]"></ktv-list>
        <loading :loadingShow="loadingShow[cityId]"></loading>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ListModel } from "models/list.js";
import BetterScroll from "better-scroll";
import tools from "utils/tools.js";

import Error from "./Sub/Error.vue";
import ViewList from "./ViewList/Index.vue";
import FoodList from "./FoodList/Index.vue";
import HotelList from "./HotelList/Index.vue";
import MassageList from "./MassageList/Index.vue";
import KtvList from "./KtvList/Index.vue";
import Loading from "./Sub/Loading.vue";

export default {
  name: "ListScrollWrapper",
  components: {
    Error,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Loading,
  },
  data() {
    return {
      errorShow: false,
      loadingShow: true,
      listDatas: {},
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.getListDatas(this.cityId, this.field);
  },
  computed: {
    ...mapState(["cityId", "field"]),
  },
  methods: {
    getListDatas(cityId, field) {
      if (!this.listDatas[cityId]) {
        const listModel = new ListModel();
        this.loadingShow = true;
        listModel.getListDatas(cityId, field).then((res) => {
          if (res && res.status === 0) {
            this.errorShow = false;
            const data = tools.formatJSON(res.data, "keyword");
            setTimeout(() => {
              this.listDatas[cityId] = data;
              this.loadingShow = false;
            }, 500);
          } else {
            this.errorShow = true;
          }
        });
      }
    },
  },
  watch: {
    cityId() {
      this.getListDatas(this.cityId, this.field);
    },
  },
};
</script>

<style lang="scss" scoped></style>
