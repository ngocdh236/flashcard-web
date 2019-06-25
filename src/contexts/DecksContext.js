import React from 'react'

import { Types } from './types'

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

export const DecksContext = React.createContext()

export function DecksProvider(props) {
  const [decks, decksDispatch] = React.useReducer(reducer, initialState)

  return (
    <DecksContext.Provider
      value={{
        decks,
        decksDispatch
      }}
    >
      {props.children}
    </DecksContext.Provider>
  )
}
