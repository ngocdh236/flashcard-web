import customAxios from './customAxios';
import { Types } from '../reducers/actionTypes';

export const useService = (state, dispatch) => {
  const deckUrl = '/decks';

  const create = deck => {
    customAxios
      .post(deckUrl, deck)
      .then(res => dispatch({ type: Types.CREATE_DECK, deck: res.data }))
      .catch(err => console.log(err));
  };

  const getAll = field => {
    var type;
    switch (field) {
      case '-updatedAt':
        type = Types.SET_RECENT_DECKS;
        break;
      default:
        type = Types.SET_DECKS;
        break;
    }

    customAxios
      .get(`${deckUrl}?field=${field}`)
      .then(res => dispatch({ type, decks: res.data }))
      .catch(err => console.log(err));
  };

  const getById = id => customAxios.get(`${deckUrl}/${id}`);

  const update = deck => customAxios.put(deckUrl, deck);
  const remove = deckId => {
    customAxios
      .delete(`${deckUrl}/${deckId}`)
      .then(res => dispatch({ type: Types.DELETE_DECK, deckId }))
      .catch(err => console.log(err));
  };

  return {
    create,
    getAll,
    getById,
    update,
    remove
  };
};
