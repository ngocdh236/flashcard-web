import { Types } from '../actions'

const decks = (state = [], action) => {
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

export default decks
