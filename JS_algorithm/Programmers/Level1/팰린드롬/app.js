function solution(n, m) {
  let count = 0;
  for (let i = n; i <= m; i++) {
    if (palinCheck(i)) count++;
  }
  return count;
}

const palinCheck = (a) => {
  const palindrome = parseInt(a.toString().split('').reverse().join(''));
  if (a === palindrome) return true;
};

console.log(solution(1, 100));
// console.log(palinCheck(92));
