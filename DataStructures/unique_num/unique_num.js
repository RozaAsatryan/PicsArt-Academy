function string_to_number(str) {
  str = btoa(str);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i);
  }
  return +result;
}

console.log(string_to_number("Anna"));
