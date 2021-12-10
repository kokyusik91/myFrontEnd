function solution(board, moves) {
  var answer = 0;
  // 바구니
  let stack = [];
  // 크레인의 실시간 위치 pos
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      // pos-1은 고정한 상태에서 i만(행) 이동
      // 0이 아니면 인형이 있음
      if (board[i][pos - 1] !== 0) {
        // 뽑은 인형 모양 = tmp
        let tmp = board[i][pos - 1];
        // 뽑았으니깐 그 위치를 0으로 만들어줌.
        board[i][pos - 1] = 0;
        // 뽑은 인형 모양과 바구니의 제일 마지막 인형의 모양이 같으면
        if (tmp == stack[stack.length - 1]) {
          // 바구니에 있는 인형제거
          stack.pop();
          answer += 2;
        } else {
          // 바구니에 인형 넣기
          stack.push(tmp);
        }
        // 각 열에서 인형은 한번뽑으면 끝냄.
        break;
      }
    }
  });
  return answer;
}
