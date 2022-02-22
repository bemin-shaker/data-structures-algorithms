function binarySearch(sortedArr, value) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);
    if (sortedArr[middle] === value) {
      return middle;
    } else if (sortedArr[middle] < value) {
      left++;
    } else {
      right--;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 4, 6, 9, 14, 15], 15));
