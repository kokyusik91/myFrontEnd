const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((el) => Number(el));

/* 배열의 합을 구하는 함수 */
const arraySum = (array) => {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
};

function solution(input) {
  let answer = input;
  const fakeTwoSum = arraySum(input) - 100;
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === fakeTwoSum) {
        /* i부터 지우게 되면 j가 당겨져서 다른게 지워지므로 j를 먼저 지운다. */
        input.splice(j, 1);
        input.splice(i, 1);
      }
    }
  }

  return answer;
}
console.log(solution(input));
