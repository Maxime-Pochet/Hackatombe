import React from 'react'
import { NavLink } from 'react-router-dom'
import BGHome from './pictures/bghome.jpg'
import PacMan from './pictures/pacman.png'
import Jeu from './pictures/jeu.png'
import './Home.scss'
import {PROLOGUE} from "../../constants/Routes";

const Home = () =>
  <div className='container_home' style={{ backgroundImage: `url(${BGHome})` }}>
    <h1 className='title_home'>HALLOWEEN GAMES</h1>

    <div className='link_home'>
      <a
        href='https://maxime-pochet.github.io/PacMan-Skull/'
        rel='noopener noreferrer'
        target='_blank'
        style={{ backgroundImage: `url(${PacMan})` }}
      />
    </div>

    <div className='link_home'>
      <NavLink to={PROLOGUE} style={{ backgroundImage: `url(${Jeu})` }}/>
    </div>
  </div>

export default Home
