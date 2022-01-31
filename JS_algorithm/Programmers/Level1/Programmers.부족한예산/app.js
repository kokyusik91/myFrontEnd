price = 3;
money = 20;
count = 4;

function solution(price, money, count) {
  var answer;
  if (money - showmethemoney(price, count) >= 0) answer = 0;
  else answer = Math.abs(money - showmethemoney(price, count));
  return answer;
}

console.log(solution(price, money, count));

// 필요한 돈 계산하기
function showmethemoney(price, count) {
  let needMoney = 0;
  for (let i = 1; i <= count; i++) {
    needMoney += price * i;
  }
  return needMoney;
}
