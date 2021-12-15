const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let T = Number(input[0]);
let array = [];
for (let i = 1; i < input.length; i++) {
  array.push(input[i]);
}

/* push 1 명령어가 들어갔을때 push할 정수를 반환 */
const num = (s) => {
  /* push 1 문자열이 들어오면 쪼개서 ['push','1'] 1번째 인덱스 반환 */
  return Number(s.split(' ')[1]);
};

function solution(array) {
  let stack = [];
  for (let x of array) {
    /* push를 만나면 정수를 스택에 추가 */
    if (x.includes('push')) {
      stack.push(num(x));
      /* pop을 만나면 pop할 수를 출력하고 pop */
    } else if (x === 'pop') {
      if (stack.length === 0) console.log(-1);
      else {
        // 콘솔만 찍었는데 pop이 된다?!
        console.log(stack.pop());
      }
      /* size를 만나면 스택에 들어있는 정수의 갯수 출력 */
    } else if (x === 'size') {
      console.log(stack.length);
      /* empty를 만나면 스택이 비어있으면 1, 아니면 0을 출력한다. */
    } else if (x === 'empty') {
      if (stack.length === 0) console.log(1);
      else console.log(0);
      /* top을 만나면 스택의 가장 위에 있는 정수를 출력한다. 정수가 없으면 -1을 출력한다. */
    } else if (x === 'top') {
      if (stack.length === 0) console.log(-1);
      else console.log(stack[stack.length - 1]);
    }
  }
}

solution(array);
