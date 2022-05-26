import { useCounter } from './useCounter';
const Counter = ({ initialValue = 0 }) => {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={onIncrement}>Add</button>
      <button onClick={onDecrement}>Remove</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Counter;
