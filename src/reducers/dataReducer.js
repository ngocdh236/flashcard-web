import { Types } from './actionTypes';

const initialState = {
  decks: [],
  decksFetched: false,
  recentDecks: []
};

function reducer(state = initialState, action) {
  const { decks, deck, deckId } = action;
  switch (action.type) {
    case Types.SET_DECKS: {
      return { ...state, decks, decksFetched: true };
    }

    case Types.SET_RECENT_DECKS: {
      return { ...state, recentDecks: decks };
    }

    case Types.CREATE_DECK: {
      return {
        ...state,
        decks: [...state.decks, deck]
      };
    }

    case Types.UPDATE_DECK: {
      return {
        ...state,
        decks: state.decks.map(deckItem =>
          deckItem.id === deck.id ? deck : deckItem
        )
      };
    }

    case Types.DELETE_DECK:
      return {
        ...state,
        decks: state.decks.filter(deckItem => deckItem.id !== deckId)
      };

    default:
      return state;
  }
}

export { initialState, reducer };
