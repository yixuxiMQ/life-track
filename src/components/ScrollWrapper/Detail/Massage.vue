<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :dateTime="dateTime"></detail-open-date-time>
    <detail-comment-keyword
      :commentKeyword="commentKeyword"
    ></detail-comment-keyword>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script>
import DetailName from "./Sub/Name.vue";
import DetailStars from "./Sub/Stars.vue";
import DetailAddress from "./Sub/Address.vue";
import DetailPrice from "./Sub/Price.vue";
import DetailOpenDateTime from "./Sub/OpenDateTime.vue";
import DetailCommentKeyword from "./Sub/CommentKeyWord.vue";
import DetailService from "./Sub/Service.vue";

export default {
  name: "DetailMassage",
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: String,
    dateTime: String,
    commentKeyword: Array,
    service: Object,
  },
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailCommentKeyword,
    DetailService,
  },
};
</script>

<style lang="scss" scoped></style>
