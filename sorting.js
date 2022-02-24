function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

//Repeatedly swaps the adjacent elements if they are in wrong order
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

//Repeatedly finds the minimum element from unsorted part and puts it at the beginning
function selectionSort(arr) {
  // One by one move boundary of unsorted subarray
  for (let i = 0; i < arr.length; i++) {
    // Find the minimum element in unsorted array
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    swap(arr, i, index);
  }

  return arr;
}

//Iterates through array, compares current element with previous
//If current element is smaller, compare to elements before
//Move greater elements one position up to make way
function insertionSort1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function insertionSort2(arr) {
  let ar = arr.slice();
  for (let i = 1; i < ar.length; i++) {
    for (let j = i; j > 0; j--) {
      if (ar[j] < ar[j - 1]) {
        const temp = ar[j];
        ar[j] = ar[j - 1];
        ar[j - 1] = temp;
      }
    }
  }
  return ar;
}

//Merge two sorted arrays
function mergeTwoSortedArrays(leftArr, rightArr) {
  let newArr = [];
  let leftPointer = 0;
  let rightPointer = 0;

  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    if (leftArr[leftPointer] < rightArr[rightPointer]) {
      newArr.push(leftArr[leftPointer]);
      leftPointer++;
    } else {
      newArr.push(rightArr[rightPointer]);
      rightPointer++;
    }
  }

  while (leftPointer < leftArr.length) {
    newArr.push(leftArr[leftPointer]);
    leftPointer++;
  }

  while (rightPointer < rightArr.length) {
    newArr.push(rightArr[rightPointer]);
    rightPointer++;
  }

  return newArr;
}

//Divides the input array into two halves, calls itself for the two halves,
//and then merges the two sorted halves using helper function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return mergeTwoSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
}

//Using pivot (last element in array), put pivot at its correct position in sorted array and put all smaller elements before pivot,
//and put all greater elements after x
function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// console.log(mergeTwoSortedArrays([1, 5], [4, 6, 7, 10, 12]));
console.log(insertionSort1([4, 1, 4, 7, 10, 2]));

console.log(quickSort([4, 1, 4, 7, 10, 2]));

console.log(mergeSort([4, 1, 4, 7, 10, 2]));
