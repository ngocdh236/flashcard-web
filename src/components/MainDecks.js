/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import '../styles/MainDecks.scss'

import Deck from './Deck'
import { DataContext } from '../contexts/DataContext'

export default function MainDecks() {
  const { data, deckService } = React.useContext(DataContext)

  useEffect(() => {
    deckService.getAll()
  }, [])

  const allDecks = data.decks.map(deck => <Deck key={deck._id} deck={deck} />)

  return (
    <div className='MainDecks d-flex flex-wrap'>
      {allDecks}
      <Deck newDeck={true} />
    </div>
  )
}
