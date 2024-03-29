import '../App.css';
import {useState} from "react";

function Kanban() {

    const statuses = ['todo', 'review', 'progress', 'done']
    const [newTask, setNewTask] = useState('')
    const initialState = []
    const [task, setTask] = useState(initialState)
    const [updateNewTask, setUpdateNewTask] = useState('')
    const addTask = () => {
        const addNewTask = [...task, {id: Math.random(), status: statuses[0], name: newTask, mark: false, openUpdate: true, openDel: true
        }]
        setTask(addNewTask)
        setNewTask('')
    }
    const openDelete = (id) => {
      const newTask = task.map(el => el.id === id ? {...el, openDel: !el.openDel} : el)
        setTask(newTask)
    }
    const del = (id) => {
        const updateTask = task.filter(el => el.id !== id)
        setTask(updateTask)
    }
    const updateTask = (id) => {
        const newTask = task.map(el => el.id === id ? {...el, name: updateNewTask, openUpdate: !el.openUpdate} : el)
        setTask(newTask)
        setUpdateNewTask('')
    }
    const markDone = (id) => {
        const newTask = task.map(el => el.id === id ? {...el, mark: !el.mark} : el)
        setTask(newTask)
    }
    const moveTask = (id, valueTask) => {
        const newTask = task.map(el => el.id === id ? {
            ...el,
            status: statuses[statuses.indexOf(el.status) + valueTask]
        } : el)
        setTask(newTask)
    }
    const openUpdate = (id) => {
        const newTask = task.map(el => el.id === id ? {...el, openUpdate: !el.openUpdate} : el)
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
                    <h2>
                        {status}
                    </h2>
                    {task.filter(task => task.status === status).map(task =>
                        <div key={task.id} style={task.mark ? {textDecoration: 'line-through'} : null}>
                            <input type="checkbox" onClick={() => markDone(task.id)}/>
                            {status !== 'todo' && <button onClick={() => moveTask(task.id, -1)}>up</button>}
                            {task.name}
                            {task.status !== 'done' && <button onClick={() => moveTask(task.id, 1)}>down</button>}
                            {task.openDel ?  <button onClick={() => openDelete(task.id)}>delete</button> :
                            <div>
                                <label>ARE YOU SURE?</label>
                                <button onClick={() => del(task.id)}>yes delete</button>
                                <label>OR</label>
                                <button onClick={() => openDelete(task.id)}>cancel</button>
                            </div>
                            }

                            {task.openUpdate ? <button onClick={() => openUpdate(task.id)}>update</button> :
                                <div>
                                    <input placeholder='your new task here' value={updateNewTask}
                                           onChange={e => setUpdateNewTask(e.target.value)}/>
                                    <button onClick={() => updateTask(task.id)}>save</button>
                                    <button onClick={() => openUpdate(task.id)}>cancel</button>
                                </div>
                            }
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
