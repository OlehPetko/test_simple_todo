import '../App.css';
import {useState} from "react";

function To_Do() {
    const initialState = []
    const [todos, setTodos] = useState(initialState)
    const [addNewTodos, setAddNewTodos] = useState('')
    const [updateInput, setUpdateInput] = useState('')
    const addTodo = () => {
        const newTodo = [...todos, {id: Math.random(), todo: addNewTodos, openUpdate: false, changeDone: false}]
        setTodos(newTodo)
        setAddNewTodos('')
    }
    const del = (id) => {
      const newTodo = todos.filter(el => el.id !== id)
        setTodos(newTodo)
    }
const openUpdate = (id) => {
  const newTodo = todos.map(el => el.id === id ? {...el, openUpdate: !el.openUpdate} : el)
    setTodos(newTodo)
    setUpdateInput('')
}
const saveUpdate = (id) => {
  const newTodo = todos.map(el => el.id === id ? {...el, todo: updateInput, openUpdate: !el.openUpdate} : el)
    setTodos(newTodo)
    setUpdateInput('')
}
const done = (id) => {
  const newTodo = todos.map(el => el.id === id ? {...el, changeDone: !el.changeDone} : el)
    setTodos(newTodo)
}

    return (
        <div className="App">
            <h1>TO_DO</h1>
            <input placeholder='add new task' value={addNewTodos}
                   onChange={event => setAddNewTodos(event.target.value)}/>
            <button onClick={addTodo}>add task</button>
            {todos.map(el =>
                <div key={el.id} style={el.changeDone ? {textDecoration: 'line-through'} : null}>
                    <button>up</button>
                    {el.todo}
                    <button onClick={() => del(el.id)}>delete task</button>
                    <button>down</button>
                    {el.openUpdate ?
                        <div>
                            <input placeholder='your new tasks' value={updateInput}
                                   onChange={event => setUpdateInput(event.target.value)}/>
                            <button onClick={() => saveUpdate(el.id)}>save</button>
                            <button onClick={() => openUpdate(el.id)}>cancel</button>
                        </div>
                       :
                        <button onClick={() => openUpdate(el.id)}>update task</button>
                    }
                    <button style={el.changeDone ? {textDecoration: 'line-through'} : null} onClick={() => done(el.id)}>{el.changeDone ? 'ready' : 'done'}</button>
                </div>)}
        </div>
    );
}

export default To_Do;
