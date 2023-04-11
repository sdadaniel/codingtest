// 소인수분해
// 정수 n이 주어졌을 때 소인수 분해로 될 수 있는 소수를 반환하시오

const getFactorization = require("./factorization");

test("10을 소인수분해 했을 때", () => {
  expect(getFactorization(10)).toEqueal([2, 5]);
});
