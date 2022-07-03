function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(red, green , blue) {
    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
  }
  
  console.log(rgbToHex(0, 51, 255));