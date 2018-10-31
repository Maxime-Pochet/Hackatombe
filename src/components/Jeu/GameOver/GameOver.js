import React from 'react';
import { NavLink } from "react-router-dom";
import './GameOver.scss';
import imgGO from './house-not-lumos.png';
import bat from './bat.png';
import hand from './hand.png';


class GameOver extends React.Component {
    render() {
        return (
            <div className="gameOver-container" style={{backgroundImage: `url(${imgGO})`}}>
            <NavLink className="back-home" to="/"><i class="fas fa-home"></i></NavLink>
                <img className="batman" src={bat}/>
                <h2 className="gameOver-title">Game Over</h2>
                <p className="why-dead">T'es mort LOOSER</p>
                <img className="hand" src={hand}/>
            </div>
        )
    }
}

export default GameOver;