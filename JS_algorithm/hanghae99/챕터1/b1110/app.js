const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = parseInt(input[0]);
function solution(N) {
  let cnt = 0;
  let result = N;
  let sum = 0;
  // 반복문을 계속 돌린다.
  while (true) {
    sum = result / 10 + (result % 10);
    result = (result % 10) * 10 + sum;
    cnt++;
    if (N === result) {
      break;
    }
  }
  console.log(cnt);
}

solution(N);
