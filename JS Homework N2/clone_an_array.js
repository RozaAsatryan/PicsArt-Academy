/**
 *
 * @param {*} obj
 * @returns obj + clone of obj
 */
function clone(obj) {
  obj = [...obj, ...obj]; // in this case i used spread operator
  return obj;
}

console.log(clone([1, 1])); //returns [1, 1, 1, 1];

console.log(clone([1, 2, 3]));

console.log(clone(["x", "y"]));
