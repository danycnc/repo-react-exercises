import { useState } from 'react';
import CounterDisplay from './CounterDisplay';

const Counter = ({ initialValue = 0, increment = 1 }) => {
  const [count, setCount] = useState(initialValue);

  const handleCounter = () => {
    setCount((count) => count + increment);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={handleCounter}>Increment</button>
    </div>
  );
};

export default Counter;
