function solution(participant, completion) {
  var answer = '';
  let part = participant.sort();
  let comp = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (part[i] !== comp[i]) return (answer = part[i]);
  }
}
