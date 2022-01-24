<template>
  <div class="massage-item">
    <router-link
      :to="{ path: '/detail', query: { field: 'massage', id: data.id } }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="massage-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <div class="star">
          <Stars :starNum="Number(data.star)"></Stars>
          <span class="score">{{ data.score }}分</span>
        </div>
        <div class="others">
          <span class="item"
            >￥ <span class="price">{{ data.default_price }}</span
            >元
          </span>
          <span class="item">
            <span class="area">{{ data.city_name }}</span>
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Sub/Stars.vue";
export default {
  name: "MassageListSub",
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

.massage-item {
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;

    .massage-img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.1rem 0.1rem 0 1.2rem;
    box-sizing: border-box;

    .title {
      @include ellipsis;
      font-size: 0.18rem;
      color: #000;
      line-height: 0.2rem;
    }

    .star {
      font-size: 0.14rem;
      line-height: 0.5rem;

      .score {
        color: $starColor;
      }
    }

    .others {
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      line-height: 0.35rem;

      .price {
        color: $defaultOrange;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
