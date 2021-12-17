const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();
let array = input.split(' ');
let answer = '';
let array2 = [];
array = array.forEach((el, i) => {
  let s = '';
  for (let j = 0; j < el.length; j++) {
    /* 각 짝수번째 대문자 */
    if (j % 2 === 0) {
      s += el[j].toUpperCase();
    } else if (j % 2 === 1) {
      s += el[j].toLowerCase();
    }
  }
  array2.push(s);
});

console.log(array2.join(' '));
