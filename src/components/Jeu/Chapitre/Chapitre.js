import React, { Component } from 'react'
import jsonData from '../../../data.json'
import { NavLink } from 'react-router-dom'
import TheEnd from '../End/TheEnd'
import './Chapitre.scss'
import GameOver from '../GameOver/GameOver.js'

export default class Chapitre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: 0,
      totalScore: 0,
      avatar: jsonData[0].avatar
    }
  }

  handleClick = (e, id) => {
    const { currentPosition, avatar, totalScore } = this.state

    this.setState({
      currentPosition: e.currentTarget.id,
      totalScore:
        totalScore +
        parseInt(jsonData[currentPosition][id].score)
    })
    if (
      avatar === jsonData[0].avatar ||
      jsonData[currentPosition].id === '0'
    ) {
      this.setState({ avatar: jsonData[0][id].avatar })
    } else {
      return avatar
    }
  }

  render() {
    const { currentPosition, avatar, totalScore } = this.state
    if (
      (currentPosition === '5' && avatar === jsonData[0].btn1.avatar)
      || (currentPosition === '13' && avatar === jsonData[0].btn1.avatar)
      || (currentPosition === '9' && avatar === jsonData[0].btn2.avatar)
      || (currentPosition === '7')
    ) {
      return <GameOver text={jsonData[currentPosition].mort}/>
    } else if (currentPosition === '10') {
      return <TheEnd score={totalScore}/>
    } else {
      return (
        <div
          className='chapter-container'
          style={{ backgroundImage: `url(${jsonData[currentPosition].img})` }}
        >
          <NavLink className='back-home' to='/prologue'>
            <i className='fas fa-door-open'/>
          </NavLink>

          <div className='pseudo-card'>
            <img src={avatar} alt='avatar'/>
            <p>{this.props.location.state.pseudo}</p>
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
              onClick={(e) => this.handleClick(e, 'btn1')}
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
              onClick={(e) => this.handleClick(e, 'btn2')}
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
}
