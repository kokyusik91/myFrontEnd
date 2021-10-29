import React, { useState } from 'react';

const CounterHook = () => {
  const [number, setNumber] = useState(0);
  const plus = () => {
    setNumber(number + 1);
    setNumber(() => {
      setNumber(number + 1);
    });
    console.log('콘솔 안의 안', number);
  };
  console.log('콘솔 밖', number);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={plus}>+1</button>
    </>
  );
};

export default CounterHook;
