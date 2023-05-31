function solution(s) {
  let count = 0;
  let zeros = 0;
  loop(s);

  function loop(s) {
    if (s === "1") {
      return;
    } else {
      count++;
      const zLength = s.length - s.replaceAll("0", "").length;
      zeros += zLength;
      loop(parseInt(s.length - zLength).toString(2));
    }
  }
  return [count, zeros];
}

const s = "01110";
console.log(solution(s));
