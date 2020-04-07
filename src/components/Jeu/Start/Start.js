import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import background1 from './zombies.png'
import { CHAPITRE, HOME } from "../../../constants/Routes";

const Start = () => {

  const [pseudo, setPseudo] = useState('user12488')

  const handleChange = e => {
    if (e.currentTarget.value.length > 0) {
      setPseudo(e.target.value)
    } else {
      setPseudo('user12488')
    }
  }

  return (
    <div className="storyContainer">

      <div className="contenu-text" style={{backgroundImage: `url(${background1})`}}>

        <NavLink className="back-home" to={HOME}><i className="fas fa-home"/></NavLink>

        <h2 className="storySubtitle">Un bonbon ou la vie</h2>

        <p className="chapterStory">
          Mercredi 31 octobre, 22h00.<br/>
          Vous écoutez la radio en vous préparant votre sac où vous pourrez mettre les bonbons que vous trouverez.
          Un flash spécial mentionne "une apocalypse de zombies" en ce jour d'halloween. Cette blague vous fait sourire.
          C'est le moment d'y aller !
        </p>

        <input className="pseudo" autoFocus name="pseudo" placeholder="Pseudo" onChange={handleChange}/>

        <div className="link-start-game">
          <NavLink to={{ pathname: CHAPITRE, state: { pseudo }}}>C'est Parti !</NavLink>
        </div>

      </div>
    </div>
  )

}

export default Start
