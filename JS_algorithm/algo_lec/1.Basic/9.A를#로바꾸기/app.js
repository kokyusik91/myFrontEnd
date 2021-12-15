// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

// ▣ 입력예제 1 BANANA
// ▣ 출력예제 1 B#N#N#

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

// function solution(input) {
//   let answer = '';
//   for (let x of input) {
//     if (x === 'A') answer += '#';
//     else answer += x;
//   }
//   return answer;
// }
// console.log(solution(input));

/* replace 사용 하기 */
function solution(input) {
  /* 문자열 얕은 복사 */
  let answer = input;
  /* 첫번째 A를 만나면 #으로 바꾸어준다 정규식 */
  // input = input.replace(/A/, '#');
  answer = answer.replace(/A/g, '#');
  return answer;
}
console.log(solution(input));

/* replace 함수 */

/* String.prototype.replace() */
/* var newStr = str.replace(regexp|substr, newSubstr|function) */

/* replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다. 
그 패턴은 문자열이나 정규식(RegExp)이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에 대해서 호출된 함수일 수 있습니다. */

/* 🔥 pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않습니다. 🔥 */
