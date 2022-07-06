function mostExpensive(arr) {
  var maxValue = Object.entries(arr).sort((x, y) => y[1] - x[1])[0];
  maxValue = maxValue[0];
  console.log(`The most expensive one is the ${maxValue}`);
}
mostExpensive({ ave: 34, diamond: 56 });
 