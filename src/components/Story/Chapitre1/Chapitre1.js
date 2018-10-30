import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import "../Story.scss";

export default class Chapitre1 extends Component {
  render() {
    return (
      <div className="storyContainer">
        <p>Je choisis un costume avant de sortir:</p>
        <button>Zombie</button>
        <button>Citrouille</button>
      </div>
    );
  }
}
