import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import "../Story/Story.scss";

export default class Start extends Component {
  render() {
    return (
      <div className="storyContainer">
        <h2 className="storySubtitle">un titre est là / début de l'histoire</h2>
        <p className="chapterStory">
          du bla bla avec le lancement de l'histoire
        </p>
        <div>
          <p>
            <NavLink to="/chapitre1">Chapitre 1</NavLink>
          </p>
          <p>
            <NavLink to="/">Abandon</NavLink>
          </p>
        </div>
      </div>
    );
  }
}
