var div = document.querySelector('.container');
div.innerText = 'Webpack loaded!!아잉잉';

// 웹팩 데브 서버의 특징
// 1. 바로 저장하면 수정된다. => 저장 할때마다 컴파일링이 진행된다.
// 2. devserver 밑에 dist 폴더가 없음 하지만 network에서는 bundle.js를 이미 들고왔다.
// (어디서 가져옴? => 메모리상으로 저장되어 불러오게됨)
