<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "一线生活通",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper {
  text-align: center;
  background-color: orange;
  h1 {
    color: rgb(13, 46, 47);
  }
}
</style>
