import React, { useState } from 'react'

import '../styles/DeckDetail.scss'

import { DecksContext } from '../contexts/DecksContext'

export default function DeckDetail(props) {
  const { createDeck } = React.useContext(DecksContext)

  const [name, setName] = useState('')
  const [category, setCategory] = useState({})

  function onChange(e) {
    setName(e.target.value)
  }

  function onCreateClick(e) {
    e.preventDefault()

    const deck = {
      name: name
    }

    createDeck(deck)
    props.toggleCreateDeck()
  }

  return (
    <div className='DeckDetail'>
      <div className='popup-container' onClick={props.toggleCreateDeck} />
      <div className='popup'>
        <label>Create new deck</label>
        <p>Name</p>
        <input name='name' value={name} onChange={onChange} />
        <p>Category</p>
        <input name='category' value={category.name} onChange={onChange} />
        <button onClick={onCreateClick}>Create</button>
      </div>
    </div>
  )
}
