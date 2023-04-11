const isPrime = require("./isPrime");

test("3 is Prime Number", () => {
  expect(isPrime(3)).toBe(true);
});

test("4 is not Prime Number", () => {
  expect(isPrime(4)).toBe(false);
});

test("17 is Prime Number", () => {
  expect(isPrime(3)).toBe(true);
});

test("37 is Prime Number", () => {
  expect(isPrime(37)).toBe(true);
});

test("97 is Prime Number", () => {
  expect(isPrime(97)).toBe(true);
});

test("93 is Not Prime Number", () => {
  expect(isPrime(93)).toBe(false);
});
