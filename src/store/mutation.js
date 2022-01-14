export default {
  selectCity(state, cityInfo) {
    state.cityName = cityInfo.cityName;
    state.cityId = cityInfo.cityId;

    try {
      localStorage.cityInfo = JSON.stringify(state);
    } catch (error) {
      console.log(error.message);
    }
  },

  selectField(state, field) {
    state.field = field;

    try {
      localStorage.cityInfo = JSON.stringify(state);
    } catch (error) {
      console.log(error.message);
    }
  },
};
