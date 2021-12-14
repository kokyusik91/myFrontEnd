const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = parseInt(input[0]);
let array = input[1].split(' ').map((el) => Number(el));

// function solution(array) {
//   let answer = 0;
//   for (let x of array) {
//     if (x % 10 === N) answer += 1;
//   }
//   return answer;
// }
// console.log(solution(array));

// forEach문으로 풀기
function solution(array) {
  let answer = 0;
  array.forEach((el) => {
    if (el % 10 === N) answer += 1;
  });
  return answer;
}
console.log(solution(array));
