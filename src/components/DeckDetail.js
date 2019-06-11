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
          <label>Name</label>
          <input />
          <label>Category</label>
          <input />
        </div>
      </div>
    )
  }
}

export default DeckDetail
