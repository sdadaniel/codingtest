// 오브젝트를 flat 시키시오

function flattenObject(obj) {
  const out = {};

  loop(obj);

  function loop(obj) {
    console.log(obj);
  }

  return out;
}
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
