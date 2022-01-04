function solution(price, money, count) {
  var answer;
  if (money - showmethemoney(price, count) >= 0) answer = 0;
  else answer = Math.abs(money - showmethemoney(price, count));
  return answer;
}

function showmethemoney(price, count) {
  let needMoney = 0;
  for (let i = 1; i <= count; i++) {
    needMoney += price * i;
  }
  return needMoney;
}
