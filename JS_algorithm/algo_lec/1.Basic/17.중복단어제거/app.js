// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const array = [];
for (let i = 1; i < input.length; i++) {
  array.push(input[i]);
}

// function solution(array) {
//   let answer = '';
//   for (let i = 0; i < array.length; i++) {
//     if (i === array.indexOf(array[i])) console.log(array[i]);
//   }
//   return answer;
// }
// console.log(solution(array));

/* filter로 풀어보기 */
function solution(array) {
  let answer;
  answer = array.filter((el, i) => {
    return i === array.indexOf(el);
  });
  return answer;
}
console.log(solution(array));
