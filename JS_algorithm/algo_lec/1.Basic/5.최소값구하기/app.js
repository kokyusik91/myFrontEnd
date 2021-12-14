// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.// ▣ 입력예제 1 25
// ▣ 입력예제 1
// 5 3 7 11 2 15 17
// ▣ 출력예제 1 2

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let array = input.map((el) => Number(el));

function solution(array) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  answer = min;
  return answer;
}
console.log(solution(array));

// 방법 2
// function solution(array) {
//   let answer;
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (min > array[i]) min = array[i];
//   }
//   answer = min;
//   return answer;
// }
// console.log(solution(array));

// 방법 3 Math 객체사용
// function solution(array) {
//   let answer = Math.min(...array);
//   return answer;
// }
// console.log(solution(array));
