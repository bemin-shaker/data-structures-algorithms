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

function quickSort(arr) {}
function mergeSort(arr) {}
function heapSort(arr) {}

module.exports = {
  swap,
  bubbleSort,
  selectionSort,
  quickSort,
  mergeSort,
  heapSort,
};
