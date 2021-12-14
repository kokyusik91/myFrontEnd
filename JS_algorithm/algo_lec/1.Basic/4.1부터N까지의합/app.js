//자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
// ▣ 입력예제 1 6
// ▣ 출력예제 1 21
// ▣ 입력예제 2 10
// ▣ 출력예제 2 55

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
let n = parseInt(input);

function solution(n) {
  let answer = (n * (1 + n)) / 2;
  return answer;
}
console.log(solution(n));

// 반복문 사용 O(n)
// function solution(n) {
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     answer += i;
//   }
//   return answer;
// }
// console.log(solution(n));
