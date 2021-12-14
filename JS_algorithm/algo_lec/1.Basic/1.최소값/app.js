// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)
// ▣ 입력예제 1 6 7 11
// ▣ 출력예제 1 YES
// ▣ 입력예제 1 13 33 17
// ▣ 출력예제 1 NO

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let array = input.map((el) => Number(el));
let A = array[0];
let B = array[1];
let C = array[2];

function solution(A, B, C) {
  let answer;
  if (A < B) answer = A;
  else answer = B;
  if (answer > C) answer = C;
  return answer;
}
console.log(solution(A, B, C));
