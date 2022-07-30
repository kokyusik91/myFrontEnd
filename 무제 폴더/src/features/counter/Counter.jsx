import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  fetchIncrement,
} from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };

  const handleIncreaseAmount = () => {
    dispatch(incrementByAmount(5));
  };

  const handleFetch = () => {
    dispatch(fetchIncrement(count));
  };

  return (
    <div>
      <div>
        <button onClick={handleIncrease}>increment</button>
        <button onClick={handleFetch}>fetch increment</button>
        <span>{count}</span>
        <button onClick={handleDecrease}>decrement</button>
        <button onClick={handleIncreaseAmount}>+5</button>
      </div>
    </div>
  );
};

export default Counter;
