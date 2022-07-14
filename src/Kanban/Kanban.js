import '../App.css';
import {useState} from "react";

function Kanban() {

    const statuses = ['todo', 'review', 'progress', 'done']
    const [newTask, setNewTask] = useState('')
    const initialState = [
        {id: Math.random(), status: statuses[0], name: 'Liverpool'},
        {id: Math.random(), status: statuses[1], name: 'Vancouver'},
        {id: Math.random(), status: statuses[2], name: 'Los Gatos'},
        {id: Math.random(), status: statuses[3], name: 'Hawaii'},
    ]
    const [task, setTask] = useState(initialState)
    const [updateNewTask, setUpdateNewTask] = useState('')
    const addTask = () => {
        const addNewTask = [...task, {id: Math.random(), status: statuses[0], name: newTask}]
        setTask(addNewTask)
        setNewTask('')
    }
    const del = (id) => {
        const updateTask = task.filter(el => el.id !== id)
        setTask(updateTask)
    }
    const updateTask = (id) => {
      const newTask = task.map(el => el.id === id ? {...el, name: updateNewTask} : el)
        setTask(newTask)
        setUpdateNewTask('')
    }
    return (
        <div className="App">
            <h1>KANBAN</h1>
            <input placeholder='add new task' value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <button onClick={addTask}>add new task</button>
            {statuses.map(status =>
                <div key={status}>
                    <h4>
                        {status}
                    </h4>
                    {task.filter(task => task.status === status).map(task =>
                        <div key={task.id}>
                            <input type="checkbox"/>
                            <button>up</button>
                            {task.name}
                            <button>down</button>
                            <button onClick={() => del(task.id)}>delete</button>
                            <input placeholder='your new task here' value={updateNewTask} onChange={e => setUpdateNewTask(e.target.value)}/>
                            <button onClick={() => updateTask(task.id)}>update</button>
                        </div>
                    )}
                </div>
            )}
            <hr/>
            <button>BIN</button>
        </div>
    );
}

export default Kanban;
