const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const T = input[0];
const array = input[1].split(' ').map((el) => parseInt(el));

function solution(array) {
  let answer = 0;
  let count = 0;
  for (let x of array) {
    if (x === 1) {
      count++;
    } else count = 0;
    answer += count;
  }

  return answer;
}
console.log(solution(array));
