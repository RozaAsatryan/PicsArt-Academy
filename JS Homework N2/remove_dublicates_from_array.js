/**
 *
 * @param {*} obj
 * @returns a new array in the same sequential order as the old array (minus duplicates).
 */
function removeDups(obj) {
  let remDubObj = [];
  let i = 0;
  while (i < obj.length) {
    if (!remDubObj.includes(obj[i])) {
      remDubObj.push(obj[i]);
    }
    i++;
  }
  return remDubObj;
}

console.log(removeDups([1, 0, 1, 0])); //returns [1, 0]

console.log(removeDups(["The", "big", "cat"])); //returns ["The", "big", "cat"]

console.log(removeDups(["John", "Taylor", "John"])); //returns ["John", "Taylor"]
