var 이름 = '규식';
// 변수 타입에는 string과 number가 올 수 있습니다.
var 이름2 = '대다네';
// 타입을 변수에 담아서 타입을 지정할 수 있다.
var 이름3 = '기태상 대다네';
// 이 변수에는 string이 담긴 배열만 올 수 있습니다.
var 어레이 = ['kim', 'ko'];
var 옵젝트 = { name: 'kim' };
// 함수의 타입지정
// 인자로는 무조건 number타입을 받고 리턴값도 number로 리턴한다.
function 함수(x) {
  return x * 2;
}
var john = { name: 'ko' };
var adam = { name: 'ko', age: '123' };
var project = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};
//타입을 미리 지정하기 어려울때 (2개이상의 타입) union type이라고 한다. 유니온 타입은 새로운 타입이다
var 회원들 = [1, '2', 3];
// a라는 key를 가진 프로퍼티는 문자열, 숫자가 올 수 있다.
var 오브젝트 = { a: '123' };
// 모든 타입의 변수 선언 가능 하지만 any를 쓰게되면 '타입스크립트'를 쓰는 의미가 없다. === 타입 쉴드 해제 문법
var 변수;
// any보다는 unknown이 좀 더 안전하다. (에러를 내준다.)
var 변수2;
변수 - 1;
var user = 'kim';
var age = undefined;
var married = false;
// 이런 개같은 경우가
var 철수 = [user, age, married];
var 학교 = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
