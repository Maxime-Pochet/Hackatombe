import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div className="storyContainer">
        <p>Bienvenue à la chasse aux bonbons</p>
        <div>
          <NavLink to="/">Retour à la page d'accueil</NavLink>
        </div>
        <div>
          <NavLink to="/start">C'est parti!!!!</NavLink>
        </div>
      </div>
    );
  }
}
