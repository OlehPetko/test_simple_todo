import '../App.css';
import {useState} from "react";

function Counter() {
    const initialState = []
    const [count, setCount] = useState(initialState)
    const minusPlusCounter = (id, valueCounter) => {
     const newCount = count.map(el => el.id === id ? {...el, counter: el.counter + valueCounter} : el)
        setCount(newCount)
    }
    const addCounter = () => {
 const newCount = [...count, {id: Math.random(), counter: 0}]
        setCount(newCount)
    }
  return (
    <div className="App">
        <h1>COUNTER</h1>
        <button onClick={addCounter}>add counter</button>

        {count.map(el =>
        <div key={el.id}>
            <button onClick={() => minusPlusCounter(el.id, - 1)}>-</button>
            {el.counter}
            <button onClick={() => minusPlusCounter(el.id, 1)}>+</button>
        </div>
        )}


    </div>
  );
}

export default Counter;
