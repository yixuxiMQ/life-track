<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :dateTime="dateTime"></detail-open-date-time>
    <detail-recom :recom="recom"></detail-recom>
  </div>
</template>

<script>
import DetailName from "./Sub/Name.vue";
import DetailStars from "./Sub/Stars.vue";
import DetailAddress from "./Sub/Address.vue";
import DetailPrice from "./Sub/Price.vue";
import DetailOpenDateTime from "./Sub/OpenDateTime.vue";
import DetailRecom from "./Sub/Recom.vue";

export default {
  name: "DetailFood",
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: String,
    dateTime: String,
    recom: String,
  },
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailRecom,
  },
};
</script>

<style lang="scss" scoped></style>
