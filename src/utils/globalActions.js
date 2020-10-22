export const getQueryParam = (param, location) => {
  location.search
    .substr(1)
    .split('&')
    .some(function (item) {
      // returns first occurence and stops
      return item.split('=')[0] === param && (param = item.split('=')[1]);
    });
  return param;
};
