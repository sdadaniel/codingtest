// 틱택토 에서 위너 판별하기

function tictacto(arr) {
  const lt = arr.length;
  let rowT;
  let colT;
  let diaT;

  for (i = 0; i < lt; i++) {
    for (j = 0; j < lt; j++) {
      if (!rowT) {
        rowT = arr[i][j];
      }

      if (rowT !== arr[i][j]) {
        rowT = null;
        break;
      }
    }
    if (rowT !== null) {
      return rowT;
    }
  }

  for (i = 0; i < lt; i++) {
    for (j = 0; j < lt; j++) {
      if (!colT) {
        colT = arr[j][i];
      }

      if (colT !== arr[j][i]) {
        colT = null;
        break;
      }
    }
    if (colT !== null) {
      return colT;
    }
  }

  for (i = 0; i < lt; i++) {
    if (!diaT) {
      diaT = arr[i][i];
    }
    if (diaT !== arr[i][i]) {
      diaT = null;
      break;
    }
    if (i === lt - 1) {
      return diaT;
    }
  }

  for (i = 0; i < lt; i++) {
    if (!diaT) {
      diaT = arr[lt - 1 - i][i];
    }
    if (diaT !== arr[lt - 1 - i][i]) {
      diaT = null;
      break;
    }
    if (i === lt - 1) {
      return diaT;
    }
  }

  return false;
}

const arr = [
  ["X", "O", "O"],
  ["O", "O", "-"],
  ["O", "-", "X"],
];

console.log(tictacto(arr));
