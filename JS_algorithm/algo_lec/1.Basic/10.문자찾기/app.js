// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
//문자열의 길이는 100을 넘지 않습니다.

// ▣ 입력예제 1 COMPUTERPROGRAMMING R
// ▣ 출력예제 1 3

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
let s = input[0];
let letter = input[1];

// function solution(s, letter) {
//   let answer = 0;
//   for (let x of s) {
//     if (x === letter) {
//       answer++;
//     }
//   }
//   return answer;
// }
// console.log(solution(s, letter));

/* 또 다른 방법 split사용*/
function solution(s, letter) {
  /* 해당 문자로 문자열을 쪼개면  [ 'COMPUTE', 'P', 'OG', 'AMMING' ] 
  배열의 길이에서 -1 해준다 */
  let answer = s.split(letter).length;
  return answer - 1;
}
console.log(solution(s, letter));
