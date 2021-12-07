const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let array = input.map((el) => Number(el));
let N = array[0];

function solution(N) {
  let count = 0;
  while (true) {
    if (N % 5 === 0) {
      console.log(N / 5 + count);
      break;
    }
    if (N < 0) {
      console.log(-1);
      break;
    }
    count++;
    N -= 3;
  }
}
solution(N);

// // let input = 11;

// // let count = 0;

// while (true) {
//   if (input % 5 === 0) {
//     console.log(input / 5 + count);
//     break;
//   }

//   if (0 > input) {
//     console.log(-1);
//     break;
//   }

//   count++;
//   input -= 3;
// }
