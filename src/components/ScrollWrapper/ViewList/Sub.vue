<template>
  <div class="view-item">
    <router-link
      :to="{ path: '/detail', query: { field: 'view', id: data.id } }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="view-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="others">
          <span class="price"
            >￥{{ data.default_price }}<span class="qi"> 起</span></span
          >
          <span class="clty-name">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Sub/Stars.vue";
export default {
  name: "ViewListSub",
  props: {
    data: Object,
  },
  components: {
    Stars,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.view-item {
  width: 50%;
  padding: 0.1rem;
  box-sizing: border-box;

  .img {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;

    .view-img {
      width: 100%;
      min-height: 1.1rem;
    }
  }

  .info {
    .title {
      @include ellipsis;
      height: 0.3rem;
      line-height: 0.3rem;
      color: #000;
      font-size: 0.16rem;
    }

    .stars {
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.14rem;

      .score {
        color: $starColor;
      }
    }

    .others {
      display: flex;
      justify-content: space-between;
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.14rem;

      .price {
        font-size: 0.2rem;
        color: $defaultGreen;
        vertical-align: -0.01rem;
        .qi {
          font-size: 0.14rem;
          color: #000;
        }
      }
    }
  }
}
</style>
