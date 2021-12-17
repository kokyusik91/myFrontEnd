const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(filePath).toString();

/* 신규 방법 */
// function solution(s) {
//   let answer = '';
//   for (let i = 0; i < s.length; i++) {
//     if (i === s.indexOf(s[i])) answer += s[i];
//   }
//   return answer;
// }
// console.log(solution(s));

/* 중복된 문자 갯수 찾기 */
function solution(s) {
  let answer = '';
  let pos = s.indexOf('k');
  while (pos !== -1) {
    answer++;
    pos = s.indexOf('k', pos + 1);
  }
  return answer;
}
console.log(solution(s));

/* Array.prototype.indexOf() */

/* While */
// 조건문이 참일 때만 while문 속의 문장들이 실행된다.
