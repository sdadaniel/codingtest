// 문자 배열이 주어졌을 때 순서를 반대로 바꿔도 동일한 문자열인지 체크하는 함수 만들기
// 재귀문 사용하기

function reverseSame(words) {
  return words.map((word) => {
    const value = loop(word, 0, word.length - 1);
    return value;
  });

  function loop(word, sIndex, endIndex) {
    if (endIndex === sIndex) {
      return true;
    }
    if (word[sIndex] !== word[endIndex]) {
      return false;
    } else {
      return loop(word, sIndex + 1, endIndex - 1);
    }
  }
}
const words = ["aaa", "bbc", "a"];

console.log(reverseSame(words));
