const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let array = input.map((el) => parseInt(el));
let goUp = array[0];
let fallDown = array[1];
let totalDistance = array[2];

// let day = 0;
// let oneDayDis = 0;
// while (true) {
//   oneDayDis += goUp;
//   day += 0.5;
//   if (oneDayDis === totalDistance || oneDayDis >= totalDistance) {
//     break;
//   }
//   oneDayDis -= fallDown;
//   day += 0.5;
//   if (oneDayDis === totalDistance || oneDayDis >= totalDistance) {
//     break;
//   }
// }
// console.log(Math.ceil(day));

let result = (totalDistance - fallDown) / (goUp - fallDown);
console.log(Math.ceil(result));
