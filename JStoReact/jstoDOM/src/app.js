/* @jsx createElment */
// 목표 : 복잡한 DOM객체를 단순화한 객체로 만들고, 단순한 객체를 입력값으로 DOM의 객체를 만든다.

// 리액트 객체가 없다!!!!
import { createDOM, createElement, render } from './react';
// 이 객체를 받아서 DOM으로 변환 하는 함수

// 기본 골격
// const vdom = {
//   tag: 'p',
//   props: {},
//   children: [
//     { tag: 'h1', props: {}, children: ['React 만들기'] },
//     {
//       tag: 'ul',
//       props: {},
//       children: [
//         {
//           tag: 'li',
//           props: { style: 'color:red' },
//           children: ['첫번째 아이템'],
//         },
//         {
//           tag: 'li',
//           props: { style: 'color:blue' },
//           children: ['두번째 아이템'],
//         },
//         {
//           tag: 'li',
//           props: { style: 'color:green' },
//           children: ['세번째 아이템'],
//         },
//       ],
//     },
//   ],
// };

// const vdom = createElement(
//   'p',
//   {},
//   createElement('h1', {}, 'React 만들기'),
//   createElement(
//     'ul',
//     {},
//     createElement('li', { style: 'color:red' }, '첫 번째 아이템'),
//     createElement('li', { style: 'color:blue' }, '두 번째 아이템'),
//     createElement('li', { style: 'color:green' }, '세 번째 아이템')
//   )
// );

const vdom = (
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style='color:red'>첫 번째 아이템</li>
      <li style='color:blue'>두 번째 아이템</li>
      <li style='color:green'>세 번째 아이템</li>
    </ul>
  </p>
);

render(vdom, document.querySelector('#root'));
