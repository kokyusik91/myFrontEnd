s = 'z';
n = 1;

function solution(s, n) {
  var answer = '';
  let array = s.split('');

  array = array.map((el) => {
    if (el === ' ') return ' ';
  });
  array = array.map((el) => String.fromCharCode(el));
  answer = array.join('');
  return answer;
}

console.log(solution(s, n));
