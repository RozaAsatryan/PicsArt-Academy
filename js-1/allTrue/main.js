/**
 *
 * @param {*} first
 * @param {*} second
 * @param {*} third
 * @param {*} fourth
 * @returns  true if all parameters are truthy, and false otherwise.
 */

function allTruthy(first, second, third, fourth) {
  if (first == true && second == true && third == true && fourth == true) {
    return true;
  }
  return false;
}

console.log(allTruthy(true, true, true, true)); //returns true
console.log(allTruthy(5, 4, 3, 2)); // returns false
