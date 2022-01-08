// let matrix = [
//   [1, 19, 20, 8, 25],
//   [21, 4, 3, 17, 24],
//   [12, 5, 6, 16, 15],
//   [11, 18, 10, 9, 23],
//   [7, 13, 14, 22, 2],
// ];

let matrix = [
  [4, 2, 9],
  [1, 3, 5],
  [6, 8, 7],
];
let count = 0;
let newMatrix = [];
for (let i = 0; i < matrix.length; i++) {
  // newMatrix.push(matrix[i][0]);
  let array = [];
  for (let j = 0; j < matrix.length; j++) {
    array.push(matrix[j][i]);
  }
  newMatrix.push(array);
}

// 행에서의 중앙값 구하기
const findMidValue = (matrix) => {
  let midArray = [];
  for (let i = 0; i < matrix.length; i++) {
    midArray.push(matrix[i].sort((a, b) => a - b)[parseInt(matrix.length / 2)]);
  }
  return midArray;
};

for (let x of findMidValue(matrix)) {
  if (findMidValue(newMatrix).includes(x)) count++;
}
console.log(count);
