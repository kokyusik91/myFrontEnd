import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function LifeCycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default LifeCycle;
