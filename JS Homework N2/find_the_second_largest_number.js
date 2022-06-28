/**
 *
 * @param {number} arr
 * @returns the second largest number of the array
 */
function secondLargest(arr) {
  arr.sort(function (a, b) {
    // i used the sort() method to sort numbers in asceding or descending order
    return b - a; //in this case i sorted it in descenting order
  });
  console.log(arr[1]); //the number under the index 1 will be displayed in the console
}
secondLargest([10, 40, 30, 20, 50]); // the console will display 40
secondLargest([25, 143, 89, 13, 105]); // 105
secondLargest([54, 23, 11, 17, 10]); // 23
