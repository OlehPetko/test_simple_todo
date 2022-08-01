import '../App.css';
import {useState} from "react";

function Counter() {
    const initialState = []
    const [count, setCount] = useState(initialState)
    const initialState2 = []
    const [count2, setCount2] = useState(initialState2)
    const [newCount, setNewCount] = useState([0])
    const minusPlusCounter = (id, valueCounter) => {
        const newCount = count.map(el => el.id === id ? {...el, counter: el.counter + valueCounter} : el)
        setCount(newCount)
    }
    const addCounter = () => {
        const newCount = [...count, {id: Math.random(), counter: 0}]
        setCount(newCount)
    }
    const addCounter2 = () => {
      const newCount2 = [...count2, {id: Math.random(), counter: newCount}]
        setCount2(newCount2)
        setNewCount([])
    }
    const plusMinusCounter2 = (id, valueCounter2) => {
      const newCount2 = count2.map(el => el.id === id ? {...el, counter: +el.counter + valueCounter2} : el)
        setCount2(newCount2)
    }
    const resetCounter = (id) => {
      const newCount = count.map(el => el.id === id ? {...el, counter: 0} : el)
        setCount(newCount)
    }
    return (
        <div className="App">
            <h1>COUNTER</h1>
            <button onClick={addCounter}>add counter</button>
            {count.map(el =>
                <div key={el.id}>
                    {el.counter !== 0 && <button style={{backgroundColor: 'grey'}} onClick={() => resetCounter(el.id)}>reset</button>}
                    <button onClick={() => minusPlusCounter(el.id, -1)}>-</button>
                    {el.counter}
                    <button onClick={() => minusPlusCounter(el.id, 1)}>+</button>
                </div>
            )}
            <hr/>
            <input type="number" value={newCount} onChange={e => setNewCount(e.target.value)}/>
            <button onClick={addCounter2}>add counter</button>

            {count2.map(count =>
                <div key={count.id}>
                    <button onClick={() => plusMinusCounter2(count.id, - 1)}>-</button>
                    {count.counter}
                    <button onClick={() => plusMinusCounter2(count.id, 1)}>+</button>
                </div>)}


        </div>
    );
}

export default Counter;
