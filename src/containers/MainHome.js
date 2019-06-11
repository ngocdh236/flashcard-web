import React, { Component } from 'react'

import Deck from '../components/Deck'

import '../styles/MainHome.scss'

class MainHome extends Component {
  render() {
    return (
      <div className='MainHome'>
        <label>Create new deck</label>
        <Deck newDeck={true} />
        <label>Recent</label>
      </div>
    )
  }
}

export default MainHome
