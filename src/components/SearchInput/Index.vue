<template>
  <div class="search-input">
    <div class="input-wrapper">
      <span class="iconfont icon-header-search"></span>
      <input
        class="input"
        type="text"
        :placeholder="placeholder"
        v-model="keyword"
        @input="searchInput"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { SearchModel } from "models/search.js";
import tools from "utils/tools.js";

export default {
  name: "SearchInput",
  data() {
    return {
      keyword: "",
      placeholder: "美食 / 景点 / 酒店 / 按摩 / KTV",
    };
  },
  computed: {
    ...mapState(["cityId"]),
  },
  methods: {
    searchInput: tools.throttle(function () {
        const keyword = tools.trimSpace(this.keyword);
      if (keyword.length <= 0) {
        this.$emit("onSearch", {});
        return;
      }
      const searchModel = new SearchModel();
      searchModel.searchAction(keyword, this.cityId).then((res) => {
        this.$emit("onSearch", res);
      });
    }, 1000),
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  height: 0.44rem;
  padding: 0.06rem 0.15rem;
  background-color: #fff;
  box-sizing: border-box;

  .input-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .iconfont {
      position: absolute;
      top: 0.08rem;
      left: 0.08rem;
      font-size: 0.16rem;
    }

    .input {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 0.03rem;
      font-size: 0.14rem;
      text-indent: 0.32rem;
      box-sizing: border-box;
    }
  }
}
</style>
