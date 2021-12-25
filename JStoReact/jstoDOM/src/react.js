export function createDOM(node) {
  //DOM을 만드는 기능을
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const element = document.createElement(node.tag);
  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );
  node.children.map(createDOM).forEach(element.appendChild.bind(element));
  return element;
}
// children은 가변인자가 될테고
export function createElement(tag, props, ...children) {
  // tag, props,children 를 반환하는 객체
  props = props || {};
  return {
    tag,
    props,
    children,
  };
}

// vdom을 입력으로 받고 element를 반환하는 함수 실행
export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}
