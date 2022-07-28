import './App.css';
import {useState} from "react";
import Counter from "./Counter/Counter";
import To_Do from "./To_Do/To_Do";
import Kanban from "./Kanban/Kanban";
import Football from "./Football/Football";


function App() {
    const [apps, setApps] = useState('')
    return (
        <div className="App">
            <button onClick={() => setApps('Counter')}>Counter</button>
            <button onClick={() => setApps('To_Do')}>To_Do</button>
            <button onClick={() => setApps('Kanban')}>Kanban</button>
            <button onClick={() => setApps('FOOTBALL')}>FOOTBALL</button>
            {apps === 'Counter' && <Counter/>}
            {apps === 'To_Do' && <To_Do/>}
            {apps === 'Kanban' && <Kanban />}
            {apps === 'FOOTBALL' && <Football />}
        </div>
    );
}

export default App;
