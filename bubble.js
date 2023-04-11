function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    const temp = arr[i];

    while (arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }

  return arr;
}

const swap = (arr, n, m) => {
  const temp = arr[n];
  arr[n] = arr[m];
  arr[m] = temp;
};

const arr = [5, 3, 4, 19, 17, 1];
-2, 1, 15, -2, -16;
3, 14, -17, -14;
11, -31, 3 - 42, 34;

console.log(insertionSort(arr));
// console.log(solution(arr));
