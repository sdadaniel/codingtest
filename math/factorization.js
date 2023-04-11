// 소인수분해
// 정수 n이 주어졌을 때 소인수 분해로 될 수 있는 소수를 반환하시오

const getFactorization = (n) => {
  let temp = n;
  const out = [];
  while (temp % 2 === 0) {
    out.push(2);
  }

  for (let i = 3; i < n; i = i + 2) {
    if (n % i == 0) {
      out.push(i);
    }
  }

  return out;
};
module.exports = getFactorization;
