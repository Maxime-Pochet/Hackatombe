import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import PacMan from "./PacMan/PacMan";
import Menu from "./Story/Menu/Menu";
import Start from "./Start/Start";
import Base from "./Base/Base";
import Chapitre1 from "./Story/Chapitre1/Chapitre1";
import "./Story/Story.scss";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pacman" component={PacMan} />
          <Route path="/menu" component={Menu} />
          <Route path="/start" component={Start} />
          <Route path="/base" component={Base} />
          <Route path="/chapitre1" component={Chapitre1} />
        </Switch>
      </BrowserRouter>
    );
  }
}
