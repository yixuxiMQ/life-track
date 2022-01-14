<template>
  <div class="icon-item">
    <div
      class="icon"
      :style="{ backgroundColor: bgColor }"
      @click="onRouteTo(field)"
    >
      <!-- <span class="iconfont" :class="icon"></span> -->
      <span :class="['iconfont', icon]"></span>
    </div>
    <p class="icon-text">{{ iconText }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CategoryrIconSub",
  props: {
    field: String,
    bgColor: String,
    icon: String,
    iconText: {
      type: String,
      default() {
        return "分类";
      },
    },
  },
  methods: {
    ...mapMutations(["selectField"]),
    onRouteTo(field) {
      this.selectField(field);
      this.$router.push("/list");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/mixins.scss";
@import "styles/variables.scss";

.icon-item {
  @include flex-column;
  @include vh-center;
  width: 20%;
  padding: 0.2rem 0;
  .icon {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    @include vh-center;

    .iconfont {
      color: #fff;
      font-size: .26rem;
    }
  }

  .icon-text{
    font-size: .14rem;
    margin-top: .1rem;
    text-align: center;
  }
}
</style>
