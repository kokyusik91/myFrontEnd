const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let array = input.map((el) => Number(el));

for (const item of array) {
  let cnt = 0;
  if (item === 0) {
    break;
  }
  for (let i = item + 1; i <= 2 * item; i++) {
    if (isPrime(i)) {
      cnt++;
    }
  }
  console.log(cnt);
}

function isPrime(num) {
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
}
