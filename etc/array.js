// 배열이 주어졌을 때 모든 순열 출력하기
// 2가지로 풀어보기(큐,재귀)

// 큐
function solutionBFS(arr) {
  const queue = [[]]; // 초기 큐
  while (queue.length) {
    const curr = queue.shift(); // 큐에서 요소 추출
    if (curr.length === arr.length) {
      console.log(curr); // 순열 출력
    } else {
      for (let i = 0; i < arr.length; i++) {
        // 현재 요소가 curr에 없으면 새로운 순열을 만듦
        if (!curr.includes(arr[i])) {
          queue.push(curr.concat(arr[i]));
        }
      }
    }
  }
}
// 일반재귀
function solution(arr) {
  loop(arr, 0, arr.length - 1);

  function loop(arr, startIndex, endIndex) {
    if (startIndex === endIndex) {
      console.log(arr);
    } else {
      for (var i = startIndex; i < endIndex + 1; i++) {
        const newArr = swap(arr, startIndex, i);
        loop(newArr, startIndex + 1, endIndex);
      }
    }
  }

  function swap(arr, i, j) {
    if (i == j) {
      return arr;
    } else {
      const deepArray = arr.slice();
      const temp = deepArray[i];
      deepArray[i] = deepArray[j];
      deepArray[j] = temp;
      return deepArray;
    }
  }
}

const arr = [1, 2, 3];
solutionBFS(arr);
solution(arr);
