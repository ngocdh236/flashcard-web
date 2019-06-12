import React, { Component } from 'react'

import Deck from '../components/Deck'
import DeckDetail from '../components/DeckDetail'

import '../styles/MainHome.scss'

class MainHome extends Component {
  constructor() {
    super()

    this.state = {
      deckDetailPopup: false
    }

    this.toggleCreateDeck = this.toggleCreateDeck.bind(this)
  }

  toggleCreateDeck() {
    this.setState({
      ...this.state,
      deckDetailPopup: !this.state.deckDetailPopup
    })
  }

  render() {
    return (
      <div className='MainHome'>
        <label>Create new deck</label>
        <Deck newDeck={true} toggleCreateDeck={this.toggleCreateDeck} />
        <label>Recent</label>

        {this.state.deckDetailPopup ? (
          <DeckDetail toggleCreateDeck={this.toggleCreateDeck} />
        ) : null}
      </div>
    )
  }
}

export default MainHome
