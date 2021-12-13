import React from 'react';

export default function List() {
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <ul>
  //     {numbers.map((item) => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </ul>
  // );

  const todos = [
    { id: 1, text: 'Drink Water' },
    { id: 2, text: 'Wash car' },
    { id: 3, text: 'Listen Lecture' },
    { id: 4, text: 'Go to Bed' },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  // key값은 리액트가 고유로 판별하는 값이기때문에 props로 key를 넘기면 못받는다.
  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);
  return <>{todoList}</>;
}
