const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];

const out = matrix[0].map((_, col_index) =>
  matrix.map((row) => row[col_index])
);
console.log(out);

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]

// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ]

//
