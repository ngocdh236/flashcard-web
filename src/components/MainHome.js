import React from 'react'

import '../styles/MainHome.scss'

import Deck from './Deck'

export default function MainHome() {
  return (
    <div className='MainHome'>
      <label>Create new deck</label>
      <Deck newDeck={true} />
      <label>Recent</label>
    </div>
  )
}
