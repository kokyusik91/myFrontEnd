function solution(n) {
  let answer = '';
  let sum = 0;
  let value = n;
  let rest = 0;
  /* 3진법으로 전환되서 뒤집혀서 만들어짐 */
  while (true) {
    rest = value % 3;
    value = Math.floor(value / 3);
    answer += rest.toString();
    if (value === 0) {
      break;
    }
  }

  /* 10진법 */
  for (let i = 0; i < answer.length; i++) {
    sum += parseInt(answer[i]) * 3 ** (answer.length - i - 1);
  }
  return sum;
}
