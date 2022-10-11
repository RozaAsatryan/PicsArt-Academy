function binSearch(arr,key) {
    let start = 0;
    let end = arr.length;
    while(start <= end) {
        let mid = Math.floor((end+start) / 2);
        if(arr[mid] === key) return mid;
        if(arr[mid] < key) {
            return start = mid + 1;
        } else {
            return end  = mid - 1;
        }
    }
    return -1;
}