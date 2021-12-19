const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const T = parseInt(input[0]);
const array = input[1].split(' ').map((el) => parseInt(el));

function solution(T, array) {
  let answer = [];
  for (let i = 0; i < T; i++) {
    answer.push(1);
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] < array[j]) answer[i]++;
      // console.log(array[i], array[j]);
    }
  }
  return answer;
}
console.log(solution(T, array));
