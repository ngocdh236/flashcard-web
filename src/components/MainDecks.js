import React, { useEffect } from 'react'

import '../styles/MainDecks.scss'

import Deck from './Deck'
import { DecksContext } from '../contexts/DecksContext'

export default function MainDecks() {
  const {
    decks,
    createDeck,
    getAllDecks,
    updateDeck,
    deleteDeck
  } = React.useContext(DecksContext)

  useEffect(() => {
    getAllDecks()
  }, [])

  const allDecks = decks.map(deck => <Deck key={deck._id} deck={deck} />)

  return (
    <div className='MainDecks d-flex flex-wrap'>
      {allDecks}
      <Deck newDeck={true} />
    </div>
  )
}
