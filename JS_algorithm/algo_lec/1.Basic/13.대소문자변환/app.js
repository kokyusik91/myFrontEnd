// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로
// 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(filePath).toString();

/* 아스키 코드 사용 */
function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      answer += x.toLowerCase();
    } else if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
      answer += x.toUpperCase();
    }
  }
  return answer;
}
console.log(solution(s));

/* 대문자 아스키 코드 숫자 */
/* A ~~ Z */
/* 65 ~~ 90 */

/* 소문자 아스키 코드 숫자 */
/* a ~~ z */
/* 97 ~~ 122 */
