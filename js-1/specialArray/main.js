let i = 0;

/**
 *
 * @param {number} arr
 * @returns true if an array is special, and false otherwise.
 */

function isSpecialArray(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 !== i % 2) {
      return false;
    }
    i++;
  }
  return true;
}

console.log(isSpecialArray([0, 5, 8, 1, 2, 1, 6, 3])); //return true
console.log(isSpecialArray([1, 3, 42, 98, 6, 21, 46, 333])); //return false

console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); // return false,
