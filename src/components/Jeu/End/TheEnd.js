import React from 'react'
import { NavLink } from "react-router-dom"
import imgEnd from './score.png'
import './End.scss'

class TheEnd extends React.Component {
  render() {
    const { score } = this.props
    return (
      <div className="end-container" style={{ backgroundImage: `url(${imgEnd})` }}>

        <NavLink className="back-home" to="/"><i className="fas fa-home"/></NavLink>

        <h2>Youhouuu tu es encore vivant !</h2>

        <p className="end-score">Score : <span>{score}</span> </p>

        <p className="end-funny">
          { score > 65
            ? `Bienvenue à Zombiland !`
            : (score <= 65 && score > 30)
              ? `Tu ne feras pas long feu profites-en et brosse toi les dents`
              : `Si t'avais pas envie de jouer fallait pas cliquer`
          }
        </p>

      </div>
    )
  }
}

export default TheEnd
