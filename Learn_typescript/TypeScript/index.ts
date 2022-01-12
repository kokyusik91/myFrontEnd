//타입도 변수로 지정할 수 있다.
type Name = string | number;

let 이름: string = '규식';
// 변수 타입에는 string과 number가 올 수 있습니다.
let 이름2: string | number = '대다네';
// 타입을 변수에 담아서 타입을 지정할 수 있다.
let 이름3: Name = '기태상 대다네';

// 이 변수에는 string이 담긴 배열만 올 수 있습니다.
let 어레이: string[] = ['kim', 'ko'];

let 옵젝트: { name: string } = { name: 'kim' };

// 함수의 타입지정
// 인자로는 무조건 number타입을 받고 리턴값도 number로 리턴한다.
function 함수(x: number): number {
  return x * 2;
}

// 객체 타입 지정
type Member = { name: string };
let john: Member = { name: 'ko' };

// object에 키값으로 등록할 애들이 너무 많으면,
type Member2 = { [key: string]: string };
let adam: Member2 = { name: 'ko', age: '123' };

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

//타입을 미리 지정하기 어려울때 (2개이상의 타입) union type이라고 한다.

let 회원들: (number | string)[] = [1, '2', 3];
// a라는 key를 가진 프로퍼티는 문자열, 숫자가 올 수 있다.
let 오브젝트: { a: string | number } = { a: '123' };
// 모든 타입의 변수 선언 가능 하지만 any를 쓰게되면 '타입스크립트'를 쓰는 의미가 없다. === 타입 쉴드 해제 문법
let 변수: any;

// any보다는 unknown이 좀 더 안전하다. (에러를 내준다.)
let 변수2: unknown;
변수 - 1;

let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
// 이런 개같은 경우가
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
