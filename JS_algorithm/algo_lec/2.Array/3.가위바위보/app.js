const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const T = input[0];
const arrayA = input[1].split(' ').map((el) => parseInt(el));
const arrayB = input[2].split(' ').map((el) => parseInt(el));

function solution(arrayA, arrayB) {
  let answer = [];
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] === 1 && arrayB[i] === 3) answer.push('A');
    else if (arrayA[i] === 2 && arrayB[i] === 1) answer.push('A');
    else if (arrayA[i] === 3 && arrayB[i] === 2) answer.push('A');
    else if (arrayA[i] === 3 && arrayB[i] === 1) answer.push('B');
    else if (arrayA[i] === 1 && arrayB[i] === 2) answer.push('B');
    else if (arrayA[i] === 2 && arrayB[i] === 3) answer.push('B');
    else answer.push('D');
  }
  return answer;
}
console.log(solution(arrayA, arrayB));
