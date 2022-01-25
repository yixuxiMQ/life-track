<template>
  <div class="hotel-item">
    <router-link
      :to="{ path: '/detail', query: { field: 'hotel', id: data.id } }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="hotel-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="score">{{ data.score }}分</p>
        <p class="area">{{ data.area }}</p>
        <div class="others">
          <span class="item">
            <span class="price">{{ data.default_price }}</span
            >起
          </span>
          <span class="item">{{ data.city_name }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HotelListSub",
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.hotel-item {
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;

    .hotel-img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    padding: 0.1rem 0.1rem 0 1.2rem;
    box-sizing: border-box;

    .title {
      @include ellipsis;
      font-size: 0.18rem;
      color: #000;
      line-height: 0.2rem;
    }

    .score {
      line-height: 0.3rem;
      font-size: 0.16rem;
      color: $starColor;
    }

    .area {
      @include ellipsis;
      color: #999;
      font-size: 0.14rem;
    }

    .others {
      display: flex;
      justify-content: space-between;
      margin-top: 0.1rem;
      line-height: 0.25rem;

      .item {
        font-size: 0.14rem;

        &:nth-child(1) {
          color: $defaultGreen;

          .price {
            font-size: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
