import React, { Component } from 'react'

import iconAdd from '../assets/iconAdd.svg'

import '../styles/Deck.scss'

class Deck extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Deck'>
        {this.props.newDeck ? (
          <img src={iconAdd} />
        ) : (
          <label>{this.props.deck.name}</label>
        )}
      </div>
    )
  }
}

export default Deck
