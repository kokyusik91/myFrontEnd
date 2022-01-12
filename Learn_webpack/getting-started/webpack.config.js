// node js문법인 require을 사용하여 path 라이브러리를 가져와 path라는 변수에 저장한다.
var path = require('path');

module.exports = {
  mode: 'none',
  // entry : 해당위치에 있는 자바스크립트 파일을 webpack을 돌려서
  entry: './src/index.js',
  // 결과물
  output: {
    filename: 'main.js',
    // 경로를 잡아주는 API
    path: path.resolve(__dirname, 'dist'),
  },
};
