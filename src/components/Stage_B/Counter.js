import React, { useState, useEffect } from 'react';

const fetchInitialCount = async () => {
  return 10;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getInitialCount = async () => {
      const initialCount = await fetchInitialCount();
      setCount(initialCount);
    };

    getInitialCount();
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span> </span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
