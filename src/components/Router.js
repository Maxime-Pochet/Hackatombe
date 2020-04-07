import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import Start from './Jeu/Start/Start'
import Base from './Jeu/Base/Base'
import Chapitre from './Jeu/Chapitre/Chapitre'
import TheEnd from './Jeu/End/TheEnd'
import GameOver from './Jeu/GameOver/GameOver'
import './Jeu/Story.scss'
import {CHAPITRE, END, GAME_OVER, HOME, PROLOGUE, START} from "../constants/Routes";

const Router = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path={HOME} component={Home}/>
      <Route path={START} component={Start}/>
      <Route path={PROLOGUE} component={Base}/>
      <Route path={CHAPITRE} component={Chapitre}/>
      <Route path={END} component={TheEnd}/>
      <Route path={GAME_OVER} component={GameOver}/>
    </Switch>
  </BrowserRouter>

export default Router
