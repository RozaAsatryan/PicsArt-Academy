function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let key = nums[i];
    while (nums[j] > key && j >= 0) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
}
