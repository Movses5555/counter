import React from 'react';
import Counter_A from './components/Stage_A/Counter';
import Counter_B from './components/Stage_B/Counter';
import Counter_C from './components/Stage_C/Counter';
import Counters_D from './components/Stage_D/Counters';

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <h2>Stage A</h2>
        <Counter_A />
      </div>
      <br />
      <br />
      <div>
        <h2>Stage B</h2>
        <Counter_B />
      </div>
      <br />
      <br />
      <div>
        <h2>Stage C</h2>
        <Counter_C />
      </div>
      <br />
      <br />
      <div>
        <h2>Stage D</h2>
        <Counters_D />
      </div>
    </div>
  );
}

export default App;
