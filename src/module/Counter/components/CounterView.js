const CounterView = ({ count,title,  setCount }) => {
  return (
    <div>
      <div>{title}</div>
      <div onClick={() => setCount('increment')}>+</div>
      <div>{count}</div>
      <div onClick={() => setCount('decrement')}>-</div>
    </div>
  );
};
export default CounterView;
