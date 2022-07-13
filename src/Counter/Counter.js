import '../App.css';
import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const minusPlusCounter = (valueCounter) => {
      setCount(count + valueCounter)
    }
  return (
    <div className="App">
        <h1>COUNTER</h1>
      <button onClick={() => minusPlusCounter(- 1)}>-</button>
        {count}
      <button onClick={() => minusPlusCounter(1)}>+</button>

    </div>
  );
}

export default Counter;
