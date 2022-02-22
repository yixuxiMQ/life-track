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

  trimSpace(str) {
    return str.replace(/\s+/, "");
  },

  throttle(fn, delay) {
    var t = null,
      begin = new Date().getTime();

    return function () {
      var _self = this,
        args = arguments,
        cur = new Date().getTime();

      clearTimeout(t);

      if (cur - begin >= delay) {
        fn.apply(_self, args);
        begin = cur;
      } else {
        t = setTimeout(function () {
          fn.apply(_self, args);
        }, delay);
      }
    };
  },
};
