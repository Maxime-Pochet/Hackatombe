import React, { Component } from "react";
import Chapitre from "../Chapitre/Chapitre";
import { NavLink } from "react-router-dom";
import Start from '../Start/Start';
export default class Base extends Component {
  render() {
    return (
      <div>
      <p>lol t'es dans base naze</p>
      <Start />
      </div>
    );
  }
}
