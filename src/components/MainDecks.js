import React, { useEffect } from 'react'

import '../styles/MainDecks.scss'

import Deck from './Deck'
import { DecksContext } from '../contexts/DecksContext'

import { getAllDecks } from '../actions/decksActions'

export default function MainDecks() {
  const { decks, decksDispatch } = React.useContext(DecksContext)

  useEffect(() => {
    getAllDecks(decksDispatch)
  }, [decksDispatch])

  const allDecks = decks.map(deck => <Deck key={deck._id} deck={deck} />)

  return (
    <div className='MainDecks d-flex flex-wrap'>
      {allDecks}
      <Deck newDeck={true} />
    </div>
  )
}
