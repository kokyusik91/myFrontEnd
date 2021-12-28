function solution(numbers) {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = array.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  let sum2 = numbers.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  let answer = sum - sum2;
  return answer;
}
