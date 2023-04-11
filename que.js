function solution(n, m, section) {
  let cnt = 0;
  let arr = new Array(n).fill(null);
  section.map((index) => (arr[index - 1] = 1));

  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      i = i + m - 1;
      cnt++;
    }
  }

  return cnt;
}

const n = 8;
const m = 4;
const section = [2, 3, 6];

console.log(solution(n, m, section));
