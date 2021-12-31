function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  // 중복제거후 오름차순 정렬
  answer = [...new Set(answer)].sort((a, b) => a - b);
  return answer;
}
