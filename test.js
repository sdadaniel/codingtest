function solution(s) {
  let count = 0;
  let repeat = 0;

  let mainletter;

  s.split("").map((letter) => {
    if (count === 0) {
      count++;
      mainletter = letter;
      repeat++;
    } else {
      letter === mainletter ? repeat++ : repeat--;
      if (repeat === 0) {
        count++;
        str = "";
      }
    }
  });
  // const alpha = str.length > 0 ? 1 : 0;
  return count;
}

const s = "banana";
// const new_id = "##as123";

console.log(solution(s));
