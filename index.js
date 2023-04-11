function findOnlyOnceHelper(arr) {
  return findOnlyOnce(arr, 0, arr.length);
}
function findOnlyOnce(arr, low, high) {
  if (low > high) {
    return null;
  }

  if (low == high) {
    return arr[low];
  }
  const mid = Math.floor((high + low) / 2);
  if (mid % 2 === 0) {
    if (arr[mid] === arr[mid + 1]) {
      return findOnlyOnce(arr, mid + 2, high);
    } else {
      return findOnlyOnce(arr, low, mid);
    }
  } else {
    if (arr[mid] === arr[mid - 1]) {
      return findOnlyOnce(arr, mid + 1, high);
    } else {
      return findOnlyOnce(arr, low, mid - 1);
    }
  }
}

// 1 0 -1 0

const arr = [1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8];
// solution(10);
console.log(findOnlyOnceHelper(arr));
