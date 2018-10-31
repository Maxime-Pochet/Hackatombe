import React from 'react';
import { NavLink } from "react-router-dom";
import imgEnd from './score.png'
import './End.scss'

const score = {
    total : 10
}

class TheEnd extends React.Component {
    render() {
        return (
            <div className="end-container" style={{backgroundImage: `url(${imgEnd})`}}>
            <NavLink className="back-home" to="/"><i class="fas fa-home"></i></NavLink>
                <h2>Youhouuu tu es encore vivant !</h2>
                <p className="end-score">Score : <span>{score.total}</span> </p>
                <p className="end-funny">
                { score.total > 50 ? `Wazaaaaaaaaaa` : (score.total > 25 && score.total < 50)  ?`Poupidou PouPoupidou` : `Caca`}
                </p>
            </div>
        )
    }
}

export default TheEnd;