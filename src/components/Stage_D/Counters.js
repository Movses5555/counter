import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialCounters, addCounter } from '../../redux/counterSlice';
import Counter from './Counter';

const Counters = () => {
  const dispatch = useDispatch();
  const { counters, status, error } = useSelector((state) => state.counter);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchInitialCounters());
    }
  }, [dispatch, status]);

  return (
    <div>
      {counters?.map((counter, index) => (
        <div key={counter.id}>
          <h4>Counter {index + 1}.</h4>
          <Counter
            id={counter.id}
            initialValue={counter.initialValue}
          />
          <br />
          <br />
        </div>
      ))}
      <button data-testid='add' onClick={() => dispatch(addCounter())}>Add Counter</button>
    </div>
  );
};

export default Counters;
