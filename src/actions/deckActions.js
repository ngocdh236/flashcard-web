import customAxios from './customAxios'
import { Types } from '.'

const deckUrl = '/decks'

export const createDeck = deck => dispatch => {
  customAxios
    .post(deckUrl, deck)
    .then(res => dispatch({ type: Types.CREATE_DECK, deck: res.data }))
    .catch(err => console.log(err))
}

export const getAllDecks = () => dispatch => {
  customAxios
    .get(deckUrl)
    .then(res => dispatch({ type: Types.SET_DECKS, decks: res.data }))
    .catch(err => console.log(err))
}

export const updateDeck = (deckId, deck) => {
  customAxios
    .put(`${deckUrl}/${deckId}`, deck)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const deleteDeck = deckId => {
  customAxios
    .delete(`${deckUrl}/${deckId}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
