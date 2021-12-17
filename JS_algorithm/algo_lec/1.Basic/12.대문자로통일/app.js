// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

// ▣ 입력예제 1 KoreaTimeGood
// ▣ 출력예제 1 3

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

// function solution(input) {
//   let answer = input.toUpperCase();
//   return answer;
// }
// console.log(solution(input));

function solution(input) {
  let answer = '';
  for (let x of input) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    } else answer += x;
  }
  return answer;
}
console.log(solution(input));

// function solution(input) {
//   let answer = input.toUpperCase();
//   return answer;
// }
// console.log(solution(input));

/* 대문자 아스키 코드 숫자 */
/* A ~~ Z */
/* 65 ~~ 90 */

/* 소문자 아스키 코드 숫자 */
/* a ~~ z */
/* 97 ~~ 122 */
