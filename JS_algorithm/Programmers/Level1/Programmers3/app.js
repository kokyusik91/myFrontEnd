// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = parseInt(fs.readFileSync(filePath).toString());

let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];

function solution(n, lost, reserve) {
  let answer = 0;
  let Lost = lost.filter((a) => !reserve.includes(a)); //여벌이 없는데 체육복을 잃어버린 학생
  let Reserve = reserve.filter((a) => !lost.includes(a)); //
  console.log(Lost);
  console.log(Reserve);
  // let totalStudent = [];
  // let totalClothes = [];
  // //전체 학생 배열
  // for (let i = 1; i <= n; i++) {
  //   totalStudent.push(i);
  // }
  // //전체 체육복 보유 배열
  // totalClothes = totalStudent.map((el,i)=>{
  //   if(totalStudent.includes())
  // })
  return answer;
}

console.log(solution(n, lost, reserve));
