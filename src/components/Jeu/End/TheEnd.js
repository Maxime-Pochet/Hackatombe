import React from 'react';
import { NavLink } from "react-router-dom";
import imgEnd from './score.png'
import './End.scss'



class TheEnd extends React.Component {
    render() {
        return (
            <div className="end-container" style={{backgroundImage: `url(${imgEnd})`}}>
            <NavLink className="back-home" to="/"><i class="fas fa-home"></i></NavLink>
                <h2>Youhouuu tu es encore vivant !</h2>
                <p className="end-score">Score : <span>{this.props.score}</span> </p>
                <p className="end-funny">
                { this.props.score > 65 ? `Bienvenue à Zombiland !` : (this.props.score <= 65 && this.props.score > 30)  ?`Tu ne feras pas long feu profites-en et brosse toi les dents` : `Si t'avais pas envie de jouer fallait pas cliquer`}
                </p>
            </div>
        )
    }
}

export default TheEnd;
