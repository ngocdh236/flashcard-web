import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Deck from '../components/Deck'

import '../styles/MainDecks.scss'

class MainDecks extends Component {
  render() {
    var decks = this.props.decks.map(deck => (
      <Deck key={deck._id} deck={deck} />
    ))
    return (
      <div className='MainDecks d-flex flex-wrap'>
        {decks}
        <Deck newDeck={true} />
      </div>
    )
  }
}

MainDecks.propTypes = {
  decks: PropTypes.array
}

const mapStateToProps = state => ({
  decks: state.decks
})

export default connect(mapStateToProps)(MainDecks)
