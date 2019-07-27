import customAxios from './customAxios'
import { Types } from '../reducers/actionTypes'

export const useService = (state, dispatch) => {
  const deckUrl = '/decks'

  const create = deck => {
    customAxios
      .post(deckUrl, deck)
      .then(res => dispatch({ type: Types.CREATE_DECK, deck: res.data }))
      .catch(err => console.log(err))
  }

  const getAll = () => {
    customAxios
      .get(deckUrl)
      .then(res => dispatch({ type: Types.SET_DECKS, decks: res.data }))
      .catch(err => console.log(err))
  }

  const update = (deckId, deck) => {
    customAxios
      .put(`${deckUrl}/${deckId}`, deck)
      .then(res => dispatch({ type: Types.UPDATE_DECK, deck: res.data }))
      .catch(err => console.log(err))
  }

  const remove = deckId => {
    customAxios
      .delete(`${deckUrl}/${deckId}`)
      .then(res => dispatch({ type: Types.DELETE_DECK, deckId }))
      .catch(err => console.log(err))
  }

  return {
    create,
    getAll,
    update,
    remove
  }
}
