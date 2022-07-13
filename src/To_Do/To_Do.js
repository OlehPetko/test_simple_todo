import '../App.css';
import {useState} from "react";

function To_Do() {
    const initialState = [
        {id: Math.random(), todo: 'Make breakfast'},
        {id: Math.random(), todo: 'Play football'},
        {id: Math.random(), todo: 'Working'},
        {id: Math.random(), todo: 'Sleep'},
        {id: Math.random(), todo: 'Drink'}
    ]
    const [todos, setTodos] = useState(initialState)
    const [addNewTodos, setAddNewTodos] = useState('')
    const addTodo = () => {
        const newTodo = [...todos, {id: Math.random(), todo: addNewTodos}]
        setTodos(newTodo)
        setAddNewTodos('')
    }
    const del = (id) => {
      const newTodo = todos.filter(el => el.id !== id)
        setTodos(newTodo)
    }

    return (
        <div className="App">
            <h1>TO_DO</h1>
            <input placeholder='add new task' value={addNewTodos}
                   onChange={event => setAddNewTodos(event.target.value)}/>
            <button onClick={addTodo}>add task</button>
            {todos.map(el =>
                <div key={el.id}>
                    {el.todo}
                    <button onClick={() => del(el.id)}>delete task</button>
                    <button>update task</button>
                    <button>done task</button>
                </div>)}
        </div>
    );
}

export default To_Do;
