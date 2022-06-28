/**
 *
 * @param {number} numbers
 * @returns the sum of the two lowest positive numbers
 */
function sumTwoSmallestNums(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b; //i used the sort() method to sort numbers in asceding order
  });
  numbers = numbers.filter((x) => x > -1); // i use filter() method to leave only positive numbers
  numbers = numbers[0] + numbers[1];
  console.log(numbers);
}
sumTwoSmallestNums([19, 5, 42, 2, 77, -15]); //returns 7
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]); // returns 3453455
sumTwoSmallestNums([2, 9, 6, -1]); //returns 8
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]); //returns 563
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]); // 4519
