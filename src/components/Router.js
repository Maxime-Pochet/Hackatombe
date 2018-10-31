import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Start from "./Jeu/Start/Start";
import Base from "./Jeu/Base/Base";
import Chapitre from "./Jeu/Chapitre/Chapitre";
import TheEnd from './Jeu/End/TheEnd'
import "./Jeu/Story.scss";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/start" component={Start} />
          <Route path="/prologue" component={Base} />
          <Route path="/chapitre" component={Chapitre} />
          <Route path="/the-end" component={TheEnd} />
        </Switch>
      </BrowserRouter>
    );
  }
}
