import customAxios from './customAxios'
import { Types } from '.'

const deckUrl = '/decks'

export const createDeck = deck => {
  customAxios
    .post(deckUrl, deck)
    .then(res => console.log(res))
    .catch(err => console.log(res))
}

export const getAllDecks = () => {
  customAxios
    .get(deckUrl)
    .then(res => console.log(res))
    .catch(err => console.log(res))
}

export const updateDeck = (deckId, deck) => {
  customAxios
    .put(`${deckUrl}/${deckId}`, deck)
    .then(res => console.log(res))
    .catch(err => console.log(res))
}

export const deleteDeck = deckId => {
  customAxios
    .delete(`${deckUrl}/${deckId}`)
    .then(res => console.log(res))
    .catch(err => console.log(res))
}
