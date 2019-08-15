import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import background1 from './zombies.png'

export default class Start extends Component {
  state = {
    pseudo : "user12884"
  }

  handleChange = e => {
    if (e.currentTarget.value.length > 0) {
      this.setState({ pseudo: e.target.value })
    } else {
      return this.setState({ pseudo: "user12884" })
    }
  }

  render() {
    return (
      <div className="storyContainer">

        <div className="contenu-text" style={{backgroundImage: `url(${background1})`}}>

          <NavLink className="back-home" to="/"><i className="fas fa-home"/></NavLink>

          <h2 className="storySubtitle">Un bonbon ou la vie</h2>

          <p className="chapterStory">
            Mercredi 31 octobre, 22h00.<br/>
            Vous écoutez la radio en vous préparant votre sac où vous pourrez mettre les bonbons que vous trouverez.
            Un flash spécial mentionne "une apocalypse de zombies" en ce jour d'halloween. Cette blague vous fait sourire.
            C'est le moment d'y aller !
          </p>

          <input className="speudo" autoFocus name="pseudo" placeholder="Pseudo" onChange={this.handleChange}/>

          <div className="link-start-game">
            <NavLink to={{pathname:"/chapitre", state: {pseudo : this.state.pseudo}}}>C'est Parti !</NavLink>
          </div>

        </div>
      </div>
    )
  }
}
