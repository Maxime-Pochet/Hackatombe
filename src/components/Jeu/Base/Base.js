import React, { Component } from "react";
import Chapitre from "../Chapitre/Chapitre";
import { NavLink } from "react-router-dom";
import Start from '../Start/Start';
import "../Story.scss";
export default class Base extends Component {
  render() {
    return (
      <div className="base">
      <Start />
      </div>
    );
  }
}
