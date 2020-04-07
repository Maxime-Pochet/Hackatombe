import React, { useState } from 'react'
import jsonData from '../../../data.json'
import { NavLink } from 'react-router-dom'
import TheEnd from '../End/TheEnd'
import './Chapitre.scss'
import GameOver from '../GameOver/GameOver.js'
import {PROLOGUE} from "../../../constants/Routes";

const Chapitre = props => {

  const [currentPosition, setCurrentPosition] = useState('0')
  const [totalScore, setTotalScore] = useState(0)
  const [avatar, setAvatar] = useState(jsonData[0].avatar)

  const handleClick = (e, id) => {
    setCurrentPosition(e.currentTarget.id)
    setTotalScore(totalScore + parseInt(jsonData[currentPosition][id].score))
    if (
      avatar === jsonData[0].avatar ||
      jsonData[currentPosition].id === '0'
    ) {
      setAvatar(jsonData[0][id].avatar)
    } else {
      return avatar
    }
  }

  if (
    (currentPosition === '5' && avatar === jsonData[0].btn1.avatar)
    || (currentPosition === '13' && avatar === jsonData[0].btn1.avatar)
    || (currentPosition === '9' && avatar === jsonData[0].btn2.avatar)
    || (currentPosition === '7')
  ) return <GameOver text={jsonData[currentPosition].mort}/>
  else if (currentPosition === '10') return <TheEnd score={totalScore}/>
  else {
    return (
      <div
        className='chapter-container'
        style={{ backgroundImage: `url(${jsonData[currentPosition].img})` }}
      >
        <NavLink className='back-home' to={PROLOGUE}>
          <i className='fas fa-door-open'/>
        </NavLink>

        <div className='pseudo-card'>
          <img src={avatar} alt='avatar'/>
          <p>{props.location.state.pseudo}</p>
        </div>

        <h2 className='chapter-title'>
          {jsonData[currentPosition].storyTitle}
        </h2>

        <p className='chapter-text'>
          {jsonData[currentPosition].story}
        </p>

        <div className='btn-container'>

          <button
            id={jsonData[currentPosition].btn1.id}
            className={`choiceA ${
              jsonData[currentPosition].btn1.classText
            }`}
            onClick={(e) => handleClick(e, 'btn1')}
          >
            {!jsonData[currentPosition].btn1.avatar && (
              <i className='fas fa-ghost icon'/>
            )}
            {jsonData[currentPosition].btn1.avatar && (
              <img src={jsonData[currentPosition].btn1.avatar} alt='avatar'/>
            )}
            <span>{jsonData[currentPosition].btn1.text}</span>
          </button>

          <button
            id={jsonData[currentPosition].btn2.id}
            className={`choiceB ${
              jsonData[currentPosition].btn2.classText
            }`}
            onClick={(e) => handleClick(e, 'btn2')}
          >
            {!jsonData[currentPosition].btn2.avatar && (
              <i className='fas fa-ghost icon'/>
            )}

            {jsonData[currentPosition].btn2.avatar && (
              <img src={jsonData[currentPosition].btn2.avatar} alt='avatar'/>
            )}
            <span>{jsonData[currentPosition].btn2.text}</span>
          </button>

        </div>
        <p className='score'>Score : {totalScore}</p>
      </div>
    )
  }
}

export default Chapitre
