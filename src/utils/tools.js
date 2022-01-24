export default {
  formatJSON(array, keyword) {
    return array.filter((item) => {
      if (item[keyword]) {
        item[keyword] = item[keyword].split(",");
      }
      return item;
    });
  },
};
