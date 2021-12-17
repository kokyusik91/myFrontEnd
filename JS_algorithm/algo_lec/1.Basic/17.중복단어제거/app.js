// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const array = fs.readFileSync(filePath).toString().split('\n');
console.log(array);

// function solution(s) {
//   let answer = '';

//   return answer;
// }
// console.log(solution(s));
