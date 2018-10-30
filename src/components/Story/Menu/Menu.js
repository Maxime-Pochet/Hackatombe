import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div className="storyContainer">
        <h2>Bienvenue à la chasse aux bonbons</h2>
        <div>
          <NavLink to="/base">C'est parti!!!!</NavLink>
        </div>
        <div>
          <NavLink to="/">Retour à la page d'accueil</NavLink>
        </div>
      </div>
    );
  }
}
