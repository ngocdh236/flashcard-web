import { Types } from '../contexts/types'
import customAxios from '../actions/customAxios'

const deckUrl = '/decks'

export const createDeck = (decksDispatch, deck) => {
  customAxios
    .post(deckUrl, deck)
    .then(res => decksDispatch({ type: Types.CREATE_DECK, deck: res.data }))
    .catch(err => console.log(err))
}

export const getAllDecks = async decksDispatch => {
  await customAxios
    .get(deckUrl)
    .then(res => decksDispatch({ type: Types.SET_DECKS, decks: res.data }))
    .catch(err => console.log(err))
}

export const updateDeck = (decksDispatch, deckId, deck) => {
  customAxios
    .put(`${deckUrl}/${deckId}`, deck)
    .then(res => decksDispatch({ type: Types.UPDATE_DECK, deck: res.data }))
    .catch(err => console.log(err))
}

export const deleteDeck = (decksDispatch, deckId, deck) => {
  customAxios
    .delete(`${deckUrl}/${deckId}`)
    .then(res => decksDispatch({ type: Types.DELETE_DECK, deck: deck }))
    .catch(err => console.log(err))
}
