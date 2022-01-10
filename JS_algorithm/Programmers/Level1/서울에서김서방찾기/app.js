function solution(seoul) {
  var answer = '';
  let location;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] == 'Kim') {
      location = i;
    }
  }
  answer = '김서방은 ' + location + '에 있다';
  return answer;
}
