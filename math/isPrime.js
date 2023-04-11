// 정수 n이 주어졌을 때 소수인지 확인하는 함수를 작성하시오

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) {
    return true;
  }

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
module.exports = isPrime;
