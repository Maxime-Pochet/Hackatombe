import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BGHome from './pictures/bghome.jpg';
import Pacman from './pictures/pacman.png';
import Jeu from './pictures/jeu.png'
import './Home.scss';


export default class Home extends Component {
  render() {
    return (
      <div className="container_home" style={{backgroundImage: `url(${BGHome})`}}>
        <h1 className="title_home">HALLOWEEN GAMES</h1>

        <div className="link_home">
          <a href="https://thorrion.github.io/Pacman-Skull/" target="_blank" style={{backgroundImage: `url(${Pacman})`}}> </a>
        </div>
        <div className="link_home">
          <NavLink to="/prologue" style={{backgroundImage: `url(${Jeu})`}}></NavLink>
        </div>
      </div>
    );
  }
}
