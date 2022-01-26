<template>
  <div class="swiper-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of picDatas" :key="index">
        <img :src="item" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "DetailSwiper",
  props: {
    picDatas: Array,
  },
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";

.swiper-wrapper {
  & /deep/ .swiper-pagination-bullet-active {
    background-color: $defaultGreen;
  }
}
.swiper-slide {
  height: 2rem;
}

.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
