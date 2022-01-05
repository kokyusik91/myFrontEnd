function solution(array, commands) {
  var array2 = [];
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    array2.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)
    );
  }
  for (let i = 0; i < array2.length; i++) {
    answer.push(array2[i][commands[i][2] - 1]);
  }

  return answer;
}
