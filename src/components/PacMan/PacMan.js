import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class PacMan extends Component {
  render() {
    return (
      <div>
        <div className="storyContainer">
          <p>Voici la page de Paqueu Maneu</p>
        </div>
        <div>
          <NavLink to="/">Retour à la page d'accueil</NavLink>
        </div>
      </div>
    );
  }
}
