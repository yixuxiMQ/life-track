export default {
  formatJSON(array, keyword) {
    return array.filter((item) => {
      if (item[keyword]) {
        item[keyword] = item[keyword].split(",");
      }
      return item;
    });
  },

  jsonToArr(str) {
    return JSON.parse(str);
  },

  strToArr(str) {
    return str.split(",");
  },

  replaceToSpace(str) {
    return str.replace(/,/g, " ");
  },
};
