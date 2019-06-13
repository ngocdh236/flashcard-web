import React, { Component } from 'react'

import iconAdd from '../assets/iconAdd.svg'
import DeckDetail from '../components/DeckDetail'

import '../styles/Deck.scss'

class Deck extends Component {
  constructor() {
    super()

    this.state = {
      deckDetailPopup: false
    }

    this.toggleCreateDeck = this.toggleCreateDeck.bind(this)
  }

  toggleCreateDeck() {
    if (this.props.newDeck) {
      this.setState({
        ...this.state,
        deckDetailPopup: !this.state.deckDetailPopup
      })
    }
  }

  render() {
    return (
      <div className='Deck' onClick={this.toggleCreateDeck}>
        {this.props.newDeck ? (
          <img src={iconAdd} alt='Add' />
        ) : (
          <label style={{ color: 'white', fontSize: '18px' }}>
            {this.props.deck.name}
          </label>
        )}
        {this.state.deckDetailPopup ? (
          <DeckDetail toggleCreateDeck={this.toggleCreateDeck} />
        ) : null}
      </div>
    )
  }
}

Deck.defaultProps = {
  newDeck: false
}

export default Deck
