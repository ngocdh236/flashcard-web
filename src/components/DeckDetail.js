import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createDeck } from '../actions/deckActions'

import '../styles/DeckDetail.scss'

class DeckDetail extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      category: {}
    }

    this.onChange = this.onChange.bind(this)
    this.createDeck = this.createDeck.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  createDeck(e) {
    e.preventDefault()

    const deck = {
      name: this.state.name,
      categoryId: this.state.category ? this.state.category._id : null
    }

    this.props.createDeck(deck)
    this.props.toggleCreateDeck()
  }

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
          <input name='name' value={this.state.name} onChange={this.onChange} />
          <p>Category</p>
          <input
            name='category'
            value={this.state.category.name}
            onChange={this.onChange}
          />
          <button onClick={this.createDeck}>Create</button>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { createDeck }
)(DeckDetail)
