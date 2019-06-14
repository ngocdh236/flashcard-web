import React, { Component } from 'react'

import '../styles/DeckDetail.scss'

class DeckDetail extends Component {
  render() {
    return (
      <div className='DeckDetail'>
        <div
          className='popup-container'
          onClick={this.props.toggleCreateDeck}
        />
        <div className='popup'>
          <label>Create new deck</label>
          <p>Name</p>
          <input />
          <p>Category</p>
          <input />
        </div>
      </div>
    )
  }
}

export default DeckDetail
