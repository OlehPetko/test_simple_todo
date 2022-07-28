import '../App.css';
import {useState} from "react";

function Football() {

const initialState = [
    {id: Math.random(), teams: 'Liverpool', position: 1, points: 0},
    {id: Math.random(), teams: 'Manchester united', position: 2, points: 0},
    {id: Math.random(), teams: 'Manchester city', position: 3, points: 0},
    {id: Math.random(), teams: 'Arsenal', position: 4, points: 0},
    {id: Math.random(), teams: 'Chelsea', position: 5, points: 0}
]
    const [premierLigaTeams, setPremierLigaTeams] = useState(initialState)
    return (
        <div className="App">
            {premierLigaTeams.map(team =>
            <div key={team.id}>
                <span>
                    {team.position}
                </span>
                {team.teams}
                <span>
                    {team.points}
                </span>
            </div>
            )}

        </div>
    );
}

export default Football;
