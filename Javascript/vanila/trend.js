// 1. 함수의 변화 과정
//

// 가변인자가 없다.
function myFunction1(a, b) {
  arguments.length; // 2
}

// 첫번째 인자, 두번째 인자, 가변 인자
// 누가 봐도 3개를 줘도되고, 안줘도 되고
// 훨씬 선명한 표현
function myFunction2(a, b, ...args) {
  arguments.length; // 1
}

// a값을 주지 않으면 true로 설정이 되고, b를 안주면 2가된다.
// 함수만 봐도 알 수 있다.
// default 값을 줄 수 있다.
function myFunction3(a = true, b = 2, ...args) {}

// 그냥 시그니처만 봐도 굉장히 확장되었다.
// 표현력이 점점 좋아 지고있다. 명시적으로 변경되고 있다.
function myFunction4(a = false, { auto, async = false }) {}

// 2. 객체의 변화 과정

//ex) 2개의 객체를 merge하는 연산

// 레거시 버전
for (var attName in SourceObject) {
  targetObject[attName] = SourceObject[attName];
}

// Object Assign
// 메소드를 이용한 것.
// 단점 : Object.assign을 학습해야함. 표현력이 떨어짐
targetObject = Object.assign({}, sourceObj, obj2, obj3);

// 스프레드 연산자.
// x는 새로운 오프젝트로 할당됨.
x = { ...sourceObj, ...targetObject };

// 배열을 합침
// 단점 : 학습해야함. 표현력이 따라짐
t = targetArr.concat(sourceArray);
// 스프레드 연산자.
t = [...targetArr, '1', 2, ...sourceArray];

// 3. 클래스

function Person() {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const person = new Person('김민태');
person.getName();

// 클래스로 변경
// 명시적으로 변경되었다.
class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}
Person.#name;

// 비동기
asyncTask(function (error, response) {});

// Promise
// 단점 : error처리 callback을 해결했긴 했지만...
function Task() {
  return new Promise((resolve, reject) => {
    // 비동기 작업이 완료 됬을때 resolve로 데이터 넘겨줌
    resolve('answer');
  });
}
// p는 프로미스 객체
const p = Task();

p.then((data) => {
  console.log(data);
});

// async await
// 전역 await는 지원 하지 않기때문에 async로 감싸줘야함
// 표현력이 좋아짐, 인간이 이해하기 쉬운
async function task() {
  const resp = await Task();
  console.log(resp);
}
task();

// try catch
async function task() {
  try {
    const resp = await Task();
  } catch (e) {
    console.error(e);
  }
  console.log(resp);
}

// 왜 타입스크립트인가?
// 타입 때문에
// 명시적으로 쓰기 위해서 정적 타입을 쓰기로 했다.
// 훨씬 안정적이고, 유지 보수도 쉽다.
// 리스크를 줄 일 수 있다.
