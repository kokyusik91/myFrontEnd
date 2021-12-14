// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let array = input.map((el) => Number(el));
let A = array[0];
let B = array[1];
let C = array[2];

function solution(A, B, C) {
  let answer = 'NO',
    max;
  let total = A + B + C;
  // 두 수중 최대값 찾기
  if (A > B) max = A;
  else max = B;
  if (max < C) max = C;
  // 세 수의 합에서 최대값을 빼면 나머지 두변의 합
  if (total - max > max) answer = 'Yes';
  return answer;
}
console.log(solution(A, B, C));
