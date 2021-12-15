// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

// ▣ 입력예제 1 KoreaTimeGood
// ▣ 출력예제 1 3

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

// function solution(input) {
//   let answer = 0;
//   const lowers = input.toLowerCase();
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] !== lowers[i]) answer++;
//   }
//   return answer;
// }
// console.log(solution(input));

// function solution(input) {
//   let answer = 0;
//   for (let x of input) {
//     if (x === x.toUpperCase()) answer++;
//   }
//   return answer;
// }
// console.log(solution(input));

/* 아스키 코드 사용 */
function solution(input) {
  let answer = 0;
  for (let x of input) {
    let num = x.charCodeAt();
    /* 아스키 코드 가 65이상 90이하면 대문자 */
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}
console.log(solution(input));

/* 대문자 아스키 코드 숫자 */
/* A ~~ Z */
/* 65 ~~ 90 */

/* 소문자 아스키 코드 숫자 */
/* a ~~ z */
/* 97 ~~ 122 */
