// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
// ▣ 입력예제 1
// 12 77 38 41 53 92 85
// ▣ 출력예제 1 256
//            41

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let array = input.map((el) => Number(el));

function solution(array) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
      if (min > array[i]) min = array[i];
    }
  }
  answer = `${sum}\n${min}`;
  return answer;
}
console.log(solution(array));
