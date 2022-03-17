import React from 'react';
import { Counter } from './Counter';
// time
function Usage() {
  const handleChangeCounter = (count) => {};

  return (
    <Counter onChange={handleChangeCounter}>
      <Counter.Decrement icon='minus' />
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={10} />
      {/* 카운터 */}

      <Counter.Increment icon='plus' />
    </Counter>
  );
}

export { Usage };
