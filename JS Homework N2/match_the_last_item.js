/**
 *
 * @param {*} obj
 * @returns if the last item matches the rest of the array concatenated together returns true, else returns false
 */

function matchLastItem(obj) {
  let lastItem = obj[obj.length - 1]; // takes the last element of the array obj
  obj.pop(); // remove the last element of the array obj
  let objJoin = obj.join(""); //join all elements of the array obj
  if (objJoin == lastItem) {
    return true;
  }
  return false;
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); // returns true

console.log(matchLastItem([1, 1, 1, "11"])); // returns false because the last item should be "111".

console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); // returns true
