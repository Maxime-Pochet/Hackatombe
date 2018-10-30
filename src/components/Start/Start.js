import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Start extends Component {
  render() {
    return (
      <div className="storyContainer">
        <h2>L'histoire commence ici</h2>
        <p>Et autant d'un point de vue taquetique que tequenique...</p>
        <p>C'est parti!!!!</p>
        <div>
          <div>
            <NavLink to="/chapitre1">Chapitre 1</NavLink>
          </div>
          <div>
            <NavLink to="/">Retour à l'accueil</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
