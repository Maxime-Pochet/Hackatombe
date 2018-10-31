import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import PacMan from "./PacMan/PacMan";
import Start from "./Jeu/Start/Start";
import Base from "./Jeu/Base/Base";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pacman" component={PacMan} />
          <Route path="/start" component={Start} />
          <Route path="/prologue" component={Base} />
        </Switch>
      </BrowserRouter>
    );
  }
}
