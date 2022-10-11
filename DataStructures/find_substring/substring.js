function subStr(str, substr) {
  for (var i = 0; i < str.length; i++) {
    var match = true;
    for (var j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

console.log(subStr("hello", "llo"));

// Second version of this function
function subStr(str, substr) {
  for (let i = 0; i < str.length; i++) {
    let sliceStr = str.slice(i, i + substr.length);
    if (sliceStr === substr) {
      return i;
    }
  }
  return -1;
}

console.log(substr("hello", "llo"));
