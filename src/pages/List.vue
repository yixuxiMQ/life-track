<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <Tab></Tab>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import { mapState } from "vuex";
import fieldDatas from "data/fields.js";

import CommonHeader from "components/Header/Common.vue";
import ListScrollWrapper from "components/ScrollWrapper/List.vue";
import Tab from "components/Tab/Index.vue";

export default {
  name: "ListPage",
  components: {
    CommonHeader,
    ListScrollWrapper,
    Tab
  },
  data() {
    return {
      // title: "列表",
    };
  },
  computed: {
    ...mapState(["field"]),
    title() {
      return (
        fieldDatas.filter((item) => item.field === this.field)[0].iconText +
        "列表"
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
