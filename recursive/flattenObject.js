// 오브젝트를 flat 시키시오
// 재귀문 사용하기

function flattenObject(obj) {
  const out = {};

  loop(obj, "");
  console.log(out);

  function loop(obj, name) {
    if (Object.prototype.toString.call(obj) !== "[object Object]") {
      return (out[name] = obj);
    } else {
      for (key in obj) {
        loop(obj[key], name === "" ? key : name + "." + key);
      }
    }
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
