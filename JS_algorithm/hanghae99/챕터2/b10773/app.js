/* 백준 용 */
// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((el) => +el);
const array = [];
for (let i = 1; i < input.length; i++) {
  array.push(input[i]);
}

console.log(array);

function solution(array) {
  let answer;
  let stack = [];

  for (let x of array) {
    if (x === 0) stack.pop();
    else stack.push(x);
  }

  answer = stack.reduce((a, b) => a + b, 0);
  console.log(answer);
}

/* 알고리즘 강의용 */
solution(array);

setTimeout(
  function (name) {
    var coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      function (name) {
        coffeeList += ',' + name;
        console.log(coffeeList);

        setTimeout(function (name) {
          coffeeList += ',' + name;
          console.log(coffeeList);

          setTimeout(function (name) {
            coffeeList += ',' + name;
            console.log(coffeeList);
          });
        });
      },
      500,
      '카페라떼'
    );
  },
  500,
  '카페모카'
);
