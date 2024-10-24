import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, randomize } from '../../redux/counterSlice';


const Counter = ({ id, initialValue }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) =>
    state.counter.counters.find((c) => c.id === id)
  );

  const count = counter ? counter.value : initialValue;

  const handleRandomize = () => {
    dispatch(randomize(id));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment(id))}>Increment</button>
      <span> </span>
      <button onClick={() => dispatch(decrement(id))}>Decrement</button>
      <span> </span>
      <button onClick={handleRandomize}>Randomize</button>
    </div>
  );
};

export default Counter;
