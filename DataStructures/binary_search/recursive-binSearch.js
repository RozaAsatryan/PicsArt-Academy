function recBinSearch(arr, key, start = 0, end = arr.length - 1) {
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] < key) {
      return recBinSearch(arr, key, mid + 1, end);
    } else {
      return recBinSearch(arr, key, start, mid - 1);
    }
  }
  return -1;
}
