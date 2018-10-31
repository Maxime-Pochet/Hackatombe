import React from 'react';
import imgEnd from './score.png'
import './End.scss'

class TheEnd extends React.Component {
    render() {
        return (
            <div className="end-container" style={{backgroundImage: `url(${imgEnd})`}}>
                <h2>Youhouuu tu es encore vivant !</h2>

            </div>
        )
    }
}

export default TheEnd;