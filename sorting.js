function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

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

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
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

//Merge two sorted arrays
function mergeSort(arr1, arr2) {
  let newArr = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      newArr.push(arr1[pointer1]);
      pointer1++;
    } else {
      newArr.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < arr1.length) {
    newArr.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    newArr.push(arr2[pointer2]);
    pointer2++;
  }

  return newArr;
}

function quickSort(arr) {}

function heapSort(arr) {}

console.log(mergeSort([1, 5], [4, 6, 7, 10, 12]));
