<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common.vue'
export default {
  name: 'SearchPage',
  components: {
    CommonHeader
  },
  data () {
    return {
      title: '搜索页面'
    }
  }
};
</script>

<style lang="scss" scoped></style>
