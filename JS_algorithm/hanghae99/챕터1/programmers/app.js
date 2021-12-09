const m = 'ABCDEFG';
const musicinfos = ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'];
solution(m, musicinfos);

function solution(m, musicinfos) {
  const memory = m;
  const realSong = [];
  for (let musicinfo of musicinfos) {
    const music = musicinfo.split(',');
    let musicStart = music[0];
    let musicEnd = music[1];
    const musicTitle = music[2];
    const musicNote = music[3];
    // 음악이 재생된 시간을 구한다.
    // 1. 음악 시작 시간을 분으로 바꾼다.
    const musicStartArray = musicStart.split(':').map((el) => parseInt(el));
    musicStart = musicStartArray[0] * 60 + musicStartArray[1];
    // 2. 음악 끝 시간을 분으로 바꾼다.
    const musicEndArray = musicEnd.split(':').map((el) => parseInt(el));
    musicEnd = musicEndArray[0] * 60 + musicEndArray[1];
    // 3. 음악 재생 시간을 구한다.
    const timeSpend = musicEnd - musicStart;
    let musicText = '';
    // 음악이 재생된 시간보다 악보의 길이가 길거나 같으면
    if (timeSpend <= musicNote.length) {
      for (let i = 0; i < timeSpend; i++) {
        musicText += musicNote[i];
      }
      // 음악이 재생된 시간보다 악보의 짧으면
    } else {
      musicText =
        musicNote.repeat(timeSpend / musicNote.length) +
        musicNote.substring(0, timeSpend % musicNote.length);
    }
    realSong.push(musicText);
  }
  console.log(realSong);
  // return answer;
}
