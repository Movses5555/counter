import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = await Promise.resolve({ data: 10 });
      setCount(mockData.data);
    };
    fetchData();
  }, []);

  const randomize = () => {
    setCount(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span> </span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <span> </span>
      <button onClick={randomize}>Randomize</button>
    </div>
  );
};

export default Counter;
