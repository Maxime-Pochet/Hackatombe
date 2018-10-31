import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Chapitre from '../Chapitre/Chapitre'

import background1 from './zombies.png';

export default class Start extends Component {
  render() {
    return (
      <div className="storyContainer">

      <div className="contenu-text" style={{backgroundImage: `url(${background1})`}}>
        <NavLink className="back-home" to="/"><i class="fas fa-home"></i></NavLink>
        <h2 className="storySubtitle">Un bonbon ou la vie</h2>
        <p className="chapterStory">
        Thank you, Strax. And if I'm ever in need of advice from a psychotic potato dwarf, you'll certainly be the first to know. Usually called 'The Doctor.' Or 'The Caretaker.' Or 'Get off this planet.' Though, strictly speaking, that probably isn't a name. Yes, well, it's a brilliant noise. I love that noise. Frightened people. Give me a Dalek any day. Overconfidence, this, and a small screwdriver. I’m absolutely sorted. Father Christmas. Santa Claus. Or, as I’ve always known him, Jeff. There's something that doesn't make sense. Let's go and poke it with a stick.
        </p>
          <p className="link-start-game">
            <NavLink to="/chapitre">C'est Parti !</NavLink>
          </p>
        </div>
      </div>
    );
  }
}
