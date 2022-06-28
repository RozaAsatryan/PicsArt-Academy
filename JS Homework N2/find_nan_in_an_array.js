/**
 *
 * @param {number, NaN} obj
 * @returns the index where NaN is found
 */

function findNaN(obj) {
  obj = obj.findIndex(Number.isNaN); // i use findIndex() method to find out the index of NaN in the obj array
  console.log(obj);
}

findNaN([1, 2, NaN]); // returns 2
findNaN([NaN, 1, 2, 3, 4]); // returns 0
findNaN([0, 1, 2, 3, 4]); //returns -1
