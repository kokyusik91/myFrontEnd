// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다. 각 문자열의 길이는 서로 다릅니다.
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(filePath).toString();

/* 기존 방법 */
function solution(s) {
  let answer;
  if (s.length % 2 === 1) answer = s[Math.floor(s.length / 2)];
  else if (s.length % 2 === 0)
    answer = s[Math.floor(s.length / 2)] + s[Math.floor(s.length / 2 - 1)];
  return answer;
}
console.log(solution(s));

/* 신규 방법 */
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid);
  else if (s.length % 2 === 0)
    answer = s[Math.floor(s.length / 2)] + s[Math.floor(s.length / 2 - 1)];
  return answer;
}
console.log(solution(s));

/* substring 사용 */
/* substr 제거 */
