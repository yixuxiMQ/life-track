<template>
  <div class="service-wrapper">
    <detail-title icon="icon-service" title="商家服务"></detail-title>
    <div class="service">
      <p>停车场: {{ service && service.parking ? "有" : "无" }}</p>
      <p>WIFI: {{ service && service.wifi ? "有" : "无" }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title.vue";

export default {
  name: "DetailService",
  components: {
    DetailTitle,
  },
  props: {
    service: {
      type: Object,
      default() {
        return {
          parking: "无",
          wifi: "无",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";

.service-wrapper {
  @include flex-column;
  margin-top: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .service {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    box-sizing: border-box;
  }
}
</style>
