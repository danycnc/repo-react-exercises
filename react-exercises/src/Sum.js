const Sum = ({ numbers = [2, 5, 1] }) => {
  return (
    <div>
      <h1>{numbers.reduce((cur, prev) => (cur += prev))}</h1>
    </div>
  );
};

export default Sum;
