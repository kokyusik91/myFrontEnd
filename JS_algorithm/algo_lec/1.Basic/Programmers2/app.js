const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = parseInt(fs.readFileSync(filePath).toString());

function solution(input) {
  let answer = '';
  let sum = 0;
  let value = input;
  let rest = 0;
  while (true) {
    rest = value % 3;
    value = Math.floor(value / 3);
    answer += rest.toString();
    if (value === 0) {
      break;
    }
  }

  for (let i = 0; i < answer.length; i++) {
    sum += parseInt(answer[i]) * 3 ** (answer.length - i - 1);
  }

  return sum;
}

console.log(solution(input));
