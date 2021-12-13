import React from 'react';

function Welecome(props) {
  console.log(props);
  return <h1>Hello, {props.name}</h1>;
}

export default function Composition() {
  console.log('hello');
  return (
    <div>
      <Welecome name='kokyusik' />
      <Welecome name='Sara' />
      <Welecome name='병신' />
    </div>
  );
}
