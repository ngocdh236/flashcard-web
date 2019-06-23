import React from 'react'

import '../styles/MainDecks.scss'

import Deck from './Deck'

export default function MainDecks() {
  return (
    <div className='MainDecks d-flex flex-wrap'>
      <Deck newDeck={true} />
    </div>
  )
}
