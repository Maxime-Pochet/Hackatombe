import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Chapitre from '../Chapitre/Chapitre'
// import "../Story/Story.scss";

import background1 from './zombies.png';

export default class Start extends Component {
  state = {
    pseudo : "user12884"
  }

  handleChange = e => {
    if (e.currentTarget.value.length > 0) {
      this.setState({pseudo : e.target.value})
      console.log(this.state.pseudo)
    } else {
      return this.setState({pseudo : "user12884"})
    }
  }

  render() {
    return (
      <div className="storyContainer">
      
      <div className="contenu-text" style={{backgroundImage: `url(${background1})`}}>
        <NavLink className="back-home" to="/"><i class="fas fa-home"></i></NavLink>
        <h2 className="storySubtitle">Un bonbon ou la vie</h2>
        <p className="chapterStory">
        Thank you, Strax. And if I'm ever in need of advice from a psychotic potato dwarf, you'll certainly be the first to know. Usually called 'The Doctor.' Or 'The Caretaker.' Or 'Get off this planet.' Though, strictly speaking, that probably isn't a name. Yes, well, it's a brilliant noise. I love that noise. Frightened people. Give me a Dalek any day. Overconfidence, this, and a small screwdriver. I’m absolutely sorted. Father Christmas. Santa Claus. Or, as I’ve always known him, Jeff. There's something that doesn't make sense. Let's go and poke it with a stick. 
        </p>
        <input className="speudo" autoFocus name="pseudo" placeholder="Pseudo" onChange={this.handleChange}></input>
          <p className="link-start-game">
            <NavLink to={{pathname:"/chapitre", state: {pseudo : this.state.pseudo}}}>C'est Parti !</NavLink>
          </p>
        </div>
      </div>
    );
  }
}
