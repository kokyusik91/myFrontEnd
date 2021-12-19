// N(1<=N<=100)개의 정수를 입력받아,
// 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let T = input[0];
let array = input[1].split(' ').map((el) => parseInt(el));

function solution(array) {
  let answer = [];
  answer.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) answer.push(array[i]);
  }
  return answer;
}
console.log(solution(array));
