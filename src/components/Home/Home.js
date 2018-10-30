import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>Page du site entier du monde</p>
        <p>fuck</p>
        <div>
          <NavLink to="/pacman">PacMan</NavLink>
        </div>
        <div>
          <NavLink to="/base">Story Game</NavLink>
        </div>
      </div>
    );
  }
}
