// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// ▣ 입력예제 1 25
// ▣ 출력예제 1 3
// ▣ 입력예제 2 178
// ▣ 출력예제 2 15

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
let n = parseInt(input);

function solution(n) {
  let answer;
  if (n % 12 === 0) answer = n / 12;
  else answer = Math.floor(n / 12) + 1;
  return answer;
}
console.log(solution(n));

// 내장함수 Ceil 사용
// function solution(n) {
//   let answer;
//   answer = Math.ceil(n / 12);
//   return answer;
// }
// console.log(solution(n));

// Math 내장함수
// Math.floor() 버림
// Math.round() 반올림
// Math.ceil() 올림
// Math.sqrt() 제곱근
