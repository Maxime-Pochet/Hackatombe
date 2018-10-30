import React, { Component } from "react";
import Chapitre from "../Chapitre/Chapitre";
import { NavLink } from "react-router-dom";

const chapitreDetails = {
  storyTitle: "",
  story: "",
  choiceA: "",
  choiceB: "",
  choiceC: ""
};
export default class Base extends Component {
  render() {
    return (
      <div>
        {/* <NavLink to="/">Mettre icone porte</NavLink> */}
        <Chapitre {...chapitreDetails} />
        <NavLink {...chapitreDetails} to="/start">
          Start!
        </NavLink>
        {/* <Score /> */}
      </div>
    );
  }
}
