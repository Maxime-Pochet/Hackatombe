import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Story/Menu/Menu";
import Start from "./Start/Start";
import Chapitre1 from "./Story/Chapitre1/Chapitre1";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/start" component={Start} />
          <Route path="/chapitre1" component={Chapitre1} />
        </Switch>
      </BrowserRouter>
    );
  }
}
