function sumOfArray(arr, length = arr.length) {
  if (Array.isArray(arr)) {
    if (length <= 0) return 0;
    if (length == 1) return arr[0];
    return sumOfArray(arr, length - 1) + arr[length - 1];
  }
  return "Please input the array";
}

console.log(sumOfArray([2, 3, 6, 7]));
