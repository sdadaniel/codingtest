// 버블Sort 구현하기
// 재귀로 구현하기
function bubbleSortRecursive(arr) {
  loop(arr, 0);
  return arr;
  function loop(arr, startIndex) {
    if (startIndex === arr.length - 1) {
      return arr;
    } else {
      innerLoop(arr, startIndex);
      loop(arr, startIndex + 1);
    }
  }
  function innerLoop(arr, startIndex) {
    if (startIndex === arr.length - 1) {
      return;
    } else {
      if (arr[startIndex] > arr[startIndex + 1]) {
        swap(arr, startIndex, startIndex + 1);
        innerLoop(arr, startIndex + 1);
      }
    }
  }
}

// 버블Sort 구현하기
function bubbleSort(arr) {
  for (i = 0; i < words.length - 2; i++) {
    for (j = i; j < words.length - 2; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
function swap(arr, x, y) {
  const temp = arr[x];
  arr[y] = arr[x];
  arr[x] = temp;
  return arr;
}
const words = [3, 2, 6, 8];
console.log(bubbleSortRecursive(words));
