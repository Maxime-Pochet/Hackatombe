import React, { Component } from 'react'
import Start from '../Start/Start'
import '../Story.scss'

export default class Base extends Component {
  render() {
    return (
      <div className='base'>
        <Start/>
      </div>
    )
  }
}
