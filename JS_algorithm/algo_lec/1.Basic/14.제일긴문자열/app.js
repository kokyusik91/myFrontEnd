// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다. 각 문자열의 길이는 서로 다릅니다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const array = fs.readFileSync(filePath).toString().split('\n');

function solution(array) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (x of array) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
}
console.log(solution(array));
