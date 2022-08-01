import '../App.css';
import {useState} from "react";

function Football() {

    const initialState = [{
        id: Math.random(),
        teams: 'Liverpool',
        position: 1,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Manchester United',
        position: 2,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Manchester City',
        position: 3,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Arsenal',
        position: 4,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Chelsea',
        position: 5,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'AFC Bournemouth',
        position: 6,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Aston Villa',
        position: 7,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {id: Math.random(), teams: 'Brentford', position: 8, played: 0, won: 0, draw: 0, lost: 0, points: 0}, {
        id: Math.random(),
        teams: 'Brighton and Hove Albion',
        position: 9,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Crustal Palace',
        position: 10,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Everton',
        position: 11,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Fulham',
        position: 12,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Leeds United',
        position: 13,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Lester City',
        position: 14,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Newcastle United',
        position: 15,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Nottingham Forest',
        position: 16,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Southampton',
        position: 17,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {
        id: Math.random(),
        teams: 'Tottenham Hotspur',
        position: 18,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }, {id: Math.random(), teams: 'West HaM United', position: 19, played: 0, won: 0, draw: 0, lost: 0, points: 0}, {
        id: Math.random(),
        teams: 'Wolverhampton Wanderers',
        position: 20,
        played: 0,
        won: 0,
        draw: 0,
        lost: 0,
        points: 0
    }]
    const [premierLigaTeams, setPremierLigaTeams] = useState(initialState)
    return (<div className="App">
        <hr/>
        {premierLigaTeams.map(team => <div key={team.id} className='cards'>
            {team.position}. {team.teams}
            <span>
               played: {team.played}
                </span>
            <span className='team'>
                      points: {team.points}
                </span>
            next game: {team.points}
        </div>)}
        <hr/>
    </div>);
}

export default Football;
