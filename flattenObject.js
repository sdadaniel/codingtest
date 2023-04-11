function flattenObject(obj) {}
const obj = {
  key1: 1,
  key2: {
    a: 1,
    b: 1,
    c: {
      d: 3,
      e: 1,
    },
  },
};

flattenObject(obj);
