// 목표 : 복잡한 DOM객체를 단순화한 객체로 만들고, 단순한 객체를 입력값으로 DOM의 객체를 만든다.

// 이 객체를 받아서 DOM으로 변환 하는 함수
function createDOM(node) {
  //DOM을 만드는 기능을
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);
  node.children.map(createDOM).forEach(element.appendChild.bind(element));
  return element;
}

// 기본 골격
const vdom = {
  tag: 'p',
  props: {},
  children: [
    { tag: 'h1', props: {}, children: ['React 만들기'] },
    {
      tag: 'ul',
      props: {},
      children: [
        { tag: 'li', props: {}, children: ['첫번째 아이템'] },
        { tag: 'li', props: {}, children: ['두번째 아이템'] },
        { tag: 'li', props: {}, children: ['세번째 아이템'] },
      ],
    },
  ],
};

createDOM(vdom);
// vdom을 입력으로 받고 element를 반환하는 함수 실행
document.querySelector('#root').appendChild(createDOM(vdom));
