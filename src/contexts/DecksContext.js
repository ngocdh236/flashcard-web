import React from 'react'

import { Types } from './types'
import customAxios from '../actions/customAxios'

export const DecksContext = React.createContext()

const initialState = []

function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_DECKS:
      return action.decks
    case Types.CREATE_DECK:
      return [...state, action.deck]
    case Types.DELETE_DECK:
      return state.filter(deck => deck.id !== action.id)
    case Types.UPDATE_DECK:
      return state.map(deck =>
        deck.id === action.deck.id ? action.deck : deck
      )
    default:
      return state
  }
}

export function DecksProvider(props) {
  const [decks, decksDispatch] = React.useReducer(reducer, initialState)

  const deckUrl = '/decks'

  const createDeck = deck => {
    customAxios
      .post(deckUrl, deck)
      .then(res => decksDispatch({ type: Types.CREATE_DECK, deck: res.data }))
      .catch(err => console.log(err))
  }

  const getAllDecks = () => {
    customAxios
      .get(deckUrl)
      .then(res => decksDispatch({ type: Types.SET_DECKS, decks: res.data }))
      .catch(err => console.log(err))
  }

  const updateDeck = (deckId, deck) => {
    customAxios
      .put(`${deckUrl}/${deckId}`, deck)
      .then(res => decksDispatch({ type: Types.UPDATE_DECK, deck: res.data }))
      .catch(err => console.log(err))
  }

  const deleteDeck = (deckId, deck) => {
    customAxios
      .delete(`${deckUrl}/${deckId}`)
      .then(res => decksDispatch({ type: Types.DELETE_DECK, deck: deck }))
      .catch(err => console.log(err))
  }

  return (
    <DecksContext.Provider
      value={{
        decks,
        decksDispatch,
        createDeck,
        getAllDecks,
        updateDeck,
        deleteDeck
      }}
    >
      {props.children}
    </DecksContext.Provider>
  )
}
