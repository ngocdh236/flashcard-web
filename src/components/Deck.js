import React, { useState } from 'react'

import '../styles/Deck.scss'
import iconAdd from '../assets/iconAdd.svg'

import DeckDetail from './DeckDetail'

export default function Deck(props) {
  const [showDetail, setShowDetail] = useState(false)

  function toggleCreateDeck() {
    if (props.newDeck) {
      setShowDetail(!showDetail)
    }
  }

  return (
    <div>
      <div className='Deck' onClick={toggleCreateDeck}>
        {props.newDeck ? (
          <img src={iconAdd} alt='Add' />
        ) : (
          <label
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: '600'
            }}
          >
            {props.deck.name}
          </label>
        )}
      </div>
      {showDetail ? <DeckDetail toggleCreateDeck={toggleCreateDeck} /> : null}
    </div>
  )
}

Deck.defaultProps = {
  newDeck: false
}
